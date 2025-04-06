import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.p4m_migracao_produtos, (table) => {
      table.bigIncrements('id');
      table
        .bigInteger('solicitacao_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable(ETableNames.p4m_migracao_solicitacao)
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
      table.bigInteger('empresa_id').nullable().unsigned();

      table.text('feedback').nullable();
      table.bigInteger('sku').nullable();
      table.string('produto_id_canal', 255).nullable();
      table.string('variacao_id_canal', 255).nullable();
      table.string('ean_canal', 255).nullable();
      table.string('titulo_canal', 255).nullable();
      table.string('cod_ref_canal', 255).nullable();
      table.decimal('preco_canal', 10, 2).nullable();
      table.integer('estoque_canal').nullable();
      table.boolean('status_canal').nullable();

      table.string('cor_canal', 255).nullable();
      table.string('tamanho_canal', 255).nullable();

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));

      table.foreign(['sku', 'empresa_id']).references(['p4m_sku', 'empresa_id']).inTable(ETableNames.produtos).onUpdate('RESTRICT').onDelete('RESTRICT');
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.p4m_migracao_produtos}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.p4m_migracao_produtos).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.p4m_migracao_produtos}`);
  });
}
