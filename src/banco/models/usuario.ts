export interface IUsuario {
  uuid: string;

  nome: string;
  email: string;
  senha: string;
  ativo: boolean;
  empresa_id: string;

  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
