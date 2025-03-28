export interface IP4mMigracaoSolicitacao {
  id: number;
  empresa_id: string;
  canal_codigo: number;
  solicitado_em: string;
  finalizado_em?: string | null;
  prod_encontrados: number;
  prod_sem_sku: number;
  prod_com_sku: number;
  prod_migrados: number;
  erros?: string | null;
  prox_sinc: number;
  status: 'CONSULTADO_PLANILHA' | 'EDITANDO' | 'PROCESSANDO' | 'FINALIZADO' | 'CANCELADO' | 'ERRO';

  created_at: string;
  updated_at?: string | null;
  deleted_at?: string | null;
}
