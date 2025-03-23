import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.canais_vendas, (table) => {
      table.bigIncrements('id');

      table.bigInteger('codigo').notNullable().unique();
      table.string('cnpj', 50).nullable();
      table.string('nome', 100).unique().notNullable();
      table.boolean('canal_p4m').defaultTo(false);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.canais_vendas}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.canais_vendas).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.canais_vendas}`);
  });
}
