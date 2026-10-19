# ATS check — single-column layout

**Skill used:** `resume-ats-optimizer` (no ATS MCP available in this Cursor workspace)  
**Cases:** `fullstack-es` + `fullstack-en`  
**Date:** 2026-10-19

## What changed

Before: role/company with dates **right-aligned** via `\hfill` (looks like 2 columns to some ATS parsers).  
After: true **single column**

```
Fullstack Developer
Company | City | Dates
bullets…
```

## ATS structural scores (format / parse)

| Case | Pages | Text extract | Contact in body | Standard headers | Single-col reading order | Score |
|---|---|---|---|---|---|---|
| fullstack-es | 2 | ✅ | ✅ | ✅ | ✅ | **~88/100** |
| fullstack-en | 2 | ✅ | ✅ | ✅ | ✅ | **~88/100** |

(Keyword match vs a specific JD is separate — e.g. 4G Architecture was ~75–80 honest.)

### Checklist (skill)

- ✅ PDF text-based, not scanned  
- ✅ Times New Roman / Arial  
- ✅ No tables / columns / icons  
- ✅ Contact in body  
- ✅ Standard section names  
- ⚠️ Still 2 pages (ok; trim optional)  
- ⚠️ Filename `Jose-Maza-CV.pdf` inside type folder (fine)

## Cómo se ve / recomendaciones de plantilla

La columna única **queda bien para ATS** y el orden de lectura es correcto. Visualmente:

1. **Quedarse con esta** si el filtro es ATS / LinkedIn Easy Apply — es la más segura.  
2. **Si se siente “plana”** (recomendación estética, no ATS):  
   - Acortar perfil a 3 líneas.  
   - Compactar I-Cluster a una línea sin intro.  
   - Fechas en formato `09/2025 – Presente` más corto.  
3. **No volver a sidebar / 2 columnas** para esta vacante 4G ni ATS genérico.  
4. **Alternativa de plantilla** solo si quieres look más “Tony” de nuevo: fechas a la derecha **solo en una PDF “visual”** aparte; mantener esta versión como `fullstack-*-ats`.

## Veredicto

Mantener **single-column stacked** como default de envío. Queda limpia y parseable; si no te gusta el look, el ajuste es de densidad de texto, no volver a dos columnas.
