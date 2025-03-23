import * as empresa from './empresa';
import * as plug4market from './plug4market';
import * as usuario from './usuario';

export const Controladores = { ...usuario, ...empresa, ...plug4market };
