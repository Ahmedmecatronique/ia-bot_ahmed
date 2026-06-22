/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { define } from "@ia-bot-ahmed/plugin/v2/effect"
import { Effect } from "effect"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customizeIaBotAhmedContent from "./skill/customize-IaBotAhmed.md" with { type: "text" }

export const CustomizeIaBotAhmedContent = customizeIaBotAhmedContent

export const Plugin = define({
  id: "skill",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.skill.transform((draft) => {
      draft.source(
        new SkillV2.EmbeddedSource({
          type: "embedded",
          skill: new SkillV2.Info({
            name: "customize-IaBotAhmed",
            description:
              "Use ONLY when the user is editing or creating IaBotAhmed's own configuration: IaBotAhmed.json, IaBotAhmed.jsonc, files under .ia-bot-ahmed/, or files under ~/.config/ia-bot-ahmed/. Also use when creating or fixing IaBotAhmed agents, subagents, commands, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring IaBotAhmed itself.",
            location: AbsolutePath.make("/builtin/customize-IaBotAhmed.md"),
            content: CustomizeIaBotAhmedContent,
          }),
        }),
      )
    })
  }),
})
