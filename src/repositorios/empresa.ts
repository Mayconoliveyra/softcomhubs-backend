import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';
import { IEmpresa } from '../banco/models/empresa';

import { Util } from '../util';

const buscarPorId = async (empresa_id: number) => {
  return await Knex(ETableNames.empresas).where({ id: empresa_id }).whereNull('deleted_at').first();
};

const buscarPorUuid = async (empresa_id: string) => {
  return await Knex(ETableNames.empresas).where({ uuid: empresa_id }).whereNull('deleted_at').first();
};

const atualizarDadosSelfHost = async (uuid: string, data: Partial<IEmpresa>) => {
  try {
    return await Knex(ETableNames.empresas)
      .where('uuid', uuid)
      .update({ ...data });
  } catch (error) {
    Util.Log.error('Erro ao atualizar dados selfhost da empresa', error);
    return false;
  }
};

export const Empresa = { buscarPorId, buscarPorUuid, atualizarDadosSelfHost };
