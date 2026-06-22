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

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

---

### Installation

```bash
git clone https://github.com/Ahmedmecatronique/ia-bot_ahmed.git
cd ia-bot_ahmed
bun install
bun dev
```

> [!TIP]
> Make sure [Bun](https://bun.sh) is installed first.

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Agents

ia-bot-ahmed includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

### Contributing

If you're interested in contributing to ia-bot-ahmed, please open an issue or pull request on [GitHub](https://github.com/Ahmedmecatronique/ia-bot_ahmed).

---

**GitHub** [@Ahmedmecatronique](https://github.com/Ahmedmecatronique)
