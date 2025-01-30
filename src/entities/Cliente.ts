import ICliente from '../contracts/ICliente'

export default class Cliente implements ICliente {
  constructor(
    public id: number,
    public nome: string
  ) {}

  toJSON(): string {
    return JSON.stringify(this)
  }

  static fromJSON(json: string): Cliente {
    const obj = JSON.parse(json)
    return new Cliente(obj.id, obj.nome)
  }
}
