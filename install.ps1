param(
  [switch]$NoRun = $false
)

$ErrorActionPreference = "Stop"
$RepoUrl = "https://github.com/Ahmedmecatronique/ia-bot_ahmed.git"
$InstallDir = "$env:USERPROFILE\ia-bot-ahmed"

function Install-Bun {
  Write-Host "[1/4] Installing bun..." -ForegroundColor Cyan
  powershell -NoProfile -Command "irm bun.sh/install.ps1 | iex"
  $env:Path = "$env:USERPROFILE\.bun\bin;$env:Path"
}

function Clone-Repo {
  Write-Host "[2/4] Downloading ia-bot-ahmed..." -ForegroundColor Cyan
  if (Test-Path $InstallDir) {
    Write-Host "  Already downloaded, updating..." -ForegroundColor Yellow
    Set-Location $InstallDir; git pull
  } else {
    git clone $RepoUrl $InstallDir
  }
}

function Install-Deps {
  Write-Host "[3/4] Installing dependencies..." -ForegroundColor Cyan
  Set-Location $InstallDir
  & "$env:USERPROFILE\.bun\bin\bun.exe" install
}

function Run-Bot {
  Write-Host "[4/4] Launching ia-bot-ahmed..." -ForegroundColor Green
  Write-Host ""
  Write-Host "  ████████████████████████████████████████████████████████████" -ForegroundColor Blue
  Write-Host "  ██                                                            ██" -ForegroundColor Blue
  Write-Host "  ██                        IA-BOT-AHMED                        ██" -ForegroundColor Blue
  Write-Host "  ██                                                            ██" -ForegroundColor Blue
  Write-Host "  ████████████████████████████████████████████████████████████" -ForegroundColor Blue
  Write-Host ""
  Set-Location $InstallDir
  & "$env:USERPROFILE\.bun\bin\bun.exe" dev
}

# --- Main ---
Write-Host "=== ia-bot-ahmed Installer ===" -ForegroundColor Magenta

if (-not (Get-Command bun -ErrorAction SilentlyContinue) -and -not (Test-Path "$env:USERPROFILE\.bun\bin\bun.exe")) {
  Install-Bun
} else {
  Write-Host "[1/4] bun already installed" -ForegroundColor Green
  $env:Path = "$env:USERPROFILE\.bun\bin;$env:Path"
}

Clone-Repo
Install-Deps

if (-not $NoRun) {
  Run-Bot
} else {
  Write-Host ""
  Write-Host "Installation complete! Run with: ia-bot-ahmed" -ForegroundColor Green
}
