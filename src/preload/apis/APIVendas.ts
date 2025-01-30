import { ipcRenderer } from 'electron'
import { Vendas } from '@prisma/client'

interface APIInterface {
  getVendas: () => Promise<Vendas[]>
}

const APIVendas: APIInterface = {
  getVendas: async () => {
    const data: Vendas[] = await ipcRenderer.invoke('getVendas')
    return data
  }
}

export default APIVendas
