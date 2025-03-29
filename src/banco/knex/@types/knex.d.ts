import { IEmpresa } from '../../models/empresa';
import { IItemPedido } from '../../models/ItemPedido';
import { IP4mCanalVenda } from '../../models/p4mCanalVenda';
import { IP4mMigracaoProduto } from '../../models/p4mMigracaoProduto';
import { IP4mMigracaoSolicitacao } from '../../models/p4mSolicitacao';
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
    p4m_canais_vendas: IP4mCanalVenda;
    p4m_migracao_produtos: IP4mMigracaoProduto;
    p4m_migracao_solicitacao: IP4mMigracaoSolicitacao;
  }
}
