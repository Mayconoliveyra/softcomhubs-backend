import axios from 'axios';
import qs from 'qs';

import { Util } from '../util';

// !!! ATENÇÃO ESSE TIMEOUT ESTÁ RELACIONADO A TAREFA "selfHost.sincronizarTokens". !!!
const TIMEOUT_SELF_HOST = 120000; // 2 minutos

interface ISelfHostProduto {
  produto_id: number;
  nome: string;
  id: number;
  estoque: string;
  preco_venda: string;
  PrecoA: string;
  PrecoB: string;
  PrecoC: string;
  fabricante: string | null;
}

interface ISelfHostResponse {
  code: number;
  message: string;
  data: ISelfHostProduto[];
  hasData: boolean;
  date_sync: number;
  meta: {
    page: {
      current: number;
      next: number | null;
    };
  };
}

interface IProdutoFormatado {
  uuid: string;
  empresa_id: string;
  sh_nome: string;
  sh_preco: number;
  sh_produto_id: string;
  sh_nome_formatado: string;
  sh_sku: string;
  sh_estoque: number;
  sh_marca: string;
}

interface IResultadoBusca {
  produtos: IProdutoFormatado[];
  ultimaDataSync: number;
}

const extrairDominioEClientId = (url: string) => {
  try {
    const urlObj = new URL(url);
    const clientId = urlObj.searchParams.get('client_id');
    const dominio = `${urlObj.protocol}//${urlObj.host}`;
    if (!clientId) throw new Error('Client ID não encontrado na URL');
    return { dominio, clientId };
  } catch (error) {
    Util.Log.error('Erro ao extrair domínio e client_id', error);
    return null;
  }
};

const obterClientSecret = async (dominio: string, clientId: string) => {
  const gerarDeviceId = () => {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Letra aleatória de A-Z
    const randomDigits = Math.floor(100 + Math.random() * 900); // Dois dígitos aleatórios
    return `SOFTCOMHUBS-${randomLetter}${randomDigits}`;
  };

  try {
    const deviceId = gerarDeviceId();

    const data = qs.stringify({ client_id: clientId, device_id: deviceId });
    const response = await axios.post(`${dominio}/device/add`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      timeout: TIMEOUT_SELF_HOST,
    });
    return response.data.data.client_secret;
  } catch (error) {
    Util.Log.error('Erro ao obter client secret', error);
    return null;
  }
};

const obterToken = async (dominio: string, clientId: string, clientSecret: string) => {
  try {
    const data = qs.stringify({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret });
    const response = await axios.post(`${dominio}/authentication/token`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      timeout: TIMEOUT_SELF_HOST,
    });

    if (!response.data?.data?.token) {
      Util.Log.error('Resposta inválida ao obter token', response.data);
      return null;
    }

    const sh_token = response.data.data.token;
    const sh_token_exp = Util.DataHora.obterTimestampAtual() + 3000; // Seta a expiração = 50m (padrão da api é 60m)
    return { sh_token, sh_token_exp };
  } catch (error) {
    Util.Log.error('Erro ao obter token', error);
    return null;
  }
};

const buscarProdutos = async (
  empresa_id: string,
  sh_url: string,
  sh_token: string,
  sh_ultima_sinc: number,
  sinc_preco_tipo: 'PADRAO' | 'A' | 'B' | 'C',
): Promise<IResultadoBusca> => {
  const removerGradeDoNome = (nome: string): string => {
    return nome.replace(/\s-\s[^-]+\s-\s[^-]+$/, '').trim();
  };

  try {
    let page = 1;
    let produtosFormatados: IProdutoFormatado[] = [];
    let ultimaDataSync = sh_ultima_sinc;
    let hasNextPage = true;

    while (hasNextPage) {
      const url = `${sh_url}/api/produtos/produtos/ultima_sincronizacao/${sh_ultima_sinc}/page/${page}`;
      Util.Log.info(`Buscando produtos na página ${page} da empresa ${empresa_id}`);

      const response = await axios.get<ISelfHostResponse>(url, {
        headers: { Authorization: `Bearer ${sh_token}` },
        timeout: TIMEOUT_SELF_HOST,
      });

      if (response.data.code !== 1) {
        Util.Log.error(`Erro ao buscar produtos da empresa ${empresa_id}: ${response.data.message}`);
        break;
      }
      // Seta a data de sincronização. Essa linha tem que ficar aqui, se colocar a baixo vai ter problemas.
      ultimaDataSync = response?.data?.date_sync || sh_ultima_sinc;

      if (!response.data.hasData) {
        Util.Log.info(`Finalizada busca de produtos para empresa ${empresa_id}`);
        break;
      }

      const produtosProcessados: IProdutoFormatado[] = response.data.data.map((produto) => {
        let preco = 0;
        switch (sinc_preco_tipo) {
          case 'A':
            preco = produto.PrecoA ? parseFloat(parseFloat(produto.PrecoA).toFixed(2)) : 0;
            break;
          case 'B':
            preco = produto.PrecoB ? parseFloat(parseFloat(produto.PrecoB).toFixed(2)) : 0;
            break;
          case 'C':
            preco = produto.PrecoC ? parseFloat(parseFloat(produto.PrecoC).toFixed(2)) : 0;
            break;
          default:
            preco = produto.preco_venda ? parseFloat(parseFloat(produto.preco_venda).toFixed(2)) : 0;
        }

        return {
          uuid: Util.UuidV4.gerar(),
          empresa_id,
          sh_nome: produto.nome ? produto.nome.substring(0, 250) : '',
          sh_preco: preco || 1234567,
          sh_produto_id: produto.produto_id ? produto.produto_id.toString() : '',
          sh_nome_formatado: produto.nome ? removerGradeDoNome(produto.nome).substring(0, 250) : '',
          sh_sku: produto.id ? produto.id.toString() : '',
          sh_estoque: produto.estoque && parseInt(produto.estoque) > 0 ? Math.min(Number.MAX_SAFE_INTEGER, parseInt(produto.estoque)) : 0,
          sh_marca: produto.fabricante && produto.fabricante !== 'SELECIONE' ? produto.fabricante.substring(0, 250) : 'Não informado',
        };
      });

      produtosFormatados = [...produtosFormatados, ...produtosProcessados];
      page = response.data.meta.page.next || 0;
      hasNextPage = response.data.meta.page.next !== null;
    }

    return { produtos: produtosFormatados, ultimaDataSync };
  } catch (error) {
    Util.Log.error(`Erro ao buscar produtos no SelfHost para empresa ${empresa_id}`, error);
    return { produtos: [], ultimaDataSync: sh_ultima_sinc };
  }
};

export const SelfHost = { extrairDominioEClientId, obterClientSecret, obterToken, buscarProdutos };
