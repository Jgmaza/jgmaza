#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
HTML="$ROOT/scripts/cv/jose-maza-cv.html"
OUT="$ROOT/public/jose-maza-cv.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "file://$HTML"

# Keep legacy retro portfolio in sync when present
RETRO_PUBLIC="$(cd "$ROOT/.." && pwd)/portfolio/public/jose-maza-cv.pdf"
if [[ -d "$(dirname "$RETRO_PUBLIC")" ]]; then
  cp "$OUT" "$RETRO_PUBLIC"
fi

echo "Wrote $OUT"
