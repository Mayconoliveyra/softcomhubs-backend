export interface IP4mMigracaoSolicitacao {
  id: number;
  empresa_id: number;
  canal_codigo: number;
  solicitado_em: string;
  finalizado_em?: string | null;
  prod_encontrados: number;
  prod_sem_sku: number;
  prod_com_sku: number;
  prod_migrados: number;
  erros?: string | null;
  prox_sinc: number;
  status: 'PROCESSANDO' | 'EDITANDO' | 'FINALIZADO' | 'CANCELADO' | 'ERRO';

  created_at: string;
  updated_at?: string | null;
}
