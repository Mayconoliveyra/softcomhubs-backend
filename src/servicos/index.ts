import * as bcrypt from './bcrypt';
import * as jwt from './jwt';
import * as plug4market from './plug4market';
import * as selfHost from './selfHost';

export const Servicos = { ...jwt, ...bcrypt, ...selfHost, ...plug4market };
