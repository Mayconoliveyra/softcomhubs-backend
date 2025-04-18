import schedule from 'node-schedule';

import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';
import { IItemPedido } from '../banco/models/ItemPedido';
import { IPedido } from '../banco/models/pedido';

import { Servicos } from '../servicos';

import { Util } from '../util';

interface IEmpresaTokenSinc {
  id: number;
  registro: string;
  pm4_token: string;
  pm4_token_renovacao: string;
  pm4_token_exp: number;
  prox_sinc_p4m_token: number;
  prox_sinc_p4m_pedidos: number;
  pm4_token_exp_datetime: string;
  prox_sinc_p4m_token_datetime: string;
  prox_sinc_p4m_pedidos_datetime: string;
  token_valido: boolean;
}

export interface IProdutoSinc {
  id: number;
  empresa_id: number;
  pm4_token: string;
  sh_nome: string;
  sh_preco: number;
  sh_preco_custo: number;
  sh_produto_id: number;
  sh_nome_formatado: string;
  sh_sku: number;
  sh_estoque: number;
  sh_marca: string;
  p4m_nome: string | null;
  p4m_preco: number | null;
  p4m_preco_custo: number | null;
  p4m_produto_id: number | null;
  p4m_nome_formatado: string | null;
  p4m_sku: number | null;
  p4m_estoque: number | null;
  p4m_marca: string | null;
  status_envio: 'TOKEN_EXPIRADO' | 'CADASTRAR' | 'ATUALIZAR' | 'SINCRONIZADA';
  dif_nome: boolean;
  dif_preco: boolean;
  dif_preco_custo: boolean;
  dif_estoque: boolean;
  dif_marca: boolean;
  prox_sinc_p4m: number;
  prox_sinc_p4m_datetime: string;
}

let emExecucaoTokens = false;
let emExecucaoProdutos = false;
let emExecucaoPedidos = false;

const atualizarProdutoP4M = async (produto: IProdutoSinc, acao: string) => {
  try {
    const camposAtualizar: Partial<IProdutoSinc> = {};

    if (!produto.p4m_sku) {
      camposAtualizar.p4m_produto_id = produto.sh_produto_id;
      camposAtualizar.p4m_sku = produto.sh_sku;

      camposAtualizar.p4m_nome = produto.sh_nome;
      camposAtualizar.p4m_nome_formatado = produto.sh_nome_formatado;
      camposAtualizar.p4m_preco = produto.sh_preco;
      camposAtualizar.p4m_preco_custo = produto.sh_preco_custo;
      camposAtualizar.p4m_estoque = produto.sh_estoque;
      camposAtualizar.p4m_marca = produto.sh_marca;
    } else {
      if (produto.dif_nome) {
        camposAtualizar.p4m_nome = produto.sh_nome;
        camposAtualizar.p4m_nome_formatado = produto.sh_nome_formatado;
      }
      if (produto.dif_preco) {
        camposAtualizar.p4m_preco = produto.sh_preco;
      }
      if (produto.dif_preco_custo) {
        camposAtualizar.p4m_preco_custo = produto.sh_preco_custo;
      }
      if (produto.dif_estoque) {
        camposAtualizar.p4m_estoque = produto.sh_estoque;
      }
      if (produto.dif_marca) {
        camposAtualizar.p4m_marca = produto.sh_marca;
      }
    }

    if (Object.keys(camposAtualizar).length === 0) {
      Util.Log.info(`[P4M] | Produto ${produto.id} já sincronizado, nenhuma atualização necessária.`);
      return true;
    }

    await Knex(ETableNames.produtos).where('id', '=', produto.id).update(camposAtualizar);

    Util.Log.info(`[P4M] | Produto | Sucesso ao ${acao === 'CADASTRAR' ? 'cadastrar' : 'atualizar'} produto | Ação: ${acao} | Produto: ${produto.id}`);
    return true;
  } catch (error) {
    Util.Log.error(`[P4M] | Produto | Erro ao atualizar produto | Ação: ${acao} | Produto: ${produto.id}`, error);
    return false;
  }
};

