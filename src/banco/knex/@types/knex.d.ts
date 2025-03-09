import { IEmpresa } from '../../models/empresa';
import { IProduto } from '../../models/produto';
import { IUsuario } from '../../models/usuario';
import { IVwEmpresaToken } from '../../models/vwEmpresaToken';

declare module 'knex/types/tables' {
  interface Tables {
    empresas: IEmpresa;
    usuarios: IUsuario;
    produtos: IProduto;
    vw_empresas_tokens: IVwEmpresaToken;
  }
}
