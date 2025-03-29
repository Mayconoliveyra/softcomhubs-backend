import { Knex } from 'knex';

import { ETableNames } from '../eTableNames';
const { NODE_ENV } = process.env;

export const seed = async (knex: Knex) => {
  if (NODE_ENV === 'production') return;

  const result = await knex(ETableNames.empresas).first();
  if (result) return;

  await knex(ETableNames.empresas)
    .insert([
      {
        uuid: '983fbdb3-17a7-43d5-9287-9cd1a019296f',
        registro: '1',
        razao: 'EMPRESA TESTE RAZAO',
        fantasia: 'EMPRESA TESTE FANTASIA',
        cnpj_cpf: '1',
        sinc_nome: true,
        sinc_preco: true,
        sinc_preco_custo: true,
        sinc_preco_tipo: 'PADRAO',
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,

        pm4_id: '65294214bae0ed00018b96e6', //ID da Loja no Marketplace (app.plug4market)

        sh_usuario_id: 1,
        sh_empresa_id: 1,
        sh_forma_pagamento: 'ESPÉCIE',
      },
      {
        uuid: '02a1d240-287b-4d92-aeb9-606b7ad7c98d',
        registro: '2',
        razao: 'CAZIMI',
        fantasia: 'CAZIMI',
        cnpj_cpf: '2',
        sinc_nome: true,
        sinc_preco: true,
        sinc_preco_custo: true,
        sinc_preco_tipo: 'PADRAO',
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,

        sh_usuario_id: 1,
        sh_empresa_id: 1,
        sh_forma_pagamento: 'ESPÉCIE',
      },
      {
        uuid: '9972d3b0-26ae-4abf-a6f6-3a22c14e30aa',
        registro: '3',
        razao: 'NOBRE RAINHA',
        fantasia: 'NOBRE RAINHA',
        cnpj_cpf: '3',
        sinc_nome: true,
        sinc_preco: true,
        sinc_preco_custo: true,
        sinc_preco_tipo: 'PADRAO',
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,

        sh_usuario_id: 1,
        sh_empresa_id: 1,
        sh_forma_pagamento: 'ESPÉCIE',
      },
      {
        uuid: '573fd949-ec72-4f57-858f-0f448a6f4afd',
        registro: '59248',
        razao: 'ELETROSUL',
        fantasia: 'ELETROSUL LTDA ME',
        cnpj_cpf: '28037094000192',
        sinc_nome: false,
        sinc_preco: true,
        sinc_preco_custo: true,
        sinc_preco_tipo: 'PADRAO',
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,

        sh_qrcode_url:
          'http://59248-eletrosul-28037094000192.softcomtec.cloud/device/add?client_id=b8464a6f-1591-4fc6-a3cb-9ac248516009&empresa_name=MATRIZ&empresa_cnpj=28037094000192&device_name=SOFTCOM_HUBS',
        sh_usuario_id: 1,
        sh_empresa_id: 1,
        sh_forma_pagamento: 'ESPÉCIE',
      },
    ])
    .then(() => {
      console.log(`# Inserido dados na tabela ${ETableNames.empresas}`);
    });
};
