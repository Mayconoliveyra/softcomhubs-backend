import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.empresa_canais, (table) => {
      table.bigIncrements('id');

      table.bigInteger('empresa_id').unsigned().notNullable().references('id').inTable(ETableNames.empresas).onUpdate('RESTRICT').onDelete('RESTRICT');
      table.bigInteger('canal_codigo').notNullable().references('codigo').inTable(ETableNames.p4m_canais_vendas).onUpdate('RESTRICT').onDelete('RESTRICT');
      table.string('seller_id', 120);

      table.boolean('ativo').defaultTo(false);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));

      table.unique(['empresa_id', 'canal_codigo'], { indexName: 'idx_unique_empresaId_canalCodigo' });
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.empresa_canais}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.empresa_canais).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.empresa_canais}`);
  });
}
