import { afterEach, describe, expect, test } from "bun:test"
import { Option, Redacted } from "effect"
import { Flag } from "@ia-bot-ahmed/core/flag/flag"
import { ServerAuth } from "../../src/server/auth"

const original = {
  IA_BOT_AHMED_SERVER_PASSWORD: Flag.IA_BOT_AHMED_SERVER_PASSWORD,
  IA_BOT_AHMED_SERVER_USERNAME: Flag.IA_BOT_AHMED_SERVER_USERNAME,
}

afterEach(() => {
  Flag.IA_BOT_AHMED_SERVER_PASSWORD = original.IA_BOT_AHMED_SERVER_PASSWORD
  Flag.IA_BOT_AHMED_SERVER_USERNAME = original.IA_BOT_AHMED_SERVER_USERNAME
})

describe("ServerAuth", () => {
  test("does not emit auth headers without a password", () => {
    Flag.IA_BOT_AHMED_SERVER_PASSWORD = undefined
    Flag.IA_BOT_AHMED_SERVER_USERNAME = "alice"

    expect(ServerAuth.header()).toBeUndefined()
    expect(ServerAuth.headers()).toBeUndefined()
  })

  test("defaults to the IaBotAhmed username", () => {
    Flag.IA_BOT_AHMED_SERVER_PASSWORD = "secret"
    Flag.IA_BOT_AHMED_SERVER_USERNAME = undefined

    expect(ServerAuth.headers()).toEqual({
      Authorization: `Basic ${Buffer.from("ia-bot-ahmed:secret").toString("base64")}`,
    })
  })

  test("uses the configured username", () => {
    Flag.IA_BOT_AHMED_SERVER_PASSWORD = "secret"
    Flag.IA_BOT_AHMED_SERVER_USERNAME = "alice"

    expect(ServerAuth.headers()).toEqual({
      Authorization: `Basic ${Buffer.from("alice:secret").toString("base64")}`,
    })
  })

  test("prefers explicit credentials", () => {
    Flag.IA_BOT_AHMED_SERVER_PASSWORD = "secret"
    Flag.IA_BOT_AHMED_SERVER_USERNAME = "alice"

    expect(ServerAuth.headers({ password: "cli-secret", username: "bob" })).toEqual({
      Authorization: `Basic ${Buffer.from("bob:cli-secret").toString("base64")}`,
    })
  })

  test("validates decoded credentials against effect config", () => {
    const config = { password: Option.some("secret"), username: "alice" }

    expect(ServerAuth.required(config)).toBe(true)
    expect(ServerAuth.authorized({ username: "alice", password: Redacted.make("secret") }, config)).toBe(true)
    expect(ServerAuth.authorized({ username: "ia-bot-ahmed", password: Redacted.make("secret") }, config)).toBe(false)
  })
})
