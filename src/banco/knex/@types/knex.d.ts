import { ICanalVenda } from '../../models/canalVenda';
import { IEmpresa } from '../../models/empresa';
import { IItemPedido } from '../../models/ItemPedido';
import { IP4mCategoria } from '../../models/p4mCategoria';
import { IPedido } from '../../models/pedido';
import { IProduto } from '../../models/produto';
import { IUsuario } from '../../models/usuario';

declare module 'knex/types/tables' {
  interface Tables {
    empresas: IEmpresa;
    usuarios: IUsuario;
    produtos: IProduto;
    pedidos: IPedido;
    pedido_itens: IItemPedido;
    canais_vendas: ICanalVenda;
    p4m_categorias: IP4mCategoria;
  }
}
