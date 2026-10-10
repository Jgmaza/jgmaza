import type { Company } from "./types";

/** Canonical order: most recent → oldest */
export const companies: Company[] = [
  {
    id: "ministerio-minas",
    name: "Ministerio de Minas",
    dates: {
      es: "Sep 2025 – presente",
      en: "Sep 2025 – present",
    },
    role: {
      es: "Fullstack / integraciones — sector público",
      en: "Fullstack / integrations — public sector",
    },
    summary: {
      es: "Varias líneas en paralelo, no solo mapeo de actores: (1) Integrador de servicios — gateway APISIX + FastAPI/Vue para interoperabilidad VUT con ARGO, REDAM, RUES, VUCE/X-Road; (2) SIVEEIC — vigilancia energética (Angular + Node + SQL Server), con foco fuerte en dosimetría unificada across API/BD/front; (3) Taiga corporativo — customizaciones LDAP, filtros Kanban y alertas; (4) Mapeo de actores — FastAPI + React (matriz interés-poder). GitLab institucional bajo jgmaza@minenergia.gov.co.",
      en: "Several parallel tracks, not only stakeholder mapping: (1) Service Integrator — APISIX gateway + FastAPI/Vue for VUT interoperability with ARGO, REDAM, RUES, VUCE/X-Road; (2) SIVEEIC — energy surveillance (Angular + Node + SQL Server), with a strong focus on unified dosimetry across API/DB/front; (3) Corporate Taiga — LDAP, Kanban filters, and due-date alerts; (4) Stakeholder mapping — FastAPI + React. Institutional GitLab under jgmaza@minenergia.gov.co.",
    },
    status: "ongoing",
    stack: [
      "FastAPI",
      "APISIX",
      "Vue 3",
      "Angular",
      "Node/Express",
      "React",
      "SQL Server",
      "PostgreSQL",
      "Kubernetes",
    ],
    projectSlugs: [
      "integrador-servicios",
      "siveeic",
      "taiga-mme",
      "stakeholder-matrix",
    ],
    note: {
      es: "Código e IPs institucionales no se publican. Demos sanitizadas: Integrador, SIVEEIC (Dose Ledger) y Stakeholder Matrix. Taiga sigue como lore.",
      en: "Institutional code and IPs are not published. Sanitized demos: Integrator, SIVEEIC (Dose Ledger), and Stakeholder Matrix. Taiga remains lore.",
    },
  },
  {
    id: "guarapo",
    name: "Guarapo / Cata",
    dates: {
      es: "Jun 2025 – Sep 2025",
      en: "Jun 2025 – Sep 2025",
    },
    role: {
      es: "Fullstack — tools internas",
      en: "Fullstack — internal tools",
    },
    summary: {
      es: "Apoyo a proyectos de clientes internacionales y a un producto nuevo con front, back y conceptos de AI. Tools internas: convertir necesidades concretas en interfaces que hablan con datos y procesos — Next y Supabase de UI a capa de datos. Narrativa profesional sin acceso al código del cliente.",
      en: "Supported international client work and a new product spanning front, back, and AI concepts. Internal tools: turn concrete needs into interfaces that talk to product data — Next and Supabase from UI to data. Professional narrative only; no client code access.",
    },
    status: "cleared",
    stack: ["Next.js", "Supabase", "TypeScript", "AI concepts"],
    projectSlugs: [],
    note: {
      es: "Lore only — sin demo pública ni repositorio de cliente.",
      en: "Lore only — no public demo or client repository.",
    },
  },
  {
    id: "clazz",
    name: "Clazz Dev",
    dates: {
      es: "Feb 2025 – May 2025",
      en: "Feb 2025 – May 2025",
    },
    role: {
      es: "AI automation / assistants",
      en: "AI automation / assistants",
    },
    summary: {
      es: "Automatización con AI y asistentes virtuales a medida: OpenAI, n8n, FastAPI y Python. Fine-tuning y prompts estructurados, integración de APIs externas y pipelines de automatización. El objetivo no era solo un chat — era poner un agente a trabajar dentro de un flujo real.",
      en: "AI-driven automation and custom virtual assistants: OpenAI, n8n, FastAPI, and Python. Fine-tuning, structured prompts, external APIs, and automation pipelines. The goal wasn't just a chat — it was putting an agent to work inside a real workflow.",
    },
    status: "cleared",
    stack: ["OpenAI", "n8n", "FastAPI", "Python"],
    projectSlugs: [],
    note: {
      es: "Tras un freelance operativo (Hermes) con el mismo círculo, incorporación al equipo Clazz.",
      en: "After a short operational freelance (Hermes) with the same circle, joined the Clazz team.",
    },
  },
  {
    id: "hermes",
    name: "Hermes",
    dates: {
      es: "Dic 2024 – Ene 2025",
      en: "Dec 2024 – Jan 2025",
    },
    role: {
      es: "Frontend freelance",
      en: "Frontend freelance",
    },
    summary: {
      es: "Interfaz operativa (React, tablas, flujos) llevada a deploy real en Vercel. Convertir requerimientos en una superficie usable para equipos. Mismas personas que luego formaron el equipo Clazz — puente freelance → startup.",
      en: "Operational interface (React, tables, flows) shipped to a real Vercel deploy. Requirements into a usable surface for teams. Same people who later formed the Clazz team — freelance bridge into the startup.",
    },
    status: "cleared",
    stack: ["React", "Vite", "TanStack Table", "Redux", "Vercel"],
    projectSlugs: ["hermes"],
  },
  {
    id: "icluster",
    name: "I-Cluster",
    dates: {
      es: "Jun 2024 – Ene 2025",
      en: "Jun 2024 – Jan 2025",
    },
    role: {
      es: "Fullstack — health / community",
      en: "Fullstack — health / community",
    },
    summary: {
      es: "Software para un proyecto de salud emocional en el municipio de Tolú. React + Express en equipo cross-functional, con foco en calidad y features que sostuvieran iniciativas de bienestar.",
      en: "Software for an emotional-health project in Tolú. React + Express in a cross-functional team, focused on quality and features that supported wellbeing initiatives.",
    },
    status: "cleared",
    stack: ["React", "Express", "JavaScript"],
    projectSlugs: [],
    note: {
      es: "Lore only — producto de comunidad sin demo pública.",
      en: "Lore only — community product without a public demo.",
    },
  },
  {
    id: "infinity-tech",
    name: "Infinity Tech Consulting",
    dates: {
      es: "Abr 2022 – Jun 2024",
      en: "Apr 2022 – Jun 2024",
    },
    role: {
      es: "Fullstack engineer",
      en: "Fullstack engineer",
    },
    summary: {
      es: "Años construyendo y manteniendo apps fullstack con Next.js, Flask y Prisma — front y back, deploy en AWS y Vercel. Modelado de datos, documentación de requerimientos, UIs responsive y flujo Git para calidad en proyectos complejos.",
      en: "Years building and maintaining fullstack apps with Next.js, Flask, and Prisma — front and back, deployed on AWS and Vercel. Data modeling, requirements docs, responsive UIs, and Git-based quality across complex work.",
    },
    status: "cleared",
    stack: ["Next.js", "Flask", "Prisma", "AWS", "Vercel"],
    projectSlugs: [],
    note: {
      es: "Lore agregado de agency — sin demos de clientes.",
      en: "Agency lore aggregate — no client demos.",
    },
  },
  {
    id: "sofinsas",
    name: "SofinSaS",
    dates: {
      es: "Nov 2021 – Ene 2022 · freelance reciente",
      en: "Nov 2021 – Jan 2022 · recent freelance",
    },
    role: {
      es: "Soporte → integraciones / MIOBOX",
      en: "Support → integrations / MIOBOX",
    },
    summary: {
      es: "Primer clear corporativo y retorno freelance reciente bajo el mismo empleador. Del cuidado de facturación electrónica al puente NestJS entre ERP y planta (MIOBOX).",
      en: "First corporate clear and a recent freelance return under the same employer. From electronic-invoicing support to a NestJS bridge between ERP and plant (MIOBOX).",
    },
    status: "ongoing",
    stack: ["NestJS", "SOAP", "REST", "ERP", "TypeScript"],
    projectSlugs: ["miobox"],
    chapters: [
      {
        id: "sofinsas-support",
        dates: {
          es: "Nov 2021 – Ene 2022",
          en: "Nov 2021 – Jan 2022",
        },
        title: {
          es: "Soporte · facturación electrónica",
          en: "Support · e-invoicing",
        },
        summary: {
          es: "Soporte sobre facturación electrónica y pruebas de código ERP para estabilizar producción. Aprendizaje de sistemas en vivo desde tickets, no solo desde el editor.",
          en: "Support on electronic invoicing and ERP code testing for production stability. Learned live systems from tickets — not only from the editor.",
        },
        stack: ["ERP", "E-invoicing", "QA"],
      },
      {
        id: "sofinsas-miobox",
        dates: {
          es: "Freelance reciente (~2 meses)",
          en: "Recent freelance (~2 months)",
        },
        title: {
          es: "MIOBOX Bridge · ERP ↔ planta",
          en: "MIOBOX Bridge · ERP ↔ plant",
        },
        summary: {
          es: "Puente NestJS: SOAP/ERP ↔ órdenes ↔ cierre OP/consumo/entrega. El reto es entender qué necesita cada lado cuando los sistemas no hablan el mismo idioma.",
          en: "NestJS bridge: SOAP/ERP ↔ orders ↔ operational close/consumption/delivery. The hard part is what each side needs when systems don't share a language.",
        },
        stack: ["NestJS", "SOAP", "REST", "TypeScript"],
      },
    ],
  },
];

export function getCompany(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
