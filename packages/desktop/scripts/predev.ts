import { $ } from "bun"

await $`bun ./scripts/copy-icons.ts ${process.env.IA_BOT_AHMED_CHANNEL ?? "dev"}`

await $`cd ../ia-bot-ahmed && bun script/build-node.ts`
