export default interface IProduto {
  id: number
  descricao: string
  quantidade: number
  toJSON(): string
  fromJSON(json: string): IProduto
}
