import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.usuarios, (table) => {
      table.uuid('uuid').primary().index().unique().notNullable().checkLength('=', 36).checkRegex(Util.UuidV4.regexUuidV4String);

      table.string('nome', 120).notNullable();
      table.string('email', 120).unique().notNullable();
      table.string('senha', 255).notNullable();
      table.boolean('ativo').defaultTo(true);
      table.uuid('empresa_id').notNullable().references('uuid').inTable(ETableNames.empresas);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.usuarios}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.usuarios).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.usuarios}`);
  });
}
