export interface ItemPedido {
  uuid: string;
  pedido_id: string;

  id_produto: string; // productId - Id do produto dado pelo comerciante
  nome: string | null; // name - Nome do produto pedido
  sku: string; // sku - Sku do produto
  preco: number; // price - Valor do pedido
  preco_original: number; // originalPrice - Preço sem desconto
  preco_venda: number; // salePrice - Deprecated - Valor que foi vendido
  desconto: number; // discount - Valor do desconto dado no produto
  frete: number; // freight - Valor do frete calculado
  quantidade: number; // quantity - Quantidade de itens pedidos
  desconto_unidade: number; // unitDiscount - Desconto por unidade
  total: number; // total - Valor total de todos os pedidos
  total_original: number; // originalTotal - Valor total com os valores integrais

  created_at: string;
  updated_at?: string;
}
