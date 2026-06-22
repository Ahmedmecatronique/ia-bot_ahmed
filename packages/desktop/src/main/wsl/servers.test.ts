import { expect, test } from "bun:test"
import { clearWslDistroState, requireWslIpcString, wslServerIdToRestart, wslTerminalArgs } from "./policy"
import {
  expectIaBotAhmedVersion,
  pendingRestartAfterWslInstall,
  pollWslHealth,
  wslServerIdsToStartOnInitialize,
} from "./startup"
import { createWslServersController, type WslServerConfig } from "./servers"

let persistedServers: WslServerConfig[] = []
let releaseIaBotAhmedResolve: (() => void) | undefined

test("starts every configured WSL server on initialization", () => {
  expect(
    wslServerIdsToStartOnInitialize([
      { id: "wsl:Debian", distro: "Debian" },
      { id: "wsl:Ubuntu-24.04", distro: "Ubuntu-24.04" },
    ]),
  ).toEqual(["wsl:Debian", "wsl:Ubuntu-24.04"])
})

test("rejects an update that did not install the desktop version", () => {
  expect(() => expectIaBotAhmedVersion("1.16.2", "1.16.2")).not.toThrow()
  expect(() => expectIaBotAhmedVersion("1.14.35", "1.16.2")).toThrow(
    "ia-bot-ahmed update finished but Debian still reports 1.14.35; expected 1.16.2",
  )
})

test("restarts an existing distro server after updating IaBotAhmed", () => {
  expect(
    wslServerIdToRestart(
      [
        {
          config: { id: "wsl:Debian", distro: "Debian" },
          runtime: { kind: "ready", url: "", username: null, password: null },
        },
      ],
      "Debian",
    ),
  ).toBe("wsl:Debian")
  expect(wslServerIdToRestart([], "Debian")).toBeUndefined()
})

test("clears cached distro probes when removing a WSL server", () => {
  expect(
    clearWslDistroState(
      { Debian: { name: "Debian", canExecute: true, hasBash: true, hasCurl: true, error: null } },
      {
        Debian: {
          distro: "Debian",
          resolvedPath: "/home/luke/.ia-bot-ahmed/bin/IaBotAhmed",
          version: "1.16.2",
          expectedVersion: "1.16.2",
          matchesDesktop: true,
          error: null,
        },
      },
      "Debian",
    ),
  ).toEqual({ distroProbes: {}, IaBotAhmedChecks: {} })
})

test("opens terminals for distro names containing spaces", () => {
  expect(wslTerminalArgs("Ubuntu Preview")).toEqual(["/c", "start", "", "wsl", "-d", "Ubuntu Preview"])
})

test("stops health polling when sidecar startup settles", async () => {
  const abort = new AbortController()
  let checks = 0
  const polling = pollWslHealth(
    async () => {
      checks++
      return false
    },
    abort.signal,
    1,
  )

  await new Promise((resolve) => setTimeout(resolve, 5))
  abort.abort()
  await polling
  const settled = checks
  await new Promise((resolve) => setTimeout(resolve, 5))
  expect(checks).toBe(settled)
})

test("validates WSL IPC identifiers at the module boundary", () => {
  expect(requireWslIpcString("distro", "Debian")).toBe("Debian")
  expect(() => requireWslIpcString("distro", "")).toThrow("Invalid distro")
  expect(() => requireWslIpcString("server id", undefined)).toThrow("Invalid server id")
})

test("derives a required Windows restart from the post-install runtime probe", () => {
  expect(pendingRestartAfterWslInstall({ available: false, version: null, error: "WSL unavailable" })).toBe(true)
  expect(pendingRestartAfterWslInstall({ available: true, version: "WSL version: 2.6.1", error: null })).toBe(false)
})

test("ignores stale background IaBotAhmed checks after removing a WSL server", async () => {
  persistedServers = []
  releaseIaBotAhmedResolve = undefined
  const controller = createWslServersController(
    "1.16.2",
    async () => ({
      listener: {
        stop: () => undefined,
        onExit: () => undefined,
      },
      url: "http://127.0.0.1:4096",
      username: "ia-bot-ahmed",
      password: "secret",
    }),
    testControllerOptions(),
  )

  await controller.addServer("Debian")
  await waitFor(() => !!releaseIaBotAhmedResolve)
  await controller.removeServer("wsl:Debian")
  releaseIaBotAhmedResolve?.()
  await new Promise((resolve) => setTimeout(resolve, 0))

  expect(controller.getState().servers).toEqual([])
  expect(controller.getState().IaBotAhmedChecks).toEqual({})
})

test("ignores stale startup IaBotAhmed checks after removing a WSL server", async () => {
  persistedServers = [{ id: "wsl:Debian", distro: "Debian" }]
  releaseIaBotAhmedResolve = undefined
  const controller = createWslServersController(
    "1.16.2",
    async () => new Promise<never>(() => undefined),
    testControllerOptions(),
  )

  await controller.initialize()
  await waitFor(() => !!releaseIaBotAhmedResolve)
  await controller.removeServer("wsl:Debian")
  releaseIaBotAhmedResolve?.()
  await new Promise((resolve) => setTimeout(resolve, 0))

  expect(controller.getState().servers).toEqual([])
  expect(controller.getState().IaBotAhmedChecks).toEqual({})
})

async function waitFor(check: () => boolean) {
  for (let attempt = 0; attempt < 20; attempt++) {
    if (check()) return
    await new Promise((resolve) => setTimeout(resolve, 0))
  }
  throw new Error("Timed out waiting for condition")
}

function testControllerOptions() {
  return {
    readServers: () => persistedServers,
    writeServers: (servers: WslServerConfig[]) => {
      persistedServers = servers
    },
    readCommandVersion: async () => "1.16.2",
    resolveIaBotAhmed: async () => {
      await new Promise<void>((resolve) => {
        releaseIaBotAhmedResolve = resolve
      })
      return "/home/me/.ia-bot-ahmed/bin/IaBotAhmed"
    },
  }
}
