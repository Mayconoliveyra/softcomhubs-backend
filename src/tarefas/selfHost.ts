import schedule from 'node-schedule';

import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';

import { Servicos } from '../servicos';
import { IClienteCadastrarSH, IPedidoRequest } from '../servicos/selfHost';

import { Util } from '../util';

let emExecucaoTokens = false;
let emExecucaoProdutos = false;
let emExecucaoPedidos = false;

interface IEmpresaSincConfig {
  id: number;
  registro: string;
  sinc_preco_tipo: 'PADRAO' | 'A' | 'B' | 'C';
  sh_url: string;
  sh_client_id: string;
  sh_client_secret: string;
  sh_empresa_id: number;
  sh_usuario_id: number;
  sh_forma_pagamento: string;
  sh_token: string;
  sh_token_exp: number;
  sh_ultima_sinc_produtos: number;
  prox_sinc_sh_token: number;
  prox_sinc_sh_produtos: number;
  sh_token_exp_datetime: string;
  sh_ultima_sinc_produtos_datetime: string;
  prox_sinc_sh_token_datetime: string;
  prox_sinc_sh_produtos_datetime: string;
  token_valido: boolean;
}

type IPedidoSinc = {
  registro: string;
  sh_url: string;
  sh_empresa_id: number;
  sh_usuario_id: number;
  sh_forma_pagamento: string;
  sh_token: string;
  token_valido: boolean;
  id: number;
  empresa_id: number;
  id_p4m: string;
  id_pedido_canal_venda: string;
  canal_venda_nome: string;
  cobranca_cidade: string;
  cobranca_pais: string;
  cobranca_bairro: string;
  cobranca_documento: string;
  cobranca_email: string;
  cobranca_nome: string;
  cobranca_telefone: string;
  cobranca_estado: string;
  cobranca_rua: string;
  cobranca_complemento: string;
  cobranca_numero: string;
  cobranca_pagador_imposto: boolean;
  cobranca_cep: string;
  cobranca_ibge: string;
  entrega_cidade: string;
  entrega_pais: string;
  entrega_bairro: string;
  entrega_telefone: string;
  entrega_nome_destinatario: string;
  entrega_estado: string;
  entrega_rua: string;
  entrega_complemento: string;
  entrega_numero: string;
  entrega_cep: string;
  entrega_ibge: string;
  estimativa_entrega: string;
  prazo_maximo_envio: string;
  criado_canal_venda: string;
  observacao: string;
  custo_envio: number;
  juros: number;
  comissao_total: number;
  valor_total: number;
  sh_id_pedido: string;
  sh_data_sinc: string;
  created_at: string;
  updated_at: string;
  ultima_sinc_erros: string;
  prox_sinc: number;
  prox_sinc_datetime: string;
};

