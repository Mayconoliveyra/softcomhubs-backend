import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pedidos, (table) => {
      table.bigIncrements('id');

      table.bigInteger('empresa_id').unsigned().notNullable().references('id').inTable(ETableNames.empresas).onUpdate('RESTRICT').onDelete('RESTRICT');

      table.string('id_p4m', 50).unique().notNullable();

      table.string('id_pedido_canal_venda', 255).nullable();
      table.string('canal_venda_nome', 255).nullable();

      // Informações de cobrança
      table.string('cobranca_cidade', 255).nullable();
      table.string('cobranca_pais', 255).nullable();
      table.string('cobranca_bairro', 255).nullable();
      table.string('cobranca_documento', 255).nullable();
      table.string('cobranca_email', 255).nullable();
      table.string('cobranca_nome', 255).nullable();
      table.string('cobranca_telefone', 255).nullable();
      table.string('cobranca_estado', 255).nullable();
      table.string('cobranca_rua', 255).nullable();
      table.string('cobranca_complemento', 255).nullable();
      table.string('cobranca_numero', 255).nullable();
      table.boolean('cobranca_pagador_imposto').nullable();
      table.string('cobranca_cep', 255).nullable();
      table.string('cobranca_ibge', 255).nullable();

      // Endereço de entrega do pedido
      table.string('entrega_cidade', 255).nullable();
      table.string('entrega_pais', 255).nullable();
      table.string('entrega_bairro', 255).nullable();
      table.string('entrega_telefone', 255).nullable();
      table.string('entrega_nome_destinatario', 255).nullable();
      table.string('entrega_estado', 255).nullable();
      table.string('entrega_rua', 255).nullable();
      table.string('entrega_complemento', 255).nullable();
      table.string('entrega_numero', 255).nullable();
      table.string('entrega_cep', 255).nullable();
      table.string('entrega_ibge', 255).nullable();

      table.timestamp('estimativa_entrega').nullable();
      table.timestamp('prazo_maximo_envio').nullable();

      table.timestamp('criado_canal_venda').nullable();
      table.string('observacao', 255).nullable();

      table.decimal('custo_envio', 15, 4).nullable();
      table.decimal('juros', 15, 4).nullable();
      table.decimal('comissao_total', 15, 4).nullable();
      table.decimal('valor_total', 15, 4).nullable();

      table.string('sh_id_pedido', 255).nullable();
      table.timestamp('sh_data_sinc').nullable();

      table.bigInteger('prox_sinc').notNullable().defaultTo(0);
      table.json('ultima_sinc_erros');

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.pedidos}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.pedidos).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.pedidos}`);
  });
}
