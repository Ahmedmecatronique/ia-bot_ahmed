# ia-bot-ahmed — Résumé du projet

## Description
ia-bot-ahmed est un assistant de codage IA (fork d'opencode) rebrandé, compilé et publié sur npm. Il fonctionne sur **Windows x64** et **Raspberry Pi (Linux ARM64)**.

---

## Structure des packages npm

| Package | Version | Plateforme | Description |
|---------|---------|-----------|-------------|
| `ia-bot-ahmed` | `1.0.3` | toutes | Package principal avec script de lancement |
| `ia-bot-ahmed-windows-x64` | `1.0.0` | Windows x64 | Binaire compilé (166 MB) |
| `ia-bot-ahmed-linux-arm64` | `1.0.0` | Linux ARM64 | Binaire cross-compilé (137 MB) |

Le package principal `ia-bot-ahmed` détecte automatiquement la plateforme et télécharge le binaire approprié via `optionalDependencies`.

---

## Installation

### 1. Via npx (aucune installation)
```powershell
npx ia-bot-ahmed
```

### 2. Installation globale
```powershell
npm install -g ia-bot-ahmed
ia-bot-ahmed
```

### 3. One-command install (clone + configure + lance)

**Windows :**
```powershell
powershell -c "iex (irm https://raw.githubusercontent.com/Ahmedmecatronique/ia-bot_ahmed/main/install.ps1)"
```

**Linux / Mac / Raspberry Pi :**
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Ahmedmecatronique/ia-bot_ahmed/main/install.sh)"
```

Les scripts installent bun, clonent le repo, installent les dépendances et lancent le bot.

---

## Ce qui a été fait

### Rebranding
- Renommage complet d'`opencode` → `ia-bot-ahmed`
- 500+ fichiers renommés (identifiants TypeScript, dossiers, fichiers de config)
- 21 traductions README supprimées (anglais seulement)

### TUI (interface terminal)
- Logo remplacé par des caractères `█` full-block avec fond coloré
- Texte `IA-BOT-AHMED` visible en ASCII art

### Build
- Binaire Windows x64 compilé avec `bun build --compile`
- Binaire Linux ARM64 cross-compilé depuis Windows
- Web UI embarquée dans le binaire

### Publication npm
- Token npm avec `Bypass 2FA` pour publication sans code OTP
- 3 packages publiés (main + 2 plateformes)

---

## Commandes disponibles

```
ia-bot-ahmed [project]       → Démarrer le TUI
ia-bot-ahmed --help           → Aide complète
ia-bot-ahmed run <message>    → Exécuter avec un message
ia-bot-ahmed providers        → Gérer les providers AI
ia-bot-ahmed upgrade          → Mettre à jour
ia-bot-ahmed uninstall        → Désinstaller
ia-bot-ahmed serve            → Serveur headless
ia-bot-ahmed web              → Interface web
ia-bot-ahmed attach <url>     → Attacher à un serveur distant
```

---

## GitHub

- **URL** : https://github.com/Ahmedmecatronique/ia-bot_ahmed
- **Branche** : `main`

## Auteur

**ahmed_ghfiri** — ahmedetude21@gmail.com
