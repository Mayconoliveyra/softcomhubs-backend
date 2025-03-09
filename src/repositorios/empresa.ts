import { ETableNames } from '../banco/eTableNames';
import { Knex } from '../banco/knex';

const buscarPorId = async (empresa_id: string) => {
  return await Knex(ETableNames.empresas).where({ uuid: empresa_id }).whereNull('deleted_at').first();
};

export const Empresa = { buscarPorId };
