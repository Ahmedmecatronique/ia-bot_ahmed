export * from "./client.js"
export * from "./server.js"

import { createIaBotAhmedClient } from "./client.js"
import { createIaBotAhmedServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export * as data from "./data.js"

export async function createIaBotAhmed(options?: ServerOptions) {
  const server = await createIaBotAhmedServer({
    ...options,
  })

  const client = createIaBotAhmedClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
