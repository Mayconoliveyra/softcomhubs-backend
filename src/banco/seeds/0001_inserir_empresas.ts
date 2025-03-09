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
        cnpj_cpf: '11122233344',
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
