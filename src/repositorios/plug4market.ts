import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';
import { IP4mMigracaoSolicitacao } from '../banco/models/p4mSolicitacao';

import { Util } from '../util';

const criarSolicitacao = async (dado: Omit<IP4mMigracaoSolicitacao, 'id' | 'created_at'>): Promise<number | false> => {
  try {
    const [id] = await Knex(ETableNames.p4m_migracao_solicitacao).insert(dado);
    return id;
  } catch (error) {
    Util.Log.error('[P4M] | Repositorio | Erro ao inserir migracao_solicitacao', error);
    return false;
  }
};
const cancelarSolicitacoesAtivas = async (empresaId: number, canalCodigo: number): Promise<boolean> => {
  try {
    await Knex(ETableNames.p4m_migracao_solicitacao)
      .where('empresa_id', empresaId)
      .andWhere('canal_codigo', canalCodigo)
      .whereIn('status', ['CONSULTADO_PLANILHA', 'EDITANDO', 'PROCESSANDO'])
      .update({
        status: 'CANCELADO',
      });

    return true;
  } catch (error) {
    Util.Log.error('[P4M] | Repositorio | Erro ao cancelar solicitações ativas', error);
    return false;
  }
};

export const Plug4Market = { criarSolicitacao, cancelarSolicitacoesAtivas };
