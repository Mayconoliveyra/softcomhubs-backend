import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Controladores } from '../controladores';

import { Middlewares } from '../middlewares';

const router = Router();

router.get('/teste-api', (req, res) => res.status(StatusCodes.OK).json('API TESTADA!.'));

router.post('/empresa/autenticacao-selfhost', Controladores.Empresa.autenticacaoSelfHostValidacao, Controladores.Empresa.autenticacaoSelfHost);

router.post('/p4m/migracao/solicitar', Controladores.Plug4Market.solicitarMigracaoValidacao, Controladores.Plug4Market.solicitarMigracao);

export { router };
