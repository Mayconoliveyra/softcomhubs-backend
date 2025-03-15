import { IEmpresa } from '../../models/empresa';
import { IPedido } from '../../models/pedido';
import { IProduto } from '../../models/produto';
import { IUsuario } from '../../models/usuario';

declare module 'knex/types/tables' {
  interface Tables {
    empresas: IEmpresa;
    usuarios: IUsuario;
    produtos: IProduto;
    pedidos: IPedido;
  }
}
