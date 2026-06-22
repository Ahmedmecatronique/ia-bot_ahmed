import { Context } from "effect"
import type { InstanceContext } from "@/project/instance-context"
import type { WorkspaceV2 } from "@ia-bot-ahmed/core/workspace"

export const InstanceRef = Context.Reference<InstanceContext | undefined>("~ia-bot-ahmed/InstanceRef", {
  defaultValue: () => undefined,
})

export const WorkspaceRef = Context.Reference<WorkspaceV2.ID | undefined>("~ia-bot-ahmed/WorkspaceRef", {
  defaultValue: () => undefined,
})
