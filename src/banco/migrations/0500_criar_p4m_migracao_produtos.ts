import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.p4m_migracao_produtos, (table) => {
      table.bigIncrements('id');
      table.bigInteger('canal_codigo').notNullable().references('codigo').inTable(ETableNames.p4m_canais_vendas).onUpdate('RESTRICT').onDelete('RESTRICT');

      table.text('feedback').nullable();
      table.string('sku', 255).nullable();

      table.string('produto_pai_canal_id', 255).nullable();
      table.string('variacao_canal_id', 255).nullable();
      table.string('processar', 255).nullable();
      table.string('titulo_canal', 255).nullable();
      table.string('cod_ref_canal', 255).nullable();
      table.decimal('preco_canal', 10, 2).nullable();
      table.integer('estoque_canal').nullable();
      table.boolean('status_canal').nullable();
      table.boolean('estoque_diferente').nullable();
      table.boolean('preco_diferente').nullable();

      table.string('produto_plataforma_id', 255).nullable();
      table.string('variante_plataforma_id', 255).nullable();
      table.string('cod_erp_plataforma', 255).nullable();
      table.string('nome_plataforma', 255).nullable();
      table.integer('estoque_plataforma').nullable();
      table.decimal('preco_plataforma', 10, 2).nullable();

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
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
