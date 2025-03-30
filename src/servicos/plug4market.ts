import axios, { AxiosError } from 'axios';
import FormData from 'form-data';
import * as XLSX from 'xlsx';

import { IItemPedido } from '../banco/models/ItemPedido';
import { IP4mMigracaoProduto } from '../banco/models/p4mMigracaoProduto';
import { IPedido } from '../banco/models/pedido';

import { IProdutoSinc } from '../tarefas/plug4market';

import { Util } from '../util';

const { P4M_USER_ID, P4M_USER_EMAIL, P4M_USER_NOME, P4M_USER_TOKEN } = process.env;

const URL_BASE_P4M = 'https://api.plug4market.com.br';

// !!! ATENÇÃO ESSE TIMEOUT ESTÁ RELACIONADO AS TAREFAS!!!
const TIMEOUT_P4M = 30000; // 30 segundos
const TIMEOUT_P4M_TOKEN = 120000; // 2 minutos

const URL_BASE_VTRINA = 'https://api.vtrina.com/api';
const TIMEOUT_VTRINA = 300000; // 30 segundos

interface IProdutoP4m {
  description: string; // Descrição do Produto
  height: number; // Altura (em centimetros).
  length: number; // Comprimento (em centimetros).
  name: string; // Nome do Produto.
  price: number; // Preço de Produto.
  costPrice: number; // Preço de custo.
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

interface IPedidoP4MCabecalho {
  id: string;
  saleChannelOrderId: string;
  orderIdStore: string;
  status: string;
  orderType: number;
  amount: number;
  createdAt: string;
  updatedAt: string;
  note?: string;
}

// Interface para o objeto Billing (Endereço e informações de cobrança)
export interface Billing {
  city: string; // Nome da cidade do endereço de cobrança
  country: string; // País do endereço de cobrança
  dateOfBirth: string; // <date-time> - Deprecated
  district: string; // Bairro do endereço de cobrança
  documentId: string; // CPF ou CNPJ do cliente
  email: string; // E-mail do cliente
  gender: string; // Deprecated
  name: string; // Nome do cliente
  phone: string; // Telefone de cobranças
  state: string; // Estado (UF) do endereço de cobrança
  street: string; // Logradouro do endereço de cobrança
  streetComplement: string; // Complemento do endereço de cobrança
  streetNumber: string; // Número do endereço de cobrança
  taxPayer: boolean; // Flag que sinaliza se o cliente é pagador de imposto
  zipCode: string; // CEP do endereço de cobrança
  ibge: string;
}

// Interface para o objeto Invoice (Nota fiscal do pedido)
export interface Invoice {
  nfeAccessKey: string; // Chave de acesso da nota fiscal
  nfeDate: string; // <date-time> - Data da emissão da nota fiscal
  nfeNumber: string; // Número da nota fiscal
  nfeSerialNumber: string; // Número de série da nota fiscal
  xml: string; // XML da nota fiscal
}

export interface OrderItem {
  customId: string; // ID de confirmação enviado pelo cliente
  discount: number; // Valor do desconto dado no produto
  freight: number; // Valor do frete calculado
  mainImage: string; // Imagem principal do produto
  name: string; // Nome do produto pedido
  orderItemId: string; // Id do item pedido no canal de venda
  originalPrice: number; // Preço sem desconto
  originalTotal: number; // Valor total com os valores integrais
  price: number; // Valor do pedido
  productId: string; // Id do produto dado pelo comerciante
  quantity: number; // Quantidade de itens pedidos
  salePrice: number; // Deprecated - Valor que foi vendido
  sku: string; // Sku do produto
  total: number; // Valor total de todos os pedidos (por item)
  unitDiscount: number; // Desconto por unidade
  orderType: number; // Identifica o tipo do pedido (Default: 0, onde 0 = Pedidos Convencionais, 1 = Pedido fulfillment)
  originalObjectJson: string; // Deprecated
}

// Interface para cada método de pagamento (PaymentMethod)
export interface PaymentMethod {
  authorization: string;
  cardBrand: string; // Bandeira do cartão
  installments: number; // Número de parcelas
  method: string; // Método de pagamento (a descrição varia conforme o canal de venda)
  sequential: number;
  value: number; // Valor pago
}

// Interface para o objeto Shipment (Informações de rastreamento)
export interface Shipment {
  shipmentId: string; // ID interno do código de rastreio
  shippingName: string; // Nome da transportadora
  total: number; // Valor do envio
  trackingNumber: string; // Código de rastreamento
}

// Interface para o objeto Shipping (Endereço de entrega do pedido)
export interface Shipping {
  city: string; // Cidade do endereço de entrega
  country: string; // País (sigla) do endereço de entrega
  district: string; // Bairro do endereço de entrega
  phone: string; // Número do destinatário
  recipientName: string; // Nome do destinatário
  state: string; // Estado (UF) do endereço de entrega
  street: string; // Logradouro de destinatário
  streetComplement: string; // Complemento do endereço de entrega
  streetNumber: string; // Número do endereço de entrega
  zipCode: string; // CEP do endereço de entrega
  shippingCost: number; // Valor do frete
  ibge: string;
}

// Interface para cada mudança de status (StatusUpdateDate)
export interface StatusUpdateDate {
  status: 'NEW' | 'SHIPPED' | 'CREATED' | 'APPROVED' | 'INVOICED' | 'CANCELED' | 'COMPLETED';
  updateDate: string; // <date-time>
}

// Interface principal que representa o pedido completo
export interface IPedidoP4MResponse {
  // Informações de cobrança
  billing: Billing;

