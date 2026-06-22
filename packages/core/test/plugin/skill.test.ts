import { describe, expect } from "bun:test"
import { Effect, Layer } from "effect"
import { AgentV2 } from "@ia-bot-ahmed/core/agent"
import { FSUtil } from "@ia-bot-ahmed/core/fs-util"
import { SkillPlugin } from "@ia-bot-ahmed/core/plugin/skill"
import { SkillV2 } from "@ia-bot-ahmed/core/skill"
import { SkillDiscovery } from "@ia-bot-ahmed/core/skill/discovery"
import { testEffect } from "../lib/effect"
import { host } from "./host"

const it = testEffect(
  SkillV2.layer.pipe(
    Layer.provide(FSUtil.defaultLayer),
    Layer.provide(SkillDiscovery.defaultLayer),
    Layer.provideMerge(AgentV2.locationLayer),
  ),
)

describe("SkillPlugin.Plugin", () => {
  it.effect("registers the built-in customize-ia-bot-ahmed skill", () =>
    Effect.gen(function* () {
      const skill = yield* SkillV2.Service
      yield* SkillPlugin.Plugin.effect(host({ skill }))

      expect(yield* skill.list()).toContainEqual(
        expect.objectContaining({
          name: "customize-ia-bot-ahmed",
          description: expect.stringContaining("ia-bot-ahmed's own configuration"),
        }),
      )
    }),
  )
})
