import IProduto from '../contracts/IProduto'

export default class Produto implements IProduto {
  constructor(
    public id: number,
    public descricao: string,
    public quantidade: number
  ) {}

  toJSON(): string {
    return JSON.stringify(this)
  }

  static fromJSON(json: string): Produto {
    const obj = JSON.parse(json)
    return new Produto(obj.id, obj.descricao, obj.quantidade)
  }
}