  // Datas do pedido
  createdAt: string; // <date-time> - Data de criação do pedido
  deliveredAt: string; // <date-time> - Data em que o pedido foi despachado
  estimatedDeliveredAt: string; // <date-time> - Data estimada para o envio do pedido
  estimatedHandlingLimit: string; // <date-time> - Prazo máximo para o vendedor despachar o item

  // Identificadores e status
  id: string; // uuuid do pedido no Plug4Market
  integratedSaleChannelStatus: boolean; // Indica se o pedido já foi integrado com o canal de venda
  interest: number; // Valor total dos juros

  // Nota fiscal do pedido
  invoice: Invoice;

  // Identificadores do pedido
  orderId: number; // ID interno do pedido
  orderIdCustom: boolean; // Código secundário referente ao pedido no marketplace
  orderIdSeller: string; // Deprecated - ID ou número do pedido na loja/ERP.
  orderIdStore: string; // ID ou número do pedido na loja/ERP.

  // Itens do pedido
  orderItems: OrderItem[];

  orderType: number;

  // Métodos de pagamento do pedido
  paymentMethods: PaymentMethod[];

  // Dados do canal de venda
  saleChannel: string;
  saleChannelCreated: string; // <date-time> - Data da criação do pedido no canal de venda
  saleChannelOrderId: string; // Id do pedido no canal de venda

  // Informações de rastreamento
  shipment: Shipment;

  // Endereço de entrega do pedido
  shipping: Shipping;

  shippingCost: number;
  // Status do pedido
  status: 'NEW' | 'SHIPPED' | 'CREATED' | 'APPROVED' | 'INVOICED' | 'CANCELED' | 'COMPLETED';
  statusUpdateDate: StatusUpdateDate[];

  // Totais e datas
  totalAmount: number; // Valor total do pedido
  updatedAt: string; // <date-time> - Data da última alteração do pedido

  // Outros campos
  note: string | null; // Observações da traycommerce
  totalCommission: number | null; // Valor de comissionamento do canal de vendas

  saleChannelName: string;
}

interface IP4mConsultarStatusMigracaoSync {
  _id: string;
  name: string;
  status: string;
  label: string;
  startDate: string;
  endDate: string | null;
  quantity: number;
  userEmail: string;
  userName: string;
  updatedAt: string;
}

interface IP4mConsultarStatusMigracao {
  total: number;
  syncs: IP4mConsultarStatusMigracaoSync[];
}

export type IValidacaoProdutoP4M = Omit<IP4mMigracaoProduto, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export interface ILinhaMigracao {
  SKU: string;
  'ID PRODUTO PAI (CANAL)': string;
  'ID VARIAÇÃO (CANAL)': string;
  PROCESSAR: string;
}

const gerarPlanilhaMigracaoBuffer = (dados: ILinhaMigracao[]) => {
  try {
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Migracao');

    const buffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx',
    });

    return {
      buffer,
      filename: `migracao_${Util.DataHora.obterTimestampAtual()}.xlsx`,
    };
  } catch (error) {
    Util.Log.error('[P4M] | Erro ao gerar planilha de migração', error);
    throw new Error('Erro ao gerar a planilha de migração');
  }
};

