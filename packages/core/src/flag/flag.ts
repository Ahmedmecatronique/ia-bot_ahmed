import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["IA_BOT_AHMED_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["IA_BOT_AHMED_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("IA_BOT_AHMED_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  IA_BOT_AHMED_AUTO_HEAP_SNAPSHOT: truthy("IA_BOT_AHMED_AUTO_HEAP_SNAPSHOT"),
  IA_BOT_AHMED_GIT_BASH_PATH: process.env["IA_BOT_AHMED_GIT_BASH_PATH"],
  IA_BOT_AHMED_CONFIG: process.env["IA_BOT_AHMED_CONFIG"],
  IA_BOT_AHMED_CONFIG_CONTENT: process.env["IA_BOT_AHMED_CONFIG_CONTENT"],
  IA_BOT_AHMED_DISABLE_AUTOUPDATE: truthy("IA_BOT_AHMED_DISABLE_AUTOUPDATE"),
  IA_BOT_AHMED_ALWAYS_NOTIFY_UPDATE: truthy("IA_BOT_AHMED_ALWAYS_NOTIFY_UPDATE"),
  IA_BOT_AHMED_DISABLE_PRUNE: truthy("IA_BOT_AHMED_DISABLE_PRUNE"),
  IA_BOT_AHMED_DISABLE_TERMINAL_TITLE: truthy("IA_BOT_AHMED_DISABLE_TERMINAL_TITLE"),
  IA_BOT_AHMED_SHOW_TTFD: truthy("IA_BOT_AHMED_SHOW_TTFD"),
  IA_BOT_AHMED_DISABLE_AUTOCOMPACT: truthy("IA_BOT_AHMED_DISABLE_AUTOCOMPACT"),
  IA_BOT_AHMED_DISABLE_MODELS_FETCH: truthy("IA_BOT_AHMED_DISABLE_MODELS_FETCH"),
  IA_BOT_AHMED_DISABLE_MOUSE: truthy("IA_BOT_AHMED_DISABLE_MOUSE"),
  IA_BOT_AHMED_FAKE_VCS: process.env["IA_BOT_AHMED_FAKE_VCS"],
  IA_BOT_AHMED_SERVER_PASSWORD: process.env["IA_BOT_AHMED_SERVER_PASSWORD"],
  IA_BOT_AHMED_SERVER_USERNAME: process.env["IA_BOT_AHMED_SERVER_USERNAME"],
  IA_BOT_AHMED_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("IA_BOT_AHMED_DISABLE_FFF"),

  // Experimental
  IA_BOT_AHMED_EXPERIMENTAL_FILEWATCHER: Config.boolean("IA_BOT_AHMED_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  IA_BOT_AHMED_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("IA_BOT_AHMED_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  IA_BOT_AHMED_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("IA_BOT_AHMED_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  IA_BOT_AHMED_MODELS_URL: process.env["IA_BOT_AHMED_MODELS_URL"],
  IA_BOT_AHMED_MODELS_PATH: process.env["IA_BOT_AHMED_MODELS_PATH"],
  IA_BOT_AHMED_DB: process.env["IA_BOT_AHMED_DB"],

  IA_BOT_AHMED_WORKSPACE_ID: process.env["IA_BOT_AHMED_WORKSPACE_ID"],
  IA_BOT_AHMED_EXPERIMENTAL_WORKSPACES: enabledByExperimental("IA_BOT_AHMED_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get IA_BOT_AHMED_DISABLE_PROJECT_CONFIG() {
    return truthy("IA_BOT_AHMED_DISABLE_PROJECT_CONFIG")
  },
  get IA_BOT_AHMED_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("IA_BOT_AHMED_EXPERIMENTAL_REFERENCES")
  },
  get IA_BOT_AHMED_TUI_CONFIG() {
    return process.env["IA_BOT_AHMED_TUI_CONFIG"]
  },
  get IA_BOT_AHMED_CONFIG_DIR() {
    return process.env["IA_BOT_AHMED_CONFIG_DIR"]
  },
  get IA_BOT_AHMED_PURE() {
    return truthy("IA_BOT_AHMED_PURE")
  },
  get IA_BOT_AHMED_PERMISSION() {
    return process.env["IA_BOT_AHMED_PERMISSION"]
  },
  get IA_BOT_AHMED_PLUGIN_META_FILE() {
    return process.env["IA_BOT_AHMED_PLUGIN_META_FILE"]
  },
  get IA_BOT_AHMED_CLIENT() {
    return process.env["IA_BOT_AHMED_CLIENT"] ?? "cli"
  },
}