const sincronizarProdutos = () => {
  // !! ATENÇÃO, NÃO ALTERAR ESSES 3 MINUTOS. !!
  // Executa a cada 3 minutos
  schedule.scheduleJob('*/3 * * * *', async () => {
    if (emExecucaoProdutos) {
      Util.Log.warn(`[SH] | Produtos | Tarefa de sincronização de produtos já está em execução.`);
      return;
    }

    emExecucaoProdutos = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();
      // !! SE FUTURAMENTE AUMENTAR A QUANTIDADE DE CLIENTES, APENAS AJUSTAR O LIMIT

      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_sh_empresas_sinc_config)
        .where('prox_sinc_sh_produtos', '<=', agora)
        .andWhere('token_valido', '=', true)
        .orderBy('prox_sinc_sh_produtos', 'ASC')
        .limit(5)) as IEmpresaSincConfig[];

      if (!empresas.length) return;

      // 🔹 Busca produtos de todas as empresas em paralelo para melhor desempenho
      const resultados = await Promise.all(
        empresas.map(async (empresa) => {
          try {
            const produtos = await Servicos.SelfHost.buscarProdutos(
              empresa.id,
              empresa.sh_url,
              empresa.sh_token,
              empresa.sh_ultima_sinc_produtos,
              empresa.sinc_preco_tipo,
            );
            return { empresa, produtos };
          } catch (error) {
            Util.Log.error(`[SH] | Produtos | Erro ao buscar produtos | Empresa: ${empresa.id}`, error);
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
                      .onConflict(['sh_produto_id', 'sh_sku', 'empresa_id']) // 🔹 Atualiza se já existir
                      .merge({
                        sh_nome: Knex.raw('VALUES(sh_nome)'),
                        sh_preco: Knex.raw('VALUES(sh_preco)'),
                        sh_preco_custo: Knex.raw('VALUES(sh_preco_custo)'),
                        sh_nome_formatado: Knex.raw('VALUES(sh_nome_formatado)'),
                        sh_estoque: Knex.raw('VALUES(sh_estoque)'),
                        sh_marca: Knex.raw('VALUES(sh_marca)'),
                      });
                  }
                }

                // 🔹 Atualiza a sincronização da empresa
                await trx(ETableNames.empresas)
                  .where('id', '=', empresa.id)
                  .update({
                    sh_ultima_sinc_produtos: produtos.ultimaDataSync,
                    prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(5, 10),
                  });

                Util.Log.info(`[SH] | Produtos | Sincronizados com sucesso! | Total: ${produtosInserir.length} | Empresa: ${empresa.id}`);
              } catch (error) {
                Util.Log.error(`[SH] | Produtos | Erro ao inserir produtos! | Empresa: ${empresa.id}`, error);
                throw error; // 🔹 Reverte a transação em caso de erro
              }
            });
          } else {
            // 🔹 Se `ultimaDataSync` não mudou, significa que houve erro na sincronização
            if (produtos.ultimaDataSync === empresa.sh_ultima_sinc_produtos) {
              const proxSinc = Util.DataHora.getErroTentativaMM(empresa.prox_sinc_sh_produtos); // Obtém tentativas anteriores (1, 2, 3)
              const tentativa = proxSinc * 10; // Cada tentativa adiciona +10 min (1 → 10min, 2 → 20min, 3 → 30min)
              const novaTentativa = (proxSinc ? proxSinc + 1 : 1) as 1 | 2 | 3 | 0; // Incrementa tentativa

              await Knex(ETableNames.empresas)
                .where('id', '=', empresa.id)
                .update({
                  sh_ultima_sinc_produtos: produtos.ultimaDataSync,
                  prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(tentativa || 40, tentativa || 40, novaTentativa),
                });

              Util.Log.error(`[SH] | Produtos | Erro na sincronização! | Tentativa: ${novaTentativa} reagendado | Empresa: ${empresa.id}`);
            } else {
              // 🔹 Se não houve erro, mas também não há produtos novos, só atualiza o timestamp normalmente
              await Knex(ETableNames.empresas)
                .where('id', '=', empresa.id)
                .update({
                  sh_ultima_sinc_produtos: produtos.ultimaDataSync,
                  prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(5, 10),
                });

              Util.Log.info(`[SH] | Produtos | Sincronizados com sucesso! | Total: 0 | Empresa: ${empresa.id}`);
            }
          }
        } catch (error) {
          // Se der algum erro, inesperado
          await Knex(ETableNames.empresas)
            .where('id', '=', empresa.id)
            .update({
              sh_ultima_sinc_produtos: produtos.ultimaDataSync,
              prox_sinc_sh_produtos: Util.DataHora.gerarTimestampMM(50, 60),
            });

          Util.Log.error(`[SH] | Produtos | Erro ao processar sincronização | Empresa: ${empresa.id}`, error);
        }
      }
    } catch (error) {
      Util.Log.error(`[SH] | Produtos | Erro ao sincronizar produtos SelfHost`, error);
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
      Util.Log.warn(`[SH] | Tokens | Tarefa de sincronização de tokens já está em execução.`);
      return;
    }

    emExecucaoTokens = true;
    try {
      const agora = Util.DataHora.obterTimestampAtual();
      // !! SE FUTURAMENTE AUMENTAR A QUANTIDADE DE CLIENTES, APENAS AJUSTAR O LIMIT

      // Buscar todas as empresas que precisam de renovação
      const empresas = (await Knex(ETableNames.vw_sh_empresas_sinc_config)
        .where('prox_sinc_sh_token', '<=', agora)
        .orderBy('prox_sinc_sh_token', 'ASC')
        .limit(5)) as IEmpresaSincConfig[];

      if (!empresas.length) return;

      // Executa todas as renovações em paralelo
      await Promise.all(
        empresas.map(async (empresa) => {
          const tokenData = await Servicos.SelfHost.obterToken(empresa.sh_url, empresa.sh_client_id, empresa.sh_client_secret);

          if (tokenData && tokenData.sh_token) {
            await Knex(ETableNames.empresas)
              .where('id', '=', empresa.id)
              .update({
                sh_token: tokenData.sh_token,
                sh_token_exp: tokenData.sh_token_exp,
                prox_sinc_sh_token: Util.DataHora.gerarTimestampMM(30, 45), // Só retorna para fila nos próximos 30~45 minutos.
              });

            Util.Log.info(`[SH] | Tokens | Token renovado com sucesso! | Empresa: ${empresa.id}`);
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
            const novaTentativa = (tentativa ? proxSinc + 1 : 1) as 1 | 2 | 3 | 0;

            await Knex(ETableNames.empresas)
              .where('id', '=', empresa.id)
              .update({
                // Define um novo timestamp para a próxima sincronização.
                // Se houve erro antes, ajusta o tempo de re-tentativa com base na `tentativa`.
                // Se não houve erro, usa um intervalo padrão entre 50 e 60 minutos.
                // O terceiro parâmetro (`proxSinc || 0`) mantém o controle do número de tentativas de erro.
                prox_sinc_sh_token: Util.DataHora.gerarTimestampMM(tentativa || 40, tentativa || 40, novaTentativa),
              });

            Util.Log.error(`[SH] | Tokens | Erro ao renovar token | Tentativa: ${novaTentativa} reagendado | Empresa: ${empresa.id}`);
          }
        }),
      );
    } catch (error) {
      Util.Log.warn(`[SH] | Tokens | Erro ao sincronizar tokens SelfHost.`, error);
    } finally {
      emExecucaoTokens = false;
    }
  });
};

