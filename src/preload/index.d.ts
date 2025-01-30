import { ElectronAPI } from '@electron-toolkit/preload'
import APIVendas from './apis/APIVendas'

declare global {
  interface Window {
    electron: ElectronAPI
    api: APIVendas
  }
}
