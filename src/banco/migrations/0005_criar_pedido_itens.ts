import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pedido_itens, (table) => {
      table.bigIncrements('id');

      table.bigInteger('pedido_id').unsigned().notNullable().references('id').inTable(ETableNames.pedidos).onUpdate('RESTRICT').onDelete('RESTRICT');

      table.string('id_produto', 255).notNullable();
      table.string('nome', 255).nullable();
      table.string('sku', 255).notNullable();
      table.decimal('preco', 15, 4).notNullable();
      table.decimal('preco_original', 15, 4).notNullable();
      table.decimal('preco_venda', 15, 4).notNullable();
      table.decimal('desconto', 15, 4).notNullable();
      table.decimal('frete', 15, 4).notNullable();
      table.integer('quantidade').notNullable();
      table.decimal('desconto_unidade', 15, 4).notNullable();
      table.decimal('total', 15, 4).notNullable();
      table.decimal('total_original', 15, 4).notNullable();

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.pedido_itens}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.pedido_itens).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.pedido_itens}`);
  });
}
