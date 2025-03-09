import schedule from 'node-schedule';

import { ETableNames } from '../eTableNames';
import { Knex } from '../knex';

const sincronizarProdutos = () => {
  // Executa a cada 1 hora. (1:00, 2:00, 3:00...)
  schedule.scheduleJob('* * * * * *', async () => {
    /*   console.log('TESTE'); */
  });
};

const sincronizarTokens = () => {
  // Executa a cada 1 hora. (1:00, 2:00, 3:00...)
  schedule.scheduleJob('* * * * * *', async () => {
    /* console.log('TESTE');

    const empresas = await Knex(ETableNames.vw_empresas_tokens);

    console.log(empresas); */
  });
};

export const SelfHost = { sincronizarProdutos, sincronizarTokens };
