export default interface IEndereco {
  rua: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  cep: string
  toJSON(): string
}
