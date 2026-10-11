#!/usr/bin/env bash
# Build José Maza CV PDFs (LaTeX via tectonic) into Documentos laborales/CV folders.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
TECTONIC="${TECTONIC:-$HOME/.local/bin/tectonic}"
if [[ ! -x "$TECTONIC" ]]; then
  TECTONIC="$(command -v tectonic || true)"
fi
if [[ -z "${TECTONIC}" || ! -x "$TECTONIC" ]]; then
  echo "tectonic not found. Install: https://github.com/tectonic-typesetting/tectonic/releases" >&2
  exit 1
fi

LABORAL_CV="${LABORAL_CV:-$HOME/Documents/Documentos laborales/CV}"
OUT_DIR="${ROOT}/out"
mkdir -p "$OUT_DIR"

build_one() {
  local tex="$1"
  local dest_dir="$2"
  local base
  base="$(basename "$tex" .tex)"
  echo "→ Building $tex"
  "$TECTONIC" -X compile --outdir "$OUT_DIR" "$tex"
  mkdir -p "$dest_dir"
  cp "$OUT_DIR/${base}.pdf" "$dest_dir/Jose-Maza-CV.pdf"
  echo "  wrote $dest_dir/Jose-Maza-CV.pdf"
}

# Sync source into Documentos laborales/_fuente
if [[ -d "$LABORAL_CV" ]]; then
  mkdir -p "$LABORAL_CV/_fuente"
  rsync -a --delete \
    --exclude out \
    --exclude '*.pdf' \
    "$ROOT/" "$LABORAL_CV/_fuente/"
fi

build_one "$ROOT/jose-maza-cv-es.tex" "$LABORAL_CV/fullstack-es"
build_one "$ROOT/jose-maza-cv-en.tex" "$LABORAL_CV/fullstack-en"

# Keep portfolio public download in sync with English fullstack
PRO_PUBLIC="$(cd "$ROOT/../../.." && pwd)/public"
if [[ -d "$PRO_PUBLIC" ]]; then
  cp "$LABORAL_CV/fullstack-en/Jose-Maza-CV.pdf" "$PRO_PUBLIC/jose-maza-cv.pdf"
  RETRO_PUBLIC="$(cd "$ROOT/../../../.." && pwd)/portfolio/public"
  if [[ -d "$RETRO_PUBLIC" ]]; then
    cp "$PRO_PUBLIC/jose-maza-cv.pdf" "$RETRO_PUBLIC/jose-maza-cv.pdf"
  fi
  echo "Synced portfolio public jose-maza-cv.pdf (EN fullstack)"
fi

echo "Done."
