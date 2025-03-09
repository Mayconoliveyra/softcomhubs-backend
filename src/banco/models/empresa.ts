export interface IEmpresa {
  uuid: string;

  fantasia: string;
  razao: string;
  registro: string;
  cnpj_cpf: string;

  sinc_nome: boolean;
  sinc_preco: boolean;
  sinc_estoque: boolean;
  sinc_fabricante: boolean;

  pm4_token?: string | null;
  pm4_token_renovacao?: string | null;
  pm4_token_exp?: number | null;

  sh_qrcode_url: string;
  sh_url: string;
  sh_client_id: string;
  sh_client_secret: string;
  sh_token: string;
  sh_token_exp: number;
  sh_ultima_sinc?: number | null;

  ativo: boolean;

  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
