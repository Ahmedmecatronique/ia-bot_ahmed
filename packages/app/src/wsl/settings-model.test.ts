import { describe, expect, test } from "bun:test"
import { enterWslia-bot-ahmedStep, wslia-bot-ahmedAction, wslRuntimeRetryable } from "./settings-model"

describe("WSL server settings presentation", () => {
  test("retries only settled unsuccessful runtimes", () => {
    expect(wslRuntimeRetryable({ kind: "starting" })).toBe(false)
    expect(wslRuntimeRetryable({ kind: "ready", url: "http://127.0.0.1:4096", username: null, password: null })).toBe(
      false,
    )
    expect(wslRuntimeRetryable({ kind: "failed", message: "boom" })).toBe(true)
    expect(wslRuntimeRetryable({ kind: "stopped" })).toBe(true)
  })

  test("offers install and update only when ia-bot-ahmed needs attention", () => {
    expect(wslia-bot-ahmedAction(undefined)).toBeUndefined()
    expect(
      wslia-bot-ahmedAction({
        distro: "Debian",
        resolvedPath: null,
        version: null,
        expectedVersion: "1.2.3",
        matchesDesktop: null,
        error: null,
      }),
    ).toBe("Install ia-bot-ahmed")
    expect(
      wslia-bot-ahmedAction({
        distro: "Debian",
        resolvedPath: "/usr/local/bin/ia-bot-ahmed",
        version: "1.2.2",
        expectedVersion: "1.2.3",
        matchesDesktop: false,
        error: null,
      }),
    ).toBe("Update ia-bot-ahmed")
    expect(
      wslia-bot-ahmedAction({
        distro: "Debian",
        resolvedPath: "/usr/local/bin/ia-bot-ahmed",
        version: "1.2.3",
        expectedVersion: "1.2.3",
        matchesDesktop: true,
        error: null,
      }),
    ).toBeUndefined()
  })

  test("probes the selected distro before entering the ia-bot-ahmed step", async () => {
    const calls: string[] = []
    await enterWslia-bot-ahmedStep(
      "Debian",
      async (distro) => calls.push(distro),
      (step) => calls.push(step),
    )
    expect(calls).toEqual(["Debian", "ia-bot-ahmed"])
  })
})
