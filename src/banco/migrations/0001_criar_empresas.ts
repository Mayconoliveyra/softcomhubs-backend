import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.empresas, (table) => {
      table.uuid('uuid').primary().index().unique().notNullable().checkLength('=', 36).checkRegex(Util.UuidV4.regexUuidV4String);

      table.string('fantasia', 255).notNullable();
      table.string('razao', 255).notNullable();

      table.string('registro', 100).notNullable();
      table.string('cnpj_cpf', 14).notNullable().unique();

      table.boolean('sinc_nome').defaultTo(true);
      table.boolean('sinc_preco').defaultTo(true);
      table.boolean('sinc_estoque').defaultTo(true);
      table.boolean('sinc_fabricante').defaultTo(true);

      table.text('pm4_token');
      table.text('pm4_token_renovacao');
      table.bigInteger('pm4_token_exp');

      table.text('sh_qrcode_url');
      table.string('sh_url', 255);
      table.string('sh_client_id', 255);
      table.string('sh_client_secret', 255);
      table.text('sh_token');
      table.bigInteger('sh_token_exp');
      table.bigInteger('sh_ultima_sinc');
      table.bigInteger('sh_falhas').notNullable().defaultTo(0);

      table.boolean('ativo').defaultTo(true);

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.empresas}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.empresas).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.empresas}`);
  });
}
