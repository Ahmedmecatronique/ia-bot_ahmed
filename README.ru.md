<p align="center">
  <a href="https://ia-bot-ahmed.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ia-bot-ahmed logo">
    </picture>
  </a>
</p>
<p align="center">Открытый AI-агент для программирования.</p>
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

### Установка

```bash
# YOLO
curl -fsSL https://ia-bot-ahmed.app/install | bash

# Менеджеры пакетов
npm i -g ia-bot-ahmed-ai@latest        # или bun/pnpm/yarn
scoop install ia-bot-ahmed             # Windows
choco install ia-bot-ahmed             # Windows
brew install anomalyco/tap/ia-bot-ahmed # macOS и Linux (рекомендуем, всегда актуально)
brew install ia-bot-ahmed              # macOS и Linux (официальная формула brew, обновляется реже)
sudo pacman -S ia-bot-ahmed            # Arch Linux (Stable)
paru -S ia-bot-ahmed-bin               # Arch Linux (Latest from AUR)
mise use -g ia-bot-ahmed               # любая ОС
nix run nixpkgs#ia-bot-ahmed           # или github:anomalyco/ia-bot-ahmed для самой свежей ветки dev
```

> [!TIP]
> Перед установкой удалите версии старше 0.1.x.

### Десктопное приложение (BETA)

ia-bot-ahmed также доступен как десктопное приложение. Скачайте его со [страницы релизов](https://github.com/anomalyco/ia-bot-ahmed/releases) или с [ia-bot-ahmed.app/download](https://ia-bot-ahmed.app/download).

| Платформа             | Загрузка                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `ia-bot-ahmed-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `ia-bot-ahmed-desktop-mac-x64.dmg`     |
| Windows               | `ia-bot-ahmed-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` или AppImage        |

```bash
# macOS (Homebrew)
brew install --cask ia-bot-ahmed-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/ia-bot-ahmed-desktop
```

#### Каталог установки

Скрипт установки выбирает путь установки в следующем порядке приоритета:

1. `$IA_BOT_AHMED_INSTALL_DIR` - Пользовательский каталог установки
2. `$XDG_BIN_DIR` - Путь, совместимый со спецификацией XDG Base Directory
3. `$HOME/bin` - Стандартный каталог пользовательских бинарников (если существует или можно создать)
4. `$HOME/.ia-bot-ahmed/bin` - Fallback по умолчанию

```bash
# Примеры
IA_BOT_AHMED_INSTALL_DIR=/usr/local/bin curl -fsSL https://ia-bot-ahmed.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://ia-bot-ahmed.app/install | bash
```

### Agents

В ia-bot-ahmed есть два встроенных агента, между которыми можно переключаться клавишей `Tab`.

- **build** - По умолчанию, агент с полным доступом для разработки
- **plan** - Агент только для чтения для анализа и изучения кода
  - По умолчанию запрещает редактирование файлов
  - Запрашивает разрешение перед выполнением bash-команд
  - Идеален для изучения незнакомых кодовых баз или планирования изменений

Также включен сабагент **general** для сложных поисков и многошаговых задач.
Он используется внутренне и может быть вызван в сообщениях через `@general`.

Подробнее об [agents](https://ia-bot-ahmed.app/docs/agents).

### Документация

Больше информации о том, как настроить ia-bot-ahmed: [**наши docs**](https://ia-bot-ahmed.app/docs).

### Вклад

Если вы хотите внести вклад в ia-bot-ahmed, прочитайте [contributing docs](./CONTRIBUTING.md) перед тем, как отправлять pull request.

### Разработка на базе ia-bot-ahmed

Если вы делаете проект, связанный с ia-bot-ahmed, и используете "ia-bot-ahmed" как часть имени (например, "ia-bot-ahmed-dashboard" или "ia-bot-ahmed-mobile"), добавьте примечание в README, чтобы уточнить, что проект не создан командой ia-bot-ahmed и не аффилирован с нами.

---

**Присоединяйтесь к нашему сообществу** [Discord](https://discord.gg/ia-bot-ahmed) | [X.com](https://x.com/ia-bot-ahmed)
