import schedule from 'node-schedule';

import { Servicos } from '../../servicos';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';
import { Knex } from '../knex';

export interface IEmpresaToken {
  uuid: string;
  fantasia: string;
  registro: string;
  sh_url: string;
  sh_client_id: string;
  sh_client_secret: string;
  sh_token: string;
  sh_token_exp: number;
  sh_ultima_sinc: number;
  sh_token_exp_datetime: string;
  renovar: boolean;
  valido: boolean;
  sh_falhas: number;
}

let emExecucaoTokens = false;
let emExecucaoProdutos = false;

const sincronizarProdutos = () => {
  // Executa a cada 1 hora
  schedule.scheduleJob('*/1 * * * *', async () => {
    if (emExecucaoProdutos) {
      Util.Log.warn('Tarefa de sincronização de produtos já está em execução. Ignorando nova execução.');
      return;
    }

    emExecucaoProdutos = true;
    try {
      const empresas = (await Knex(ETableNames.vw_empresas_tokens).where('valido', true)) as IEmpresaToken[];

      if (!empresas.length) return;

      await Promise.all(
        empresas.map(async (empresa) => {
          try {
            const resultado = await Servicos.SelfHost.buscarProdutos(empresa.uuid, empresa.sh_url, empresa.sh_token, empresa.sh_ultima_sinc);

            if (resultado.produtos.length) {
              await Knex(ETableNames.produtos).insert(resultado.produtos).onConflict(['sh_sku', 'empresa_id']).merge();

              // Atualiza a última sincronização
              await Knex(ETableNames.empresas).where('uuid', empresa.uuid).update({ sh_ultima_sinc: resultado.ultimaDataSync });

              Util.Log.info(`Empresa ${empresa.uuid}: ${resultado.produtos.length} produtos sincronizados e salvos no banco.`);
            }
          } catch (error) {
            Util.Log.error(`Erro ao sincronizar produtos para empresa ${empresa.uuid}`, error);
          }
        }),
      );
    } catch (error) {
      Util.Log.error('Erro ao sincronizar produtos Selfhost', error);
    } finally {
      emExecucaoProdutos = false;
    }
  });
};

const sincronizarTokens = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSES 3 MINUTOS. !!
  // Executa a cada 2 minutos para verificar tokens que precisam ser renovados
  schedule.scheduleJob('*/3 * * * *', async () => {
    if (emExecucaoTokens) {
      Util.Log.warn('Tarefa de sincronização de tokens já está em execução. Ignorando nova execução.');
      return;
    }

    emExecucaoTokens = true;
    try {
      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_empresas_tokens).where('renovar', '=', 1).limit(10)) as IEmpresaToken[];

      if (!empresas.length) return;

      // Executa todas as renovações em paralelo
      await Promise.all(
        empresas.map(async (empresa) => {
          const tokenData = await Servicos.SelfHost.obterToken(empresa.sh_url, empresa.sh_client_id, empresa.sh_client_secret);

          if (tokenData && tokenData.sh_token) {
            await Knex(ETableNames.empresas).where('uuid', empresa.uuid).update({
              sh_token: tokenData.sh_token,
              sh_token_exp: tokenData.sh_token_exp,
              sh_falhas: 0, // Reseta falhas após sucesso
            });
          } else {
            // Incrementa o contador de falhas caso a renovação falhe
            await Knex(ETableNames.empresas).where('uuid', empresa.uuid).increment('sh_falhas', 1);
            Util.Log.warn(`Falha ao renovar token para empresa ${empresa.uuid}, tentativa ${empresa.sh_falhas + 1}`);
          }
        }),
      );

      Util.Log.info(`${empresas.length} tokens renovados.`);
    } catch (error) {
      Util.Log.error('Erro ao sincronizar tokens SelfHost', error);
    } finally {
      emExecucaoTokens = false;
    }
  });
};

export const SelfHost = { sincronizarProdutos, sincronizarTokens };
