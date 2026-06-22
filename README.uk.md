<p align="center">
  <a href="https://ia-bot-ahmed.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ia-bot-ahmed logo">
    </picture>
  </a>
</p>
<p align="center">AI-агент для програмування з відкритим кодом.</p>
<p align="center">
  <a href="https://ia-bot-ahmed.app/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/ia-bot-ahmed-ai"><img alt="npm" src="https://img.shields.io/npm/v/ia-bot-ahmed-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/ia-bot-ahmed/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/ia-bot-ahmed/publish.yml?style=flat-square&branch=dev" /></a>
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

[![ia-bot-ahmed Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://ia-bot-ahmed.app)

---

### Встановлення

```bash
# YOLO
curl -fsSL https://ia-bot-ahmed.app/install | bash

# Менеджери пакетів
npm i -g ia-bot-ahmed-ai@latest        # або bun/pnpm/yarn
scoop install ia-bot-ahmed             # Windows
choco install ia-bot-ahmed             # Windows
brew install anomalyco/tap/ia-bot-ahmed # macOS і Linux (рекомендовано, завжди актуально)
brew install ia-bot-ahmed              # macOS і Linux (офіційна формула Homebrew, оновлюється рідше)
sudo pacman -S ia-bot-ahmed            # Arch Linux (Stable)
paru -S ia-bot-ahmed-bin               # Arch Linux (Latest from AUR)
mise use -g ia-bot-ahmed               # Будь-яка ОС
nix run nixpkgs#ia-bot-ahmed           # або github:anomalyco/ia-bot-ahmed для найновішої dev-гілки
```

> [!TIP]
> Перед встановленням видаліть версії старші за 0.1.x.

### Десктопний застосунок (BETA)

ia-bot-ahmed також доступний як десктопний застосунок. Завантажуйте напряму зі [сторінки релізів](https://github.com/anomalyco/ia-bot-ahmed/releases) або [ia-bot-ahmed.app/download](https://ia-bot-ahmed.app/download).

| Платформа             | Завантаження                       |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `ia-bot-ahmed-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `ia-bot-ahmed-desktop-mac-x64.dmg`     |
| Windows               | `ia-bot-ahmed-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` або AppImage        |

```bash
# macOS (Homebrew)
brew install --cask ia-bot-ahmed-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/ia-bot-ahmed-desktop
```

#### Каталог встановлення

Скрипт встановлення дотримується такого порядку пріоритету для шляху встановлення:

1. `$IA_BOT_AHMED_INSTALL_DIR` - Користувацький каталог встановлення
2. `$XDG_BIN_DIR` - Шлях, сумісний зі специфікацією XDG Base Directory
3. `$HOME/bin` - Стандартний каталог користувацьких бінарників (якщо існує або його можна створити)
4. `$HOME/.ia-bot-ahmed/bin` - Резервний варіант за замовчуванням

```bash
# Приклади
IA_BOT_AHMED_INSTALL_DIR=/usr/local/bin curl -fsSL https://ia-bot-ahmed.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://ia-bot-ahmed.app/install | bash
```

### Агенти

ia-bot-ahmed містить два вбудовані агенти, між якими можна перемикатися клавішею `Tab`.

- **build** - Агент за замовчуванням із повним доступом для завдань розробки
- **plan** - Агент лише для читання для аналізу та дослідження коду
  - За замовчуванням забороняє редагування файлів
  - Запитує дозвіл перед запуском bash-команд
  - Ідеально підходить для дослідження незнайомих кодових баз або планування змін

Також доступний допоміжний агент **general** для складного пошуку та багатокрокових завдань.
Він використовується всередині системи й може бути викликаний у повідомленнях через `@general`.

Дізнайтеся більше про [agents](https://ia-bot-ahmed.app/docs/agents).

### Документація

Щоб дізнатися більше про налаштування ia-bot-ahmed, [**перейдіть до нашої документації**](https://ia-bot-ahmed.app/docs).

### Внесок

Якщо ви хочете зробити внесок в ia-bot-ahmed, будь ласка, прочитайте нашу [документацію для контриб'юторів](./CONTRIBUTING.md) перед надсиланням pull request.

### Проєкти на базі ia-bot-ahmed

Якщо ви працюєте над проєктом, пов'язаним з ia-bot-ahmed, і використовуєте "ia-bot-ahmed" у назві, наприклад "ia-bot-ahmed-dashboard" або "ia-bot-ahmed-mobile", додайте примітку до свого README.
Уточніть, що цей проєкт не створений командою ia-bot-ahmed і жодним чином не афілійований із нами.

---

**Приєднуйтеся до нашої спільноти** [Discord](https://discord.gg/ia-bot-ahmed) | [X.com](https://x.com/ia-bot-ahmed)
