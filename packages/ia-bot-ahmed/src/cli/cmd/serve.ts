import { Effect } from "effect"
import { effectCmd } from "../effect-cmd"
import { withNetworkOptions, resolveNetworkOptions } from "../network"
import { Flag } from "@ia-bot-ahmed/core/flag/flag"

export const ServeCommand = effectCmd({
  command: "serve",
  builder: (yargs) => withNetworkOptions(yargs),
  describe: "starts a headless ia-bot-ahmed server",
  // Server loads instances per-request via x-ia-bot-ahmed-directory header — no
  // need for an ambient project InstanceContext at startup.
  instance: false,
  handler: Effect.fn("Cli.serve")(function* (args) {
    const { Server } = yield* Effect.promise(() => import("../../server/server"))
    if (!Flag.IA_BOT_AHMED_SERVER_PASSWORD) {
      console.log("Warning: IA_BOT_AHMED_SERVER_PASSWORD is not set; server is unsecured.")
    }
    const opts = yield* resolveNetworkOptions(args)
    const server = yield* Effect.promise(() => Server.listen(opts))
    console.log(`ia-bot-ahmed server listening on http://${server.hostname}:${server.port}`)

    yield* Effect.never
  }),
})
