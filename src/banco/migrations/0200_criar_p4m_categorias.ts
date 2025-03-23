import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.p4m_categorias, (table) => {
      table.bigIncrements('id');

      table.string('codigo', 255).notNullable();
      table.string('nome', 255).notNullable();
      table.bigInteger('canal_codigo').notNullable().references('codigo').inTable(ETableNames.p4m_canais_vendas).onUpdate('RESTRICT').onDelete('RESTRICT');

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.p4m_categorias}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.p4m_categorias).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.p4m_categorias}`);
  });
}
