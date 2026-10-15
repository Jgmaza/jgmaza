import type { Locale, LocalizedString, Skill } from "./types";

export const RETRO_URL = "https://portfolio-nine-sand-57.vercel.app";
export const SITE_URL = "https://jgmaza.vercel.app";
export const GITHUB_URL = "https://github.com/Jgmaza";
export const CV_PATH = "/jose-maza-cv.pdf";

export const skills: Skill[] = [
  { label: "Next.js", ticks: 5, tier: "CORE" },
  { label: "TypeScript", ticks: 5, tier: "CORE" },
  { label: "React", ticks: 4, tier: "STRONG" },
  { label: "NestJS", ticks: 4, tier: "STRONG" },
  { label: "FastAPI", ticks: 3, tier: "STRONG" },
  { label: "Supabase", ticks: 3, tier: "STRONG" },
  { label: "Vercel", ticks: 3, tier: "STRONG" },
  { label: "AI / Agents", ticks: 2, tier: "FAMILIAR" },
];

export const profile = {
  name: "José Gabriel Maza Mendoza",
  shortName: "José Maza",
  handle: "Jgmaza",
  classTitle: {
    es: "Fullstack Product Engineer",
    en: "Fullstack Product Engineer",
  } satisfies LocalizedString,
  tagline: {
    es: "Problema → UI → API → deploy.",
    en: "Problem → UI → API → deploy.",
  } satisfies LocalizedString,
  headline: {
    es: "Construyo productos fullstack que se pueden tocar.",
    en: "I build fullstack products you can actually try.",
  } satisfies LocalizedString,
  supporting: {
    es: "Trabajo profesional, productos propios y hackathons — con demos cuando se puede y narrativa clara cuando no.",
    en: "Professional work, own products, and hackathons — with live demos when possible and clear narrative when not.",
  } satisfies LocalizedString,
  about: {
    es: "Soy José Gabriel Maza Mendoza, desarrollador fullstack con enfoque en product engineering. Trabajo conectando interfaces, APIs, datos e infraestructura para llevar soluciones desde la definición del problema hasta el despliegue. Mi experiencia abarca desarrollo web, integraciones entre sistemas, herramientas internas y asistentes de IA. Mi stack frontend principal es Next.js (más fuerte que React solo), junto con TypeScript, NestJS, FastAPI y Supabase según el proyecto. Aquí reúno experiencias profesionales, productos propios y hackathons (EduNova y Ledger One con reconocimiento; BioAlert+ y MediAgent como participación). Prefiero demos honestas, case studies sanitizados y lore cuando el código del cliente no se puede mostrar. Fuera del editor: música, gym y ajedrez.",
    en: "I'm José Gabriel Maza Mendoza, a full-stack developer focused on product engineering. I connect interfaces, APIs, data, and infrastructure to take solutions from problem definition to deployment. My experience spans web development, system integrations, internal tools, and AI assistants. My primary frontend stack is Next.js (stronger than React alone), alongside TypeScript, NestJS, FastAPI, and Supabase depending on the project. This site brings together professional work, own products, and hackathons (EduNova and Ledger One with awards; BioAlert+ and MediAgent as participation). I prefer honest demos, sanitized case studies, and lore when client code can't be shown. Outside the editor: music, gym, and chess.",
  } satisfies LocalizedString,
  links: {
    github: GITHUB_URL,
    cv: CV_PATH,
    retro: RETRO_URL,
    site: SITE_URL,
  },
  /** Drop the file at public/jose-maza.jpg to show it in the hero. */
  portrait: "/jose-maza.jpg",
};

export const uiCopy: Record<
  Locale,
  {
    nav: {
      work: string;
      projects: string;
      about: string;
      cv: string;
      github: string;
    };
    home: {
      ctaWork: string;
      ctaProjects: string;
      ctaAbout: string;
      ctaCv: string;
      featured: string;
      viewAll: string;
      portraitAlt: string;
    };
    work: {
      title: string;
      intro: string;
      ongoing: string;
      cleared: string;
      projects: string;
      chapters: string;
    };
    projects: {
      title: string;
      intro: string;
      all: string;
      empty: string;
    };
    projectDetail: {
      problem: string;
      decisions: string;
      outcome: string;
      stack: string;
      role: string;
      demo: string;
      source: string;
      back: string;
      related: string;
      previewDemo: string;
      previewSource: string;
      previewLore: string;
    };
    about: {
      title: string;
      skills: string;
      skillsExpand: string;
      skillsExpandEyebrow: string;
      skillsExpandTitle: string;
      skillsExpandIntro: string;
      skillsClose: string;
      skillsCount: string;
      skillsEstimateNote: string;
      skillsProject: string;
      skillsProjects: string;
      skillsRepo: string;
      skillsRepos: string;
      skillsViaCompanies: string;
      retro: string;
      retroHint: string;
    };
    footer: {
      retro: string;
      rights: string;
    };
  }
