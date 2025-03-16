import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_sh_empresas_sinc_config AS
    SELECT 
        uuid,
        registro,
        sinc_preco_tipo,
        sh_url,
        sh_client_id,
        sh_client_secret,
        sh_empresa_id,
        sh_usuario_id,
        sh_forma_pagamento,
        sh_token,
        sh_token_exp,
        sh_ultima_sinc_produtos,
        prox_sinc_sh_token,
        prox_sinc_sh_produtos,
        FROM_UNIXTIME(sh_token_exp) AS sh_token_exp_datetime,
        FROM_UNIXTIME(sh_ultima_sinc_produtos) AS sh_ultima_sinc_produtos_datetime,
        FROM_UNIXTIME(prox_sinc_sh_token) AS prox_sinc_sh_token_datetime,
        FROM_UNIXTIME(prox_sinc_sh_produtos) AS prox_sinc_sh_produtos_datetime,
        ((sh_token_exp) > UNIX_TIMESTAMP(NOW())) AS token_valido
      FROM empresas
      WHERE deleted_at IS NULL 
      AND ativo = TRUE
      AND sh_qrcode_url IS NOT NULL
      AND sh_url IS NOT NULL
      AND sh_client_id IS NOT NULL
      AND sh_client_secret IS NOT NULL
      AND sh_token IS NOT NULL
      AND sh_empresa_id IS NOT NULL
      AND sh_usuario_id IS NOT NULL
      AND sh_forma_pagamento IS NOT NULL
      AND sinc_preco_tipo IS NOT NULL;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_sh_empresas_sinc_config}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_sh_empresas_sinc_config};`);
}
