export interface IP4mProduto {
  id: number;

  nome: string;
  descricao: string;
  codigo_produto: string;
  nome_produto: string;
  preco: number;
  sku: string;
  estoque: number;

  altura_cm: number;
  comprimento_cm: number;
  largura_cm: number;
  peso_g: number;

  ativo: boolean;

  codigo_anatel?: string;
  codigo_anvisa?: string;
  marca?: string;

  cor_id?: string;
  condicao?: 'novo' | 'usado';
  preco_custo?: number;
  dias_cross_docking?: number;
  ean?: string;
  sabor_id?: string;
  genero?: 'masculino' | 'feminino' | 'menino' | 'menina' | 'unissex';
  imagens?: string; // Lista separada por vírgula ou pode ser adaptado para string[]
  codigo_inmetro?: string;
  codigo_fabricante?: string;
  codigo_mapa?: string;
  unidade_medida?:
    | 'un'
    | 'kg'
    | 'g'
    | 'mg'
    | 'm'
    | 'm²'
    | 'm³'
    | 'cm'
    | 'cm²'
    | 'cm³'
    | 'mm'
    | 'mm²'
    | 'mm³'
    | 'oz'
    | 'lb'
    | 'ft'
    | 'ft²'
    | 'ft³'
    | 'in'
    | 'in²'
    | 'in³';

  modelo?: string;
  ncm?: string;
  origem?: 'nacional' | 'importado';
  potencia_id?: string;
  revisado: boolean;

  tamanho_id?: string;
  multiplicador_unidade?: number;
  voltagem_id?: string;
  garantia_meses?: number;

  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
