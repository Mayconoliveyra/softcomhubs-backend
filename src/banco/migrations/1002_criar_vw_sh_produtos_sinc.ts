import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_sh_produtos_sinc AS
    SELECT 
          uuid,
          sh_url,
          sh_token,
          sh_token_exp,
          FROM_UNIXTIME(sh_token_exp) AS sh_token_exp_datetime,
          prox_sinc_sh_produtos,
          FROM_UNIXTIME(prox_sinc_sh_produtos) AS prox_sinc_sh_produtos_datetime,
          sh_ultima_sinc_produtos,
          FROM_UNIXTIME(sh_ultima_sinc_produtos) AS sh_ultima_sinc_produtos_datetime,
           ((sh_token_exp) > UNIX_TIMESTAMP(NOW())) AS valido -- Indica se o token ainda está dentro da margem
      FROM empresas
      WHERE 
          deleted_at IS NULL 
          AND ativo = TRUE
          AND sh_qrcode_url IS NOT NULL
          AND sh_url IS NOT NULL
          AND sh_client_id IS NOT NULL
          AND sh_client_secret IS NOT NULL
          AND sh_token IS NOT NULL
      ORDER BY sh_ultima_sinc_produtos ASC;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_sh_produtos_sinc}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_sh_produtos_sinc};`);
}
