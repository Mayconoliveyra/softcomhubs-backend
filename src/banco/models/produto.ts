export interface IProduto {
  uuid: string;
  empresa_id: string;
  sh_nome: string;
  sh_preco: number;
  sh_preco_custo: number;
  sh_produto_id: string;
  sh_nome_formatado: string;
  sh_sku: string;
  sh_estoque: number;
  sh_marca: string;
  p4m_nome?: string | null;
  p4m_preco?: number | null;
  p4m_preco_custo?: number | null;
  p4m_produto_id?: string | null;
  p4m_nome_formatado?: string | null;
  p4m_sku?: string | null;
  p4m_estoque?: number | null;
  p4m_marca?: string | null;

  prox_sinc_p4m: number;

  created_at: string;
  updated_at?: string | null;
}
