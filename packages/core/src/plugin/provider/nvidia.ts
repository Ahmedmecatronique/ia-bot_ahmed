import { Effect } from "effect"
import { define } from "@ia-bot-ahmed/plugin/v2/effect"

export const NvidiaPlugin = define({
  id: "nvidia",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.catalog.transform(
      Effect.fn(function* (evt) {
        for (const item of evt.provider.list()) {
          if (item.provider.api.type !== "aisdk") continue
          if (item.provider.api.package !== "@ai-sdk/openai-compatible") continue
          if (item.provider.api.url !== "https://integrate.api.nvidia.com/v1") continue
          evt.provider.update(item.provider.id, (provider) => {
            provider.request.headers["HTTP-Referer"] = "https://IaBotAhmed.app/"
            provider.request.headers["X-Title"] = "ia-bot-ahmed"
            provider.request.headers["X-BILLING-INVOKE-ORIGIN"] ??= "ia-bot-ahmed"
          })
        }
      }),
    )
  }),
})
