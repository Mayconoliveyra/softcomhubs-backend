export interface IEmpresa {
  id: number;
  uuid: string;

  registro: string;
  razao: string;
  fantasia: string;
  cnpj_cpf: string;

  sinc_nome: boolean;
  sinc_preco: boolean;
  sinc_estoque: boolean;
  sinc_fabricante: boolean;

  pm4_token?: string | null;
  pm4_token_renovacao?: string | null;
  pm4_token_exp?: number | null;

  ativo: boolean;

  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
