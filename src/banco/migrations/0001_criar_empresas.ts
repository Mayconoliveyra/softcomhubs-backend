import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.empresas, (table) => {
      table.increments('id').primary();

      table.uuid('uuid').index().unique().notNullable().checkLength('=', 36).checkRegex(Util.UuidV4.regexUuidV4String);

      table.string('registro', 100).notNullable();
      table.string('razao', 255).notNullable();
      table.string('fantasia', 255).notNullable();
      table.string('cnpj_cpf', 14).notNullable().unique();

      table.boolean('sinc_nome').defaultTo(true);
      table.boolean('sinc_preco').defaultTo(true);
      table.boolean('sinc_estoque').defaultTo(true);
      table.boolean('sinc_fabricante').defaultTo(true);

      table.string('pm4_token', 1000);
      table.string('pm4_token_renovacao', 1000);
      table.bigInteger('pm4_token_exp').nullable();

      table.boolean('ativo').defaultTo(true);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.empresas}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.empresas).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.empresas}`);
  });
}
