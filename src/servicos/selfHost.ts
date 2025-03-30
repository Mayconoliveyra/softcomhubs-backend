import axios, { AxiosInstance } from 'axios';
import qs from 'qs';

import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';

import { Util } from '../util';

// !!! ATENÇÃO ESSE TIMEOUT ESTÁ RELACIONADO A TAREFA "selfHost.sincronizarTokens". !!!
const TIMEOUT_SELF_HOST = 120000; // 2 minutos

const apiClient: AxiosInstance = axios.create({
  timeout: TIMEOUT_SELF_HOST,
  headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
});

interface ISelfHostResponse<T = any> {
  code: number;
  message: string;
  human: string;
  data: T;
  hasData: boolean;
  meta: { page: { current?: number | null; prev?: number | null; next?: number | null; count?: number | null } };
  date_sync: number;
}

interface ISelfHostProduto {
  produto_id: number;
  nome: string;
  id: number;
  estoque: number;
  preco_venda: string;
  PrecoA: string;
  PrecoB: string;
  PrecoC: string;
  fabricante: string | null;
}

interface IProdutoFormatado {
  empresa_id: number;
  sh_nome: string;
  sh_preco: number;
  sh_preco_custo: number;
  sh_produto_id: number;
  sh_nome_formatado: string;
  sh_sku: number;
  sh_estoque: number;
  sh_marca: string;
}

interface IResultadoBusca {
  produtos: IProdutoFormatado[];
  ultimaDataSync: number;
}

export interface IPedidoRequest {
  api_guid: string;
  api_data_hora_venda: number;
  empresa_id: number;
  usuario_lancamento_id: number;
  cliente_id: number;
  observacao: string;
  usuario_id: number;
  vfrete: number;
  item: {
    produto_empresa_grade_id: number;
    produto_id: number;
    preco: number;
    quantidade: number;
    desconto_valor_item: number;
    acrescimo_valor_item: number;
    preco_compra: number;
  }[];
  pagamento: {
    api_nome_pagamento: string;
    valor_parcela: number;
  }[];
}

interface IPedidoResponse {
  code: number;
  message: string;
  human: string;
  data: {
    venda_id?: number;
    xml?: string | null;
    status?: boolean;
    erros?: string | null;
  } | null;
  hasData: boolean;
  meta: {
    page: {
      current: number;
      prev: number | null;
      next: number | null;
      count: number;
    };
  };
  date_sync: number;
}

interface IItemPedido {
  produto_empresa_grade_id: number;
  produto_id: number;
  preco: number;
  quantidade: number;
  desconto_valor_item: number;
  acrescimo_valor_item: number;
  preco_compra: number;
}

export interface IClienteCadastrarSH {
  bairro: string | null;
  codigo_cidade: number | null;
  cep: string;
  cpf_cnpj: string;
  complemento: string;
  contato_email: string;
  contato_nome: string;
  contato_telefone: string;
  contribuinte_icms: 1 | 2 | 9;
  endereco: string;
  inscricao_estadual: string;
  nome: string;
  numero: string;
  razao_social: string;
  uf: string;
  cidade: string;
}

const extrairDominioEClientId = (url: string) => {
  try {
    const urlObj = new URL(url);
    const clientId = urlObj.searchParams.get('client_id');
    const dominio = `${urlObj.protocol}//${urlObj.host}`;
    if (!dominio) throw 'Domínio não encontrado na URL';
    if (!clientId) throw 'Client ID não encontrado na URL';

    return { sucesso: true, dominio, clientId };
  } catch (error) {
    Util.Log.error(`[SH] | Autenticação | ${error} | URL: ${url}`, error);

    return { sucesso: false, dominio: null, clientId: null, erro: error };
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
    const response = await apiClient.post<ISelfHostResponse>(`${dominio}/device/add`, data);

    const clientSecret = response.data?.data?.client_secret;
    const empresaId = response.data?.data?.empresa_id;

    if (response?.data?.code == 1 && clientSecret && empresaId) {
      return { sucesso: true, client_secret: clientSecret, empresa_id: empresaId };
    } else {
      return { sucesso: false, client_secret: null, erro: typeof response?.data?.message == 'string' ? response.data.message : 'Erro desconhecido' };
    }
  } catch (error) {
    Util.Log.error(`[SH] | Autenticação | Erro ao obter client secret | Domínio: ${dominio} | clientId: ${clientId}`, error);

    return { sucesso: false, client_secret: null, erro: 'Erro ao obter client secret.' };
  }
};

