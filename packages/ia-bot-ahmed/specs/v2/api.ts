// @ts-nocheck

import { ia-bot-ahmed } from "@ia-bot-ahmed/core"
import { ReadTool } from "@ia-bot-ahmed/core/tools"

const ia-bot-ahmed = ia-bot-ahmed.make({})

ia-bot-ahmed.tool.add(ReadTool)

ia-bot-ahmed.tool.add({
  name: "bash",
  schema: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run.",
      },
    },
    required: ["command"],
  },
  execute(input, ctx) {},
})

ia-bot-ahmed.auth.add({
  provider: "openai",
  type: "api",
  value: process.env.OPENAI_API_KEY,
})

ia-bot-ahmed.agent.add({
  name: "build",
  permissions: [],
  model: {
    id: "gpt-5-5",
    provider: "openai",
    variant: "xhigh",
  },
})

const sessionID = await ia-bot-ahmed.session.create({
  agent: "build",
})

ia-bot-ahmed.subscribe((event) => {
  console.log(event)
})

await ia-bot-ahmed.session.prompt({
  sessionID,
  text: "hey what is up",
})

await ia-bot-ahmed.session.prompt({
  sessionID,
  text: "what is up with this",
  files: [
    {
      mime: "image/png",
      uri: "data:image/png;base64,xxxx",
    },
  ],
})

await ia-bot-ahmed.session.wait()

console.log(await ia-bot-ahmed.session.messages(sessionID))
