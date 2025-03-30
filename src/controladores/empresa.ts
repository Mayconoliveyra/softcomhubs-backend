import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { Middlewares } from '../middlewares';

import { Repositorios } from '../repositorios';

import { Servicos } from '../servicos';

import { Util } from '../util';

interface IAuthRequest {
  id: number;
  sh_qrcode_url: string;
}

const limparDadosSelfHost = async (id: number) => {
  await Repositorios.Empresa.atualizarDadosSelfHost(id, {
    sh_qrcode_url: null,
    sh_url: null,
    sh_client_id: null,
    sh_client_secret: null,
    sh_token: null,
    sh_token_exp: 0,
    sh_empresa_id: null,
    sh_usuario_id: null,
  });
};

const autenticacaoSelfHostValidacao = Middlewares.validacao((getSchema) => ({
  body: getSchema<IAuthRequest>(
    yup.object().shape({
      id: yup.number().required(),
      sh_qrcode_url: yup.string().url().required().trim(),
    }),
  ),
}));

const autenticacaoSelfHost = async (req: Request<{}, {}, IAuthRequest>, res: Response) => {
  const { id, sh_qrcode_url } = req.body;

  try {
    const empresa = await Repositorios.Empresa.buscarPorId(id);

    if (!empresa) {
      return res.status(StatusCodes.NOT_FOUND).json({ errors: { default: 'Empresa não encontrada.' } });
    }

    if (!empresa.ativo) {
      await limparDadosSelfHost(id);
      return res.status(StatusCodes.UNAUTHORIZED).json({ errors: { default: 'Empresa inativa.' } });
    }

    const parsedUrl = Servicos.SelfHost.extrairDominioEClientId(sh_qrcode_url);
    if (!parsedUrl.sucesso || !parsedUrl.dominio || !parsedUrl.clientId) {
      await limparDadosSelfHost(id);
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: { default: parsedUrl.erro } });
    }

    const resultObterClienteSecret = await Servicos.SelfHost.obterClientSecret(parsedUrl.dominio, parsedUrl.clientId);
    if (!resultObterClienteSecret.sucesso || !resultObterClienteSecret.client_secret) {
      await limparDadosSelfHost(id);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: resultObterClienteSecret.erro } });
    }

    const resultObterToken = await Servicos.SelfHost.obterToken(parsedUrl.dominio, parsedUrl.clientId, resultObterClienteSecret.client_secret);
    if (!resultObterToken.sucesso) {
      await limparDadosSelfHost(id);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: resultObterToken.erro } });
    }

    const resultObterVendedor = await Servicos.SelfHost.consultarVendedorMarketplace(parsedUrl.dominio, resultObterToken.sh_token);
    if (!resultObterVendedor.sucesso) {
      await limparDadosSelfHost(id);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: resultObterVendedor.erro } });
    }

    await Repositorios.Empresa.atualizarDadosSelfHost(id, {
      sh_qrcode_url,
      sh_url: parsedUrl.dominio,
      sh_client_id: parsedUrl.clientId,
      sh_client_secret: resultObterClienteSecret.client_secret,
      sh_token: resultObterToken.sh_token,
      sh_token_exp: resultObterToken.sh_token_exp,
      sh_empresa_id: resultObterClienteSecret.empresa_id,
      sh_usuario_id: resultObterVendedor.usuario_id,
    });

    return res.status(StatusCodes.OK).send();
  } catch (error) {
    await limparDadosSelfHost(id);

    Util.Log.error('Falha na autenticação da empresa', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro interno no servidor.' } });
  }
};

export const Empresa = { autenticacaoSelfHostValidacao, autenticacaoSelfHost };
