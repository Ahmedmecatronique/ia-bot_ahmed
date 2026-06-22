import { AgentV2 } from "@ia-bot-ahmed/core/agent"
import { Catalog } from "@ia-bot-ahmed/core/catalog"
import { CommandV2 } from "@ia-bot-ahmed/core/command"
import { Credential } from "@ia-bot-ahmed/core/credential"
import { EventV2 } from "@ia-bot-ahmed/core/event"
import { FileSystem } from "@ia-bot-ahmed/core/filesystem"
import { FSUtil } from "@ia-bot-ahmed/core/fs-util"
import { Global } from "@ia-bot-ahmed/core/global"
import { Npm } from "@ia-bot-ahmed/core/npm"
import { PluginV2 } from "@ia-bot-ahmed/core/plugin"
import { Reference } from "@ia-bot-ahmed/core/reference"
import { RepositoryCache } from "@ia-bot-ahmed/core/repository-cache"
import { Ripgrep } from "@ia-bot-ahmed/core/ripgrep"
import { SkillV2 } from "@ia-bot-ahmed/core/skill"
import { SkillDiscovery } from "@ia-bot-ahmed/core/skill/discovery"
import { Effect, Layer } from "effect"
import { tempLocationLayer } from "../fixture/location"

export const PluginTestLayer = Layer.mergeAll(
  AgentV2.locationLayer,
  CommandV2.locationLayer,
  Catalog.locationLayer,
  FileSystem.locationLayer,
  PluginV2.locationLayer,
  Reference.locationLayer,
  SkillV2.locationLayer,
).pipe(
  Layer.provideMerge(
    Layer.mergeAll(
      Credential.defaultLayer,
      EventV2.defaultLayer,
      FSUtil.defaultLayer,
      Global.defaultLayer,
      Layer.succeed(
        Npm.Service,
        Npm.Service.of({
          add: () => Effect.succeed({ directory: "", entrypoint: undefined }),
          install: () => Effect.void,
          which: () => Effect.succeed(undefined),
        }),
      ),
      RepositoryCache.defaultLayer,
      SkillDiscovery.defaultLayer,
      Ripgrep.defaultLayer,
      tempLocationLayer,
    ),
  ),
)