const obterToken = async (dominio: string, clientId: string, clientSecret: string) => {
  try {
    const data = qs.stringify({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret });
    const response = await apiClient.post<ISelfHostResponse>(`${dominio}/authentication/token`, data);

    const token = response.data?.data?.token;

    if (response?.data?.code == 1 && token) {
      const sh_token_exp = Util.DataHora.obterTimestampAtual() + 3000; // Seta a expiração = 50m (padrão da api é 60m)

      return { sucesso: true, sh_token: token, sh_token_exp: sh_token_exp };
    } else {
      return { sucesso: false, token: null, erro: typeof response?.data?.message == 'string' ? response.data.message : 'Erro desconhecido' };
    }
  } catch (error) {
    Util.Log.error(`[SH] | Autenticação | Erro ao obter token | Domínio: ${dominio} | clientId: ${clientId} | clientSecret: ${clientSecret}`, error);

    return { sucesso: false, client_secret: null, erro: 'Erro ao obter token.' };
  }
};

const consultarVendedorMarketplace = async (dominio: string, token: string) => {
  try {
    const url = `${dominio}/api/funcionario`;
    const response = await apiClient.get<ISelfHostResponse>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response?.data?.code !== 1 || !Array.isArray(response?.data?.data)) {
      return { sucesso: false, erro: typeof response?.data?.message == 'string' ? response.data.message : 'Erro desconhecido' };
    }

    const funcionarios = response.data.data;
    const vendedorMarketplace = funcionarios.find((f: any) => f.nome === 'MARKETPLACE');

    if (vendedorMarketplace) {
      return { sucesso: true, usuario_id: vendedorMarketplace.usuario_id };
    } else {
      return { sucesso: false, erro: 'Usuário MARKETPLACE não foi encontrado no banco.' };
    }
  } catch (error) {
    Util.Log.error('[SH] | Autenticação | Erro ao consultar vendedores.', error);
    return { sucesso: false, erro: 'Erro ao consultar vendedores.' };
  }
};

const buscarProdutos = async (
  empresa_id: number,
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
      Util.Log.info(`[SH] | Produtos | Buscando produtos | Página: ${page} | Empresa: ${empresa_id}`);

      const response = await apiClient.get<ISelfHostResponse<ISelfHostProduto[]>>(url, {
        headers: { Authorization: `Bearer ${sh_token}` },
      });

      if (response.data.code !== 1) {
        Util.Log.error(`[SH] | Produtos | Erro ao buscar produtos | Empresa: ${empresa_id}`, response.data.message);
        break;
      }
      // Seta a data de sincronização. Essa linha tem que ficar aqui, se colocar a baixo vai ter problemas.
      ultimaDataSync = response?.data?.date_sync || sh_ultima_sinc;

      if (!response.data.hasData) {
        Util.Log.info(`[SH] | Produtos | Finalizada busca de produtos | Empresa ${empresa_id}`);
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

        if (!Util.Texto.tratarComoNumero(produto.produto_id) || !Util.Texto.tratarComoNumero(produto.id)) {
          throw `[SH] | Produtos | produto.produto_id e produto.id não pode ser nulo | Empresa ${empresa_id}`;
        }

        return {
          empresa_id,
          sh_nome: Util.Texto.truncarTexto(produto.nome, 250) || '',
          sh_preco: Util.Texto.tratarComoNumero(preco) || 12345.67,
          sh_preco_custo: Util.Texto.tratarComoNumero(0) || 0, // SELFHOST NÃO RETORNA PRECO DE COMPRA
          sh_produto_id: Util.Texto.tratarComoNumero(produto.produto_id) as number,
          sh_nome_formatado: Util.Texto.truncarTexto(removerGradeDoNome(produto.nome || ''), 250) || '',
          sh_sku: Util.Texto.tratarComoNumero(produto.id) as number,
          sh_estoque: Math.floor(Util.Texto.tratarComoNumero(produto.estoque && produto.estoque > 0 ? produto.estoque : 0) || 0),
          sh_marca: produto.fabricante && produto.fabricante !== 'SELECIONE' ? produto.fabricante.substring(0, 250) : 'Não informado',
        };
      });

      produtosFormatados = [...produtosFormatados, ...produtosProcessados];
      page = response.data.meta.page.next || 0;
      hasNextPage = response.data.meta.page.next !== null;
    }

    return { produtos: produtosFormatados, ultimaDataSync };
  } catch (error) {
    Util.Log.error(`[SH] | Produtos | Erro ao buscar produtos no SelfHost | Empresa: ${empresa_id}`, error);
    return { produtos: [], ultimaDataSync: sh_ultima_sinc };
  }
};