const atualizarProdutosBatch = async (produtos: IProdutoSinc[]) => {
  try {
    if (produtos.length === 0) {
      return;
    }

    const updates = produtos.map((produto) => ({
      id: produto.id,
      prox_sinc_p4m: Util.DataHora.gerarTimestampMM(3, 5),
    }));

    const caseStatement = updates.map((u) => `WHEN '${u.id}' THEN ${u.prox_sinc_p4m}`).join(' ');

    const ids = updates.map((u) => `'${u.id}'`).join(',');

    const query = `
    UPDATE ${ETableNames.produtos}
    SET prox_sinc_p4m = CASE id
      ${caseStatement}
    END
    WHERE id IN (${ids});
  `;

    await Knex.raw(query);
  } catch (error) {
    Util.Log.error('Erro ao atualizar produtos em batch', error);
    throw new Error('Erro ao atualizar produtos em batch');
  }
};

const inserirPedidoComTransacao = async (empresaId: number, cabecalho: Partial<IPedido>, itens: Partial<IItemPedido>[]) => {
  const trx = await Knex.transaction();
  try {
    // Inserir cabeçalho do pedido
    const [id] = await trx(ETableNames.pedidos).insert({ empresa_id: empresaId, ...cabecalho });

    // Inserir os itens do pedido, vinculando com o pedido_id
    const itensComPedidoId = itens.map((item) => ({
      ...item,
      pedido_id: id,
    }));

    await trx(ETableNames.pedido_itens).insert(itensComPedidoId);
    // Commit da transação
    await trx.commit();
    return id;
  } catch (error) {
    Util.Log.error('Erro ao inserir pedido', error);

    await Knex(ETableNames.empresas)
      .where('id', '=', empresaId)
      .update({
        prox_sinc_p4m_pedidos: Util.DataHora.gerarTimestampMM(2, 5), // entre 2 e 5m
      });

    // Se der erro, faz rollback
    await trx.rollback();
    throw new Error(`Erro ao inserir pedido`);
  }
};

