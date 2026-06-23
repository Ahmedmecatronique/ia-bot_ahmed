# ia-bot-ahmed — Architecture Globale

Monorepo structuré en packages, basé sur **Bun** + **TypeScript** + **Effect-TS**.

---

## Structure Racine

```
ia-bot_ahmed/
├── packages/          ← 25 packages (monorepo workspace)
├── infra/             ← Infrastructure SST (AWS)
├── script/            ← Scripts racine (release, changelog, publish, CI)
├── .github/           ← GitHub Actions (26 workflows) + issue templates
├── nix/               ← Nix packages (desktop, ia-bot-ahmed)
├── sdks/vscode/       ← Extension VS Code
├── specs/             ← Spécifications internes
├── patches/           ← Patchs npm (15 packages patchés)
├── perf/              ← Tests de performance
├── install.ps1        ← One-command install Windows
├── install.sh         ← One-command install Linux/Mac
├── ia-bot-ahmed.cmd   ← Launcher global (PATH Windows)
└── package.json       ← Root workspace
```

---

## Packages — Architecture en couches

```
app (web UI emboîtée)
  ├── server (API HTTP + WebSocket)
  │   └── plugins (extensions tierces)
  │       └── MCP (Model Context Protocol)
  ├── core (logique métier, session, outils, providers AI)
  │   └── storage (SQLite, migration)
  ├── llm (couche LLM multi-providers)
  ├── ia-bot-ahmed (CLI principal, assemblage)
  ├── tui (terminal UI SolidJS)
  └── ui (composants web)
```

---

## Packages détaillés

### `packages/core` — Cœur métier (`@ia-bot-ahmed/core`)
Le plus gros package. Contient toute la logique métier :

```
src/
├── session/       ← Gestion des sessions (runner, execution, history, store)
├── tool/          ← Outils IA (bash, grep, glob, edit, read, write, websearch…)
├── plugin/        ← Système de plugins (provider, command, skill, agent, host)
├── provider/      ← Providers AI (auth, model-status, transform)
├── config/        ← Configuration (agent, project, etc.)
├── database/      ← SQLite (schema, migration, queries)
├── permission/    ← Permissions et sécurité
├── project/       ← Gestion de projet
├── filesystem/    ← Accès fichiers
├── reference/     ← Références (code, docs)
├── event/         ← Système d'événements
├── credential/    ← Gestion des credentials
├── ripgrep/       ← Wrapper ripgrep
├── pty/           ← Terminal PTY
├── image/         ← Traitement d'images
├── effect/        ← Utilitaires Effect-TS
├── system-context/← Contexte système
├── util/          ← Utilitaires divers
├── v1/            ← Compatibilité V1
└── session.ts, event.ts, plugin.ts, project.ts, etc.
```

### `packages/ia-bot-ahmed` — CLI principal
Package publié sur npm. Assemble tout :

```
src/
├── cli/           ← CLI entrypoints
│   ├── cmd/       ← Commandes: tui, run, serve, web, acp, session, stats, models…
│   ├── tui/       ← Terminal UI (logo, rendering)
│   └── bootstrap.ts, effect-cmd.ts, upgrade.ts, network.ts
├── command/       ← Autocomplétion commandes
├── provider/      ← Providers (auth, model-status, error)
├── tool/          ← Outils spécifiques (plan, task, apply_patch…)
├── session/       ← Logique session locale
├── config/        ← Configuration
├── project/       ← Gestion projet
├── plugin/        ← Plugins externes
├── mcp/           ← MCP server
├── server/        ← Serveur local
├── storage/       ← Stockage local
├── agent/         ← Système d'agents
├── auth/          ← Authentification
├── account/       ← Gestion compte
├── ide/           ← Intégration IDE
├── lsp/           ← LSP client
├── git/           ← Git integration
├── bus/           ← Event bus
├── index.ts       ← Entrypoint
└── temporary.ts   ← Mode temporaire

script/
├── build.ts       ← Build binaire multi-plateforme
├── build-linux-arm64.ts  ← Cross-compile Raspberry Pi
├── publish.ts     ← Pipeline publication npm
├── generate.ts    ← Generation models data
└── build-node.ts  ← Build pour Node.js
```

### `packages/tui` — Terminal UI (`@ia-bot-ahmed/tui`)
Interface utilisateur dans le terminal (SolidJS + OpenTUI) :

```
src/
├── component/     ← Composants : dialog-*, logo, spinner, startup, etc.
├── prompt/        ← Interface de prompt
├── routes/        ← Routes de navigation TUI
├── theme/         ← Thèmes visuels
├── ui/            ← UI primitives
├── config/        ← Configuration TUI
├── context/       ← Contextes SolidJS
├── plugin/        ← Plugins TUI
├── feature-plugins/ ← Plugins de fonctionnalités
├── app.tsx, keymap.tsx, runtime.tsx  ← Entrypoints
└── logo.ts        ← Logo ASCII art
```

