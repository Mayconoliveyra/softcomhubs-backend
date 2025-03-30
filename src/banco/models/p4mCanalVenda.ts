export interface IP4mCanalVenda {
  id: number;

  codigo: number;
  cnpj?: string | null;
  nome: string;
  canal_p4m: boolean;
  desativado: boolean;

  created_at: string;
  updated_at?: string;
}
