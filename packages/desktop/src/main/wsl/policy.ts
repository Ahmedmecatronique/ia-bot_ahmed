import type { WslDistroProbe, Wslia-bot-ahmedCheck, WslServerItem } from "../../preload/types"

export function wslServerIdToRestart(servers: WslServerItem[], distro: string) {
  return servers.find((item) => item.config.distro === distro)?.config.id
}

export function clearWslDistroState(
  distroProbes: Record<string, WslDistroProbe>,
  ia-bot-ahmedChecks: Record<string, Wslia-bot-ahmedCheck>,
  distro: string,
) {
  const nextDistroProbes = { ...distroProbes }
  const nextia-bot-ahmedChecks = { ...ia-bot-ahmedChecks }
  delete nextDistroProbes[distro]
  delete nextia-bot-ahmedChecks[distro]
  return { distroProbes: nextDistroProbes, ia-bot-ahmedChecks: nextia-bot-ahmedChecks }
}

export function wslTerminalArgs(distro?: string | null) {
  return ["/c", "start", "", "wsl", ...(distro ? ["-d", distro] : [])]
}

export function requireWslIpcString(name: string, value: unknown) {
  if (typeof value === "string" && value.length > 0) return value
  throw new Error(`Invalid ${name}`)
}