const buscarItensPedido = async (pedidoId: number, empresaId: number): Promise<{ sucesso: boolean; itens: IItemPedido[]; erros: { mensagem: string }[] }> => {
  try {
    const itens = await Knex(ETableNames.pedido_itens).select('sku', 'preco_original', 'quantidade', 'desconto').where('pedido_id', '=', pedidoId);
    const itensFormat: IItemPedido[] = [];
    const errosFormat: { mensagem: string }[] = [];

    for (const item of itens) {
      if (!item.sku) {
        errosFormat.push({ mensagem: `Produto sem SKU válido. Necessário vincular.` });
        continue;
      }

      const produtoExiste = await Knex(ETableNames.produtos)
        .select('sh_produto_id', 'sh_sku', 'sh_preco_custo')
        .where('sh_sku', '=', item.sku)
        .andWhere('empresa_id', '=', empresaId)
        .first();

      if (!produtoExiste) {
        errosFormat.push({ mensagem: `Produto SKU ${item.sku} não está integrado.` });
      } else {
        itensFormat.push({
          produto_empresa_grade_id: produtoExiste.sh_produto_id,
          produto_id: produtoExiste.sh_sku,
          preco: Util.Texto.tratarComoNumero(item.preco_original) || 0, // Preço pode ser 0
          quantidade: Util.Texto.tratarComoNumero(item.quantidade) || 1, // Quantidade não pode ser 0
          desconto_valor_item: Util.Texto.tratarComoNumero(item.desconto) || 0,
          acrescimo_valor_item: 0,
          preco_compra: Util.Texto.tratarComoNumero(produtoExiste.sh_preco_custo) || 0,
        });
      }
    }

    return { sucesso: !errosFormat.length, itens: itensFormat, erros: errosFormat };
  } catch (error) {
    Util.Log.error(`[SH] | Pedidos | Erro ao buscar itens | Pedido: ${pedidoId}.`, error);
    return { sucesso: false, itens: [], erros: [{ mensagem: 'Erro ao buscar itens do pedido.' }] };
  }
};

const buscarOuCadastrarCliente = async (
  dominio: string,
  token: string,
  cpfCnpj: string,
  dadosCliente: IClienteCadastrarSH,
  pedidoId: number,
): Promise<{ sucesso: boolean; cliente_id: number; erros: { mensagem: string }[] }> => {
  try {
    const urlConsulta = `${dominio}/api/clientes/clientes/cpf_cnpj/${cpfCnpj}`;
    const responseConsulta = await apiClient.get<ISelfHostResponse>(urlConsulta, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    });

    if (responseConsulta?.data?.code === 1 && responseConsulta.data?.data?.id) {
      return { sucesso: true, cliente_id: responseConsulta.data.data.id, erros: [] };
    }
  } catch (error) {
    // Quase sempre não vai ter cadastrado. Para evitar log de poluição vou deixar comentado.
    /*    Util.Log.warn(`[SH] | Cliente | Cliente não encontrado | CPF/CNPJ: ${cpfCnpj} | Pedido: ${pedidoId}`); */
  }

  try {
    const urlCadastro = `${dominio}/api/clientes/clientes`;
    const data = qs.stringify({ cliente: JSON.stringify(dadosCliente) });
    const responseCadastro = await apiClient.post<ISelfHostResponse>(urlCadastro, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (responseCadastro.data?.code === 1 && responseCadastro.data?.data) {
      return { sucesso: true, cliente_id: responseCadastro.data.data, erros: [] };
    } else {
      return {
        sucesso: false,
        cliente_id: 0,
        erros: [{ mensagem: `Cliente não encontrado e não foi possível cadastrar. Erro:${responseCadastro?.data?.human} | Pedido: ${pedidoId}` }],
      };
    }
  } catch (error) {
    Util.Log.error(`[SH] | Cliente | Erro ao cadastrar | CPF/CNPJ: ${cpfCnpj}| Pedido: ${pedidoId}`, error);
    return { sucesso: false, cliente_id: 0, erros: [{ mensagem: 'Erro ao cadastrar cliente.' }] };
  }
};

const enviarPedido = async (dominio: string, token: string, pedido: IPedidoRequest) => {
  try {
    const url = `${dominio}/api/vendas/vendas`;
    const data = qs.stringify({ venda: JSON.stringify(pedido) });

    const response = await apiClient.post<IPedidoResponse>(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      maxBodyLength: Infinity,
    });

    if (!response?.data || response.data.code !== 1 || !response.data.data?.venda_id) {
      return {
        sucesso: false,
        erros: [{ mensagem: response.data?.human || 'Erro desconhecido' }],
      };
    }

    return { sucesso: true, venda_id: response.data.data.venda_id, erros: [] };
  } catch (error) {
    Util.Log.error(`[SH] | Pedido | Erro ao enviar pedido | Pedido: ${pedido.api_guid}`, error);
    return { sucesso: false, erros: [{ mensagem: 'Erro ao enviar pedido.' }] };
  }
};

export const SelfHost = {
  extrairDominioEClientId,
  obterClientSecret,
  obterToken,
  buscarProdutos,
  consultarVendedorMarketplace,
  enviarPedido,
  buscarItensPedido,
  buscarOuCadastrarCliente,
};
