import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pedidos, (table) => {
      table.uuid('uuid').primary().index().unique().notNullable().checkLength('=', 36).checkRegex(Util.UuidV4.regexUuidV4String);
      table.uuid('empresa_id').notNullable().references('uuid').inTable(ETableNames.empresas);

      // Campos do pedido
      table.string('id', 255).notNullable().index();
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

      table.timestamp('criado_em').notNullable();
      table.timestamp('estimativa_entrega').nullable();
      table.timestamp('prazo_maximo_envio').nullable();
      table.decimal('juros', 15, 4).nullable();

      table.bigInteger('id_interno').nullable();
      table.boolean('codigo_secundario').nullable();
      table.string('id_pedido_loja', 255).nullable();
      table.integer('tipo_pedido').nullable();
      table.string('canal_venda', 255).nullable();
      table.timestamp('criado_canal_venda').nullable();
      table.string('id_pedido_canal_venda', 255).nullable();

      table.string('rastreamento_id', 255).nullable();
      table.string('rastreamento_transportadora', 255).nullable();
      table.decimal('rastreamento_valor', 15, 4).nullable();
      table.string('rastreamento_codigo', 255).nullable();

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

      table.decimal('custo_envio', 15, 4).nullable();
      table.decimal('valor_total', 15, 4).nullable();
      table.text('observacao').nullable();
      table.decimal('comissao_total', 15, 4).nullable();

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
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
