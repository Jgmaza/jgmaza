# Cursor Brief — Portfolio profesional de José Gabriel Maza Mendoza

## Propósito

Usa este documento como contexto editorial para ayudarme a cerrar la arquitectura de información y el copy ES+EN de mi portfolio profesional. Primero inspecciona el repositorio y el contenido existente; luego entrevístame para completar los datos pendientes. No inventes fechas, empresas, responsabilidades, funcionalidades, premios, métricas, usuarios, títulos ni enlaces.

El portfolio profesional debe ser sobrio, claro y basado en evidencia. Mi otro sitio se llama **retro-portfolio** y conserva la estética gamer/HUD. Aquí no quiero gamificación.

## Tu rol

Actúa como editor de portfolio, UX writer bilingüe, arquitecto de información y entrevistador técnico. Ayúdame a describir con precisión qué problema aborda cada trabajo, qué construí yo, qué hizo el equipo, qué tecnologías usé y qué se puede comprobar.

- Nombre: José Gabriel Maza Mendoza.
- GitHub: `Jgmaza`.
- Perfil: Fullstack / Product Engineer.
- Propuesta: cerrar el ciclo problema → UI → API → datos/integraciones → deploy.
- Tono: preciso, calmado, competente, directo.
- Español colombiano profesional; inglés natural y conciso.
- Stack declarado: Next/React 5, TypeScript 5, NestJS 4, FastAPI 3, Supabase 3, Vercel 3, AI/Agents 2. Son valoraciones relativas propias, no porcentajes ni certificaciones.
- Otras tecnologías conocidas en distintos contextos: Python, Flask, Prisma, AWS, OpenAI, n8n y SOAP. No atribuyas cada herramienta a todas las experiencias.

## Método obligatorio

### 1. Inspección

1. Revisa framework, rutas, componentes, estilos, fuentes de contenido y documentación ya existente.
2. Resume qué encontraste antes de editar.
3. No reemplaces arquitectura ni contenido sin explicar primero la propuesta.
4. No me preguntes algo que ya esté claramente documentado en el repositorio.
5. No publiques datos inferidos.

### 2. Entrevista por bloques

Quiero responder las preguntas desde Cursor. No me entregues un cuestionario gigante de una sola vez. Empieza por **Stakeholder Matrix**, después Mussistant, VerificaCol, MediAgent/BioAlert+, Splitia/Rhythm Elegance/Edunova y luego las experiencias laborales.

Haz entre 3 y 6 preguntas concretas por turno. Para cada caso pregunta:
- ¿Qué problema resuelve y para quién?
- ¿Qué funcionalidades están realmente implementadas hoy?
- ¿Qué construí yo personalmente y qué hizo el equipo?
- ¿Qué stack usé y qué decisiones técnicas tomé?
- ¿Qué resultado verificable quedó?
- ¿Hay demo, GitHub, screenshots o diagramas publicables?
- ¿Qué información debe permanecer privada?

Permite responder “no lo sé”, “no recuerdo”, “no puedo publicarlo” o dejar algo pendiente. Distingue mi contribución individual de la del equipo. No conviertas respuestas vagas en claims específicos sin confirmación.

### 3. Registro de hechos

Mantén un inventario editable, preferiblemente `docs/portfolio-content-inventory.md`, salvo que el repo ya tenga uno mejor. Para cada campo usa un estado editorial interno:

- `CONFIRMED`
- `NEEDS_CONFIRMATION`
- `UNKNOWN`
- `NOT_PUBLIC`
- `VERIFY_LINK`

No conviertas los últimos cuatro estados en copy público. Si algo no está confirmado, déjalo pendiente.

### 4. Validación

Tras cada bloque:
1. Resume los hechos que entendiste.
2. Lista lo pendiente o ambiguo.
3. Propón copy en español e inglés.
4. Indica qué evidencia o links faltan.
5. Pídeme validar el texto antes de publicarlo o cambiar el sitio.

## Arquitectura propuesta

Adáptala a la app existente antes de implementarla.

- **Home:** nombre, título, tagline, bio corta, máximo cuatro proyectos destacados, stack relevante y CTA a proyectos/experiencia/contacto.
- **Work / Experience:** cronología, empresa, rol, fechas confirmadas, responsabilidades propias, stack y evidencia pública.
- **Projects:** productos propios, demos laborales sanitizadas, hackatones y exploraciones, con filtros.
- **Project Detail:** contexto/problema, contribución personal, enfoque/arquitectura, stack, estado, evidencia, limitaciones y disclaimer.
- **About:** bio ampliada, forma de trabajo, stack, intereses discretos y contacto.

No hagas una página detallada de cada empleo si no hay suficiente información. Reserva los detalles para casos que expliquen una contribución técnica relevante o muestren evidencia.