> = {
  es: {
    nav: {
      work: "Trayectoria",
      projects: "Proyectos",
      about: "Sobre mí",
      cv: "CV",
      github: "GitHub",
    },
    home: {
      ctaWork: "Ver trayectoria",
      ctaProjects: "Proyectos",
      ctaAbout: "Ver mi perfil",
      ctaCv: "Descargar CV",
      featured: "Destacados",
      viewAll: "Ver todos",
      portraitAlt: "Retrato de José Maza",
    },
    work: {
      title: "Trayectoria",
      intro:
        "Línea de tiempo profesional. Cada empresa puede abrir proyectos ligados, stack y contexto.",
      ongoing: "Actual",
      cleared: "Completado",
      projects: "Proyectos",
      chapters: "Capítulos",
    },
    projects: {
      title: "Proyectos",
      intro:
        "Filtra por categoría. LIVE es demo pública; LORE es narrativa; BUILD está en curso.",
      all: "Todos",
      empty: "No hay proyectos en esta categoría.",
    },
    projectDetail: {
      problem: "Problema",
      decisions: "Decisiones",
      outcome: "Resultado",
      stack: "Stack",
      role: "Rol",
      demo: "Abrir demo",
      source: "Código",
      back: "← Proyectos",
      related: "Empresa",
      previewDemo: "DEMO",
      previewSource: "SOURCE · github",
      previewLore: "LORE · sin demo pública",
    },
    about: {
      title: "Sobre mí",
      skills: "Stack",
      skillsExpand: "Ampliar skills",
      skillsExpandEyebrow: "Experiencia estimada",
      skillsExpandTitle: "Skills que he tocado",
      skillsExpandIntro:
        "Agregado desde proyectos, repos públicos y stacks de experiencia laboral. Los años son una estimación a partir de fechas y número de piezas — no un CV certificador.",
      skillsClose: "Cerrar",
      skillsCount: "tecnologías",
      skillsEstimateNote: "Estimación · proyectos + empresas",
      skillsProject: "proyecto",
      skillsProjects: "proyectos",
      skillsRepo: "repo",
      skillsRepos: "repos",
      skillsViaCompanies: "Vía experiencia en",
      retro: "Retro portfolio",
      retroHint: "Versión interactiva / game del catálogo.",
    },
    footer: {
      retro: "Retro portfolio",
      rights: "José Maza · Jgmaza",
    },
  },
  en: {
    nav: {
      work: "Experience",
      projects: "Projects",
      about: "About",
      cv: "CV",
      github: "GitHub",
    },
    home: {
      ctaWork: "View experience",
      ctaProjects: "Projects",
      ctaAbout: "View my profile",
      ctaCv: "Download CV",
      featured: "Featured",
      viewAll: "View all",
      portraitAlt: "Portrait of José Maza",
    },
    work: {
      title: "Experience",
      intro:
        "Career timeline. Each company can open linked projects, stack, and context.",
      ongoing: "Current",
      cleared: "Completed",
      projects: "Projects",
      chapters: "Chapters",
    },
    projects: {
      title: "Projects",
      intro:
        "Filter by category. LIVE is a public demo; LORE is narrative; BUILD is in progress.",
      all: "All",
      empty: "No projects in this category.",
    },
    projectDetail: {
      problem: "Problem",
      decisions: "Decisions",
      outcome: "Outcome",
      stack: "Stack",
      role: "Role",
      demo: "Open demo",
      source: "Source",
      back: "← Projects",
      related: "Company",
      previewDemo: "DEMO",
      previewSource: "SOURCE · github",
      previewLore: "LORE · no public demo",
    },
    about: {
      title: "About",
      skills: "Stack",
      skillsExpand: "Expand skills",
      skillsExpandEyebrow: "Estimated experience",
      skillsExpandTitle: "Skills I've touched",
      skillsExpandIntro:
        "Aggregated from projects, public repos, and work experience stacks. Years are an estimate from dates and piece count — not a certified resume claim.",
      skillsClose: "Close",
      skillsCount: "technologies",
      skillsEstimateNote: "Estimate · projects + companies",
      skillsProject: "project",
      skillsProjects: "projects",
      skillsRepo: "repo",
      skillsRepos: "repos",
      skillsViaCompanies: "Via experience at",
      retro: "Retro portfolio",
      retroHint: "Interactive / game version of the catalog.",
    },
    footer: {
      retro: "Retro portfolio",
      rights: "José Maza · Jgmaza",
    },
  },
};