const sincronizarPedidos = () => {
  schedule.scheduleJob('*/1 * * * *', async () => {
    if (emExecucaoPedidos) {
      Util.Log.warn('[SH] | Pedidos | Tarefa de sincronização de pedidos já está em execução.');
      return;
    }

    emExecucaoPedidos = true;
    try {
      const pedidosRaw = await Knex.raw(`
        SELECT * FROM (
          SELECT *,
          ROW_NUMBER() OVER (PARTITION BY empresa_id ORDER BY prox_sinc ASC) AS rn
          FROM ${ETableNames.vw_sh_pedidos_sinc}
          WHERE token_valido = true
        ) AS sub
        WHERE rn = 1
        ORDER BY prox_sinc ASC
      `);

      const pedidos = (pedidosRaw[0] || pedidosRaw.rows || pedidosRaw) as IPedidoSinc[];

      if (!pedidos.length) {
        emExecucaoPedidos = false;
        return;
      }

      await Promise.all(
        pedidos.map(async (pedido) => {
          Util.Log.info(`[SH] | Pedidos | Iniciado sincronização... | Pedido: ${pedido.id}`);

          const modeloClienteInserir: IClienteCadastrarSH = {
            bairro: Util.Texto.truncarTexto(pedido.entrega_bairro || pedido.cobranca_bairro || '', 50),
            codigo_cidade: Util.Texto.paraNumero(pedido.entrega_ibge) || Util.Texto.paraNumero(pedido.cobranca_ibge),
            cep: Util.Texto.truncarTexto(pedido.entrega_cep || pedido.cobranca_cep, 50) || '',
            cpf_cnpj: Util.Texto.truncarTexto(pedido.cobranca_documento, 50) || '',
            complemento: Util.Texto.truncarTexto(pedido.entrega_complemento || pedido.cobranca_complemento, 200) || '',
            contato_email: Util.Texto.truncarTexto(pedido.cobranca_email, 200) || '',
            contato_nome: '',
            contato_telefone:
              pedido.entrega_telefone && pedido.entrega_telefone !== '41999999999'
                ? Util.Texto.truncarTexto(pedido.entrega_telefone, 50) || ''
                : pedido.cobranca_telefone && pedido.cobranca_telefone !== '41999999999'
                ? Util.Texto.truncarTexto(pedido.cobranca_telefone, 50) || ''
                : '',
            contribuinte_icms: 9, // Padrão 9 - Não Contribuinte
            endereco: Util.Texto.truncarTexto(pedido.entrega_rua || pedido.cobranca_rua, 200) || '',
            inscricao_estadual: '',
            nome: Util.Texto.truncarTexto(pedido.entrega_nome_destinatario || pedido.cobranca_nome, 200) || '',
            numero: Util.Texto.truncarTexto(pedido.entrega_numero || pedido.cobranca_numero, 50) || '',
            razao_social: Util.Texto.truncarTexto(pedido.entrega_nome_destinatario || pedido.cobranca_nome, 200) || '',
            uf: Util.Texto.truncarTexto(pedido.entrega_estado || pedido.cobranca_estado, 50) || '',
            cidade: Util.Texto.truncarTexto(pedido.entrega_cidade || pedido.cobranca_cidade, 50) || '',
          };
          /* Util.Log.info(`[SH] | TEMP | Pedidos | Cliente modelo`, modeloClienteInserir); */

          // Consulta e valida os itens do pedido
          Util.Log.info(`[SH] | Pedidos | Consultando itens... | Pedido: ${pedido.id}`);
          const resultadoItens = await Servicos.SelfHost.buscarItensPedido(pedido.id, pedido.empresa_id);

          // Consulta ou cadastra o cliente
          Util.Log.info(`[SH] | Pedidos | Consultando cliente... | CPF/CNPJ: ${pedido.cobranca_documento} | Pedido: ${pedido.id}`);
          const resultadoCliente = await Servicos.SelfHost.buscarOuCadastrarCliente(
            pedido.sh_url,
            pedido.sh_token,
            pedido.cobranca_documento,
            modeloClienteInserir,
            pedido.id,
          );

          if (!resultadoItens.sucesso || !resultadoCliente.sucesso || !resultadoCliente.cliente_id) {
            const errosTodos = [...resultadoItens.erros, ...resultadoCliente.erros];

            await Knex(ETableNames.pedidos)
              .where('id', '=', pedido.id)
              .update({
                prox_sinc: Util.DataHora.gerarTimestampMM(5, 10), // 5 a 10 minutos
                ultima_sinc_erros: Knex.raw('?', [JSON.stringify(errosTodos)]),
              });
            Util.Log.error(`[SH] | Pedidos | Não foi possível processar o pedido | Pedido: ${pedido.id}`, errosTodos);
            return;
          }

          const modeloPedidoInserir: IPedidoRequest = {
            api_guid: pedido.id_p4m,
            api_data_hora_venda: pedido.criado_canal_venda
              ? Util.DataHora.converterDataParaTimestamp(pedido.criado_canal_venda || '')
              : Util.DataHora.obterTimestampAtual(),
            empresa_id: pedido.sh_empresa_id,
            usuario_lancamento_id: pedido.sh_usuario_id,
            cliente_id: resultadoCliente.cliente_id,
            observacao:
              Util.Texto.truncarTexto(
                `${pedido.canal_venda_nome || ''} | #${pedido.id_pedido_canal_venda || ''} | Estimativa: ${Util.DataHora.formatarDataHora(
                  pedido.estimativa_entrega || '',
                  'DD/MM/YY HH:mm',
                )} | Envio até: ${Util.DataHora.formatarDataHora(pedido.prazo_maximo_envio || '', 'DD/MM/YY HH:mm')} | Obs: ${pedido.observacao || ''}`,
                250,
              ) || '',
            usuario_id: pedido.sh_usuario_id,
            vfrete: Util.Texto.paraNumero(pedido.custo_envio) || 0,
            item: resultadoItens.itens,
            pagamento: [
              {
                api_nome_pagamento: pedido.sh_forma_pagamento,
                valor_parcela: (Util.Texto.paraNumero(pedido.valor_total || 0) || 0) - (Util.Texto.paraNumero(pedido.juros || 0) || 0),
              },
            ],
          };
          /* Util.Log.info(`[SH] | TEMP | Pedidos | Peido modelo`, modeloPedidoInserir); */

          Util.Log.info(`[SH] | Pedidos | Enviando pedido... | Pedido: ${pedido.id}`);
          const resultadoEnviarPedido = await Servicos.SelfHost.enviarPedido(pedido.sh_url, pedido.sh_token, modeloPedidoInserir);

          if (resultadoEnviarPedido.sucesso && resultadoEnviarPedido.venda_id) {
            await Knex(ETableNames.pedidos)
              .where('id', '=', pedido.id)
              .update({
                sh_id_pedido: resultadoEnviarPedido.venda_id.toString(),
                sh_data_sinc: Util.DataHora.obterDataAtual(),
                ultima_sinc_erros: null,
                prox_sinc: Util.DataHora.gerarTimestampMM(5, 10), // 5 a 10 minutos // Só pra ficar com valor setado mesmo.
              });

            Util.Log.info(`[SH] | Pedidos | Sucesso no envio do pedido | Pedido: ${pedido.id}`);
          } else {
            await Knex(ETableNames.pedidos)
              .where('id', '=', pedido.id)
              .update({
                prox_sinc: Util.DataHora.gerarTimestampMM(5, 10), // 5 a 10 minutos
                ultima_sinc_erros: Knex.raw('?', [JSON.stringify(resultadoEnviarPedido.erros)]),
              });
            Util.Log.error(`[SH] | Pedidos | Falha ao enviar | Pedido: ${pedido.id}: ${resultadoEnviarPedido.erros}`);
          }
        }),
      );
    } catch (error) {
      Util.Log.warn('[SH] | Pedidos | Erro ao sincronizar pedidos.', error);
    } finally {
      emExecucaoPedidos = false;
    }
  });
};

export const SelfHost = { sincronizarProdutos, sincronizarTokens, sincronizarPedidos };