const formatarLinhaExcel = (linha: Record<string, any>): IValidacaoProdutoP4M => ({
  solicitacao_id: linha.solicitacao_id,
  feedback: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['FEEDBACK']), 255) || null,
  sku: Util.Texto.tratarComoNumero(linha['SKU']) || null,
  produto_id_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['ID PRODUTO PAI (CANAL)']), 255) || null,
  variacao_id_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['ID VARIAÇÃO (CANAL)']), 255) || null,
  ean_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['EAN (CANAL)']), 255) || null,
  titulo_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['TITULO (CANAL)']), 255) || null,
  cod_ref_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['COD REF (CANAL)']), 255) || null,
  preco_canal: Util.Texto.tratarComoNumero(linha['PREÇO']) || null,
  estoque_canal: Util.Texto.tratarComoNumero(linha['ESTOQUE (CANAL)']) || null,
  status_canal: Util.Texto.tratarComoBoolean(linha['STATUS (CANAL)']) || null,
  cor_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['COR']), 255) || null,
  tamanho_canal: Util.Texto.truncarTexto(Util.Texto.tratarComoString(linha['TAMANHO']), 255) || null,
});

const tratarPedido = (pedido: IPedidoP4MResponse): { cabecalho: Partial<IPedido>; itens: Partial<IItemPedido>[] } => {
  return {
    cabecalho: {
      id_p4m: pedido.id,

      id_pedido_canal_venda: Util.Texto.truncarTexto(pedido.saleChannelOrderId, 255),
      canal_venda_nome: Util.Texto.truncarTexto(pedido.saleChannelName, 255),

      cobranca_cidade: Util.Texto.truncarTexto(pedido.billing.city, 255),
      cobranca_pais: Util.Texto.truncarTexto(pedido.billing.country, 255),
      cobranca_bairro: Util.Texto.truncarTexto(pedido.billing.district, 255),
      cobranca_documento: Util.Texto.truncarTexto(pedido.billing.documentId, 255),
      cobranca_email: Util.Texto.truncarTexto(pedido.billing.email, 255),
      cobranca_nome: Util.Texto.truncarTexto(pedido.billing.name, 255),
      cobranca_telefone: Util.Texto.truncarTexto(pedido.billing.phone, 255),
      cobranca_estado: Util.Texto.truncarTexto(pedido.billing.state, 255),
      cobranca_rua: Util.Texto.truncarTexto(pedido.billing.street, 255),
      cobranca_complemento: Util.Texto.truncarTexto(pedido.billing.streetComplement, 255),
      cobranca_numero: Util.Texto.truncarTexto(pedido.billing.streetNumber, 255),
      cobranca_pagador_imposto: pedido.billing.taxPayer || false,
      cobranca_cep: Util.Texto.truncarTexto(pedido.billing.zipCode, 255),
      cobranca_ibge: Util.Texto.truncarTexto(pedido.billing.ibge, 255),

      entrega_cidade: Util.Texto.truncarTexto(pedido.shipping.city, 255),
      entrega_pais: Util.Texto.truncarTexto(pedido.shipping.country, 255),
      entrega_bairro: Util.Texto.truncarTexto(pedido.shipping.district, 255),
      entrega_telefone: Util.Texto.truncarTexto(pedido.shipping.phone, 255),
      entrega_nome_destinatario: Util.Texto.truncarTexto(pedido.shipping.recipientName, 255),
      entrega_estado: Util.Texto.truncarTexto(pedido.shipping.state, 255),
      entrega_rua: Util.Texto.truncarTexto(pedido.shipping.street, 255),
      entrega_complemento: Util.Texto.truncarTexto(pedido.shipping.streetComplement, 255),
      entrega_numero: Util.Texto.truncarTexto(pedido.shipping.streetNumber, 255),
      entrega_cep: Util.Texto.truncarTexto(pedido.shipping.zipCode, 255),
      entrega_ibge: Util.Texto.truncarTexto(pedido.shipping.ibge, 255),

      estimativa_entrega: pedido.estimatedDeliveredAt ? Util.DataHora.formatarDataHora(pedido.estimatedDeliveredAt || '') : null,
      prazo_maximo_envio: pedido.estimatedHandlingLimit ? Util.DataHora.formatarDataHora(pedido.estimatedHandlingLimit || '') : null,

      criado_canal_venda: pedido.saleChannelCreated ? Util.DataHora.formatarDataHora(pedido.saleChannelCreated || '') : null,
      observacao: Util.Texto.truncarTexto(pedido.note, 255),

      custo_envio: Util.Texto.tratarComoNumero(pedido.shippingCost?.toFixed(4)) || 0,
      juros: Util.Texto.tratarComoNumero(pedido.interest?.toFixed(4)) || 0,
      comissao_total: Util.Texto.tratarComoNumero(pedido.totalCommission?.toFixed(4)) || 0,
      valor_total: Util.Texto.tratarComoNumero(pedido.totalAmount?.toFixed(4)) || 0,
    },
    itens:
      pedido.orderItems?.map((item) => ({
        id_produto: Util.Texto.tratarComoNumero(item.productId) || null,
        nome: Util.Texto.truncarTexto(Util.Texto.tratarComoString(item.name), 255) || '',
        sku: Util.Texto.tratarComoNumero(item.sku) || null,
        preco: Util.Texto.tratarComoNumero(item.price?.toFixed(4)) || 0,
        preco_original: Util.Texto.tratarComoNumero(item.originalPrice?.toFixed(4)) || 0,
        preco_venda: Util.Texto.tratarComoNumero(item.salePrice?.toFixed(4)) || 0,
        desconto: Util.Texto.tratarComoNumero(item.discount?.toFixed(4)) || 0,
        frete: Util.Texto.tratarComoNumero(item.freight?.toFixed(4)) || 0,
        quantidade: Util.Texto.tratarComoNumero(item.quantity) || 0,
        desconto_unidade: Util.Texto.tratarComoNumero(item.unitDiscount?.toFixed(4)) || 0,
        total: Util.Texto.tratarComoNumero(item.total?.toFixed(4)) || 0,
        total_original: Util.Texto.tratarComoNumero(item.originalTotal?.toFixed(4)) || 0,
      })) || [],
  };
};

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

    // Se produto.p4m_sku tiver vazio é porque a mercadoria é vai ser cadastradas.
    // Se "p4m_sku" tive preenchido é porque a mercadoria já ta cadastrada com o "p4m_sku" válido.
    // Então para atualizar o produto vou utilizar "p4m_sku", pois ele vai ser o sku válido e nunca vai ser alterado.
    // Já "sh_sku" pode alterar o valor, por exemplo, se foi realizado a troca de sistema.
    const url = ehAtualizar ? `${URL_BASE_P4M}/products/${ehAtualizar ? produto.p4m_sku : produto.sh_sku}` : `${URL_BASE_P4M}/products`;
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
      data.active = true; // Cadastra ativo como padrão

      data.productId = produto.sh_produto_id.toString();
      data.sku = produto.sh_sku.toString();
      data.name = produto.sh_nome;
      data.price = produto.sh_preco;
      data.costPrice = produto.sh_preco_custo;
      data.stock = produto.sh_estoque;
      data.brand = produto.sh_marca;
      data.productName = produto.sh_nome_formatado;
    } else {
      data.productId = produto.p4m_produto_id?.toString();

      // Se está sendo atualizado, atualiza apenas os campos necessários
      if (produto.dif_preco) data.price = produto.sh_preco;
      if (produto.dif_preco_custo) data.costPrice = produto.sh_preco_custo;
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
      return { sucesso: true, acao: acao, id: produto.id };
    } else {
      return {
        sucesso: false,
        acao: acao,
        erro: JSON.stringify({ mensagem: 'response.status diferente de 200 e 201' }),
        status: 500,
        id: produto.id,
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
        `[P4M] | Produto | Produto já cadastrado, realizado apenas vinculação. | Ação: ${acao} | Produto: ${produto.id}`,
        JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }),
      );
      return { sucesso: true, acao: acao, id: produto.id };
    }

    // Retorna erro
    return {
      sucesso: false,
      acao: acao,
      erro: JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }),
      status: axiosError.response?.status || 500,
      id: produto.id,
    };
  }
};

