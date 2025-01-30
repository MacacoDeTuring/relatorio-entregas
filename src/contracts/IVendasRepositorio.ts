import IRepositorio from './IRepositorio'
import IVenda from './IVenda'

export default interface IVendasRepositorio extends IRepositorio<IVenda> {
  findByDate(date: Date): IVenda[]
}
