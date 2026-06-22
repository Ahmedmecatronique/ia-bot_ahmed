interface ImportMetaEnv {
  readonly IA_BOT_AHMED_CHANNEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "virtual:ia-bot-ahmed-server" {
  export namespace Server {
    export const listen: typeof import("../../../ia-bot-ahmed/dist/types/src/node").Server.listen
    export type Listener = import("../../../ia-bot-ahmed/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../ia-bot-ahmed/dist/types/src/node").Config.get
    export type Info = import("../../../ia-bot-ahmed/dist/types/src/node").Config.Info
  }
  export const bootstrap: typeof import("../../../ia-bot-ahmed/dist/types/src/node").bootstrap
}