const obterPedidoPlug4Market = async (token: string) => {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get<{ data: IPedidoP4MCabecalho[] }>(`${URL_BASE_P4M}/orders?_page=1&size=1&status=APPROVED&integratedStore=false`, {
      headers,
      timeout: TIMEOUT_P4M,
    });

    const pedido = response.data?.data?.[0];
    if (!pedido) {
      // Vai ser retornado true porque não é um erro, apenas não tinha pedido para ser retornado...
      // Então, sucesso vai ser true, mas o pedido vai ser null
      return { sucesso: true, pedido: null, erro: 'Nenhum pedido encontrado' };
    }

    return await obterDetalhesPedido(token, pedido.id);
  } catch (error) {
    const axiosError = error as AxiosError;
    return { sucesso: false, pedido: null, erro: JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }) };
  }
};

const obterDetalhesPedido = async (token: string, pedidoId: string) => {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`${URL_BASE_P4M}/orders/${pedidoId}`, {
      headers,
      timeout: TIMEOUT_P4M,
    });

    const pedidoTratado = response?.data && response?.data.id ? tratarPedido(response.data) : null;
    return { sucesso: true, pedido: pedidoTratado };
  } catch (error) {
    const axiosError = error as AxiosError;
    return { sucesso: false, pedido: null, erro: JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }) };
  }
};

