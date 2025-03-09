import * as bcrypt from './bcrypt';
import * as jwt from './jwt';
import * as selfHost from './selfHost';

export const Servicos = { ...jwt, ...bcrypt, ...selfHost };
