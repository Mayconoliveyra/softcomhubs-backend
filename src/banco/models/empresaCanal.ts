export interface IEmpresaCanal {
  id: number;
  empresa_id: number;
  canal_codigo: number;
  seller_id?: string | null;
  ativo: boolean;

  created_at: string;
  updated_at?: string;
}
