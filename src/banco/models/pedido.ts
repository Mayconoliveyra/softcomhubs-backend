export interface IPedido {
  id: number;
  empresa_id: number;

  id_p4m: string; // orderId - UUUID do pedido no Plug4Market

  id_pedido_canal_venda: string | null; // saleChannelOrderId - ID do pedido no canal de venda
  canal_venda_nome: string | null; // saleChannelName - Canal de venda

  // Informações de cobrança
  cobranca_cidade: string | null; // billing_city - Nome da cidade do endereço de cobrança
  cobranca_pais: string | null; // billing_country - País do endereço de cobrança
  cobranca_bairro: string | null; // billing_district - Bairro do endereço de cobrança
  cobranca_documento: string | null; // billing_documentId - CPF ou CNPJ do cliente
  cobranca_email: string | null; // billing_email - E-mail do cliente
  cobranca_nome: string | null; // billing_name - Nome do cliente
  cobranca_telefone: string | null; // billing_phone - Telefone de cobranças
  cobranca_estado: string | null; // billing_state - Estado (UF) do endereço de cobrança
  cobranca_rua: string | null; // billing_street - Logradouro do endereço de cobrança
  cobranca_complemento: string | null; // billing_streetComplement - Complemento do endereço de cobrança
  cobranca_numero: string | null; // billing_streetNumber - Número do endereço de cobrança
  cobranca_pagador_imposto: boolean; // billing_taxPayer - Flag que sinaliza se o cliente é pagador de imposto
  cobranca_cep: string | null; // billing_zipCode - CEP do endereço de cobrança
  cobranca_ibge: string | null; // billing_ibge - codigo ibge

  // Endereço de entrega do pedido
  entrega_cidade: string | null; // shipping_city - Cidade do endereço de entrega
  entrega_pais: string | null; // shipping_country - País (sigla) do endereço de entrega
  entrega_bairro: string | null; // shipping_district - Bairro do endereço de entrega
  entrega_telefone: string | null; // shipping_phone - Número do destinatário
  entrega_nome_destinatario: string | null; // shipping_recipientName - Nome do destinatário
  entrega_estado: string | null; // shipping_state - Estado (UF) do endereço de entrega
  entrega_rua: string | null; // shipping_street - Logradouro do destinatário
  entrega_complemento: string | null; // shipping_streetComplement - Complemento do endereço de entrega
  entrega_numero: string | null; // shipping_streetNumber - Número do endereço de entrega
  entrega_cep: string | null; // shipping_zipCode - CEP do endereço de entrega
  entrega_ibge: string | null; // shipping_ibge - codigo ibge

  estimativa_entrega: string | null; // estimatedDeliveredAt - Data estimada para o envio do pedido
  prazo_maximo_envio: string | null; // estimatedHandlingLimit - Prazo máximo para o vendedor despachar o item

  criado_canal_venda: string | null; // saleChannelCreated - Data de criação do pedido no canal de venda
  observacao?: string | null; // note - Observações

  custo_envio: number; // shippingCost - Valor do frete
  juros: number; // interest - Valor total dos juros
  comissao_total?: number; // totalCommission - Valor de comissionamento do canal de vendas
  valor_total: number; // totalAmount - Valor total do pedido

  sh_id_pedido: string | null; // id do pedido no erp destino
  sh_data_sinc: string | null; // data/hora que foi enviado para o destino

  prox_sinc: number;
  ultima_sinc_erros: unknown | null;

  created_at: string;
  updated_at?: string;
}
