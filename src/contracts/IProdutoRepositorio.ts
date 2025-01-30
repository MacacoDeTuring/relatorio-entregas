import IRepositorio from './IRepositorio'
import IProduto from './IProduto'
import IVenda from './IVenda'

export default interface IProdutoRepositorio extends IRepositorio<IProduto> {
  findByVenda(venda: IVenda): IProduto[]
}
