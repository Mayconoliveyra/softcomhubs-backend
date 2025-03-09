import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Controladores } from '../controladores';

import { Middlewares } from '../middlewares';

const router = Router();

router.get('/teste-api', (req, res) => res.status(StatusCodes.OK).json('API TESTADA!.'));

router.post('/usuario', /* Middlewares.autenticado, */ Controladores.Usuario.cadastrarValidacao, Controladores.Usuario.cadastrar);

router.post('/entrar', Controladores.Usuario.loginValidacao, Controladores.Usuario.login);

export { router };