const sincronizarProdutos = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSES 1 MINUTO. !!
  // Executa a cada 1 minuto
  schedule.scheduleJob(`*/1 * * * *`, async () => {
    if (emExecucaoProdutos) {
      Util.Log.warn('[P4M] | Produtos | Sincronização já em execução.');
      return;
    }
    emExecucaoProdutos = true;

    try {
      const produtosRaw = await Knex.raw(`
        SELECT *
        FROM (
          SELECT 
            * ,
            ROW_NUMBER() OVER (PARTITION BY empresa_id ORDER BY prox_sinc_p4m ASC) AS rn
          FROM ${ETableNames.vw_p4m_produtos_sinc}
          WHERE CONVERT(status_envio USING utf8mb4) COLLATE utf8mb4_unicode_ci IN ('CADASTRAR', 'ATUALIZAR')
        ) AS sub
        WHERE rn <= 90
        ORDER BY prox_sinc_p4m ASC
      `);

      const produtos = (produtosRaw[0] || produtosRaw.rows || produtosRaw) as IProdutoSinc[];
      if (!produtos.length) {
        return;
      }

      // Agrupa os produtos por empresa
      const produtosPorEmpresa = produtos.reduce((acc: Record<string, IProdutoSinc[]>, produto: IProdutoSinc) => {
        if (!acc[produto.empresa_id]) {
          acc[produto.empresa_id] = [];
        }
        acc[produto.empresa_id].push(produto);
        return acc;
      }, {} as Record<string, IProdutoSinc[]>);

      // Lista para armazenar produtos bem-sucedidos e atualizar em lote
      const produtosSincronizados: IProdutoSinc[] = [];

      // Processa cada empresa em paralelo
      await Promise.all(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(produtosPorEmpresa).map(([_, produtosEmpresa]) =>
          Promise.all(
            produtosEmpresa.map((produto, index) =>
              new Promise((resolve) => setTimeout(resolve, index * 200))
                .then(() => Servicos.Plug4market.cadastrarOuAtualizarProduto(produto))
                .then(async (resultado) => {
                  if (resultado?.sucesso) {
                    await atualizarProdutoP4M(produto, resultado.acao);
                    produtosSincronizados.push(produto); // Acumula produto para atualizar em lote depois
                  } else {
                    const proxSinc = Util.DataHora.getErroTentativaMM(produto.prox_sinc_p4m);
                    const tentativa = proxSinc * 10;
                    const novaTentativa = (tentativa ? proxSinc + 1 : 1) as 1 | 2 | 3 | 0;

                    await Knex(ETableNames.produtos)
                      .where('id', '=', produto.id)
                      .update({ prox_sinc_p4m: Util.DataHora.gerarTimestampMM(tentativa || 40, tentativa || 40, novaTentativa) });

                    Util.Log.error(
                      `[P4M] | Produto | Erro ao sincronizar produto | Tentativa: ${novaTentativa} reagendado | Produto: ${produto.id}`,
                      resultado.erro,
                    );
                  }
                }),
            ),
          ),
        ),
      );

      // Faz o batch update dos produtos sincronizados
      if (produtosSincronizados.length > 0) {
        await atualizarProdutosBatch(produtosSincronizados);
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
  schedule.scheduleJob('*/3 * * * *', async () => {
    if (emExecucaoTokens) {
      Util.Log.warn(`[P4M] | Tokens | Tarefa de sincronização de tokens já está em execução.`);
      return;
    }

    emExecucaoTokens = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();
      // !! SE FUTURAMENTE AUMENTAR A QUANTIDADE DE CLIENTES, APENAS AJUSTAR O LIMIT

      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_p4m_empresas_sinc_config)
        .where('prox_sinc_p4m_token', '<=', agora)
        .orderBy('prox_sinc_p4m_token', 'ASC')
        .limit(5)) as IEmpresaTokenSinc[];

      if (!empresas.length) return;

      // Executa todas as renovações em paralelo
      await Promise.all(
        empresas.map(async (empresa) => {
          const tokenData = await Servicos.Plug4market.renovarToken(empresa.pm4_token_renovacao);

          if (tokenData && tokenData.novoToken && tokenData.novoRefreshToken) {
            await Knex(ETableNames.empresas)
              .where('id', '=', empresa.id)
              .update({
                pm4_token: tokenData.novoToken,
                pm4_token_renovacao: tokenData.novoRefreshToken,
                pm4_token_exp: tokenData.tokenExpiracao,
                prox_sinc_p4m_token: Util.DataHora.gerarTimestampMM(900, 1380), // Expira entre 15h e 23h depois
              });

            Util.Log.info(`[P4M] | Tokens | Token renovado com sucesso! | Empresa: ${empresa.id}`);
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
              .where('id', '=', empresa.id)
              .update({
                // Define um novo timestamp para a próxima sincronização.
                // Se houve erro antes, ajusta o tempo de re-tentativa com base na `tentativa`.
                // Se não houve erro, usa um intervalo padrão entre 50 e 60 minutos.
                // O terceiro parâmetro (`proxSinc || 0`) mantém o controle do número de tentativas de erro.
                prox_sinc_p4m_token: Util.DataHora.gerarTimestampMM(tentativa || 120, tentativa || 120, novaTentativa),
              });

            Util.Log.error(`[P4M] | Tokens | Erro ao renovar token | Tentativa: ${novaTentativa} reagendado | Empresa: ${empresa.id}`);
          }
        }),
      );
    } catch (error) {
      Util.Log.warn(`[P4M] | Tokens | Erro ao sincronizar tokens.`, error);
    } finally {
      emExecucaoTokens = false;
    }
  });
};

