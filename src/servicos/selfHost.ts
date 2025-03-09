import axios from 'axios';
import qs from 'qs';

import { Repositorios } from '../repositorios';

import { Util } from '../util';

const TIMEOUT_SELF_HOST = 6000;

interface ISelfHostProduto {
  produto_id: number;
  nome: string;
  sku: string;
  estoque: string;
  preco_venda: string;
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
  ultimaDataSync: number | null;
}

/* const obterClientSecret = async (secret: string | null, sh_qrcode_url: string): Promise<string | null> => {
  try {
    if (secret) {
      return secret;
    }

    const url = new URL(sh_qrcode_url);
    const clientId = url.searchParams.get('client_id');
    if (!clientId) throw new Error('Client ID não encontrado na URL');

    const data = qs.stringify({
      client_id: clientId,
      device_id: 'SOFTCOMHUBS-DEVICE',
    });

    const secretUrl = `${url.origin}/device/add`;
    const response = await axios.post(secretUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      timeout: 60000,
    });

    return response.data.data?.client_secret || null;
  } catch (error) {
    Util.Log.error(`Erro ao obter client secret SH_QRCODE_URL:${sh_qrcode_url}`, error);
    return null;
  }
};

const obterToken = async (empresa: any): Promise<string | null> => {
  try {
    const clientSecret = await obterClientSecret(empresa, empresa.sh_qrcode_url);
    if (!clientSecret) throw new Error('Não foi possível obter o client secret');

    const url = new URL(empresa.sh_qrcode_url);
    const clientId = url.searchParams.get('client_id');
    if (!clientId) throw new Error('Client ID não encontrado na URL');

    const data = qs.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    });

    const tokenUrl = `${url.origin}/authentication/token`;
    const response = await axios.post(tokenUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      timeout: 60000,
    });

    return response.data.access_token || null;
  } catch (error) {
    Util.Log.error('Erro ao obter token de autenticação', error);
    return null;
  }
};

const buscarProdutos = async (empresa_id: string): Promise<IResultadoBusca> => {
  try {
    const empresa = await Repositorios.Empresa.buscarPorId(empresa_id);
    if (!empresa) throw new Error(`Empresa ${empresa_id} não encontrada`);

    const baseUrl = empresa.sh_url;
    const token = empresa.sh_token;
    const sync = empresa.sh_ultima_sinc || 0;
    let page = 1;
    let produtosFormatados: IProdutoFormatado[] = [];
    let ultimaDataSync = sync;
    let hasNextPage = true;

    while (hasNextPage) {
      const url = `${baseUrl}/api/produtos/produtos/ultima_sincronizacao/${sync}/page/${page}`;
      Util.Log.info(`Buscando produtos na página ${page} da empresa ${empresa_id}`);

      const response = await axios.get<ISelfHostResponse>(url, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 60000,
      });

      if (response.data.code !== 1) {
        Util.Log.error(`Erro ao buscar produtos da empresa ${empresa_id}: ${response.data.message}`);
        break;
      }

      if (!response.data.hasData) {
        Util.Log.info(`Finalizada busca de produtos para empresa ${empresa_id}`);
        break;
      }

      const produtosProcessados: IProdutoFormatado[] = response.data.data.map((produto) => ({
        uuid: Util.UuidV4.gerar(),
        empresa_id,
        sh_nome: produto.nome,
        sh_preco: parseFloat(produto.preco_venda) || 0,
        sh_produto_id: produto.produto_id.toString(),
        sh_nome_formatado: produto.nome.replace(/[^a-zA-Z0-9]/g, ''),
        sh_sku: produto.sku,
        sh_estoque: parseInt(produto.estoque) || 0,
        sh_marca: produto.fabricante || 'Não informado',
      }));

      produtosFormatados = [...produtosFormatados, ...produtosProcessados];
      ultimaDataSync = response.data.date_sync;
      page = response.data.meta.page.next || 0;
      hasNextPage = response.data.meta.page.next !== null;
    }

    return { produtos: produtosFormatados, ultimaDataSync };
  } catch (error) {
    Util.Log.error(`Erro ao buscar produtos no SelfHost para empresa ${empresa_id}`, error);
    return { produtos: [], ultimaDataSync: null };
  }
}; */

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
    });

    if (!response.data?.data?.token) {
      Util.Log.error('Resposta inválida ao obter token', response.data);
      return null;
    }

    const sh_token = response.data.data.token;
    const sh_token_exp = Util.DataHora.obterTimestampAtual() + 2400; // Atualiza o token 40 minutos antes do vencimento
    return { sh_token, sh_token_exp };
  } catch (error) {
    Util.Log.error('Erro ao obter token', error);
    return null;
  }
};

export const SelfHost = { extrairDominioEClientId, obterClientSecret, obterToken };
