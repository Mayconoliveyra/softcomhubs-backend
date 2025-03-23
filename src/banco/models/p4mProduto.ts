export interface IP4mProduto {
  id: number | null;

  nome?: string | null;
  descricao: string | null;
  codigo_produto: string | null;
  nome_produto?: string | null;
  preco?: number | null;
  sku: string | null;
  estoque?: number | null;

  altura_cm?: number | null;
  comprimento_cm?: number | null;
  largura_cm?: number | null;
  peso_g?: number | null;

  ativo: boolean;

  codigo_anatel?: string | null;
  codigo_anvisa?: string | null;
  marca?: string | null;

  cor_id?: string | null;
  condicao?: 'novo' | 'usado' | null;
  preco_custo?: number | null;
  dias_cross_docking?: number | null;
  ean?: string | null;
  sabor_id?: string | null;
  genero?: 'masculino' | 'feminino' | 'menino' | 'menina' | 'unissex' | null;
  imagens?: string | null; // Lista separada por vírgula ou pode ser adaptado para string[]
  codigo_inmetro?: string | null;
  codigo_fabricante?: string | null;
  codigo_mapa?: string | null;
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
    | 'in³'
    | null;

  modelo?: string | null;
  ncm?: string | null;
  origem?: 'nacional' | 'importado' | null;
  potencia_id?: string | null;
  revisado: boolean;

  tamanho_id?: string | null;
  multiplicador_unidade?: number | null;
  voltagem_id?: string | null;
  garantia_meses?: number | null;

  created_at: string;
  updated_at?: string | null;
  deleted_at?: string | null;
}
