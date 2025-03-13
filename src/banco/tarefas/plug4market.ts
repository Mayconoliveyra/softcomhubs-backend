import schedule from 'node-schedule';

import { Servicos } from '../../servicos';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';
import { Knex } from '../knex';

interface IEmpresaTokenSinc {
  uuid: string;
  pm4_token_renovacao: string;
  pm4_token_exp: number;
  pm4_token_exp_datetime: string;
  prox_sinc_p4m_token: number;
  prox_sinc_p4m_token_datetime: string;
}

export interface IProdutoSinc {
  uuid: string;
  empresa_id: string;
  pm4_token: string;
  sh_nome: string;
  sh_preco: number;
  sh_produto_id: string;
  sh_nome_formatado: string;
  sh_sku: string;
  sh_estoque: number;
  sh_marca: string;
  p4m_nome: string | null;
  p4m_preco: number | null;
  p4m_produto_id: string | null;
  p4m_nome_formatado: string | null;
  p4m_sku: string | null;
  p4m_estoque: number | null;
  p4m_marca: string | null;
  status_envio: 'TOKEN_EXPIRADO' | 'CADASTRAR' | 'ATUALIZAR' | 'SINCRONIZADA';
  dif_nome: boolean;
  dif_preco: boolean;
  dif_estoque: boolean;
  dif_marca: boolean;
}

let emExecucaoTokens = false;
let emExecucaoProdutos = false;

const LIMITE_REQUISICOES_POR_EMPRESA = 60;
const INTERVALO_MINUTOS = 1;

const sincronizarProdutos = () => {
  schedule.scheduleJob(`*/${INTERVALO_MINUTOS} * * * *`, async () => {
    if (emExecucaoProdutos) {
      Util.Log.warn('[P4M] | Produtos | Sincronização já em execução.');
      return;
    }
    emExecucaoProdutos = true;

    try {
      const produtos = await Knex(ETableNames.vw_p4m_produtos_sinc).whereRaw(
        "CONVERT(status_envio USING utf8mb4) COLLATE utf8mb4_unicode_ci IN ('CADASTRAR', 'ATUALIZAR')",
      );

      if (!produtos.length) {
        emExecucaoProdutos = false;
        return;
      }

      const empresasMap = new Map<string, { token: string; produtos: IProdutoSinc[] }>();

      for (const produto of produtos) {
        if (!empresasMap.has(produto.empresa_id)) {
          empresasMap.set(produto.empresa_id, { token: produto.pm4_token, produtos: [] });
        }
        empresasMap.get(produto.empresa_id)?.produtos.push(produto);
      }

      for (const [empresaId, { token, produtos }] of empresasMap.entries()) {
        const produtosLimitados = produtos.slice(0, LIMITE_REQUISICOES_POR_EMPRESA);

        await Promise.all(
          produtosLimitados.map((produto, index) =>
            new Promise((resolve) => setTimeout(resolve, index * 1000)) // Envia um a cada 1s
              .then(() => Servicos.Plug4market.cadastrarOuAtualizarProduto(produto))
              .then(async (resultado) => {
                if (resultado?.sucesso) {
                  console.log(resultado);
                  /*  await Knex(ETableNames.produtos).where('uuid', produto.uuid).update({ status_envio: 'SINCRONIZADA', updated_at: Knex.fn.now() }); */
                } else {
                  Util.Log.error(`[P4M] | Erro na sincronização | SKU: ${produto.sh_sku} | Erro: ${resultado?.mensagem}`);
                }
              }),
          ),
        );
      }
    } catch (error) {
      Util.Log.error('[P4M] | Erro ao sincronizar produtos', error);
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
      Util.Log.warn(`[P4M] | Tokens | Tarefa de sincronização de tokens já está em execução.`);
      return;
    }

    emExecucaoTokens = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();
      // !! SE FUTURAMENTE AUMENTAR A QUANTIDADE DE CLIENTES, APENAS AJUSTAR O LIMIT

      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_p4m_empresas_tokens_renovar)
        .where('prox_sinc_p4m_token', '<=', agora)
        .orderBy('prox_sinc_p4m_token', 'asc')
        .limit(5)) as IEmpresaTokenSinc[];

      if (!empresas.length) return;

      // Executa todas as renovações em paralelo
      await Promise.all(
        empresas.map(async (empresa) => {
          const tokenData = await Servicos.Plug4market.renovarToken(empresa.pm4_token_renovacao);

          if (tokenData && tokenData.novoToken && tokenData.novoRefreshToken) {
            await Knex(ETableNames.empresas)
              .where('uuid', empresa.uuid)
              .update({
                pm4_token: tokenData.novoToken,
                pm4_token_renovacao: tokenData.novoRefreshToken,
                pm4_token_exp: tokenData.tokenExpiracao,
                prox_sinc_p4m_token: Util.DataHora.gerarTimestampMM(1200, 1380), // Expira entre 20h e 23h
              });

            Util.Log.info(`[P4M] | Tokens | Token renovado com sucesso! | Empresa: ${empresa.uuid}`);
          } else {
            // Obtém a tentativa de erro anterior a partir do timestamp armazenado.
            // Se for um erro identificado (01, 02 ou 03), retorna o número da tentativa (1, 2 ou 3).
            // Caso contrário, retorna 0.
            const proxSinc = Util.DataHora.getErroTentativaMM(empresa.prox_sinc_p4m_token);

            // Define o tempo de espera com base no número da tentativa de erro anterior.
            // Cada tentativa aumenta o tempo de re-tentativa em 30 minutos (1 → 30min, 2 → 60min, 3 → 90min).
            // Se não houver erro anterior, `tentativa` será 0.
            const tentativa = proxSinc * 30;

            // Incrementa quantidade de tentativas
            const novaTentativa = (tentativa ? proxSinc + 1 : 1) as 1 | 2 | 3 | 0;

            await Knex(ETableNames.empresas)
              .where('uuid', empresa.uuid)
              .update({
                // Define um novo timestamp para a próxima sincronização.
                // Se houve erro antes, ajusta o tempo de re-tentativa com base na `tentativa`.
                // Se não houve erro, usa um intervalo padrão entre 50 e 60 minutos.
                // O terceiro parâmetro (`proxSinc || 0`) mantém o controle do número de tentativas de erro.
                prox_sinc_p4m_token: Util.DataHora.gerarTimestampMM(tentativa || 120, tentativa || 120, novaTentativa),
              });

            Util.Log.error(`[P4M] | Tokens | Erro ao renovar token | Tentativa: ${novaTentativa} reagendado | Empresa: ${empresa.uuid}`);
          }
        }),
      );
    } catch (error) {
      Util.Log.warn(`[P4M] | Tokens | Erro ao sincronizar tokens SelfHost.`, error);
    } finally {
      emExecucaoTokens = false;
    }
  });
};

export const Plug4market = { sincronizarProdutos, sincronizarTokens };
