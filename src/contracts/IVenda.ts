import IProduto from './IProduto'
import IEndereco from './IEndereco'
import ICliente from './ICliente'

export default interface IVenda {
  id: number
  data: Date
  produtos: IProduto[]
  enderecoEntrega: IEndereco
  cliente: ICliente
}
