/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { define } from "@ia-bot-ahmed/plugin/v2/effect"
import { Effect } from "effect"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customizeia-bot-ahmedContent from "./skill/customize-ia-bot-ahmed.md" with { type: "text" }

export const Customizeia-bot-ahmedContent = customizeia-bot-ahmedContent

export const Plugin = define({
  id: "skill",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.skill.transform((draft) => {
      draft.source(
        new SkillV2.EmbeddedSource({
          type: "embedded",
          skill: new SkillV2.Info({
            name: "customize-ia-bot-ahmed",
            description:
              "Use ONLY when the user is editing or creating ia-bot-ahmed's own configuration: ia-bot-ahmed.json, ia-bot-ahmed.jsonc, files under .ia-bot-ahmed/, or files under ~/.config/ia-bot-ahmed/. Also use when creating or fixing ia-bot-ahmed agents, subagents, commands, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring ia-bot-ahmed itself.",
            location: AbsolutePath.make("/builtin/customize-ia-bot-ahmed.md"),
            content: Customizeia-bot-ahmedContent,
          }),
        }),
      )
    })
  }),
})
