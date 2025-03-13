import axios, { AxiosError } from 'axios';

import { IProdutoSinc } from '../banco/tarefas/plug4market';

import { Util } from '../util';

const URL_BASE_P4M = 'https://api.plug4market.com.br';

// !!! ATENÇÃO ESSE TIMEOUT ESTÁ RELACIONADO A TAREFA "selfHost.sincronizarTokens". !!!
const TIMEOUT_P4M = 120000; // 2 minutos

const renovarToken = async (refreshToken: string) => {
  try {
    const data = JSON.stringify({ refreshToken });
    const response = await axios.post('https://api.plug4market.com.br/auth/refresh', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: TIMEOUT_P4M,
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
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${produto.pm4_token}`,
    };

    const ehAtualizar = produto.status_envio === 'ATUALIZAR' ? true : false;

    const url = ehAtualizar ? `${URL_BASE_P4M}/products/${produto.sh_sku}` : `${URL_BASE_P4M}/products`;
    const metodo = ehAtualizar ? 'put' : 'post';

    const data: any = {
      productId: produto.sh_produto_id,
    };

    // Quando está cadastrando, seta os valores padrões obrigatórios
    if (!ehAtualizar) {
      data.description = 'SEM DESCRIÇÃO';
      data.height = 1.234567;
      data.length = 1.234567;
      data.salesChannels = [];
      data.weight = 1.234567;
      data.width = 1.234567;

      data.sku = produto.sh_sku;
      data.name = produto.sh_nome;
      data.price = produto.sh_preco;
      data.stock = produto.sh_estoque;
      data.brand = produto.sh_marca;
      data.productName = produto.sh_nome_formatado;
    } else {
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
      Util.Log.info(`[P4M] | Produto | ${metodo.toUpperCase()} | SKU: ${produto.sh_sku} | Sucesso`);
      return { sucesso: true, data: response.data };
    }
  } catch (error) {
    const axiosError = error as AxiosError as any;
    Util.Log.error(`[P4M] | Produto | Erro ao ${produto.status_envio === 'ATUALIZAR' ? 'atualizar' : 'cadastrar'} SKU: ${produto.sh_sku}`, axiosError);

    const mensagemErro =
      axiosError.response?.data && typeof axiosError.response.data === 'object'
        ? axiosError.response.data.error_messages?.[0]?.message?.[0]?.message || axiosError.response.data.message || 'Erro desconhecido'
        : 'Erro desconhecido';

    return {
      sucesso: false,
      mensagem: mensagemErro,
      status: axiosError.response?.status || 500,
    };
  }
};

export const Plug4market = {
  renovarToken,
  cadastrarOuAtualizarProduto,
};
