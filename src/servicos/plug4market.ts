import axios, { AxiosError } from 'axios';

import { IProdutoSinc } from '../banco/tarefas/plug4market';

import { Util } from '../util';

const URL_BASE_P4M = 'https://api.plug4market.com.br';

interface IProdutoP4m {
  description: string; // Descrição do Produto
  height: number; // Altura (em centimetros).
  length: number; // Comprimento (em centimetros).
  name: string; // Nome do Produto.
  price: number; // Preço de Produto.
  productId: string; // Código principal do produto (pai)
  productName: string; // Nome do principal do Produto (pai)
  salesChannels: []; // Canais de venda (marketsplaces) onde sera publicado o produto.
  sku: string; // Código do produto
  stock: number; // Quantidade do produto em estoque.
  weight: number; // Peso do Produto (em gramas).
  width: number; // Largura (em centimetros).
  brand: string; // Marca do Produto.
  active: boolean; // Define se o produto está habilitado ou não para venda.
}

// !!! ATENÇÃO ESSE TIMEOUT ESTÁ RELACIONADO AS TAREFAS!!!
const TIMEOUT_P4M = 30000; // 30 segundos
const TIMEOUT_P4M_TOKEN = 120000; // 2 minutos

const renovarToken = async (refreshToken: string) => {
  try {
    const data = JSON.stringify({ refreshToken });
    const response = await axios.post('https://api.plug4market.com.br/auth/refresh', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: TIMEOUT_P4M_TOKEN,
    });

    if (!response.data?.accessToken || !response.data?.refreshToken) {
      Util.Log.error('[P4M] | Token | Resposta inválida ao renovar token', response.data);
      return null;
    }

    const novoToken = response.data.accessToken as string;
    const novoRefreshToken = response.data.refreshToken as string;
    const tokenExpiracao = Util.DataHora.obterTimestampAtual() + 82800; // Expira em 23 horas (Padrão é 24hrs)
    return { novoToken, novoRefreshToken, tokenExpiracao };
  } catch (error) {
    Util.Log.error('[P4M] | Token | Erro ao renovar token', error);
    return null;
  }
};

const cadastrarOuAtualizarProduto = async (produto: IProdutoSinc) => {
  const ehAtualizar = produto.status_envio === 'ATUALIZAR' ? true : false;
  const acao = ehAtualizar ? 'ATUALIZAR' : 'CADASTRAR';

  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${produto.pm4_token}`,
    };

    const url = ehAtualizar ? `${URL_BASE_P4M}/products/${produto.sh_sku}` : `${URL_BASE_P4M}/products`;
    const metodo = ehAtualizar ? 'put' : 'post';

    const data: Partial<IProdutoP4m> = {};

    // Quando está cadastrando, seta os valores padrões obrigatórios
    if (!ehAtualizar) {
      data.description = 'SEM DESCRIÇÃO';
      data.height = 1.234567;
      data.length = 1.234567;
      data.salesChannels = [];
      data.weight = 1234567; // Peso é gramas
      data.width = 1.234567;
      data.active = false; // Cadastra inativo como padrão

      data.productId = produto.sh_produto_id;
      data.sku = produto.sh_sku;
      data.name = produto.sh_nome;
      data.price = produto.sh_preco;
      data.stock = produto.sh_estoque;
      data.brand = produto.sh_marca;
      data.productName = produto.sh_nome_formatado;
    } else {
      data.productId = produto.p4m_produto_id as string;

      // Se está sendo atualizado, atualiza apenas os campos necessários
      if (produto.dif_preco) data.price = produto.sh_preco;
      if (produto.dif_estoque) data.stock = produto.sh_estoque;
      if (produto.dif_marca) data.brand = produto.sh_marca;
      if (produto.dif_nome) {
        data.name = produto.sh_nome;
        data.productName = produto.sh_nome_formatado;
      }
    }

    const response = await axios({
      method: metodo,
      url,
      headers,
      data: JSON.stringify(data),
      timeout: TIMEOUT_P4M,
    });

    if (response.status === 200 || response.status === 201) {
      return { sucesso: true, acao: acao, uuid: produto.uuid };
    } else {
      return {
        sucesso: false,
        acao: acao,
        erro: JSON.stringify({ mensagem: 'response.status diferente de 200 e 2001' }),
        status: 500,
        uuid: produto.uuid,
      };
    }
  } catch (error) {
    const axiosError = error as AxiosError as any;

    // Se tiver tentando cadastrar um produto que já tem o SKU cadastrado vai ser retornado mensagem 'Produto não atualizado'.
    // Nessa situação vou tratar como sucesso e apenas seta as colunas de sincronizado p4m_

    // Quando tenta cadastrar um produto e já tinha cadastro.
    const produtoNaoAtualizado = 'Produto não atualizado';
    // Quando tenta cadastrar um produto ja tinha cadastrado, mas o "productId" é diferente do que ta sendo enviado. Normalmente vai acontece quando agrupa o produto na p4m.
    const produtoRelacionadoOutroProdutoId = 'Esse produto já existe e está relacionado com outro ID Produto';
    if (
      !ehAtualizar &&
      (axiosError.response?.data?.error_messages?.[0]?.message?.[0]?.message == produtoNaoAtualizado ||
        axiosError.response?.data?.error_messages?.[0]?.message?.[0]?.message == produtoRelacionadoOutroProdutoId)
    ) {
      Util.Log.warn(
        `[P4M] | Produto | Produto já cadastrado, realizado apenas vinculação. | Ação: ${acao} | Produto: ${produto.uuid}`,
        JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }),
      );
      return { sucesso: true, acao: acao, uuid: produto.uuid };
    }

    // Retorna erro
    return {
      sucesso: false,
      acao: acao,
      erro: JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }),
      status: axiosError.response?.status || 500,
      uuid: produto.uuid,
    };
  }
};

export const Plug4market = {
  renovarToken,
  cadastrarOuAtualizarProduto,
};
