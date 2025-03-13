import axios from 'axios';

import { Util } from '../util';

// !!! ATENÇÃO ESSE TIMEOUT ESTÁ RELACIONADO A TAREFA "selfHost.sincronizarTokens". !!!
const TIMEOUT_SELF_HOST = 120000; // 2 minutos

const renovarToken = async (refreshToken: string) => {
  try {
    const data = JSON.stringify({ refreshToken });
    const response = await axios.post('https://api.plug4market.com.br/auth/refresh', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: TIMEOUT_SELF_HOST,
    });

    if (!response.data?.accessToken || !response.data?.refreshToken) {
      Util.Log.error('[P4M] | Token | Resposta inválida ao renovar token', response.data);
      return null;
    }

    const novoToken = response.data.accessToken as string;
    const novoRefreshToken = response.data.refreshToken as string;
    const tokenExpiracao = Util.DataHora.obterTimestampAtual() + 82800; // Expira em 23 horas (Padrão é 24hrs)
    return { novoToken, novoRefreshToken, tokenExpiracao };
  } catch (error) {
    Util.Log.error('[P4M] | Token | Erro ao renovar token', error);
    return null;
  }
};

export const Plug4market = {
  renovarToken,
};
