export interface IAtributo {
  id: number;

  codigo: string;
  nome: string;
  tipo: 'TAMANHO' | 'COR' | 'SABOR' | 'VOLTAGEM' | 'POTENCIA';
  desativado: boolean;

  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
