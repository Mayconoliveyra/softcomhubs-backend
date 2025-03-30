import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE VIEW vw_sh_pedidos_sinc AS
    SELECT 
      v.registro,
      v.sh_url,
      v.sh_empresa_id,
      v.sh_usuario_id,
      v.sh_forma_pagamento,
      v.sh_token,
      v.token_valido,
      p.id,
      p.empresa_id,
      p.id_p4m,
      p.id_pedido_canal_venda,
      p.canal_venda_nome,
      p.cobranca_cidade,
      p.cobranca_pais,
      p.cobranca_bairro,
      p.cobranca_documento,
      p.cobranca_email,
      p.cobranca_nome,
      p.cobranca_telefone,
      p.cobranca_estado,
      p.cobranca_rua,
      p.cobranca_complemento,
      p.cobranca_numero,
      p.cobranca_pagador_imposto,
      p.cobranca_cep,
      p.cobranca_ibge,
      p.entrega_cidade,
      p.entrega_pais,
      p.entrega_bairro,
      p.entrega_telefone,
      p.entrega_nome_destinatario,
      p.entrega_estado,
      p.entrega_rua,
      p.entrega_complemento,
      p.entrega_numero,
      p.entrega_cep,
      p.entrega_ibge,
      p.estimativa_entrega,
      p.prazo_maximo_envio,
      p.criado_canal_venda,
      p.observacao,
      p.custo_envio,
      p.juros,
      p.comissao_total,
      p.valor_total,
      p.sh_id_pedido,
      p.sh_data_sinc,
      p.created_at,
      p.updated_at,
      p.ultima_sinc_erros,
      p.prox_sinc,
      FROM_UNIXTIME(p.prox_sinc) AS prox_sinc_datetime
    FROM pedidos p
    INNER JOIN vw_sh_empresas_sinc_config v 
        ON p.empresa_id = v.id
    WHERE p.sh_id_pedido IS NULL
    AND p.sh_data_sinc IS NULL;
  `);

  Util.Log.info(`# Criado view ${ETableNames.vw_sh_pedidos_sinc}`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP VIEW IF EXISTS ${ETableNames.vw_sh_pedidos_sinc};`);
}
