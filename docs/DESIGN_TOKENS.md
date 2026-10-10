# Design tokens — portfolio-pro

Pencil MCP no estaba autenticado en esta sesión. Tokens definidos directamente según el brief editorial del plan.

## Direction

Editorial / product engineer. Sobrio, usable, un acento. Sin HUD/CRT del retro.

## Color

| Token | Value | Uso |
|-------|-------|-----|
| `--bg` | `#f4f7f6` | Fondo base |
| `--bg-deep` | `#e8eef0` | Atmosfera / secciones |
| `--ink` | `#14212b` | Texto primario |
| `--ink-muted` | `#4a5d6a` | Texto secundario |
| `--line` | `#c5d0d6` | Bordes / timeline |
| `--accent` | `#0d5c63` | Petróleo / deep teal |
| `--accent-soft` | `#d4e8ea` | Fondos accent suaves |
| `--surface` | `#ffffffcc` | Superficies interactivas |
| `--live` | `#0d5c63` | Badge LIVE |
| `--lore` | `#6b5b4f` | Badge LORE |
| `--build` | `#8a6d1b` | Badge BUILD |

Fondo: gradiente radial sutil + noise CSS (no flat).

## Type

| Role | Font | Notes |
|------|------|-------|
| Display | Fraunces | Hero, nombres de sección |
| Body | Geist Sans | UI, párrafos |
| Mono | Geist Mono | Fechas, badges, stack |

## Scale

- Display hero: clamp(2.75rem, 6vw, 4.5rem)
- Section: 2rem / 2.5rem
- Body: 1.05rem / 1.7
- Small / meta: 0.8125rem

## Spacing / radii

- Page max: 1100px
- Section gap: 5–7rem
- Radius: 2px (casi nada) en chips; 0 en hero
- Timeline gutter: 1.5rem

## Motion (sobrio)

1. `.reveal` — fade/slide 280ms al entrar viewport
2. Timeline nodo activo — accent en el punto + línea
3. ProjectRow hover — translateX(2px) + underline accent