const confirmarPedido = async (token: string, id_p4m: string, idPedidoLocal: number) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const data = JSON.stringify({ orderIdStore: idPedidoLocal });

    const response = await axios.post(`${URL_BASE_P4M}/orders/${id_p4m}/confirm`, data, {
      headers,
      timeout: TIMEOUT_P4M,
    });

    if (response.status === 200 || response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    Util.Log.error(`[P4M] | Pedido | Erro ao confirmar pedido | Pedido: ${id_p4m}`, axiosError);
    return false;
  }
};

const migracaoConsultarStatus = async (empresaId: number, storeId: string, canalId: number) => {
  try {
    const url = `${URL_BASE_VTRINA}/migration?storeId=${storeId}&size=1&page=1&marketplace=${canalId}`;

    const response = await axios.get<IP4mConsultarStatusMigracao>(url, {
      timeout: TIMEOUT_VTRINA,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const statusConsulta = response?.data?.syncs?.[0].status;
    if (statusConsulta !== 'PROCESSING' && statusConsulta !== 'COMPLETE') {
      return {
        sucesso: false,
        dados: null,
        erro: 'Não foi possível realizar a consulta. Por favor, entre em contato com o suporte.',
      };
    } else {
      return {
        sucesso: true,
        dados: response.data.syncs[0],
        erro: null,
      };
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    Util.Log.error(`[P4M] | Migração | Erro ao consultar status | Empresa: ${empresaId}`, axiosError);

    return {
      sucesso: false,
      dados: null,
      erro: JSON.stringify(axiosError.response?.data || 'Erro desconhecido'),
    };
  }
};

const migracaoSolicitar = async (empresaId: number, storeId: string, canalId: number) => {
  try {
    const url = `${URL_BASE_VTRINA}/migration/validation`;

    const body = {
      storeId: storeId,
      marketplace: canalId,
      userEmail: P4M_USER_EMAIL,
      userName: P4M_USER_NOME,
      userId: P4M_USER_ID,
      userToken: P4M_USER_TOKEN,
      label: 'Obter Produtos',
    };
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': body.userToken,
      },
      timeout: TIMEOUT_VTRINA,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    if (response.status === 202) {
      return {
        sucesso: true,
        dados: 'Solicitado com sucesso!',
        erro: null,
      };
    } else {
      Util.Log.error(`[P4M] | Migração | Status inválido na solicitação | Status: ${response.status} | Empresa: ${empresaId} `, response.data);
      return {
        sucesso: false,
        dados: null,
        erro: `Status inesperado: ${response.status}`,
      };
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    Util.Log.error(`[P4M] | Migração | Erro realizar solicitação | Empresa: ${empresaId}`, axiosError);

    return {
      sucesso: false,
      dados: null,
      erro: JSON.stringify(axiosError.response?.data || 'Erro desconhecido'),
    };
  }
};

const migracaoBaixarPlanilha = async (empresaId: number, solicitacaoId: number, storeId: string, canalId: number) => {
  try {
    const url = `${URL_BASE_VTRINA}/migration/validation/export?storeId=${storeId}&marketplace=${canalId}`;

    const response = await axios.get<ArrayBuffer>(url, {
      responseType: 'arraybuffer',
      timeout: TIMEOUT_VTRINA,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const workbook = XLSX.read(response.data, { type: 'buffer' });
    const primeiraAba = workbook.SheetNames[0];
    const linhas = XLSX.utils.sheet_to_json(workbook.Sheets[primeiraAba]);
    const dadosFormatados: IValidacaoProdutoP4M[] = (linhas as Record<string, any>[]).map((linha) =>
      formatarLinhaExcel({ ...linha, solicitacao_id: solicitacaoId }),
    );

    return {
      sucesso: true,
      dados: dadosFormatados,
      erro: null,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    Util.Log.error(`[P4M] | Migração | Erro ao baixar planilha | Empresa: ${empresaId}`, axiosError);

    return {
      sucesso: false,
      dados: null,
      erro: JSON.stringify(axiosError.response?.data || { mensagem: 'Erro desconhecido' }),
    };
  }
};

const migracaoValidar = async (empresaId: number, storeId: string, canalId: number, dados: ILinhaMigracao[]) => {
  try {
    const url = `${URL_BASE_VTRINA}/migration/validation/updated?storeId=${storeId}`;

    const { buffer, filename } = gerarPlanilhaMigracaoBuffer(dados);

    const formData = new FormData();
    formData.append('userEmail', P4M_USER_EMAIL);
    formData.append('userName', P4M_USER_NOME);
    formData.append('userId', P4M_USER_ID);
    formData.append('userToken', P4M_USER_TOKEN);
    formData.append('marketplace', canalId.toString());
    formData.append('storeId', storeId);
    formData.append('file', buffer, {
      filename,
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
        accept: '*/*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        Referer: 'https://hub.plug4market.com.br/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      timeout: TIMEOUT_VTRINA,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    if (response.status === 200 || response.status === 202) {
      return {
        sucesso: true,
        dados: 'Validação de migração enviada com sucesso!',
        erro: null,
      };
    } else {
      Util.Log.error(`[P4M] | Migração | Validação | Status inválido | Status: ${response.status} | Empresa: ${empresaId}`, response.data);
      return {
        sucesso: false,
        dados: null,
        erro: `Status inesperado: ${response.status}`,
      };
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    Util.Log.error(`[P4M] | Migração | Validação | Erro ao enviar | Empresa: ${empresaId}`, axiosError);

    return {
      sucesso: false,
      dados: null,
      erro: JSON.stringify(axiosError.response?.data || 'Erro desconhecido'),
    };
  }
};

const migracaoMigrar = async (empresaId: number, storeId: string, canalId: number, dados: ILinhaMigracao[]) => {
  try {
    const url = `${URL_BASE_VTRINA}/migration/migration`;

    const { buffer, filename } = gerarPlanilhaMigracaoBuffer(dados);

    const formData = new FormData();
    formData.append('userEmail', P4M_USER_EMAIL);
    formData.append('userName', P4M_USER_NOME);
    formData.append('userId', P4M_USER_ID);
    formData.append('userToken', P4M_USER_TOKEN);
    formData.append('marketplace', canalId.toString());
    formData.append('storeId', storeId);
    formData.append('file', buffer, {
      filename,
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
        accept: '*/*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        Referer: 'https://hub.plug4market.com.br/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      timeout: TIMEOUT_VTRINA,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    if (response.status === 200 || response.status === 202) {
      return {
        sucesso: true,
        dados: 'Migração enviada com sucesso!',
        erro: null,
      };
    } else {
      Util.Log.error(`[P4M] | Migração | Migração | Status inválido | Status: ${response.status} | Empresa: ${empresaId}`, response.data);
      return {
        sucesso: false,
        dados: null,
        erro: `Status inesperado: ${response.status}`,
      };
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    Util.Log.error(`[P4M] | Migração | Migração | Erro ao enviar | Empresa: ${empresaId}`, axiosError);

    return {
      sucesso: false,
      dados: null,
      erro: JSON.stringify(axiosError.response?.data || 'Erro desconhecido'),
    };
  }
};

export const Plug4market = {
  renovarToken,
  cadastrarOuAtualizarProduto,
  obterPedidoPlug4Market,
  confirmarPedido,
  migracaoConsultarStatus,
  migracaoSolicitar,
  migracaoBaixarPlanilha,
  migracaoValidar,
  migracaoMigrar,
};
