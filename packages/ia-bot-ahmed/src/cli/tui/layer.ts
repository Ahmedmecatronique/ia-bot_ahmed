import { run as runTui, type TuiInput } from "@ia-bot-ahmed/tui"
import { Global } from "@ia-bot-ahmed/core/global"
import { Effect } from "effect"

export function run(input: TuiInput) {
  return runTui(input).pipe(Effect.provide(Global.defaultLayer))
}
