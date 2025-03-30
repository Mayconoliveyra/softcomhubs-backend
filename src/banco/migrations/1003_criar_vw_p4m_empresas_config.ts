import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_p4m_empresas_sinc_config AS
    SELECT 
      id,
      registro,
      pm4_token,
      pm4_token_renovacao,
      pm4_token_exp,
      prox_sinc_p4m_token,
      prox_sinc_p4m_pedidos,
      FROM_UNIXTIME(pm4_token_exp) AS pm4_token_exp_datetime,
      FROM_UNIXTIME(prox_sinc_p4m_token) AS prox_sinc_p4m_token_datetime,
      FROM_UNIXTIME(prox_sinc_p4m_pedidos) AS prox_sinc_p4m_pedidos_datetime,
      -- token_valido: true se o token não expirou (pm4_token_exp >= NOW())
      -- o AND garante que o token não vai ta sendo utilizando no momento da renovação
      (
        pm4_token_exp >= UNIX_TIMESTAMP(NOW())
        AND (UNIX_TIMESTAMP(NOW()) <= (prox_sinc_p4m_token - 6 * 60)) -- 6m antes
      ) AS token_valido
    FROM empresas
    WHERE ativo = TRUE
    AND pm4_token IS NOT NULL
    AND pm4_token_renovacao IS NOT NULL;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_p4m_empresas_sinc_config}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_p4m_empresas_sinc_config};`);
}
