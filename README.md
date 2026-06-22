<p align="center">
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed">
    <img src="https://img.shields.io/badge/ia--bot--ahmed-v1.17.9-8A2BE2?style=for-the-badge" alt="ia-bot-ahmed">
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed"><img alt="GitHub" src="https://img.shields.io/github/stars/Ahmedmecatronique/ia-bot_ahmed?style=flat-square&logo=github" /></a>
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed/releases"><img alt="GitHub release" src="https://img.shields.io/github/v/release/Ahmedmecatronique/ia-bot_ahmed?style=flat-square" /></a>
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed/actions"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/Ahmedmecatronique/ia-bot_ahmed/publish.yml?style=flat-square&branch=main" /></a>
</p>



---

ia-bot-ahmed is an AI-powered coding agent that runs in your terminal. It can understand your codebase, execute tasks, make edits, run commands, and answer questions about your project — all through natural language conversation.

Built with a focus on developer experience, ia-bot-ahmed supports multiple AI models, works with your existing tools (Git, GitHub, your editor), and integrates deeply into your workflow.

### Installation

```bash
# Clone and install
git clone https://github.com/Ahmedmecatronique/ia-bot_ahmed.git
cd ia-bot_ahmed
bun install
bun dev
```

> [!TIP]
> Make sure [Bun](https://bun.sh) is installed first.
>
> ```powershell
> powershell -c "irm bun.sh/install.ps1 | iex"
> ```

### Desktop App (BETA)

ia-bot-ahmed is also available as a desktop application. Download directly from the [releases page](https://github.com/Ahmedmecatronique/ia-bot_ahmed/releases).

| Platform              | Download                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `ia-bot-ahmed-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `ia-bot-ahmed-desktop-mac-x64.dmg`     |
| Windows               | `ia-bot-ahmed-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, or `.AppImage`     |

### Agents

ia-bot-ahmed includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

### Features

- **Multi-model**: Works with Anthropic, OpenAI, Google, Mistral, Groq, and more
- **Terminal UI**: Beautiful interactive interface with syntax highlighting
- **Tool use**: Read/write files, run commands, search code, manage git
- **Session management**: Persistent conversations with project context
- **Git integration**: Create commits, manage branches, review PRs
- **Plugin system**: Extend with custom tools and providers

### Documentation

For more info on how to configure ia-bot-ahmed, check the [docs](https://github.com/Ahmedmecatronique/ia-bot_ahmed).

### Contributing

If you're interested in contributing to ia-bot-ahmed, please open an issue or pull request on [GitHub](https://github.com/Ahmedmecatronique/ia-bot_ahmed).

---

Built by [@Ahmedmecatronique](https://github.com/Ahmedmecatronique)
