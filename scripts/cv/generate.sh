#!/usr/bin/env bash
# Prefer LaTeX (Tony-style) build. Legacy HTML generator kept under legacy/.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
exec bash "$ROOT/latex/build.sh"
