<p align="center">
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed">
    <img src="https://img.shields.io/badge/ia--bot--ahmed-1.0.3-8A2BE2?style=for-the-badge" alt="ia-bot-ahmed">
  </a>
</p>
<p align="center">AI assistant de codage dans votre terminal.</p>
<p align="center">
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed"><img alt="GitHub" src="https://img.shields.io/github/stars/Ahmedmecatronique/ia-bot_ahmed?style=flat-square&logo=github" /></a>
  <a href="https://www.npmjs.com/package/ia-bot-ahmed"><img alt="npm" src="https://img.shields.io/npm/v/ia-bot-ahmed?style=flat-square&logo=npm" /></a>
  <a href="https://github.com/Ahmedmecatronique/ia-bot_ahmed/actions"><img alt="Build" src="https://img.shields.io/github/actions/workflow/status/Ahmedmecatronique/ia-bot_ahmed/publish.yml?style=flat-square&branch=main" /></a>
</p>

---

**ia-bot-ahmed** est un agent IA qui comprend votre codebase, exécute des tâches, modifie des fichiers, lance des commandes et répond à vos questions — le tout en langage naturel, directement dans votre terminal.

### Installation

**Une commande, ça suffit :**
```powershell
npx ia-bot-ahmed
```

**Installation globale :**
```powershell
npm install -g ia-bot-ahmed
ia-bot-ahmed
```

**Windows (one-command) :**
```powershell
powershell -c "iex (irm https://raw.githubusercontent.com/Ahmedmecatronique/ia-bot_ahmed/main/install.ps1)"
```

**Linux / Mac / Raspberry Pi :**
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Ahmedmecatronique/ia-bot_ahmed/main/install.sh)"
```

### Fonctionnalités

- **Multi-modèles** : Anthropic, OpenAI, Google, Mistral, Groq, et plus
- **Interface TUI** : Terminal interactif avec logo ASCII et coloring
- **Outils puissants** : lecture/écriture fichiers, bash, grep, glob, git
- **Sessions persistantes** : historique et contexte projet conservés
- **Git intégré** : commits, branches, PRs, revue de code
- **Système de plugins** : outils et providers personnalisables
- **Multi-plateforme** : Windows x64 et Raspberry Pi (Linux ARM64)

### Commandes

```
ia-bot-ahmed                    → Démarrer le TUI
ia-bot-ahmed run <message>      → Exécuter sans TUI
ia-bot-ahmed serve              → Serveur headless
ia-bot-ahmed web                → Interface web
ia-bot-ahmed providers          → Gérer les providers AI
ia-bot-ahmed session            → Gérer les sessions
ia-bot-ahmed agent              → Gérer les agents
ia-bot-ahmed upgrade            → Mettre à jour
ia-bot-ahmed --help             → Aide complète
```

### Agents intégrés

- **build** — Agent par défaut, accès complet pour le développement
- **plan** — Agent read-only pour l'analyse et l'exploration

Passez de l'un à l'autre avec la touche `Tab`.

---

<p align="center">
  Fait par <a href="https://github.com/Ahmedmecatronique">@Ahmedmecatronique</a>
</p>
