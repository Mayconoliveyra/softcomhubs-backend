import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';
import { IP4mMigracaoSolicitacao } from '../banco/models/p4mSolicitacao';

import { Util } from '../util';

const criarSolicitacao = async (dado: Omit<IP4mMigracaoSolicitacao, 'id' | 'created_at'>): Promise<number | false> => {
  try {
    const [id] = await Knex(ETableNames.p4m_migracao_solicitacao).insert(dado);
    return id;
  } catch (error) {
    Util.Log.error('Erro ao inserir migracao_solicitacao', error);
    return false;
  }
};
const cancelarSolicitacoesAtivas = async (empresaId: number, canalCodigo: number): Promise<boolean> => {
  try {
    await Knex(ETableNames.p4m_migracao_solicitacao)
      .where('empresa_id', empresaId)
      .andWhere('canal_codigo', canalCodigo)
      .whereIn('status', ['CONSULTAR_PLANILHA', 'EDITANDO', 'PROCESSANDO'])
      .update({
        status: 'CANCELADO',
      });

    return true;
  } catch (error) {
    Util.Log.error('Erro ao cancelar solicitações ativas', error);
    return false;
  }
};
const verificarSolicitacaoPendente = async (empresaId: string | number, canalId: number): Promise<boolean> => {
  try {
    const registros = await Knex(ETableNames.p4m_migracao_solicitacao)
      .select('id')
      .where('empresa_id', empresaId)
      .whereNull('deleted_at')
      .whereNotIn('status', ['FINALIZADO', 'ERRO', 'CANCELADO'])
      .andWhere('canal_codigo', canalId);

    return registros.length > 0;
  } catch (error) {
    Util.Log.error('Erro ao verificar solicitação de migração pendente', error);
    return false;
  }
};
const obterSolicitacaoPorId = async (id: number): Promise<IP4mMigracaoSolicitacao | undefined> => {
  try {
    return await Knex(ETableNames.p4m_migracao_solicitacao).select('*').where('id', id).first();
  } catch (error) {
    Util.Log.error('Erro ao buscar solicitação por ID', error);
    return undefined;
  }
};
const atualizarPorId = async (id: number, dados: Partial<IP4mMigracaoSolicitacao>): Promise<boolean> => {
  try {
    const result = await Knex(ETableNames.p4m_migracao_solicitacao).update(dados).where('id', id);

    return result > 0;
  } catch (error) {
    Util.Log.error('Erro ao atualizar solicitação de migração por ID', error);
    return false;
  }
};

export const Plug4Market = { criarSolicitacao, cancelarSolicitacoesAtivas, verificarSolicitacaoPendente, obterSolicitacaoPorId, atualizarPorId };
