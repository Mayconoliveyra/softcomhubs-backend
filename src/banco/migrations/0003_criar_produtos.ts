import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.produtos, (table) => {
      table.bigIncrements('id');
      table.bigInteger('empresa_id').unsigned().notNullable().references('id').inTable(ETableNames.empresas).onUpdate('RESTRICT').onDelete('RESTRICT');

      table.string('sh_nome').notNullable();
      table.decimal('sh_preco', 10, 2).notNullable();
      table.decimal('sh_preco_custo', 10, 2).notNullable();
      table.bigInteger('sh_produto_id').notNullable();
      table.string('sh_nome_formatado').notNullable();
      table.bigInteger('sh_sku').notNullable();
      table.integer('sh_estoque').notNullable();
      table.string('sh_marca').notNullable().defaultTo('Não informado');

      table.string('p4m_nome');
      table.decimal('p4m_preco', 10, 2);
      table.decimal('p4m_preco_custo', 10, 2);
      table.bigInteger('p4m_produto_id');
      table.string('p4m_nome_formatado');
      table.bigInteger('p4m_sku');
      table.integer('p4m_estoque');
      table.string('p4m_marca');

      table.bigInteger('prox_sinc_p4m').notNullable().defaultTo(0);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));

      table.unique(['sh_produto_id', 'sh_sku', 'empresa_id'], { indexName: 'idx_unique_produto' });
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.produtos}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.produtos).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.produtos}`);
  });
}
