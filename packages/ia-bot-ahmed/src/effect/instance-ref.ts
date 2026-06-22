import { Context } from "effect"
import type { InstanceContext } from "@/project/instance-context"
import type { WorkspaceV2 } from "@ia-bot-ahmed/core/workspace"

export const InstanceRef = Context.Reference<InstanceContext | undefined>("~IaBotAhmed/InstanceRef", {
  defaultValue: () => undefined,
})

export const WorkspaceRef = Context.Reference<WorkspaceV2.ID | undefined>("~IaBotAhmed/WorkspaceRef", {
  defaultValue: () => undefined,
})