const sincronizarPedidos = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSE 1 MINUTO. !!
  // Executa a cada 1 minuto
  schedule.scheduleJob('*/1 * * * *', async () => {
    if (emExecucaoPedidos) {
      Util.Log.warn(`[P4M] | Pedidos | Tarefa de sincronização de pedidos já está em execução.`);
      return;
    }

    emExecucaoPedidos = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();

      const empresas = (await Knex(ETableNames.vw_p4m_empresas_sinc_config)
        .where('prox_sinc_p4m_pedidos', '<=', agora)
        .andWhere('token_valido', '=', true)
        .orderBy('prox_sinc_p4m_pedidos', 'ASC')) as IEmpresaTokenSinc[];

      if (!empresas.length) return;

      await Promise.all(
        empresas.map(async (empresa) => {
          // Consulta um pedido na plu4market
          const resultado = await Servicos.Plug4market.obterPedidoPlug4Market(empresa.pm4_token);

          if (resultado.sucesso) {
            // Quando não tem pedido para ser consultado
            if (!resultado.pedido) {
              Util.Log.info(`[P4M] | Pedidos | Nenhum pedido encontrado | Empresa: ${empresa.id}`);

              await Knex(ETableNames.empresas)
                .where('id', '=', empresa.id)
                .update({
                  prox_sinc_p4m_pedidos: Util.DataHora.gerarTimestampMM(2, 5), // entre 2 e 5m
                });

              return;
            }

            const idP4m = resultado.pedido.cabecalho.id_p4m;

            const pedidoExiste = await Knex(ETableNames.pedidos).where('id_p4m', idP4m).andWhere('empresa_id', empresa.id).first();
            if (!pedidoExiste) {
              const idNovoPedido = await inserirPedidoComTransacao(empresa.id, resultado.pedido.cabecalho, resultado.pedido.itens);

              const resultadoConfirmar = await Servicos.Plug4market.confirmarPedido(empresa.pm4_token, idP4m as string, idNovoPedido);
              if (resultadoConfirmar) {
                Util.Log.info(`[P4M] | Pedidos | Pedido sincronizado com sucesso! | Pedido: ${idP4m} | Empresa: ${empresa.id}`);
              } else {
                await Knex(ETableNames.pedidos).delete().where(idNovoPedido);
                Util.Log.error(`[P4M] | Pedidos | Erro ao confirmar pedido, nada feito... | Pedido: ${idP4m} | Empresa: ${empresa.id}`);
              }
            } else {
              await Servicos.Plug4market.confirmarPedido(empresa.pm4_token, idP4m as string, pedidoExiste.id);
              Util.Log.warn(`[P4M] | Pedidos | Pedido já existe, ignorando... | Pedido: ${idP4m} | Empresa: ${empresa.id}`);
            }

            await Knex(ETableNames.empresas)
              .where('id', '=', empresa.id)
              .update({
                prox_sinc_p4m_pedidos: Util.DataHora.gerarTimestampMM(2, 5), // entre 2 e 5m
              });
          } else {
            // Obtém a tentativa de erro anterior a partir do timestamp armazenado.
            // Se for um erro identificado (01, 02 ou 03), retorna o número da tentativa (1, 2 ou 3).
            // Caso contrário, retorna 0.
            const proxSinc = Util.DataHora.getErroTentativaMM(empresa.prox_sinc_p4m_pedidos);

            // Define o tempo de espera com base no número da tentativa de erro anterior.
            // Cada tentativa aumenta o tempo de re-tentativa em 5 minutos (1 → 5min, 2 → 10min, 3 → 15min).
            // Se não houver erro anterior, `tentativa` será 0.
            const tentativa = proxSinc * 5;

            // Incrementa quantidade de tentativas
            const novaTentativa = (tentativa ? proxSinc + 1 : 1) as 1 | 2 | 3 | 0;

            await Knex(ETableNames.empresas)
              .where('id', '=', empresa.id)
              .update({
                // Define um novo timestamp para a próxima sincronização.
                // Se houve erro antes, ajusta o tempo de re-tentativa com base na `tentativa`.
                // Se não houve erro, usa um intervalo padrão entre 50 e 60 minutos.
                // O terceiro parâmetro (`proxSinc || 0`) mantém o controle do número de tentativas de erro.
                prox_sinc_p4m_pedidos: Util.DataHora.gerarTimestampMM(tentativa || 20, tentativa || 20, novaTentativa),
              });

            Util.Log.error(`[P4M] | Pedidos | Erro ao sincronizar pedido | Tentativa: ${novaTentativa} reagendado | Empresa: ${empresa.id}`, resultado.erro);
          }
        }),
      );
    } catch (error) {
      Util.Log.warn(`[P4M] | Pedidos | Erro ao sincronizar pedidos.`, error);
    } finally {
      emExecucaoPedidos = false;
    }
  });
};

export const Plug4market = { sincronizarProdutos, sincronizarTokens, sincronizarPedidos };
