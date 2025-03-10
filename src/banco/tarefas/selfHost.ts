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
  sh_token_exp: number;
  sh_token_exp_datetime: string;
  renovar: boolean;
  valido: boolean;
  sh_falhas: number;
}

let sincronizarTokensEmExecucao = false;

const sincronizarProdutos = () => {
  // Executa a cada 1 hora. (1:00, 2:00, 3:00...)
  schedule.scheduleJob('* * * * * *', async () => {
    /*   console.log('TESTE'); */
  });
};

const sincronizarTokens = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSES 3 MINUTOS. !!
  // Executa a cada 2 minutos para verificar tokens que precisam ser renovados
  schedule.scheduleJob('*/3 * * * *', async () => {
    if (sincronizarTokensEmExecucao) {
      Util.Log.warn('Tarefa de sincronização de tokens já está em execução. Ignorando nova execução.');
      return;
    }

    sincronizarTokensEmExecucao = true;
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
      sincronizarTokensEmExecucao = false;
    }
  });
};

export const SelfHost = { sincronizarProdutos, sincronizarTokens };
