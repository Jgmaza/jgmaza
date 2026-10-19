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
      es: "Varias líneas en paralelo: (1) Integrador — gateway APISIX + FastAPI/Vue; superficie de interoperabilidad ampliada de 2 a 6 rutas/familias (nombres no públicos en CV); (2) SIVEEIC — dosimetría unificada (~629k HIST + ~61k NUEVO en pruebas) con CLI de repair/sync; (3) Taiga open source modificado — LDAP, Kanban, alertas; (4) Mapeo de actores — FastAPI + React. CI/CD a QA con Jenkins/Docker y guías de despliegue. Ritmo de cierre acelerado vs. el retraso previo del área.",
      en: "Several parallel tracks: (1) Integrator — APISIX + FastAPI/Vue gateway; interoperability surface grown from 2 to 6 route/families (names not listed on the CV); (2) SIVEEIC — unified dosimetry (~629k HIST + ~61k NUEVO in tests) with repair/sync CLI; (3) Modified open-source Taiga — LDAP, Kanban, alerts; (4) Stakeholder mapping — FastAPI + React. CI/CD to QA with Jenkins/Docker and deploy guides. Delivery closure accelerated vs. prior area delays.",
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
      "Docker",
      "Jenkins",
      "CI/CD",
      "Kubernetes",
    ],
    projectSlugs: [
      "integrador-servicios",
      "siveeic",
      "taiga-mme",
      "stakeholder-matrix",
    ],
    note: {
      es: "Código e IPs institucionales no se publican. Demos sanitizadas: Integrador, SIVEEIC y Stakeholder Matrix. Taiga es lore: open source modificado (sin demo pública).",
      en: "Institutional code and IPs are not published. Sanitized demos: Integrator, SIVEEIC, and Stakeholder Matrix. Taiga is lore: modified open source (no public demo).",
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
      es: "Apoyo a clientes internacionales y a un producto nuevo (front, back e IA). Al entrar, el equipo aceleró entregas y se puso al día con el cronograma; en el track visual/front mantuve las tareas de UI al corriente (Next + Supabase). Lore only — sin código de cliente.",
      en: "Supported international clients and a new product (front, back, AI). After joining, delivery accelerated and the schedule caught up; on the visual/front track I kept UI tasks current (Next + Supabase). Lore only — no client code.",
    },
    status: "cleared",
    stack: ["Next.js", "Supabase", "TypeScript", "AI concepts"],
    projectSlugs: [],
    note: {
      es: "Lore only — sin demo pública ni repositorio de cliente. Contexto de no-renovación omitido en CV.",
      en: "Lore only — no public demo or client repository. Non-renewal context omitted from the CV.",
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
      es: "Automatización con AI y asistentes a medida (OpenAI, n8n, FastAPI, Python) dentro de flujos reales de ventas/ops. Workflows de agente que redujeron la operación humana de ~7 a ~2 personas al gestionar el ciclo de ventas. Sin publicar el proyecto fallido ni métricas de dashboard no recordadas.",
      en: "AI automation and custom assistants (OpenAI, n8n, FastAPI, Python) inside real sales/ops workflows. Agent workflows that cut human ops from ~7 to ~2 people by owning the sales cycle. Failed flagship and unrecalled dashboard metrics are not published.",
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
      es: "Agency fullstack (Next.js, Flask, Prisma, AWS/Vercel). Pieza central: Commodo — fidelización tipo puntos que sigue viva; front en las 3 plataformas web del cliente. También un POS desde cero (~1 mes) con APIs Commodo, Siigo y consultas externas. Al inicio aprendí React en días para desbloquear un proyecto lento del equipo.",
      en: "Agency fullstack (Next.js, Flask, Prisma, AWS/Vercel). Core piece: Commodo — points-style loyalty still live; front across the client's 3 web platforms. Also a POS from scratch (~1 month) with Commodo, Siigo, and external lookup APIs. Early on, learned React in days to unblock a slow team project.",
    },
    status: "cleared",
    stack: ["Next.js", "Flask", "Prisma", "AWS", "Vercel", "Siigo"],
    projectSlugs: ["commodo", "infinity-pos"],
    note: {
      es: "Lore de agency — sin demos públicas de cliente.",
      en: "Agency lore — no public client demos.",
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
      es: "Primer clear corporativo y retorno freelance reciente bajo el mismo empleador. Del cuidado de facturación electrónica a MIOBOX: modificar/extender código C#/.NET existente y puente NestJS SOAP/REST entre ERP y planta.",
      en: "First corporate clear and a recent freelance return under the same employer. From electronic-invoicing support to MIOBOX: modify/extend existing C#/.NET and a NestJS SOAP/REST bridge between ERP and plant.",
    },
    status: "ongoing",
    stack: ["C#", ".NET", "NestJS", "SOAP", "REST", "ERP", "TypeScript"],
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
          es: "Código C#/.NET existente de MIOBOX modificado/extendido + puente NestJS SOAP/REST (ERP ↔ órdenes ↔ cierre OP/consumo/entrega). Ciclo de actualización ERP ~40 min → ~2 min (−95%).",
          en: "Existing MIOBOX C#/.NET modified/extended + NestJS SOAP/REST bridge (ERP ↔ orders ↔ OP close/consumption/delivery). ERP update cycle ~40 min → ~2 min (−95%).",
        },
        stack: ["C#", ".NET", "NestJS", "SOAP", "REST", "TypeScript"],
      },
    ],
  },
];

export function getCompany(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