## Taxonomía

### Tipos de contenido
- `EXPERIENCE`: empleo o freelance.
- `PRODUCT`: producto propio, sin importar su estado.
- `HACKATHON`: evento/proyecto de competencia.
- `EXPLORATION`: prototipo, investigación o experimento técnico.

### Flags de evidencia
- `DEMO`: demo accesible; no implica producto terminado.
- `LORE`: contexto describible públicamente sin código ni datos privados.
- `BUILD`: artefacto en desarrollo.

Pueden coexistir varios flags.

### Estados
`LIVE`, `IN_PROGRESS`, `REBUILD`, `PAUSED`, `ARCHIVED`, `DEGRADED_DEMO`.

Estado, tipo y evidencia son conceptos distintos. No asumas que una URL significa que todo funciona.

## Experiencias conocidas

No inventes otros empleadores o fechas. La información siguiente es el punto de partida y debe contrastarse con mis respuestas.

### Ministerio de Minas
- Sep 2025–presente; experiencia `ONGOING`.
- Proyecto relacionado: Stakeholder Matrix.
- Demo sanitizada con React + FastAPI.
- Preguntar: rol, responsabilidades directas, funciones que funcionan, arquitectura publicable, límites de sanitización y URL.
- No representar la demo como el sistema productivo institucional.

### Guarapo / Cata
- Jun 2025–Sep 2025.
- Herramientas internas con Next.js, Supabase y AI.
- `LORE` only; no publicar código de cliente.
- Preguntar qué herramientas eran, el problema que resolvían, mi contribución y qué detalles pueden divulgarse.

### Clazz Dev
- Feb 2025–May 2025.
- Asistentes de IA.
- Tecnologías conocidas: OpenAI, n8n, FastAPI y Python.
- Preguntar por rol, flujos, tareas y resultados concretos que pueda hacer públicos.

### Hermes
- Aproximadamente dic 2024–ene 2025; freelance por unos dos meses.
- React, tablas y Vercel.
- Según mi contexto, las mismas personas luego estuvieron relacionadas con Clazz; no es necesario publicar esta relación sin preguntarme.
- Fechas aproximadas deben seguir siendo aproximadas hasta que las confirme.
- Incluir disclaimer de cliente.

### I-Cluster
- 2024 · 3 meses.
- App de salud emocional para Tolú (Sucre).
- Fullstack React + Express; apoyo en decisiones AWS.
- Al salir: app lista para iniciar pruebas.
- Publicación `LORE` (sin demo pública).

### Infinity Tech Consulting
- Abr 2022–jun 2024.
- Next.js, Flask, Prisma, AWS y Vercel.
- Preguntar responsabilidades directas, funcionalidades y evidencia publicable.

### SofinSaS — un empleador, dos capítulos

**Capítulo A**
- Nov 2021–ene 2022.
- Soporte relacionado con e-invoicing/facturación electrónica y ERP.
- Preguntar tareas concretas y tecnologías que se pueden mencionar.

**Capítulo B: MIOBOX**
- Freelance posterior, aproximadamente dos meses; fecha pendiente.
- Puente ERP ↔ planta con NestJS y SOAP.
- Preguntar fechas, rol, flujos/endpoints implementados y detalles divulgables.

Mostrar una sola empresa, SofinSaS, con dos capítulos separados. No inventar la fecha de la colaboración reciente.

## Productos, hackatones y exploraciones conocidos

No adivines la funcionalidad de una app basándote en su nombre. Entrevístame sobre cada una.

### Stakeholder Matrix
- Relacionado con el contexto del Ministerio de Minas.
- Demo sanitizada, React + FastAPI.
- Experiencia profesional en curso.
- Preguntar: problema, usuarios, funciones que se pueden probar, mi contribución, stack completo, decisiones técnicas, límites publicables y URL.

### Mussistant
- Producto propio, estado informado `LIVE`.
- Preguntar: qué hace, para quién, problema, tres funciones principales, qué construí yo, stack, URL live, GitHub y funcionamiento actual.

### Splitia
- Producto propio, estado informado `BUILD`.
- Preguntar: propósito, audiencia, funciones implementadas vs. planeadas, stack, estado, demo y repositorio.

### VerificaCol
- Producto propio, estado informado `LIVE`.
- Preguntar: qué verifica/resuelve, público objetivo, funciones que se pueden comprobar, stack y enlaces.

### Rhythm Elegance
- Producto/build propio; estado por confirmar.
- Preguntar propósito, audiencia, qué está implementado, stack, estado y enlaces.

### MediAgent
- Hackathon: BarranquillIA 2026.
- Resultado: participación — **no ganó**.
- Demo degradada.
- Preguntar reto, solución, mi contribución, equipo, stack, repo y aprendizajes.
- No esconder que la demo está degradada ni inventar premios.

