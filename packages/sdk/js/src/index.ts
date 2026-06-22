export * from "./client.js"
export * from "./server.js"

import { createia-bot-ahmedClient } from "./client.js"
import { createia-bot-ahmedServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createia-bot-ahmed(options?: ServerOptions) {
  const server = await createia-bot-ahmedServer({
    ...options,
  })

  const client = createia-bot-ahmedClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
