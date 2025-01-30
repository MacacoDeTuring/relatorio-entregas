import IVenda from '../contracts/IVenda'
import IProduto from '../contracts/IProduto'
import IEndereco from '../contracts/IEndereco'
import ICliente from '../contracts/ICliente'
import Produto from './Produto'
import Endereco from './Endereco'
import Cliente from './Cliente'

export default class Venda implements IVenda {
  constructor(
    public id: number,
    public data: Date,
    public produtos: IProduto[],
    public enderecoEntrega: IEndereco,
    public cliente: ICliente
  ) {}

  toJSON(): string {
    return JSON.stringify({
      id: this.id,
      data: this.data,
      produtos: this.produtos.map((p) => p.toJSON()),
      enderecoEntrega: this.enderecoEntrega.toJSON(),
      cliente: this.cliente.toJSON()
    })
  }

  fromJSON(json: string): Venda {
    const obj = JSON.parse(json)
    return new Venda(
      obj.id,
      obj.data,
      obj.produtos.map((p: string) => Produto.fromJSON(p)),
      Endereco.fromJSON(obj.enderecoEntrega),
      Cliente.fromJSON(obj.cliente)
    )
  }
}