### `packages/app` — Web App (`@ia-bot-ahmed/app`)
Application web embarquée dans le binaire :

```
src/
├── pages/         ← Pages (chat, settings, etc.)
├── components/    ← Composants React
├── hooks/         ← Hooks React
├── context/       ← Contextes React
├── i18n/          ← Internationalisation
├── utils/         ← Utilitaires
├── wsl/           ← WSL integration
└── app.tsx, index.tsx, entry.tsx
```

### `packages/server` — Serveur HTTP (`@ia-bot-ahmed/server`)
API REST + WebSocket :

```
src/
├── handlers/      ← Handlers : agent, model, session, provider, pty, credential…
├── middleware/    ← Middleware
├── groups/        ← Route groups
├── api.ts, routes.ts, auth.ts, cors.ts, errors.ts
└── pty-environment.ts
```

### `packages/llm` — LLM Core (`@ia-bot-ahmed/llm`)
Couche d'abstraction pour les modèles de langage :

```
src/
├── providers/     ← Implémentations providers (OpenAI, Anthropic, Google…)
├── protocols/     ← Protocoles (streaming, etc.)
├── route/         ← Routage de requêtes
├── schema/        ← Schémas
├── utils/         ← Utilitaires
├── llm.ts, provider.ts, tool.ts, tool-runtime.ts
└── cache-policy.ts, provider-error.ts
```

### `packages/web` — Site web & docs (`@ia-bot-ahmed/web`)
Site de documentation / landing :

```
src/
├── content/       ← Documentation multilingue (14 langues)
├── components/    ← Composants
├── pages/         ← Pages
├── i18n/          ← Internationalisation
└── assets/, styles/, middleware.ts
```

### `packages/ui` — UI Kit (`@ia-bot-ahmed/ui`)
Composants web partagés :

```
src/
├── components/    ← Composants réutilisables
├── hooks/         ← Hooks
├── theme/         ← Thème
├── v2/            ← Version 2
└── styles/, assets/, i18n/, storybook/
```

### Autres packages

| Package | Rôle |
|---------|------|
| `cli` | CLI framework partagé |
| `console` | Console d'administration (app/core/function) |
| `containers` | Docker containers (base, bun-node, tauri-linux, rust) |
| `desktop` | App desktop Tauri (main/preload/renderer) |
| `docs` | Documentation technique (MDX) |
| `effect-drizzle-sqlite` | ORM Drizzle + Effect-TS |
| `effect-sqlite-node` | Driver SQLite Effect-TS |
| `enterprise` | App enterprise (SSR React) |
| `http-recorder` | Cassettes HTTP pour tests |
| `identity` | Logos et assets visuels |
| `plugin` | SDK plugins externes |
| `script` | Constants et versions du build |
| `sdk` | SDK JavaScript |
| `slack` | Intégration Slack |
| `stats` | Module statistiques |
| `storybook` | Storybook UI |
| `function` | Fonction Lambda SST |

---

## Infrastructure & CI/CD

### `.github/workflows/` (26 workflows)
```
publish.yml         → Publication npm (binaires multi-plateforme)
test.yml            → Tests unitaires
typecheck.yml       → Vérification TypeScript
build.yml           → Build de validation
deploy.yml          → Déploiement SST/AWS
containers.yml      → Build containers Docker
ia-bot-ahmed.yml     → Pipeline principal
review.yml          → Revue automatique
generate.yml        → Génération SDK/client
docs-update.yml     → Sync documentation
storybook.yml       → Déploiement Storybook
nix-eval.yml        → Évaluation Nix
nix-hashes.yml      → Hash Nix
pr-management.yml   → Gestion PR
publish-github-action.yml
release-github-action.yml
publish-vscode.yml  → Extension VS Code
stats.yml           → Statistiques
triage.yml          → Triage issues
…
```

### `infra/`
Infrastructure SST (Serverless Stack) sur AWS :
```
app.ts, console.ts, enterprise.ts, lake.ts
monitoring.ts, secret.ts, stage.ts, stats.ts
```

---

## Packages npm publiés

| Package | Platforme | Type |
|---------|-----------|------|
| `ia-bot-ahmed` | toutes | Package principal (launcher) |
| `ia-bot-ahmed-windows-x64` | Windows x64 | Binaire compilé |
| `ia-bot-ahmed-linux-arm64` | Linux ARM64 | Binaire cross-compilé |

Le launcher détecte la plateforme et résout le binaire via `optionalDependencies`.

---

## Dépendances clés

| Technologie | Usage |
|------------|-------|
| **Bun** | Runtime, build, compile, test runner |
| **TypeScript** | Langage |
| **Effect-TS** | Programmation fonctionnelle, erreurs typées |
| **SolidJS** | UI (TUI + Web) |
| **OpenTUI** | Framework TUI (terminal) |
| **Drizzle ORM** | SQLite ORM |
| **SST** | Infrastructure AWS |
| **Husky** | Git hooks |
| **Turbo** | Monorepo orchestration |
