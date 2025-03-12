import schedule from 'node-schedule';

import { Servicos } from '../../servicos';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';
import { Knex } from '../knex';

export interface IEmpresaTokenSinc {
  uuid: string;
  sh_url: string;
  sh_client_id: string;
  sh_client_secret: string;
  sh_token_exp: number;
  sh_token_exp_datetime: string;
  prox_sinc_sh_token: number;
  prox_sinc_sh_token_datetime: string;
}

export interface IProdutoSinc {
  uuid: string;
  sh_url: string;
  sh_token: string;
  sh_token_exp: string;
  sh_token_exp_datetime: string;
  prox_sinc_sh_produtos: number;
  prox_sinc_sh_produtos_datetime: string;
  sh_ultima_sinc_produtos: number;
  sh_ultima_sinc_produtos_datetime: string;
  valido: boolean;
}

let emExecucaoTokens = false;
let emExecucaoProdutos = false;

const sincronizarProdutos = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSES 3 MINUTOS. !!
  // Executa a cada 3 minutos
  schedule.scheduleJob('*/3 * * * *', async () => {
    if (emExecucaoProdutos) {
      Util.Log.warn('Tarefa de sincronização de produtos já está em execução. Ignorando nova execução.');
      return;
    }

    emExecucaoProdutos = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();
      // !! SE FUTURAMENTE AUMENTAR A QUANTIDADE DE CLIENTES, APENAS AJUSTAR O LIMIT

      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_sh_produtos_sinc)
        .where('sh_ultima_sinc_produtos', '<=', agora)
        .andWhere('valido', '=', true)
        .orderBy('sh_ultima_sinc_produtos', 'asc')
        .limit(5)) as IProdutoSinc[];

      if (!empresas.length) return;

      // 🔹 Busca produtos de todas as empresas em paralelo para melhor desempenho
      const resultados = await Promise.all(
        empresas.map(async (empresa) => {
          try {
            const produtos = await Servicos.SelfHost.buscarProdutos(empresa.uuid, empresa.sh_url, empresa.sh_token, empresa.sh_ultima_sinc_produtos);
            return { empresa, produtos };
          } catch (error) {
            Util.Log.error(`Erro ao buscar produtos para empresa ${empresa.uuid}`, error);
            return null; // 🔹 Retorna null para ignorar no próximo passo
          }
        }),
      );

      // 🔹 Processa a inserção de produtos **individualmente** para evitar deadlocks
      for (const resultado of resultados) {
        if (!resultado) continue; // 🔹 Ignora empresas que tiveram erro na busca de produtos

        const { empresa, produtos } = resultado;

        try {
          if (produtos.produtos.length) {
            await Knex.transaction(async (trx) => {
              try {
                const produtosInserir = produtos.produtos;
                const loteTamanho = 500; // 🔹 Define tamanho do lote para evitar sobrecarga

                if (produtosInserir.length) {
                  for (let i = 0; i < produtosInserir.length; i += loteTamanho) {
                    const lote = produtosInserir.slice(i, i + loteTamanho); // 🔹 Divide os produtos em lotes menores

                    await trx(ETableNames.produtos)
                      .insert(lote) // 🔹 Insere lote por lote
                      .onConflict(['sh_sku', 'empresa_id']) // 🔹 Atualiza se já existir
                      .merge();
                  }
                }

                // 🔹 Atualiza a sincronização da empresa
                await trx(ETableNames.empresas)
                  .where('uuid', empresa.uuid)
                  .update({
                    sh_ultima_sinc_produtos: produtos.ultimaDataSync,
                    prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(5, 10),
                  });

                Util.Log.info(`Empresa ${empresa.uuid}: ${produtosInserir.length} produtos sincronizados.`);
              } catch (error) {
                Util.Log.error(`Erro ao inserir produtos para empresa ${empresa.uuid}`, error);
                throw error; // 🔹 Reverte a transação em caso de erro
              }
            });
          } else {
            // 🔹 Se `ultimaDataSync` não mudou, significa que houve erro na sincronização
            if (produtos.ultimaDataSync === empresa.sh_ultima_sinc_produtos) {
              const proxSinc = Util.DataHora.getErroTentativaMM(empresa.prox_sinc_sh_produtos); // Obtém tentativas anteriores (1, 2, 3)
              const tentativa = proxSinc * 10; // Cada tentativa adiciona +10 min (1 → 10min, 2 → 20min, 3 → 30min)
              const novaTentativa = (proxSinc ? proxSinc + 1 : 0) as 1 | 2 | 3 | 0; // Incrementa tentativa

              await Knex(ETableNames.empresas)
                .where('uuid', empresa.uuid)
                .update({
                  sh_ultima_sinc_produtos: produtos.ultimaDataSync,
                  prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(tentativa || 50, tentativa || 60, novaTentativa),
                });

              Util.Log.warn(`Erro na sincronização para empresa ${empresa.uuid}, reagendado com tentativa ${novaTentativa}.`);
            } else {
              // 🔹 Se não houve erro, mas também não há produtos novos, só atualiza o timestamp normalmente
              await Knex(ETableNames.empresas)
                .where('uuid', empresa.uuid)
                .update({
                  sh_ultima_sinc_produtos: produtos.ultimaDataSync,
                  prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(5, 10),
                });
            }
          }
        } catch (error) {
          // Se der algum erro, inesperado
          await Knex(ETableNames.empresas)
            .where('uuid', empresa.uuid)
            .update({
              sh_ultima_sinc_produtos: produtos.ultimaDataSync,
              prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(50, 60),
            });

          Util.Log.error(`Erro ao processar sincronização para empresa ${empresa.uuid}`, error);
        }
      }
    } catch (error) {
      Util.Log.error('Erro ao sincronizar produtos Selfhost', error);
    } finally {
      emExecucaoProdutos = false;
    }
  });
};

