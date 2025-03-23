export interface ICanalVenda {
  id: number;

  codigo: number;
  cnpj?: string | null;
  nome: string;
  canal_p4m: boolean;

  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
