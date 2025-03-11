import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_sh_empresas_tokens AS
    SELECT 
          uuid,
          fantasia,
          registro,
          sh_url,
          sh_client_id,
          sh_token,
          sh_client_secret,
          sh_token_exp,
          COALESCE(sh_ultima_sinc, 0) AS sh_ultima_sinc, -- Se for NULL, retorna 0
          FROM_UNIXTIME(sh_token_exp) AS sh_token_exp_datetime,
          (sh_token_exp <= UNIX_TIMESTAMP(NOW())) AS renovar, -- Indica se o token já precisa ser renovado, token tem validade 1hora, mas por garantia é armazenado no banco com 40m.
          ((sh_token_exp + 960) > UNIX_TIMESTAMP(NOW())) AS valido, -- Indica se o token ainda está dentro da margem de 16 minutos
          sh_falhas
      FROM empresas
      WHERE 
          deleted_at IS NULL 
          AND ativo = TRUE
          AND sh_qrcode_url IS NOT NULL
          AND sh_url IS NOT NULL
          AND sh_client_id IS NOT NULL
          AND sh_client_secret IS NOT NULL
          AND sh_token IS NOT NULL
          AND sh_token_exp IS NOT NULL
      ORDER BY sh_falhas ASC, sh_token_exp ASC;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_sh_empresas_tokens}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_sh_empresas_tokens};`);
}
