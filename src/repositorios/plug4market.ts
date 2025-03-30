import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';
import { IP4mMigracaoSolicitacao } from '../banco/models/p4mSolicitacao';

import { IValidacaoProdutoP4M } from '../servicos/plug4market';

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
const verificarSolicitacaoProcessamento = async (empresaId: number, canalId: number): Promise<boolean> => {
  try {
    const registros = await Knex(ETableNames.p4m_migracao_solicitacao)
      .select('id')
      .where('empresa_id', '=', empresaId)
      .where('status', '=', 'PROCESSANDO')
      .andWhere('canal_codigo', canalId)
      .first();

    return !!registros;
  } catch (error) {
    Util.Log.error('Erro ao verificar se já tinha solicitação em processamento', error);
    return true;
  }
};
const obterSolicitacaoPorId = async (solicitacaoId: number): Promise<(IP4mMigracaoSolicitacao & { pm4_loja_id: string }) | undefined> => {
  try {
    return await Knex(ETableNames.p4m_migracao_solicitacao)
      .select(`${ETableNames.p4m_migracao_solicitacao}.*`, `${ETableNames.empresas}.pm4_loja_id`)
      .innerJoin(ETableNames.empresas, `${ETableNames.empresas}.id`, `${ETableNames.p4m_migracao_solicitacao}.empresa_id`)
      .where(`${ETableNames.p4m_migracao_solicitacao}.id`, '=', solicitacaoId)
      .first();
  } catch (error) {
    Util.Log.error('Erro ao buscar solicitação por ID', error);
    return undefined;
  }
};
const atualizarPorId = async (solicitacaoId: number, dados: Partial<IP4mMigracaoSolicitacao>): Promise<boolean> => {
  try {
    const result = await Knex(ETableNames.p4m_migracao_solicitacao).update(dados).where('id', '=', solicitacaoId);

    return result > 0;
  } catch (error) {
    Util.Log.error('Erro ao atualizar solicitação de migração por ID', error);
    return false;
  }
};

const inserirProdutosMigracao = async (dados: IValidacaoProdutoP4M[]) => {
  try {
    if (!dados.length) return true;

    await Knex(ETableNames.p4m_migracao_produtos).insert(dados);
    return true;
  } catch (error) {
    Util.Log.error('Erro ao inserir produtos migrados', error);
    return false;
  }
};

/* const buscarSkusExistentes = async (empresaId: number, skus: number[]): Promise<string[]> => {
  try {
    const resultados = await Knex(ETableNames.produtos).select('p4m_sku').whereIn('p4m_sku', skus).andWhere('empresa_id', '=', empresaId);

    return resultados.map((r) => r.p4m_sku);
  } catch (error) {
    Util.Log.error('[P4M] | Erro ao buscar SKUs existentes', error);
    return [];
  }
};
 */

export const Plug4Market = {
  criarSolicitacao,
  verificarSolicitacaoProcessamento,
  obterSolicitacaoPorId,
  atualizarPorId,
  inserirProdutosMigracao,
};
