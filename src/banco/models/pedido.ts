export interface IPedido {
  uuid: string;

  id: string; // orderId - UUID do pedido no Plug4Market

  // Informações de cobrança
  cobranca_cidade: string; // billing_city - Nome da cidade do endereço de cobrança
  cobranca_pais: string; // billing_country - País do endereço de cobrança
  cobranca_bairro: string; // billing_district - Bairro do endereço de cobrança
  cobranca_documento: string; // billing_documentId - CPF ou CNPJ do cliente
  cobranca_email: string; // billing_email - E-mail do cliente
  cobranca_nome: string; // billing_name - Nome do cliente
  cobranca_telefone: string; // billing_phone - Telefone de cobranças
  cobranca_estado: string; // billing_state - Estado (UF) do endereço de cobrança
  cobranca_rua: string; // billing_street - Logradouro do endereço de cobrança
  cobranca_complemento: string; // billing_streetComplement - Complemento do endereço de cobrança
  cobranca_numero: string; // billing_streetNumber - Número do endereço de cobrança
  cobranca_pagador_imposto: boolean; // billing_taxPayer - Flag que sinaliza se o cliente é pagador de imposto
  cobranca_cep: string; // billing_zipCode - CEP do endereço de cobrança

  criado_em: string; // createdAt - Data de criação do pedido
  estimativa_entrega: string; // estimatedDeliveredAt - Data estimada para o envio do pedido
  prazo_maximo_envio: string; // estimatedHandlingLimit - Prazo máximo para o vendedor despachar o item
  juros: number; // interest - Valor total dos juros

  id_interno: number; // orderId - ID interno do pedido
  codigo_secundario: boolean; // orderIdCustom - Código secundário referente ao pedido no marketplace
  id_pedido_loja: string; // orderIdStore - ID ou número do pedido na loja/ERP
  /* itens_pedido: IOrderItem[]; // orderItems - Itens do pedido */
  tipo_pedido: number; // orderType - Identifica o tipo do pedido (0 = Convencional, 1 = Fulfillment)
  /*   metodos_pagamento: IPaymentMethod[]; // paymentMethods - Métodos de pagamento do pedido */
  canal_venda: string; // saleChannel - Canal de venda
  criado_canal_venda: string; // saleChannelCreated - Data de criação do pedido no canal de venda
  id_pedido_canal_venda: string; // saleChannelOrderId - ID do pedido no canal de venda

  rastreamento_id: string; // shipmentId - ID interno do código de rastreio
  rastreamento_transportadora: string; // shippingName - Nome da transportadora
  rastreamento_valor: number; // total - Valor do envio
  rastreamento_codigo: string; // trackingNumber - Código de rastreamento

  // Endereço de entrega do pedido
  entrega_cidade: string; // shipping_city - Cidade do endereço de entrega
  entrega_pais: string; // shipping_country - País (sigla) do endereço de entrega
  entrega_bairro: string; // shipping_district - Bairro do endereço de entrega
  entrega_telefone: string; // shipping_phone - Número do destinatário
  entrega_nome_destinatario: string; // shipping_recipientName - Nome do destinatário
  entrega_estado: string; // shipping_state - Estado (UF) do endereço de entrega
  entrega_rua: string; // shipping_street - Logradouro do destinatário
  entrega_complemento: string; // shipping_streetComplement - Complemento do endereço de entrega
  entrega_numero: string; // shipping_streetNumber - Número do endereço de entrega
  entrega_cep: string; // shipping_zipCode - CEP do endereço de entrega

  custo_envio: number; // shippingCost - Valor do frete

  valor_total: number; // totalAmount - Valor total do pedido
  observacao?: string | null; // note - Observações
  comissao_total?: number | null; // totalCommission - Valor de comissionamento do canal de vendas
}
