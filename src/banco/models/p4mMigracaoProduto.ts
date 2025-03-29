export interface IP4mMigracaoProduto {
  id: number;

  solicitacao_id: number;
  feedback: string | null;
  sku: number | null;
  produto_id_canal: string | null;
  variacao_id_canal: string | null;
  ean_canal: string | null;
  titulo_canal: string | null;
  cod_ref_canal: string | null;
  preco_canal: number | null;
  estoque_canal: number | null;
  status_canal: boolean | null;
  cor_canal: string | null;
  tamanho_canal: string | null;

  created_at: string;
  updated_at?: string;
}
