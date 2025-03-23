import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.p4m_atributos, (table) => {
      table.bigIncrements('id');

      table.string('codigo', 24).notNullable().unique();
      table.string('nome', 255).notNullable();
      table.enum('tipo', ['TAMANHO', 'COR', 'SABOR', 'VOLTAGEM', 'POTENCIA']).notNullable();
      table.boolean('desativado').defaultTo(false);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.p4m_atributos}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.p4m_atributos).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.p4m_atributos}`);
  });
}
