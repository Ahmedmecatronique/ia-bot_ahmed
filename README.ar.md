<p align="center">
  <a href="https://ia-bot-ahmed.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="شعار ia-bot-ahmed">
    </picture>
  </a>
</p>
<p align="center">وكيل برمجة بالذكاء الاصطناعي مفتوح المصدر.</p>
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

### التثبيت

```bash
# YOLO
curl -fsSL https://ia-bot-ahmed.app/install | bash

# مديري الحزم
npm i -g ia-bot-ahmed-ai@latest        # او bun/pnpm/yarn
scoop install ia-bot-ahmed             # Windows
choco install ia-bot-ahmed             # Windows
brew install anomalyco/tap/ia-bot-ahmed # macOS و Linux (موصى به، دائما محدث)
brew install ia-bot-ahmed              # macOS و Linux (صيغة brew الرسمية، تحديث اقل)
sudo pacman -S ia-bot-ahmed            # Arch Linux (Stable)
paru -S ia-bot-ahmed-bin               # Arch Linux (Latest from AUR)
mise use -g ia-bot-ahmed               # اي نظام
nix run nixpkgs#ia-bot-ahmed           # او github:anomalyco/ia-bot-ahmed لاحدث فرع dev
```

> [!TIP]
> احذف الاصدارات الاقدم من 0.1.x قبل التثبيت.

### تطبيق سطح المكتب (BETA)

يتوفر ia-bot-ahmed ايضا كتطبيق سطح مكتب. قم بالتنزيل مباشرة من [صفحة الاصدارات](https://github.com/anomalyco/ia-bot-ahmed/releases) او من [ia-bot-ahmed.app/download](https://ia-bot-ahmed.app/download).

| المنصة                | التنزيل                            |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `ia-bot-ahmed-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `ia-bot-ahmed-desktop-mac-x64.dmg`     |
| Windows               | `ia-bot-ahmed-desktop-windows-x64.exe` |
| Linux                 | `.deb` او `.rpm` او AppImage       |

```bash
# macOS (Homebrew)
brew install --cask ia-bot-ahmed-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/ia-bot-ahmed-desktop
```

#### مجلد التثبيت

يحترم سكربت التثبيت ترتيب الاولوية التالي لمسار التثبيت:

1. `$IA_BOT_AHMED_INSTALL_DIR` - مجلد تثبيت مخصص
2. `$XDG_BIN_DIR` - مسار متوافق مع مواصفات XDG Base Directory
3. `$HOME/bin` - مجلد الثنائيات القياسي للمستخدم (ان وجد او امكن انشاؤه)
4. `$HOME/.ia-bot-ahmed/bin` - المسار الافتراضي الاحتياطي

```bash
# امثلة
IA_BOT_AHMED_INSTALL_DIR=/usr/local/bin curl -fsSL https://ia-bot-ahmed.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://ia-bot-ahmed.app/install | bash
```

### Agents

يتضمن ia-bot-ahmed وكيليْن (Agents) مدمجين يمكنك التبديل بينهما باستخدام زر `Tab`.

- **build** - الافتراضي، وكيل بصلاحيات كاملة لاعمال التطوير
- **plan** - وكيل للقراءة فقط للتحليل واستكشاف الكود
  - يرفض تعديل الملفات افتراضيا
  - يطلب الاذن قبل تشغيل اوامر bash
  - مثالي لاستكشاف قواعد كود غير مألوفة او لتخطيط التغييرات

بالاضافة الى ذلك يوجد وكيل فرعي **general** للبحث المعقد والمهام متعددة الخطوات.
يستخدم داخليا ويمكن استدعاؤه بكتابة `@general` في الرسائل.

تعرف على المزيد حول [agents](https://ia-bot-ahmed.app/docs/agents).

### التوثيق

لمزيد من المعلومات حول كيفية ضبط ia-bot-ahmed، [**راجع التوثيق**](https://ia-bot-ahmed.app/docs).

### المساهمة

اذا كنت مهتما بالمساهمة في ia-bot-ahmed، يرجى قراءة [contributing docs](./CONTRIBUTING.md) قبل ارسال pull request.

### البناء فوق ia-bot-ahmed

اذا كنت تعمل على مشروع مرتبط بـ ia-bot-ahmed ويستخدم "ia-bot-ahmed" كجزء من اسمه (مثل "ia-bot-ahmed-dashboard" او "ia-bot-ahmed-mobile")، يرجى اضافة ملاحظة في README توضح انه ليس مبنيا بواسطة فريق ia-bot-ahmed ولا يرتبط بنا بأي شكل.

---

**انضم الى مجتمعنا** [Discord](https://discord.gg/ia-bot-ahmed) | [X.com](https://x.com/ia-bot-ahmed)
