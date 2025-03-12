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
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,
      },
      {
        uuid: '02a1d240-287b-4d92-aeb9-606b7ad7c98d',
        registro: '2',
        razao: 'CAZIMI',
        fantasia: 'CAZIMI',
        cnpj_cpf: '2',
        sinc_nome: true,
        sinc_preco: true,
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,
      },
      {
        uuid: '9972d3b0-26ae-4abf-a6f6-3a22c14e30aa',
        registro: '3',
        razao: 'NOBRE RAINHA',
        fantasia: 'NOBRE RAINHA',
        cnpj_cpf: '3',
        sinc_nome: true,
        sinc_preco: true,
        sinc_estoque: true,
        sinc_fabricante: true,
        ativo: true,
      },
    ])
    .then(() => {
      console.log(`# Inserido dados na tabela ${ETableNames.empresas}`);
    });
};
