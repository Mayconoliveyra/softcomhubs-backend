export interface IVwEmpresaToken {
  uuid: string;
  fantasia: string;
  razao: string;
  registro: string;
  cnpj_cpf: string;
  sinc_nome: boolean;
  sinc_preco: boolean;
  sinc_estoque: boolean;
  sinc_fabricante: boolean;
  pm4_token?: string;
  pm4_token_renovacao?: string;
  pm4_token_exp?: number;
  sh_qrcode_url?: string;
  sh_url?: string;
  sh_client_id?: string;
  sh_client_secret?: string;
  sh_token?: string;
  sh_token_exp?: number;
  sh_token_exp_datetime?: string;
  sh_ultima_sinc?: number;
  ativo: boolean;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
