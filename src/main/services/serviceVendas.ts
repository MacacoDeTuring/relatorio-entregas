import prisma from '../../database/prisma'
import JSONbig from 'json-bigint'

export async function getVendas(): Promise<string> {
  const vendas = await prisma.vendas.findMany({
    where: {
      CodFil: 2
    }
  })

  return JSONbig.stringify(vendas)
}
