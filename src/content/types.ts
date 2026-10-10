export type Locale = "es" | "en";

export type ProjectCategory =
  | "experiencia"
  | "producto"
  | "hackathon"
  | "exploracion";

export type Presentation = "demo" | "lore" | "build";

export type CompanyStatus = "ongoing" | "cleared";

export type SkillTier = "CORE" | "STRONG" | "FAMILIAR";

export type LocalizedString = Record<Locale, string>;

export type CompanyChapter = {
  id: string;
  dates: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  stack: string[];
};

export type Company = {
  id: string;
  name: string;
  dates: LocalizedString;
  role: LocalizedString;
  summary: LocalizedString;
  status: CompanyStatus;
  stack: string[];
  projectSlugs: string[];
  chapters?: CompanyChapter[];
  note?: LocalizedString;
};

export type Project = {
  slug: string;
  title: string;
  tagline: LocalizedString;
  summary: LocalizedString;
  category: ProjectCategory;
  presentation: Presentation;
  featured: boolean;
  year: string;
  role: LocalizedString;
  stack: string[];
  problem: LocalizedString;
  decisions: LocalizedString[];
  outcome: LocalizedString;
  companyId?: string;
  demoUrl?: string;
  repoUrl?: string;
  disclaimer?: LocalizedString;
  preview?: string;
  loreScreenshots?: string[];
};

export type Skill = {
  label: string;
  ticks: 1 | 2 | 3 | 4 | 5;
  tier: SkillTier;
};
