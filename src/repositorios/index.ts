import * as empresa from './empresa';
import * as plug4market from './plug4market';
import * as usuario from './usuario';

export const Repositorios = { ...usuario, ...empresa, ...plug4market };
