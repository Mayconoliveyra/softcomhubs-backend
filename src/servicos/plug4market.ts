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
  const ehAtualizar = produto.status_envio === 'ATUALIZAR' ? true : false;
  const acao = ehAtualizar ? 'ATUALIZAR' : 'CADASTRAR';

  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${produto.pm4_token}`,
    };

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
      data.weight = 1234567; // Peso é gramas
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
      return { sucesso: true, acao: acao, uuid: produto.uuid };
    }
  } catch (error) {
    const axiosError = error as AxiosError as any;

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
