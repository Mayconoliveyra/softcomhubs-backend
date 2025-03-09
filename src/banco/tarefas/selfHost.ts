import schedule from 'node-schedule';

const consultarProdutos = () => {
  // Executa a cada 1 hora. (1:00, 2:00, 3:00...)
  schedule.scheduleJob('* * * * * *', async () => {
    console.log('TESTE');
  });
};

export const SelfHost = { consultarProdutos };
