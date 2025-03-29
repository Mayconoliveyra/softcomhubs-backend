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

  // Verificar se já existe solicitação pendente
  const pendente = await Repositorios.Plug4Market.verificarSolicitacaoPendente(empresaId, canalId);

  if (pendente) {
    return res.status(StatusCodes.CONFLICT).json({
      errors: {
        default: 'Já existe um registro integração pendente de finalização. Para continuar, cancele ou finalize o registro anterior.',
      },
    });
  }

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
    empresa_id: empresaId,
    canal_codigo: canalId,
    solicitado_em: Util.DataHora.obterDataAtual(),
    finalizado_em: null,
    prod_encontrados: 0,
    prod_sem_sku: 0,
    prod_com_sku: 0,
    prod_migrados: 0,
    erros: null,
    prox_sinc: 0,
    status: 'PROCESSANDO',
  };

  const idRegistro = await Repositorios.Plug4Market.criarSolicitacao(novoRegistro);

  if (!idRegistro) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: 'Erro ao salvar solicitação no banco de dados' },
    });
  }

  return res.status(StatusCodes.ACCEPTED).json(resultado.dados);
};

const consultarStatusMigracaoValidacao = Middlewares.validacao((getSchema) => ({
  params: getSchema<{ id: number }>(
    yup.object().shape({
      id: yup.number().required(),
    }),
  ),
}));

const consultarStatusMigracao = async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id as unknown as number;

  const registro = await Repositorios.Plug4Market.obterSolicitacaoPorId(id);

  if (!registro || registro.status !== 'PROCESSANDO') {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'Não existe nenhum registro pendente de consulta, atualize a página e tente novamente.',
      },
    });
  }

  const resultado = await Servicos.Plug4market.migracaoConsultarStatus(registro.empresa_id, '661d5e877510d9e548438f00', registro.canal_codigo);

  if (!resultado.sucesso) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: resultado.erro },
    });
  }

  // Atualiza prod_encontrados com o valor retornado
  const totalProdutos = resultado.dados?.quantity || 0;

  const atualizado = await Repositorios.Plug4Market.atualizarPorId(id, {
    prod_encontrados: totalProdutos,
  });

  if (!atualizado) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: 'Erro ao atualizar dados da solicitação.' },
    });
  }

  return res.status(StatusCodes.OK).json(resultado.dados);
};

export const Plug4Market = {
  solicitarMigracaoValidacao,
  solicitarMigracao,
  consultarStatusMigracaoValidacao,
  consultarStatusMigracao,
};
