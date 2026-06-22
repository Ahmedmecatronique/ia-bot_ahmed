#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/Ahmedmecatronique/ia-bot_ahmed.git"
INSTALL_DIR="$HOME/ia-bot-ahmed"

echo "=== ia-bot-ahmed Installer ==="

# Install bun if needed
if ! command -v bun &>/dev/null; then
  echo "[1/4] Installing bun..."
  curl -fsSL https://bun.sh/install | bash
  export PATH="$HOME/.bun/bin:$PATH"
else
  echo "[1/4] bun already installed"
fi

# Clone repo
echo "[2/4] Downloading ia-bot-ahmed..."
if [ -d "$INSTALL_DIR" ]; then
  echo "  Already downloaded, updating..."
  cd "$INSTALL_DIR" && git pull
else
  git clone "$REPO_URL" "$INSTALL_DIR"
fi

# Install dependencies
echo "[3/4] Installing dependencies..."
cd "$INSTALL_DIR"
bun install

# Run
echo "[4/4] Launching ia-bot-ahmed..."
echo ""
echo "  =================================================="
echo "  ||                                                ||"
echo "  ||               IA-BOT-AHMED                     ||"
echo "  ||                                                ||"
echo "  =================================================="
echo ""
cd "$INSTALL_DIR"
bun dev