### BioAlert+
- Hackathon Caribe Arena.
- Resultado: participación — **no ganó**.
- Publicación `LORE`.
- Preguntar reto, solución, rol, stack y enlaces.
- No inventar premios.

### EduNova
- Hackathon: **BarranquillIA 2025**.
- Premio a **mejor proyecto usando ShadAI** (tecnología USA) + **4.º lugar general**.
- Prioridad actual: reconstrucción del producto completo (back + front).
- En CV sí; en portafolio con importancia de award + rebuild.

### Ledger One (Interledger)
- Hackathon Interledger: **1er puesto**.
- Proyecto: Ledger One (no “Agent Marketplace” genérico).
- En CV sí; en portafolio con importancia de win.

## Copy de referencia — no final hasta validar los hechos

### Tagline ES
“De la definición del problema al producto desplegado.”

### Tagline EN
“From problem definition to deployed product.”

### Bio ES
“Soy José Gabriel Maza Mendoza, desarrollador fullstack con enfoque en product engineering. Trabajo conectando interfaces, APIs, datos e infraestructura para llevar soluciones desde la definición del problema hasta el despliegue. Mi experiencia abarca desarrollo web, integraciones entre sistemas, herramientas internas y asistentes de IA. Utilizo tecnologías como React, Next.js, TypeScript, NestJS, FastAPI y Supabase según las necesidades de cada proyecto. En este sitio reúno experiencias profesionales, productos propios y proyectos experimentales con distintos niveles de disponibilidad. Me interesa mostrar no solo qué construí, sino también las decisiones técnicas y el trabajo detrás de cada solución.”

### Bio EN
“I'm José Gabriel Maza Mendoza, a full-stack developer focused on product engineering. I connect interfaces, APIs, data, and infrastructure to take solutions from problem definition to deployment. My experience spans web development, system integrations, internal tools, and AI assistants. I work with technologies such as React, Next.js, TypeScript, NestJS, FastAPI, and Supabase, choosing tools based on each project's needs. This portfolio brings together professional experience, personal products, and technical explorations at different stages of maturity. I aim to show not only what I built, but also the technical decisions and work behind each solution.”

### Home featured inicial, sujeto a evidencia
1. Stakeholder Matrix — demo laboral sanitizada.
2. Mussistant — producto informado como live.
3. VerificaCol — producto informado como live.
4. Ledger One — 1er puesto Interledger; EduNova — premio ShadAI + 4.º general (rebuild).

No uses imágenes de stock como si fueran screenshots reales. Prioriza capturas, demos o diagramas auténticos. Si una pieza no tiene evidencia suficiente, propón otra.

## Disclaimers de referencia

Usarlos solo si aplican y si la publicación está autorizada.

**Demo laboral sanitizada — ES**
“Esta demo fue preparada para fines de portafolio a partir de un contexto profesional. Es una versión sanitizada y no representa el sistema productivo. Su publicación está limitada a los componentes y comportamientos autorizados.”

**Sanitized work demo — EN**
“This demo was prepared for portfolio purposes based on a professional context. It is a sanitized version and does not represent the production system. Its public scope is limited to authorized components and behavior.”

**Experiencia sin código público — ES**
“Por razones de confidencialidad, esta experiencia se presenta a nivel general. No se publican código, datos internos ni detalles del cliente que no estén autorizados.”

**Work experience without public code — EN**
“Due to confidentiality constraints, this experience is described at a high level. Client code, internal data, and unauthorized details are not published.”

**Demo degradada — ES**
“La demo puede presentar funcionalidades limitadas o no operar como lo hacía durante el proyecto original. El caso documenta el trabajo realizado y el contexto de desarrollo.”

**Degraded demo — EN**
“The demo may have limited functionality or may no longer behave as it did during the original project. This case documents the work completed and its development context.”

Son textos editoriales, no asesoría legal. Si hay duda sobre permisos, mantén el caso en LORE o no lo publiques hasta aclararlo.

## Reglas editoriales: qué evitar

No uses:
- “Experto en” solo por haber usado una tecnología.
- “Lideré” sin confirmación.
- “Revolucionario”, “disruptivo”, “de clase mundial” u otros claims vacíos.
- Métricas de usuarios, rendimiento, ahorros o impacto sin datos.
- Títulos académicos, certificados o fechas que no haya proporcionado.
- “Production-ready” para prototipos o demos degradadas.
- “Ganador de múltiples hackatones” si solo se confirmó un reconocimiento.
- Claims de IA que no expliquen qué tarea resuelve o qué construí.
- Funcionalidades inferidas por el nombre del proyecto.

