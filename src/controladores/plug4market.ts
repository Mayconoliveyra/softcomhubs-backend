import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IP4mMigracaoSolicitacao } from '../banco/models/p4mSolicitacao';

import { Middlewares } from '../middlewares';

import { Repositorios } from '../repositorios';

import { Servicos } from '../servicos';

import { Util } from '../util';

type IBodyProps = {
  empresaId: number;
  canalId: number;
  p4mEmpresaId: string;
};

const solicitarMigracaoValidacao = Middlewares.validacao((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      empresaId: yup.number().required(),
      canalId: yup.number().required(),
      p4mEmpresaId: yup.string().required().trim().length(24),
    }),
  ),
}));

const solicitarMigracao = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const { empresaId, canalId, p4mEmpresaId } = req.body;

  const resultado = await Servicos.Plug4market.migracaoSolicitar(empresaId, p4mEmpresaId, canalId);

  if (!resultado.sucesso) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: resultado.erro },
    });
  }

  const consultarStatus = await Servicos.Plug4market.migracaoConsultarStatus(empresaId, p4mEmpresaId, canalId);
  if (!consultarStatus.sucesso) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: consultarStatus.erro },
    });
  }

  const novoRegistro: Omit<IP4mMigracaoSolicitacao, 'id' | 'created_at'> = {
    empresa_id: empresaId.toString(),
    canal_codigo: canalId,
    solicitado_em: Util.DataHora.obterDataAtual(),
    finalizado_em: null,
    prod_encontrados: 0,
    prod_sem_sku: 0,
    prod_com_sku: 0,
    prod_migrados: 0,
    erros: null,
    prox_sinc: 0,
    status: 'CONSULTADO_PLANILHA',
  };

  const cancelou = await Repositorios.Plug4Market.cancelarSolicitacoesAtivas(empresaId, canalId);

  if (!cancelou) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: 'Erro ao cancelar solicitações anteriores' },
    });
  }

  const idRegistro = await Repositorios.Plug4Market.criarSolicitacao(novoRegistro);

  if (!idRegistro) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: 'Erro ao salvar solicitação no banco de dados' },
    });
  }

  return res.status(StatusCodes.ACCEPTED).json(resultado.dados);
};

export const Plug4Market = {
  solicitarMigracaoValidacao,
  solicitarMigracao,
};
