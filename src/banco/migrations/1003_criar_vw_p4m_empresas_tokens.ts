import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_p4m_empresas_tokens_renovar AS
    SELECT 
          uuid,
          pm4_token,
          pm4_token_renovacao,
          pm4_token_exp,
          FROM_UNIXTIME(pm4_token_exp) AS pm4_token_exp_datetime,
          prox_sinc_p4m_token,
          FROM_UNIXTIME(prox_sinc_p4m_token) AS prox_sinc_p4m_token_datetime,
          ((pm4_token_exp) > UNIX_TIMESTAMP(NOW())) AS valido -- Indica se o token ainda está dentro da margem de validade
      FROM empresas
      WHERE 
          deleted_at IS NULL 
          AND ativo = TRUE
          AND pm4_token IS NOT NULL
          AND pm4_token_renovacao IS NOT NULL
      ORDER BY prox_sinc_p4m_token ASC;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_p4m_empresas_tokens_renovar}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_p4m_empresas_tokens_renovar};`);
}
