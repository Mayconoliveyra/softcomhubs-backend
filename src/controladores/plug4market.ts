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
};

const solicitarMigracaoValidacao = Middlewares.validacao((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      empresaId: yup.number().required(),
      canalId: yup.number().required(),
    }),
  ),
}));
const migracaoValidarValidacao = Middlewares.validacao((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      empresaId: yup.number().required(),
      canalId: yup.number().required(),
    }),
  ),
}));
const migracaoMigrarValidacao = Middlewares.validacao((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      empresaId: yup.number().required(),
      canalId: yup.number().required(),
    }),
  ),
}));

const solicitarMigracao = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const { empresaId, canalId } = req.body;

  const empresa = await Repositorios.Empresa.buscarPorId(empresaId);

  if (!empresa) {
    return res.status(StatusCodes.NOT_FOUND).json({ errors: { default: 'Empresa não encontrada.' } });
  }

  if (!empresa.ativo) {
    return res.status(StatusCodes.NOT_FOUND).json({ errors: { default: 'Empresa inativa.' } });
  }

  if (!empresa.pm4_loja_id) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'ID da Loja no Marketplace (app.plug4market) não foi informado.' } });
  }

  // Verificar se já existe solicitação em processamento
  const pendente = await Repositorios.Plug4Market.verificarSolicitacaoProcessamento(empresaId, canalId);

  if (pendente) {
    return res.status(StatusCodes.CONFLICT).json({
      errors: {
        default: 'Já existe um registro integração pendente de finalização. Para continuar, cancele ou finalize o registro anterior.',
      },
    });
  }

  const resultado = await Servicos.Plug4market.migracaoSolicitar(empresaId, empresa.pm4_loja_id, canalId);

  if (!resultado.sucesso) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: resultado.erro },
    });
  }

  const consultarStatus = await Servicos.Plug4market.migracaoConsultarStatus(empresaId, empresa.pm4_loja_id, canalId);
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

  return res.status(StatusCodes.NO_CONTENT).send();
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
        default: 'Registro não está pendente de consulta, atualize a página e tente novamente.',
      },
    });
  }

  if (!registro.pm4_loja_id) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'ID da Loja no Marketplace (app.plug4market) não foi informado.' } });
  }

  const resultado = await Servicos.Plug4market.migracaoConsultarStatus(registro.empresa_id, registro.pm4_loja_id, registro.canal_codigo);

  if (!resultado.sucesso || !resultado.dados) {
    await Repositorios.Plug4Market.atualizarPorId(id, {
      status: 'ERRO',
      erros: resultado.erro,
    });

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: resultado.erro },
    });
  }

  // Atualiza prod_encontrados com o valor retornado
  const totalProdutos = resultado.dados.quantity || 0;
  const statusProcessamentoAtual = resultado.dados.status;

  if (statusProcessamentoAtual === 'PROCESSING') {
    const atualizado = await Repositorios.Plug4Market.atualizarPorId(id, {
      prod_encontrados: totalProdutos,
    });
    if (!atualizado) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: { default: 'Erro ao atualizar dados da solicitação.' },
      });
    }
  } else if (statusProcessamentoAtual === 'COMPLETE') {
    const dadosMigrados = await Servicos.Plug4market.migracaoBaixarPlanilha(registro.empresa_id, id, registro.pm4_loja_id, registro.canal_codigo);

    const inserido = await Repositorios.Plug4Market.inserirProdutosMigracao(dadosMigrados.dados || []);
    if (!inserido) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: { default: 'Erro ao salvar dados da planilha.' },
      });
    }

    const atualizado = await Repositorios.Plug4Market.atualizarPorId(id, {
      status: 'EDITANDO',
      prod_encontrados: totalProdutos,
    });
    if (!atualizado) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: { default: 'Erro ao atualizar dados da solicitação.' },
      });
    }
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};

const migracaoValidar = async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id as unknown as number;

  const registro = await Repositorios.Plug4Market.obterSolicitacaoPorId(id);

  if (!registro || registro.status !== 'EDITANDO') {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'Registro não está pendente de validação, atualize a página e tente novamente.',
      },
    });
  }

  if (!registro.pm4_loja_id) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'ID da Loja no Marketplace (app.plug4market) não foi informado.' } });
  }
  const dadosMigracao = [
    {
      SKU: '27',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287902',
      PROCESSAR: 'VERDADEIRO',
    },
    {
      SKU: '26',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287899',
      PROCESSAR: 'VERDADEIRO',
    },
    {
      SKU: '28',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287900',
      PROCESSAR: 'VERDADEIRO',
    },
    {
      SKU: '25',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287901',
      PROCESSAR: 'VERDADEIRO',
    },
  ];

  const resultado = await Servicos.Plug4market.migracaoValidar(registro.empresa_id, registro.pm4_loja_id, registro.canal_codigo, dadosMigracao);

  if (!resultado.sucesso || !resultado.dados) {
    await Repositorios.Plug4Market.atualizarPorId(id, {
      status: 'ERRO',
      erros: resultado.erro,
    });

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: resultado.erro },
    });
  }

  const resultadoStatus = await Servicos.Plug4market.migracaoConsultarStatus(registro.empresa_id, registro.pm4_loja_id, registro.canal_codigo);

  console.log('resultadoStatus', resultadoStatus);

  return res.status(StatusCodes.NO_CONTENT).send();
};

const migracaoMigrar = async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id as unknown as number;

  const registro = await Repositorios.Plug4Market.obterSolicitacaoPorId(id);

  if (!registro || registro.status !== 'EDITANDO') {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'Registro não está pendente de validação, atualize a página e tente novamente.',
      },
    });
  }

  if (!registro.pm4_loja_id) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'ID da Loja no Marketplace (app.plug4market) não foi informado.' } });
  }
  const dadosMigracao = [
    {
      SKU: '27',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287902',
      PROCESSAR: 'VERDADEIRO',
    },
    {
      SKU: '26',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287899',
      PROCESSAR: 'VERDADEIRO',
    },
    {
      SKU: '28',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287900',
      PROCESSAR: 'VERDADEIRO',
    },
    {
      SKU: '25',
      'ID PRODUTO PAI (CANAL)': '22993865539',
      'ID VARIAÇÃO (CANAL)': '199173287901',
      PROCESSAR: 'VERDADEIRO',
    },
  ];

  const resultado = await Servicos.Plug4market.migracaoMigrar(registro.empresa_id, registro.pm4_loja_id, registro.canal_codigo, dadosMigracao);

  if (!resultado.sucesso || !resultado.dados) {
    await Repositorios.Plug4Market.atualizarPorId(id, {
      status: 'ERRO',
      erros: resultado.erro,
    });

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: resultado.erro },
    });
  }

  const resultadoStatus = await Servicos.Plug4market.migracaoConsultarStatus(registro.empresa_id, registro.pm4_loja_id, registro.canal_codigo);

  console.log('resultadoStatus', resultadoStatus);

  return res.status(StatusCodes.NO_CONTENT).send();
};

export const Plug4Market = {
  solicitarMigracaoValidacao,
  solicitarMigracao,
  consultarStatusMigracaoValidacao,
  consultarStatusMigracao,
  migracaoValidarValidacao,
  migracaoValidar,
  migracaoMigrarValidacao,
  migracaoMigrar,
};
