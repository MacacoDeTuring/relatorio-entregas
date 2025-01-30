import IEndereco from '../contracts/IEndereco'

export default class Endereco implements IEndereco {
  constructor(
    public rua: string,
    public numero: string,
    public bairro: string,
    public cidade: string,
    public estado: string,
    public cep: string
  ) {}

  toJSON(): string {
    return JSON.stringify(this)
  }

  static fromJSON(json: string): Endereco {
    const obj = JSON.parse(json)
    return new Endereco(obj.rua, obj.numero, obj.bairro, obj.cidade, obj.estado, obj.cep)
  }
}
