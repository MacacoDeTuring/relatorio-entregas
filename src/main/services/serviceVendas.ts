import prisma from '../../database/prisma'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
BigInt.prototype.toJSON = function () {
  return this.toString()
}

export async function getVendas(): Promise<string> {
  const vendas = await prisma.vendas.findMany({
    where: {
      CodFil: 2
    }
  })

  return JSON.stringify(vendas)
}
