import { Flag } from "@ia-bot-ahmed/core/flag/flag"
import { Effect } from "effect"
import path from "path"

const preserveExerciseGlobalRoot = !!process.env.IA_BOT_AHMED_HTTPAPI_EXERCISE_GLOBAL
export const exerciseGlobalRoot =
  process.env.IA_BOT_AHMED_HTTPAPI_EXERCISE_GLOBAL ??
  path.join(process.env.TMPDIR ?? "/tmp", `ia-bot-ahmed-httpapi-global-${process.pid}`)
process.env.XDG_DATA_HOME = path.join(exerciseGlobalRoot, "data")
process.env.XDG_CONFIG_HOME = path.join(exerciseGlobalRoot, "config")
process.env.XDG_STATE_HOME = path.join(exerciseGlobalRoot, "state")
process.env.XDG_CACHE_HOME = path.join(exerciseGlobalRoot, "cache")
process.env.IA_BOT_AHMED_DISABLE_SHARE = "true"
export const exerciseConfigDirectory = path.join(exerciseGlobalRoot, "config", "ia-bot-ahmed")
export const exerciseDataDirectory = path.join(exerciseGlobalRoot, "data", "ia-bot-ahmed")

const preserveExerciseDatabase = !!process.env.IA_BOT_AHMED_HTTPAPI_EXERCISE_DB
export const exerciseDatabasePath =
  process.env.IA_BOT_AHMED_HTTPAPI_EXERCISE_DB ??
  path.join(process.env.TMPDIR ?? "/tmp", `ia-bot-ahmed-httpapi-exercise-${process.pid}.db`)
process.env.IA_BOT_AHMED_DB = exerciseDatabasePath
Flag.IA_BOT_AHMED_DB = exerciseDatabasePath

export const original = {
  IA_BOT_AHMED_SERVER_PASSWORD: Flag.IA_BOT_AHMED_SERVER_PASSWORD,
  IA_BOT_AHMED_SERVER_USERNAME: Flag.IA_BOT_AHMED_SERVER_USERNAME,
}

export const cleanupExercisePaths = Effect.promise(async () => {
  const fs = await import("fs/promises")
  if (!preserveExerciseDatabase) {
    await Promise.all(
      [exerciseDatabasePath, `${exerciseDatabasePath}-wal`, `${exerciseDatabasePath}-shm`].map((file) =>
        fs.rm(file, { force: true }).catch(() => undefined),
      ),
    )
  }
  if (!preserveExerciseGlobalRoot)
    await fs.rm(exerciseGlobalRoot, { recursive: true, force: true }).catch(() => undefined)
})
