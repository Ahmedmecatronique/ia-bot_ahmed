import { Effect } from "effect"
import { define } from "@ia-bot-ahmed/plugin/v2/effect"
import { ProviderV2 } from "../../provider"

export const ia-bot-ahmedPlugin = define({
  id: "ia-bot-ahmed",
  effect: Effect.fn(function* (ctx) {
    let hasKey = false
    yield* ctx.catalog.transform(
      Effect.fn(function* (evt) {
        const item = evt.provider.get(ProviderV2.ID.ia-bot-ahmed)
        if (!item) return
        const integration = yield* ctx.integration.get(item.provider.id)
        hasKey = Boolean(
          process.env.IA_BOT_AHMED_API_KEY || integration?.connections.length || item.provider.request.body.apiKey,
        )
        evt.provider.update(item.provider.id, (provider) => {
          if (!hasKey) provider.request.body.apiKey = "public"
        })
        if (hasKey) return
        for (const model of item.models.values()) {
          if (!model.cost.some((cost) => cost.input > 0)) continue
          evt.model.update(item.provider.id, model.id, (draft) => {
            draft.enabled = false
          })
        }
      }),
    )
  }),
})