Prefiere verbos concretos: construí, implementé, integré, diseñé, desplegué, automaticé, documenté, mantuve. Vincula el stack a tareas específicas y distingue el trabajo propio del trabajo del equipo.

## Enlace a retro-portfolio

Debe ser secundario, dentro de About o del footer.

ES: “También exploro otra forma de contar mi trabajo en un portfolio experimental.”
EN: “I also explore a more experimental way to present my work.”

CTA: `Explore retro-portfolio ↗`.

No lo conviertas en el CTA principal de Home ni dupliques automáticamente todos los proyectos.

## Plantillas para entrevistarme

Usa estas preguntas de forma conversacional y por ficha, no me obligues a rellenar todo de golpe.

### Producto
- ¿Qué problema resuelve y para quién?
- ¿Qué se puede hacer hoy en la app?
- ¿Qué está implementado y qué sigue planeado?
- ¿Qué construí yo y qué hizo el equipo?
- ¿Qué stack utilicé?
- ¿Qué decisión técnica o trade-off fue importante?
- ¿Qué resultado se puede comprobar?
- ¿Hay demo, GitHub, capturas o diagramas?
- ¿Qué se puede publicar y qué debe quedar privado?

### Experiencia laboral
- ¿Cuál era mi rol exacto y qué responsabilidades tenía?
- ¿Qué implementé yo directamente?
- ¿Qué hizo el equipo?
- ¿Qué problema o flujo resolvía el trabajo?
- ¿Qué tecnologías usé personalmente?
- ¿Qué quedó entregado?
- ¿Qué evidencia pública existe?
- ¿Qué información no puede divulgarse?

### Hackathon
- Nombre oficial del evento, fecha y organizador.
- Reto y solución construida.
- Mi rol y contribución concreta.
- Rol del equipo, si aplica.
- Stack y duración.
- Premio o resultado oficial y cómo verificarlo.
- Estado actual de la demo.
- URLs de demo/GitHub.
- Aprendizaje principal.

### Origins / formación
- Cómo empecé a programar.
- Formación académica que quiera publicar.
- Cursos o aprendizaje autodidacta.
- Primer proyecto que recuerdo.
- Qué me hizo seguir desarrollando.
- Experiencias que cambiaron mi manera de trabajar.
- Datos que prefiero no publicar.

## Modelo de contenido de referencia

Adáptalo al repo; no añadas dependencias sin necesidad.

```ts
type ContentType = "experience" | "product" | "hackathon" | "exploration";
type EvidenceFlag = "demo" | "lore" | "build";
type ProjectStatus =
  | "live"
  | "in_progress"
  | "rebuild"
  | "paused"
  | "archived"
  | "degraded_demo";
type FactStatus =
  | "confirmed"
  | "needs_confirmation"
  | "unknown"
  | "not_public"
  | "verify_link";

interface PortfolioEntry {
  id: string;
  title: string;
  type: ContentType;
  status?: ProjectStatus;
  evidence: EvidenceFlag[];
  dateLabel?: string;
  datePrecision?: "exact" | "approximate" | "pending";
  summaryEs?: string;
  summaryEn?: string;
  problem?: string;
  audience?: string;
  personalContribution?: string;
  teamContribution?: string;
  stack: string[];
  capabilities?: string[];
  outcome?: string;
  demoUrl?: string;
  githubUrl?: string;
  disclaimers?: { es?: string; en?: string };
  factsStatus: FactStatus;
  featured?: boolean;
}
```

`factsStatus` es editorial interno; no tiene que mostrarse al público. No llenes campos pendientes con suposiciones.

## Criterios de aceptación

- La arquitectura coincide con el proyecto real.
- Las fechas son exactas, aproximadas o pendientes según corresponda.
- Cada experiencia distingue responsabilidades propias y de equipo.
- Cada proyecto describe funciones reales.
- Cada ficha tiene copy ES+EN validado.
- Los estados de demo están claros.
- Los premios y resultados son verificables.
- Los disclaimers protegen información confidencial.
- No hay métricas ni claims sin evidencia.
- retro-portfolio permanece secundario.
- El sitio sigue sobrio, legible y responsive.

## Instrucción inicial

Primero inspecciona el repositorio y resume qué estructura y contenido encontraste. Después empieza una entrevista conmigo sobre **Stakeholder Matrix** con preguntas concretas sobre problema, audiencia, funciones que se pueden demostrar, mi contribución personal, decisiones técnicas, evidencia pública y límites de confidencialidad.

Después de mis respuestas, prepara una ficha factual y un borrador de copy ES+EN. Separa lo confirmado de lo pendiente y pídeme validar antes de marcarlo como listo para publicar. Sigue luego con Mussistant, VerificaCol y las demás entradas.
