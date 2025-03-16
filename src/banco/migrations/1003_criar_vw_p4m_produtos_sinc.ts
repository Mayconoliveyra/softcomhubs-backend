import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_p4m_produtos_sinc AS
    SELECT 
        p.uuid,
        p.empresa_id,
        e.pm4_token,
        p.sh_nome,
        p.sh_preco,
        p.sh_produto_id,
        p.sh_nome_formatado,
        p.sh_sku,
        p.sh_estoque,
        p.sh_marca,
        p.p4m_nome,
        p.p4m_preco,
        p.p4m_produto_id,
        p.p4m_nome_formatado,
        p.p4m_sku,
        p.p4m_estoque,
        p.p4m_marca,
        CASE 
            WHEN e.pm4_token_exp < UNIX_TIMESTAMP() THEN 'TOKEN_EXPIRADO'
            WHEN p.p4m_produto_id IS NULL OR p.p4m_sku IS NULL THEN 'CADASTRAR'
            WHEN (
                (e.sinc_nome = 1 AND (IFNULL(p.sh_nome, '') <> IFNULL(p.p4m_nome, '') OR IFNULL(p.sh_nome_formatado, '') <> IFNULL(p.p4m_nome_formatado, '')))
                OR (e.sinc_preco = 1 AND IFNULL(p.sh_preco, 0) <> IFNULL(p.p4m_preco, 0))
                OR (e.sinc_estoque = 1 AND IFNULL(p.sh_estoque, 0) <> IFNULL(p.p4m_estoque, 0))
                OR (e.sinc_fabricante = 1 AND IFNULL(p.sh_marca, '') <> IFNULL(p.p4m_marca, ''))
            ) THEN 'ATUALIZAR'
            ELSE 'SINCRONIZADA'
        END AS status_envio,
        IF(e.sinc_nome = 1, (IFNULL(p.sh_nome, '') <> IFNULL(p.p4m_nome, '') OR IFNULL(p.sh_nome_formatado, '') <> IFNULL(p.p4m_nome_formatado, '')), 0) AS dif_nome,
        IF(e.sinc_preco = 1, IFNULL(p.sh_preco, 0) <> IFNULL(p.p4m_preco, 0), 0) AS dif_preco,
        IF(e.sinc_estoque = 1, IFNULL(p.sh_estoque, 0) <> IFNULL(p.p4m_estoque, 0), 0) AS dif_estoque,
        IF(e.sinc_fabricante = 1, IFNULL(p.sh_marca, '') <> IFNULL(p.p4m_marca, ''), 0) AS dif_marca,
        p.prox_sinc_p4m,
        FROM_UNIXTIME(p.prox_sinc_p4m) AS prox_sinc_p4m_datetime
    FROM produtos p
    JOIN empresas e ON p.empresa_id = e.uuid
    WHERE e.ativo = 1 
    AND e.deleted_at IS NULL 
    AND e.pm4_token_exp >= UNIX_TIMESTAMP()
    AND (UNIX_TIMESTAMP(NOW()) <= (e.prox_sinc_p4m_token - 6 * 60)) -- 6m antes
    AND e.pm4_token IS NOT NULL
    ORDER BY p.prox_sinc_p4m ASC;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_p4m_produtos_sinc}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_p4m_produtos_sinc};`);
}
