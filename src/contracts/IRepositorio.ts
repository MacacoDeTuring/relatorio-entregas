export default interface IRepositorio<T> {
  create(item: T): void
  update(item: T): void
  delete(id: number): void
  findById(id: number): T | null
  findAll(): T[]
}