const sincronizarTokens = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSES 3 MINUTOS. !!
  // Executa a cada 3 minutos
  schedule.scheduleJob('*/1 * * * *', async () => {
    if (emExecucaoTokens) {
      Util.Log.warn('Tarefa de sincronização de tokens já está em execução. Ignorando nova execução.');
      return;
    }

    emExecucaoTokens = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();
      // !! SE FUTURAMENTE AUMENTAR A QUANTIDADE DE CLIENTES, APENAS AJUSTAR O LIMIT

      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_sh_empresas_tokens_renovar)
        .where('prox_sinc_sh_token', '<=', agora)
        .orderBy('prox_sinc_sh_token', 'asc')
        .limit(5)) as IEmpresaTokenSinc[];

      if (!empresas.length) return;

      // Executa todas as renovações em paralelo
      await Promise.all(
        empresas.map(async (empresa) => {
          const tokenData = await Servicos.SelfHost.obterToken(empresa.sh_url, empresa.sh_client_id, empresa.sh_client_secret);

          if (tokenData && tokenData.sh_token) {
            await Knex(ETableNames.empresas)
              .where('uuid', empresa.uuid)
              .update({
                sh_token: tokenData.sh_token,
                sh_token_exp: tokenData.sh_token_exp,
                prox_sinc_sh_token: Util.DataHora.gerarTimestampMM(30, 45), // Só retorna para fila nos próximos 30~45 minutos.
              });
          } else {
            // Obtém a tentativa de erro anterior a partir do timestamp armazenado.
            // Se for um erro identificado (01, 02 ou 03), retorna o número da tentativa (1, 2 ou 3).
            // Caso contrário, retorna 0.
            const proxSinc = Util.DataHora.getErroTentativaMM(empresa.prox_sinc_sh_token);

            // Define o tempo de espera com base no número da tentativa de erro anterior.
            // Cada tentativa aumenta o tempo de re-tentativa em 5 minutos (1 → 10min, 2 → 20min, 3 → 30min).
            // Se não houver erro anterior, `tentativa` será 0.
            const tentativa = proxSinc * 10;

            // Incrementa quantidade de tentativas
            const novaTentativa = (tentativa ? proxSinc + 1 : 0) as 1 | 2 | 3 | 0;

            await Knex(ETableNames.empresas)
              .where('uuid', empresa.uuid)
              .update({
                // Define um novo timestamp para a próxima sincronização.
                // Se houve erro antes, ajusta o tempo de re-tentativa com base na `tentativa`.
                // Se não houve erro, usa um intervalo padrão entre 50 e 60 minutos.
                // O terceiro parâmetro (`proxSinc || 0`) mantém o controle do número de tentativas de erro.
                prox_sinc_sh_token: Util.DataHora.gerarTimestampMM(tentativa || 50, tentativa || 60, novaTentativa),
              });

            Util.Log.warn(`Falha ao renovar token para empresa: ${empresa.uuid}`);
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
