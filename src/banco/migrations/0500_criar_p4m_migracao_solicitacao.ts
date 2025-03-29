import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.p4m_migracao_solicitacao, (table) => {
      table.bigIncrements('id');

      table.bigInteger('empresa_id').unsigned().notNullable().references('id').inTable(ETableNames.empresas).onUpdate('RESTRICT').onDelete('RESTRICT');
      table.bigInteger('canal_codigo').notNullable().references('codigo').inTable(ETableNames.p4m_canais_vendas).onUpdate('RESTRICT').onDelete('RESTRICT');

      table.timestamp('solicitado_em').notNullable();
      table.timestamp('finalizado_em').nullable();
      table.bigInteger('prod_encontrados').notNullable().defaultTo(0);

      table.text('erros', 'longtext');

      table.bigInteger('prox_sinc').notNullable().defaultTo(0);

      // CONSULTAR_PLANILHA -> quando ainda está na fila para ser baixado a planilha
      // EDITANDO -> quando o usuario ta fazendo os vínculos dos produtos
      // PROCESSANDO -> Quando o usuario fez o vinculo e fez o envio da planilha
      // FINALIZADO -> Envio da planilha com sucesso
      // CANCELADO -> Cancelado o processo ou solicitado nova planilha
      // ERRO -> Ouve algum erro
      table.enu('status', ['PROCESSANDO', 'EDITANDO', 'FINALIZADO', 'CANCELADO', 'ERRO']).notNullable();

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.p4m_migracao_solicitacao}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.p4m_migracao_solicitacao).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.p4m_migracao_solicitacao}`);
  });
}
