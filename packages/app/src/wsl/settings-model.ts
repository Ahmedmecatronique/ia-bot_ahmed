import type { Wslia-bot-ahmedCheck, WslServerRuntime } from "./types"

export const wslRuntimeRetryable = (runtime: WslServerRuntime) =>
  runtime.kind === "failed" || runtime.kind === "stopped"

export async function enterWslia-bot-ahmedStep(
  distro: string,
  probe: (distro: string) => Promise<unknown>,
  select: (step: "ia-bot-ahmed") => void,
) {
  await probe(distro)
  select("ia-bot-ahmed")
}

export function wslia-bot-ahmedAction(check?: Wslia-bot-ahmedCheck) {
  if (!check) return
  if (!check.resolvedPath) return "Install ia-bot-ahmed"
  if (check.matchesDesktop === false) return "Update ia-bot-ahmed"
}
