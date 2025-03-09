import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_empresas_tokens AS
    SELECT 
        uuid,
        fantasia,
        razao,
        registro,
        cnpj_cpf,
        sinc_nome,
        sinc_preco,
        sinc_estoque,
        sinc_fabricante,
        pm4_token,
        pm4_token_renovacao,
        pm4_token_exp,
        sh_qrcode_url,
        sh_url,
        sh_client_id,
        sh_client_secret,
        sh_token,
        sh_token_exp,
        FROM_UNIXTIME(sh_token_exp) AS sh_token_exp_datetime,
        sh_ultima_sinc,
        ativo,
        created_at,
        updated_at,
        deleted_at
    FROM empresas
    WHERE 
        deleted_at IS NULL 
        AND ativo = TRUE
        AND sh_qrcode_url IS NOT NULL
        AND sh_token_exp < UNIX_TIMESTAMP(NOW());
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_empresas_tokens}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_empresas_tokens};`);
}
