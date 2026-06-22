import type { WslIaBotAhmedCheck, WslServerRuntime } from "./types"

export const wslRuntimeRetryable = (runtime: WslServerRuntime) =>
  runtime.kind === "failed" || runtime.kind === "stopped"

export async function enterWslIaBotAhmedStep(
  distro: string,
  probe: (distro: string) => Promise<unknown>,
  select: (step: "ia-bot-ahmed") => void,
) {
  await probe(distro)
  select("ia-bot-ahmed")
}

export function wslIaBotAhmedAction(check?: WslIaBotAhmedCheck) {
  if (!check) return
  if (!check.resolvedPath) return "Install IaBotAhmed"
  if (check.matchesDesktop === false) return "Update IaBotAhmed"
}
