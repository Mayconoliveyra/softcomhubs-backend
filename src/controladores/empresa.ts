import axios from 'axios';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import qs from 'qs';
import * as yup from 'yup';

import { Middlewares } from '../middlewares';

import { Repositorios } from '../repositorios';

import { Servicos } from '../servicos';

import { Util } from '../util';

interface IAuthRequest {
  uuid: string;
  sh_qrcode_url: string;
}

const limparDadosSelfHost = async (uuid: string) => {
  await Repositorios.Empresa.atualizarDadosSelfHost(uuid, {
    sh_qrcode_url: null,
    sh_url: null,
    sh_client_id: null,
    sh_client_secret: null,
    sh_token: null,
    sh_token_exp: null,
  });
};

const autenticacaoSelfHostValidacao = Middlewares.validacao((getSchema) => ({
  body: getSchema<IAuthRequest>(
    yup.object().shape({
      uuid: yup.string().required().trim().length(36).test('is-uuid-v4', 'uuid inválido', Util.UuidV4.uuidV4Test),
      sh_qrcode_url: yup.string().url().required().trim(),
    }),
  ),
}));

const autenticacaoSelfHost = async (req: Request<{}, {}, IAuthRequest>, res: Response) => {
  const { uuid, sh_qrcode_url } = req.body;

  try {
    const empresa = await Repositorios.Empresa.buscarPorId(uuid);

    if (!empresa) {
      return res.status(StatusCodes.NOT_FOUND).json({ errors: { default: 'Empresa não encontrada.' } });
    }

    if (!empresa.ativo) {
      await limparDadosSelfHost(uuid);
      return res.status(StatusCodes.UNAUTHORIZED).json({ errors: { default: 'Empresa inativa.' } });
    }

    const parsedUrl = Servicos.SelfHost.extrairDominioEClientId(sh_qrcode_url);
    if (!parsedUrl) {
      await limparDadosSelfHost(uuid);
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: { default: 'URL inválida.' } });
    }

    const clientSecret = await Servicos.SelfHost.obterClientSecret(parsedUrl.dominio, parsedUrl.clientId);
    if (!clientSecret) {
      await limparDadosSelfHost(uuid);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro ao obter client secret.' } });
    }

    const tokenData = await Servicos.SelfHost.obterToken(parsedUrl.dominio, parsedUrl.clientId, clientSecret);
    if (!tokenData) {
      await limparDadosSelfHost(uuid);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro ao obter token.' } });
    }

    await Repositorios.Empresa.atualizarDadosSelfHost(uuid, {
      sh_qrcode_url,
      sh_url: parsedUrl.dominio,
      sh_client_id: parsedUrl.clientId,
      sh_client_secret: clientSecret,
      sh_token: tokenData.sh_token,
      sh_token_exp: tokenData.sh_token_exp,
    });

    return res.status(StatusCodes.OK).send();
  } catch (error) {
    await limparDadosSelfHost(uuid);

    Util.Log.error('Falha na autenticação da empresa', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro interno no servidor.' } });
  }
};

export const Empresa = { autenticacaoSelfHostValidacao, autenticacaoSelfHost };
