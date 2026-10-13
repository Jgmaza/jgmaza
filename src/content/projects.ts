import type { Project, ProjectCategory } from "./types";

export const categoryLabels: Record<
  ProjectCategory,
  { es: string; en: string }
> = {
  experiencia: { es: "Experiencia", en: "Experience" },
  producto: { es: "Producto", en: "Product" },
  hackathon: { es: "Hackathon", en: "Hackathon" },
  exploracion: { es: "Exploración", en: "Exploration" },
};

export const presentationLabels: Record<
  Project["presentation"],
  { es: string; en: string }
> = {
  demo: { es: "LIVE", en: "LIVE" },
  lore: { es: "LORE", en: "LORE" },
  build: { es: "BUILD", en: "BUILD" },
};

export const projects: Project[] = [
  {
    slug: "integrador-servicios",
    title: "Integrador de Servicios",
    tagline: {
      es: "Admin de apps, rutas y transformaciones REST↔SOAP en un gateway",
      en: "App admin, routes, and REST↔SOAP transforms in one gateway",
    },
    summary: {
      es: "Fachada HTTP (APISIX + FastAPI/Vue) que centraliza interoperabilidad: catálogo de aplicaciones, rutas del gateway, traducción JSON↔SOAP, token broker, vault de credenciales y RBAC. La demo sanitizada replica la UI de administración (tabla de apps → rutas → panel de transform) con sistemas ficticios.",
      en: "HTTP facade (APISIX + FastAPI/Vue) for interoperability: application catalog, gateway routes, JSON↔SOAP translation, token broker, credential vaulting, and RBAC. The sanitized demo mirrors the admin UI (apps table → routes → transform panel) with fictional systems.",
    },
    category: "experiencia",
    presentation: "demo",
    featured: true,
    year: "2025–2026",
    role: {
      es: "Fullstack / integraciones — autoría mayoritaria en el repo",
      en: "Fullstack / integrations — majority authorship in the repo",
    },
    stack: [
      "FastAPI",
      "Vue 3",
      "APISIX",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "MSW",
      "React",
    ],
    problem: {
      es: "Consumidores no deberían hablar SOAP, guardar passwords upstream ni conocer hops de VPN/security-server. Hace falta un puente con contrato REST estable, transformaciones y control de acceso.",
      en: "Consumers shouldn't speak SOAP, hold upstream passwords, or know VPN/security-server hops. They need a bridge with a stable REST contract, transforms, and access control.",
    },
    decisions: [
      {
        es: "Gateway para negocio + API admin para auth/RBAC/catálogo de rutas",
        en: "Business gateway + admin API for auth/RBAC/route catalog",
      },
      {
        es: "Transform executor: REST→SOAP (tipos XSD), token broker, passthrough",
        en: "Transform executor: REST→SOAP (XSD typing), token broker, passthrough",
      },
      {
        es: "Demo pública 100% mock (MSW) con apps ficticias — sin hosts institucionales",
        en: "100% mock public demo (MSW) with fictional apps — no institutional hosts",
      },
    ],
    outcome: {
      es: "Demo interactiva del admin (apps/rutas/transforms) + lab REST→SOAP en Vercel. Trabajo real: superficie de interoperabilidad ampliada de 2 a 6 rutas/familias vía gateway (nombres omitidos en CV; lore institucional sin código público).",
      en: "Interactive admin demo (apps/routes/transforms) + REST→SOAP lab on Vercel. Real work: interoperability surface grown from 2 to 6 route/families via gateway (names omitted on the CV; institutional lore, no public code).",
    },
    companyId: "ministerio-minas",
    demoUrl: "https://integrador-gateway-demo.vercel.app",
    repoUrl: "https://github.com/Jgmaza/integrador-gateway-demo",
    preview: "/previews/integrador-gateway.png",
    disclaimer: {
      es: "Demo de portafolio inspirada en trabajo de interoperabilidad. Sistemas ficticios (DocketOS, CivicHub, TradeDesk, FirmBook). Sin afiliación, endpoints ni credenciales reales.",
      en: "Portfolio demo inspired by interoperability work. Fictional systems (DocketOS, CivicHub, TradeDesk, FirmBook). No real affiliation, endpoints, or credentials.",
    },
  },
  {
    slug: "siveeic",
    title: "SIVEEIC",
    tagline: {
      es: "Módulo de reportes dosimetría (consulta multi-filtro)",
      en: "Dosimetry reports module (multi-filter consult)",
    },
    summary: {
      es: "Ecosistema multi-repo (Angular, api_siveeic, SQL Server). Pieza central para el portafolio: el módulo de reportes dosimetría — filtros por operador/periodo/documento, tabla paginada y vistas de historial/unificado. La demo es copia sanitizada del front Angular real (sin login ni branding institucional) con API mock.",
      en: "Multi-repo ecosystem (Angular, api_siveeic, SQL Server). Portfolio focus: the dosimetry reports module — operator/period/document filters, paginated table, and historic/unified views. The demo is a sanitized copy of the real Angular front (no login or institutional branding) with a mock API.",
    },
    category: "experiencia",
    presentation: "demo",
    featured: true,
    year: "2025–2026",
    role: {
      es: "Fullstack — API Node, BD SQL Server y front Angular",
      en: "Fullstack — Node API, SQL Server DB, and Angular front",
    },
    stack: ["Angular", "Node.js", "Express", "SQL Server", "Docker"],
    problem: {
      es: "Reportes históricos y nuevos convivían con contratos distintos; hacía falta un Consultar unificado sin romper legado ni falsear NR/NP como ceros.",
      en: "Historical and new reports lived under different contracts; a unified Consultar was needed without breaking legacy or coercing NR/NP into zeros.",
    },
    decisions: [
      {
        es: "Conservar la UI Angular real de reportes/dosimetría (sin rediseño)",
        en: "Keep the real Angular reports/dosimetry UI (no redesign)",
      },
      {
        es: "Unificar en BD (SPs + dual-write) y Consultar multi-filtro en UI",
        en: "Unify in DB (SPs + dual-write) and multi-filter Consultar in the UI",
      },
      {
        es: "Demo pública con interceptor mock y datos ficticios",
        en: "Public demo with mock interceptor and fictional data",
      },
    ],
    outcome: {
      es: "Demo en Vercel centrada en reportes dosimetría. Trabajo real entregado across front/API/DB (lore institucional, sin código público).",
      en: "Vercel demo centered on dosimetry reports. Real delivery across front/API/DB (institutional lore, no public code).",
    },
    companyId: "ministerio-minas",
    demoUrl: "https://siveeic-dosimetry-demo.vercel.app",
    repoUrl: "https://github.com/Jgmaza/siveeic-dosimetry-demo",
    preview: "/previews/siveeic-dosimetry.png",
    disclaimer: {
      es: "Demo de portafolio inspirada en la UI de reportes dosimetría de SIVEEIC. Trabajadores y empresas ficticios. Sin hosts institucionales ni datos reales.",
      en: "Portfolio demo inspired by SIVEEIC dosimetry reports UI. Fictional workers and companies. No institutional hosts or real data.",
    },
  },
  {
    slug: "taiga-mme",
    title: "Taiga MME",
    tagline: {
      es: "Open source modificado — LDAP, Kanban y alertas sobre Taiga 6.8",
      en: "Modified open source — LDAP, Kanban, and alerts on Taiga 6.8",
    },
    summary: {
      es: "Taiga es software open source. En la instancia dockerizada del Ministerio se modificó el código: login LDAP, filtro/búsqueda de etiquetas en Kanban, validación de fechas de vencimiento y alertas por correo de ítems por vencer. Aporte propio documentado en el manual de actualización 2025–2026. Lore only — sin demo pública.",
      en: "Taiga is open-source software. On the Ministry's dockerized instance the code was modified: LDAP login, Kanban tag filter/search, due-date validation, and email alerts for upcoming items. Own contributions documented in the 2025–2026 update manual. Lore only — no public demo.",
    },
    category: "experiencia",
    presentation: "lore",
    featured: false,
    year: "2025",
    role: {
      es: "Frontend / automatización — customizaciones sobre código OSS",
      en: "Frontend / automation — customizations on OSS code",
    },
    stack: ["Taiga", "Docker", "JavaScript", "Python", "LDAP", "Nginx"],
    problem: {
      es: "La instancia stock de Taiga (open source) no cubría login corporativo, filtrado fino en Kanban ni recordatorios de vencimiento para equipos del Ministerio.",
      en: "Stock Taiga (open source) didn't cover corporate login, fine Kanban filtering, or due-date reminders for Ministry teams.",
    },
    decisions: [
      {
        es: "Modificar el front OSS (filtro de etiquetas, due-date) inyectado vía gateway/scripts",
        en: "Patch the OSS front (tag filter, due-date) injected via gateway/scripts",
      },
      {
        es: "Script de alertas por correo sobre due_date del año en curso",
        en: "Email alert script over current-year due_dates",
      },
      {
        es: "LDAP en imagen back custom + conf.override en el front",
        en: "LDAP on a custom back image + front conf.override",
      },
    ],
    outcome: {
      es: "Customizaciones en QA/prod documentadas. Sin demo pública: el caso se cuenta como lore de open source modificado.",
      en: "QA/prod customizations documented. No public demo: the case is told as lore of modified open source.",
    },
    companyId: "ministerio-minas",
    disclaimer: {
      es: "Taiga es open source; aquí se describe trabajo de customización sobre ese código. Sin instancia real ni datos de proyectos institucionales.",
      en: "Taiga is open source; this describes customization work on that code. No real instance or institutional project data.",
    },
  },
  {
    slug: "stakeholder-matrix",
    title: "Stakeholder Matrix",
    tagline: {
      es: "Matriz interés-poder — una línea dentro del trabajo MinEnergía",
      en: "Interest-power matrix — one line inside MinEnergía work",
    },
    summary: {
      es: "Demo sanitizada del mapeo de actores (FastAPI + React). Es la única pieza con demo pública hoy, pero representa solo una línea del rol: junto a Integrador, SIVEEIC y Taiga.",
      en: "Sanitized stakeholder-mapping demo (FastAPI + React). It's the only public demo today, but it represents only one line of the role — alongside Integrator, SIVEEIC, and Taiga.",
    },
    category: "experiencia",
    presentation: "demo",
    featured: true,
    year: "2025",
    role: {
      es: "Fullstack — case study laboral (demo)",
      en: "Fullstack — work case study (demo)",
    },
    stack: ["React", "TypeScript", "Clean Architecture", "MSW", "FastAPI", "MySQL"],
    problem: {
      es: "Equipos de relacionamiento necesitan mapear actores clave por poder e interés, con catálogos jerárquicos y sin perder trazabilidad.",
      en: "Engagement teams need to map key actors by power and interest, with hierarchical catalogs and without losing traceability.",
    },
    decisions: [
      {
        es: "Separación domain/application/infrastructure/presentation",
        en: "domain/application/infrastructure/presentation separation",
      },
      {
        es: "Matriz visual con cuadrantes accionables",
        en: "Visual matrix with actionable quadrants",
      },
      {
        es: "Demo pública 100% mock (MSW) para no exponer datos laborales",
        en: "100% mock public demo (MSW) to avoid exposing work data",
      },
    ],
    outcome: {
      es: "Case study + demo interactiva en Vercel con seed ficticio. Complementa el lore de Integrador/SIVEEIC/Taiga.",
      en: "Case study + interactive Vercel demo with fictional seed. Complements Integrator/SIVEEIC/Taiga lore.",
    },
    companyId: "ministerio-minas",
    demoUrl: "https://stakeholder-matrix-demo.vercel.app",
    repoUrl: "https://github.com/Jgmaza/stakeholder-matrix-demo",
    disclaimer: {
      es: "Demo de portafolio inspirada en trabajo profesional. Sin afiliación con empleador ni entidad gubernamental.",
      en: "Portfolio demo inspired by professional work. Not affiliated with any employer or government entity.",
    },
    preview: "/previews/stakeholder-matrix.png",
  },
  {
    slug: "mussistant",
    title: "Mussistant",
    tagline: {
      es: "De setlist a playlist de Spotify en minutos",
      en: "From setlist to Spotify playlist in minutes",
    },
    summary: {
      es: "Asistente de música con OCR, matching al catálogo de Spotify y playlists vía PKCE. Incluye lista de espera para allowlist en Development Mode y panel admin LRU.",
      en: "Music assistant with OCR, Spotify catalog matching, and playlists via PKCE. Includes allowlist waitlist for Development Mode and an LRU admin panel.",
    },
    category: "producto",
    presentation: "demo",
    featured: true,
    year: "2026",
    role: {
      es: "Product engineer — frontend + integraciones",
      en: "Product engineer — frontend + integrations",
    },
    stack: ["React", "Vite", "Supabase Auth", "Spotify API", "OCR", "Tailwind"],
    problem: {
      es: "DJs y productores pierden tiempo pasando setlists a playlists a mano. Spotify Development Mode limita la API a 5 cuentas.",
      en: "DJs and producers waste time copying setlists into playlists by hand. Spotify Development Mode limits the API to 5 accounts.",
    },
    decisions: [
      {
        es: "Dual input: texto e imagen con OCR",
        en: "Dual input: text and image with OCR",
      },
      {
        es: "Scoring de confianza + corrección manual",
        en: "Confidence scoring + manual correction",
      },
      {
        es: "Spotify PKCE sin secrets en el cliente",
        en: "Spotify PKCE without client secrets",
      },
    ],
    outcome: {
      es: "Demo live en Vercel con auth Supabase y operación de allowlist.",
      en: "Live Vercel demo with Supabase auth and allowlist operations.",
    },
    demoUrl: "https://mussistant.vercel.app",
    repoUrl: "https://github.com/Jgmaza/Mussistant",
    preview: "/previews/mussistant.png",
  },
  {
    slug: "mediagent",
    title: "MediAgent",
    tagline: {
      es: "Voice agent para dispensarios de medicamentos",
      en: "Voice agent for pharmacy counters",
    },
    summary: {
      es: "Hackathon BarranquillIA 2026: agente de voz que conecta inventario, fórmula y paciente. Participación de equipo — sin premio. En portafolio vive como lore + demo degradada (sin telefonía 24/7).",
      en: "BarranquillIA 2026 hackathon: voice agent connecting inventory, prescription, and patient. Team participation — no award. Portfolio ships as lore + degraded demo (no 24/7 telephony).",
    },
    category: "hackathon",
    presentation: "lore",
    featured: false,
    year: "2026",
    role: {
      es: "Product / fullstack en equipo",
      en: "Product / fullstack in a team",
    },
    stack: ["Next.js", "Vapi", "Supabase", "Deepgram", "ElevenLabs"],
    problem: {
      es: "Inventario y fórmulas existen, pero el paciente espera porque los sistemas no se hablan.",
      en: "Inventory and prescriptions exist, but patients wait because systems don't talk.",
    },
    decisions: [
      {
        es: "Pipeline STT → LLM → TTS con voz colombiana",
        en: "STT → LLM → TTS pipeline with Colombian voice",
      },
      {
        es: "Versión pública UI + seed + mock/video sin stack de voz pago 24/7",
        en: "Public version: UI + seed + mock/video without paid voice stack 24/7",
      },
    ],
    outcome: {
      es: "Participación en BarranquillIA 2026. Pitch + scope consolidado; demo operativa degradada en curso.",
      en: "BarranquillIA 2026 participation. Pitch + scope consolidated; degraded operational demo in progress.",
    },
    repoUrl: "https://github.com/hackaton-barranquiia/turnos-agent",
  },
  {
    slug: "splitia",
    title: "Splitia",
    tagline: {
      es: "Reparto de gastos compartidos sin fricción",
      en: "Shared expenses without the friction",
    },
    summary: {
      es: "App Next.js + Supabase para dividir gastos entre grupos. Core tipo Splitwise en curso: grupos, splits, balances y camino hacia agente de gastos por correo.",
      en: "Next.js + Supabase app for splitting group expenses. Splitwise-style core in progress: groups, splits, balances, and a path toward an email expense agent.",
    },
    category: "producto",
    presentation: "build",
    featured: true,
    year: "2026",
    role: {
      es: "Fullstack — producto propio",
      en: "Fullstack — own product",
    },
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    problem: {
      es: "Calcular quién debe a quién en viajes o roommates es confuso y genera fricción.",
      en: "Figuring out who owes whom on trips or with roommates is confusing and creates friction.",
    },
    decisions: [
      {
        es: "App Router + claridad de balances primero",
        en: "App Router + balance clarity first",
      },
      {
        es: "Auth real vía hub compartido (en progreso)",
        en: "Real auth via shared hub (in progress)",
      },
    ],
    outcome: {
      es: "Build activo. Demo pública cuando el core esté estable.",
      en: "Active build. Public demo when the core is stable.",
    },
    demoUrl: "https://splitia-xi.vercel.app",
    repoUrl: "https://github.com/Jgmaza/splitia",
    preview: "/previews/splitia.png",
  },
  {
    slug: "verificacol",
    title: "VerificaCol",
    tagline: {
      es: "Validador de información electoral",
      en: "Electoral information validator",
    },
    summary: {
      es: "Portal demo que analiza URLs, resume propuestas y permite conversar sobre el contenido para combatir desinformación.",
      en: "Demo portal that analyzes URLs, summarizes proposals, and chats about content to fight misinformation.",
    },
    category: "producto",
    presentation: "demo",
    featured: false,
    year: "2026",
    role: {
      es: "Fullstack — Next/Python + LLM",
      en: "Fullstack — Next/Python + LLM",
    },
    stack: ["TypeScript", "Python", "FastAPI", "OpenAI", "Vercel"],
    problem: {
      es: "En campañas electorales circular contenido engañoso es rápido; verificarlo a mano no escala.",
      en: "In election campaigns, misleading content spreads fast; manual verification does not scale.",
    },
    decisions: [
      {
        es: "Pipeline de transcripción + scoring de credibilidad",
        en: "Transcription pipeline + credibility scoring",
      },
      {
        es: "Chat sobre el contenido analizado",
        en: "Chat over analyzed content",
      },
    ],
    outcome: {
      es: "Demo en vivo en Vercel como referencia de producto AI.",
      en: "Live Vercel demo as an AI product reference.",
    },
    demoUrl: "https://verificacol.vercel.app",
    repoUrl: "https://github.com/Jgmaza/verificacol",
    preview: "/previews/verificacol.png",
  },
  {
    slug: "hermes",
    title: "Hermes",
    tagline: {
      es: "Chat / operación para equipos",
      en: "Chat / operations for teams",
    },
    summary: {
      es: "Frontend React + tablas y flujos operativos desplegado en Vercel. Case study narrativo con detalle de negocio omitido a propósito.",
      en: "React frontend with operational tables and flows on Vercel. Narrative case study with business details omitted on purpose.",
    },
    category: "experiencia",
    presentation: "demo",
    featured: false,
    year: "2025",
    role: {
      es: "Frontend freelance",
      en: "Frontend freelance",
    },
    stack: ["React", "Vite", "TanStack Table", "Redux", "Vercel"],
    problem: {
      es: "Equipos necesitan una superficie operativa clara para conversaciones y seguimiento.",
      en: "Teams need a clear operational surface for conversations and follow-up.",
    },
    decisions: [
      {
        es: "UI densa con tablas y formularios tipados",
        en: "Dense UI with typed tables and forms",
      },
      {
        es: "Deploy continuo en Vercel",
        en: "Continuous deploy on Vercel",
      },
    ],
    outcome: {
      es: "App en producción del cliente; link demo cuando el acceso lo permite.",
      en: "Client production app; demo link when access allows.",
    },
    companyId: "hermes",
    demoUrl: "https://hermes-liard.vercel.app",
    disclaimer: {
      es: "Proyecto freelance para cliente. Detalles de negocio omitidos a propósito.",
      en: "Freelance project for a client. Business details omitted on purpose.",
    },
    preview: "/previews/hermes.png",
  },
  {
    slug: "commodo",
    title: "Commodo",
    tagline: {
      es: "Fidelización tipo puntos — sigue en producción",
      en: "Points-style loyalty — still in production",
    },
    summary: {
      es: "En Infinity Tech: sistema de fidelización (análogo a puntos Colombia). Administré el front de las 3 plataformas web del cliente con cambios del día a día. Lore only — sin demo pública.",
      en: "At Infinity Tech: loyalty/points system (Puntos Colombia–style). Owned day-to-day front work across the client's 3 web platforms. Lore only — no public demo.",
    },
    category: "experiencia",
    presentation: "lore",
    featured: false,
    year: "2022–2024",
    role: {
      es: "Frontend / fullstack en agency",
      en: "Frontend / fullstack in agency",
    },
    stack: ["Next.js", "React", "Flask", "Prisma", "AWS", "Vercel"],
    problem: {
      es: "El cliente necesitaba operar fidelización y administración web de forma continua, no un one-off.",
      en: "The client needed ongoing loyalty ops and web admin — not a one-off.",
    },
    decisions: [
      {
        es: "Ownership del front en las tres superficies web del cliente",
        en: "Front ownership across the client's three web surfaces",
      },
      {
        es: "Entrega incremental de cambios diarios sobre un producto vivo",
        en: "Incremental day-to-day changes on a live product",
      },
    ],
    outcome: {
      es: "Producto aún en producción años después. Caso lore de agency sin código de cliente.",
      en: "Product still in production years later. Agency lore case without client code.",
    },
    companyId: "infinity-tech",
    disclaimer: {
      es: "Narrativa profesional. Código y datos del cliente no se publican.",
      en: "Professional narrative. Client code and data are not published.",
    },
  },
  {
    slug: "infinity-pos",
    title: "POS Commodo",
    tagline: {
      es: "POS desde cero en ~1 mes — multi-API",
      en: "POS from scratch in ~1 month — multi-API",
    },
    summary: {
      es: "Punto de venta construido desde cero en aproximadamente un mes para el ecosistema Commodo: APIs propias, Siigo y consultas externas (p. ej. departamentos). Lore only.",
      en: "Point-of-sale built from scratch in about a month for the Commodo ecosystem: own APIs, Siigo, and external lookups (e.g. departments). Lore only.",
    },
    category: "experiencia",
    presentation: "lore",
    featured: false,
    year: "2022–2024",
    role: {
      es: "Fullstack — integraciones POS",
      en: "Fullstack — POS integrations",
    },
    stack: ["APIs", "Siigo", "Commodo", "Fullstack"],
    problem: {
      es: "Operación en mostrador necesitaba un POS conectado a fidelización, facturación y catálogos geográficos.",
      en: "Counter ops needed a POS wired to loyalty, invoicing, and geo catalogs.",
    },
    decisions: [
      {
        es: "Integrar APIs propias + Siigo + lookups externos en un solo flujo de caja",
        en: "Integrate own APIs + Siigo + external lookups in one checkout flow",
      },
      {
        es: "Scope cerrado a ~1 mes desde cero",
        en: "Scoped to ~1 month from zero",
      },
    ],
    outcome: {
      es: "POS entregado en ~1 mes. Lore de integraciones sin publicar endpoints de cliente.",
      en: "POS delivered in ~1 month. Integration lore without publishing client endpoints.",
    },
    companyId: "infinity-tech",
    disclaimer: {
      es: "Narrativa profesional. Código y datos del cliente no se publican.",
      en: "Professional narrative. Client code and data are not published.",
    },
  },
  {
    slug: "miobox",
    title: "MIOBOX Bridge",
    tagline: {
      es: "Puente NestJS entre ERP, órdenes y cierre operativo",
      en: "NestJS bridge between ERP, orders, and operational close",
    },
    summary: {
      es: "Integración laboral: SOAP/ERP ↔ órdenes ↔ cierre OP/consumo/entrega. Solo narrativa — sin código de cliente.",
      en: "Work integration: SOAP/ERP ↔ orders ↔ OP close/consumption/delivery. Narrative only — no client code.",
    },
    category: "experiencia",
    presentation: "lore",
    featured: false,
    year: "2026",
    role: {
      es: "Backend / integraciones",
      en: "Backend / integrations",
    },
    stack: ["NestJS", "TypeScript", "SOAP", "REST"],
    problem: {
      es: "Sistemas de planta y ERP no hablan el mismo idioma; el cierre operativo se rompe en el medio.",
      en: "Plant systems and ERP don't share a language; operational close breaks in the middle.",
    },
    decisions: [
      {
        es: "API puente con contratos claros por etapa del flujo",
        en: "Bridge API with clear contracts per flow stage",
      },
      {
        es: "Manejo de fallos y reintentos en integraciones frágiles",
        en: "Failure handling and retries on fragile integrations",
      },
    ],
    outcome: {
      es: "Ciclo de actualización ERP reducido de ~40 min a ~2 min. Case study sin exponer IP del cliente.",
      en: "ERP update cycle cut from ~40 min to ~2 min. Case study without exposing client IP.",
    },
    companyId: "sofinsas",
    disclaimer: {
      es: "Narrativa profesional. Código y datos del cliente no se publican.",
      en: "Professional narrative. Client code and data are not published.",
    },
  },
  {
    slug: "bioalert",
    title: "BioAlert+",
    tagline: {
      es: "WhatsApp agent sobre data de cafeterías escolares",
      en: "WhatsApp agent over school cafeteria data",
    },
    summary: {
      es: "Hackathon Caribe Arena: agente serverless que convierte transacciones de cafetería en alertas e insights para padres y operadores. Participación de equipo — sin premio.",
      en: "Caribe Arena hackathon: serverless agent turning cafeteria transactions into alerts and insights for parents and operators. Team participation — no award.",
    },
    category: "hackathon",
    presentation: "lore",
    featured: false,
    year: "2026",
    role: {
      es: "Colaborador — arquitectura / demos web",
      en: "Collaborator — architecture / web demos",
    },
    stack: ["AWS Lambda", "TypeScript", "PostgreSQL", "DynamoDB", "Claude"],
    problem: {
      es: "Millones de transacciones de cafeterías escolares no llegan al padre ni informan a la operación.",
      en: "Millions of school cafeteria transactions never reach parents or inform operations.",
    },
    decisions: [
      {
        es: "Agente conversacional en WhatsApp",
        en: "Conversational agent on WhatsApp",
      },
      {
        es: "Dashboard e insights cruzados padre↔cafetería",
        en: "Cross insights dashboard parent↔cafeteria",
      },
    ],
    outcome: {
      es: "Participación en Caribe Arena. Lore + repo del equipo. Demos S3 ya no públicas.",
      en: "Caribe Arena participation. Lore + team repo. S3 demos no longer public.",
    },
    repoUrl: "https://github.com/miguelnietoa/bioalert-caribetech-hackathon",
    preview: "/previews/bioalert.png",
  },
  {
    slug: "rhythm-elegance",
    title: "Rhythm Elegance",
    tagline: {
      es: "Landing craft para marca de ritmo y estilo",
      en: "Landing craft for a rhythm-and-style brand",
    },
    summary: {
      es: "Landing visual con tipografía expresiva, motion y una sola idea — referencia de frontend craft.",
      en: "Visual landing with expressive type, motion, and one idea — a frontend craft reference.",
    },
    category: "producto",
    presentation: "demo",
    featured: false,
    year: "2025",
    role: {
      es: "Frontend",
      en: "Frontend",
    },
    stack: ["React", "Vite", "Tailwind", "shadcn/ui"],
    problem: {
      es: "Necesidad de una superficie promocional con presencia, no un template genérico.",
      en: "Need for a promotional surface with presence — not a generic template.",
    },
    decisions: [
      {
        es: "Hero full-bleed con jerarquía tipográfica clara",
        en: "Full-bleed hero with clear type hierarchy",
      },
      {
        es: "Motion intencional en lugar de ruido decorativo",
        en: "Intentional motion instead of decorative noise",
      },
    ],
    outcome: {
      es: "Pieza de portfolio orientada a calidad visual.",
      en: "Portfolio piece focused on visual quality.",
    },
    demoUrl: "https://rhythm-elegance.vercel.app",
    repoUrl: "https://github.com/Jgmaza/rhythm-elegance-landing",
    preview: "/previews/rhythm-elegance.png",
  },
  {
    slug: "edunova",
    title: "EduNova",
    tagline: {
      es: "Premio ShadAI · 4.º general — en reconstrucción",
      en: "ShadAI award · 4th overall — under rebuild",
    },
    summary: {
      es: "BarranquillIA 2025: premio a mejor proyecto usando ShadAI (tecnología USA) y 4.º lugar en la clasificación general. Hoy la prioridad es recuperar el producto completo (back + front) para que vuelva a ser una plataforma educativa usable — no solo un artefacto de competencia.",
      en: "BarranquillIA 2025: award for best project using ShadAI (USA technology) and 4th place overall. Priority now is full product recovery (back + front) so it stands again as a usable learning platform — not only a competition artifact.",
    },
    category: "hackathon",
    presentation: "build",
    featured: true,
    year: "2025 → rebuild",
    role: {
      es: "Fullstack — hackathon award + product recovery",
      en: "Fullstack — hackathon award + product recovery",
    },
    stack: ["ShadAI", "Fullstack", "Product rebuild"],
    problem: {
      es: "El producto educativo premiado necesita volver a pie con stack completo recuperado.",
      en: "The award-winning education product needs to stand again with a recovered full stack.",
    },
    decisions: [
      {
        es: "Usar ShadAI como pieza central del producto en competencia",
        en: "Use ShadAI as a core product piece in competition",
      },
      {
        es: "Priorizar ubicar front + reconstruir sobre el back existente",
        en: "Prioritize locating the front + rebuild on the existing back",
      },
      {
        es: "Tratar el rebuild como producto, no solo como recuerdo de hackathon",
        en: "Treat the rebuild as a product, not only a hackathon memory",
      },
    ],
    outcome: {
      es: "BarranquillIA 2025: premio mejor proyecto con ShadAI + 4.º lugar general. Build en curso — backend local disponible; front pendiente de recuperación.",
      en: "BarranquillIA 2025: best project using ShadAI award + 4th place overall. Build in progress — local backend available; front pending recovery.",
    },
  },
  {
    slug: "ledger-one",
    title: "Ledger One",
    tagline: {
      es: "1er puesto — Interledger Hackathon",
      en: "1st place — Interledger Hackathon",
    },
    summary: {
      es: "Hackathon Interledger: primer puesto con Ledger One. Proyecto de equipo alrededor de open payments / Interledger — pitch + camino técnico en competencia, con follow-up de build en portafolio.",
      en: "Interledger hackathon: first place with Ledger One. Team project around open payments / Interledger — competition pitch + technical path, with portfolio follow-up build.",
    },
    category: "hackathon",
    presentation: "build",
    featured: true,
    year: "2026",
    role: {
      es: "Fullstack / product en equipo",
      en: "Fullstack / product in a team",
    },
    stack: ["TypeScript", "Nest/Node", "Open Payments", "Interledger"],
    problem: {
      es: "Cómo construir un producto creíble de pagos abiertos dentro de las reglas y el tiempo de un hackathon.",
      en: "How to ship a credible open-payments product under hackathon rules and time.",
    },
    decisions: [
      {
        es: "Scope de producto + demo path verificable en competencia",
        en: "Product scope + verifiable demo path in competition",
      },
      {
        es: "Base técnica reutilizable para demos y conversaciones post-evento",
        en: "Reusable technical base for post-event demos and product talks",
      },
    ],
    outcome: {
      es: "1er puesto en Interledger Hackathon. Caso documentado; build de follow-up en curso.",
      en: "1st place at Interledger Hackathon. Case documented; follow-up build in progress.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCompany(companyId: string): Project[] {
  return projects.filter((p) => p.companyId === companyId);
}
