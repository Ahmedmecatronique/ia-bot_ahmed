import type { ElectronAPI } from "../preload/types"

declare global {
  interface Window {
    api: ElectronAPI
    __IA_BOT_AHMED__?: {
      deepLinks?: string[]
    }
  }
}
