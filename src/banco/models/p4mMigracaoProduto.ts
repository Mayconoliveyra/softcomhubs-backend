export interface IP4mMigracaoProduto {
  id: number;

  solicitacao_id: number;
  feedback: string | null;
  sku: number | null;
  produto_pai_canal_id: string | null;
  variacao_canal_id: string | null;
  processar: string | null;
  titulo_canal: string | null;
  cod_ref_canal: string | null;
  preco_canal: number | null;
  estoque_canal: number | null;
  status_canal: boolean | null;
  estoque_diferente: boolean | null;
  preco_diferente: boolean | null;
  produto_plataforma_id: string | null;
  variante_plataforma_id: string | null;
  cod_erp_plataforma: string | null;
  nome_plataforma: string | null;
  estoque_plataforma: number | null;
  preco_plataforma: number | null;

  created_at: string;
  updated_at?: string;
}
