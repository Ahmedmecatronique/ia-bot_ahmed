import type { WslDistroProbe, WslIaBotAhmedCheck, WslServerItem } from "../../preload/types"

export function wslServerIdToRestart(servers: WslServerItem[], distro: string) {
  return servers.find((item) => item.config.distro === distro)?.config.id
}

export function clearWslDistroState(
  distroProbes: Record<string, WslDistroProbe>,
  IaBotAhmedChecks: Record<string, WslIaBotAhmedCheck>,
  distro: string,
) {
  const nextDistroProbes = { ...distroProbes }
  const nextIaBotAhmedChecks = { ...IaBotAhmedChecks }
  delete nextDistroProbes[distro]
  delete nextIaBotAhmedChecks[distro]
  return { distroProbes: nextDistroProbes, IaBotAhmedChecks: nextIaBotAhmedChecks }
}

export function wslTerminalArgs(distro?: string | null) {
  return ["/c", "start", "", "wsl", ...(distro ? ["-d", distro] : [])]
}

export function requireWslIpcString(name: string, value: unknown) {
  if (typeof value === "string" && value.length > 0) return value
  throw new Error(`Invalid ${name}`)
}
