import { companies } from "@/content/companies";
import { projects } from "@/content/projects";
import { skills as profileSkills } from "@/content/profile";
import type { Locale, SkillTier } from "@/content/types";

/** Merge aliases so the same tech isn't counted twice. */
const ALIASES: Record<string, string> = {
  "Supabase Auth": "Supabase",
  "Nest/Node": "NestJS",
  "Node/Express": "Node.js",
  "Vue 3": "Vue",
  "AI concepts": "AI / Agents",
  Tailwind: "Tailwind CSS",
};

/** Labels that are roles/products, not skills to list. */
const SKIP = new Set([
  "Fullstack",
  "Product rebuild",
  "APIs",
  "Commodo",
  "E-invoicing",
]);

export type SkillProjectRef = {
  slug: string;
  title: string;
  year: string;
  featured: boolean;
  hasRepo: boolean;
};

export type SkillExperience = {
  label: string;
  projectCount: number;
  companyCount: number;
  repoCount: number;
  estimatedYears: number;
  yearSpan: string;
  tier: SkillTier;
  ticks: 1 | 2 | 3 | 4 | 5;
  projects: SkillProjectRef[];
  companies: string[];
};

function canonicalize(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed || SKIP.has(trimmed)) return null;
  return ALIASES[trimmed] ?? trimmed;
}

function yearsFromText(text: string): number[] {
  const matches = text.match(/\d{4}/g);
  if (!matches) return [];
  return matches.map(Number).filter((y) => y >= 2018 && y <= 2030);
}

function estimateYears(opts: {
  years: number[];
  projectCount: number;
  companyCount: number;
  featuredCount: number;
}): number {
  const { years, projectCount, companyCount, featuredCount } = opts;
  const unique = [...new Set(years)].sort((a, b) => a - b);
  const span =
    unique.length >= 2
      ? unique[unique.length - 1] - unique[0] + 1
      : unique.length === 1
        ? 1
        : 0;

  const weighted =
    span * 0.55 +
    projectCount * 0.35 +
    companyCount * 0.45 +
    featuredCount * 0.2;

  const rounded = Math.round(Math.max(weighted, projectCount > 0 || companyCount > 0 ? 0.5 : 0) * 2) / 2;
  return Math.min(6, Math.max(0.5, rounded));
}

function tierFromScore(score: number, profileTier?: SkillTier): SkillTier {
  if (profileTier) return profileTier;
  if (score >= 4.2) return "CORE";
  if (score >= 2.2) return "STRONG";
  return "FAMILIAR";
}

function ticksFromYears(years: number, profileTicks?: 1 | 2 | 3 | 4 | 5): 1 | 2 | 3 | 4 | 5 {
  if (profileTicks) return profileTicks;
  if (years >= 4) return 5;
  if (years >= 3) return 4;
  if (years >= 2) return 3;
  if (years >= 1) return 2;
  return 1;
}

export function buildSkillExperience(): SkillExperience[] {
  type Acc = {
    projects: Map<string, SkillProjectRef>;
    companies: Set<string>;
    years: number[];
  };

  const map = new Map<string, Acc>();

  const touch = (raw: string, mutate: (acc: Acc) => void) => {
    const key = canonicalize(raw);
    if (!key) return;
    let acc = map.get(key);
    if (!acc) {
      acc = { projects: new Map(), companies: new Set(), years: [] };
      map.set(key, acc);
    }
    mutate(acc);
  };

  for (const p of projects) {
    const years = yearsFromText(p.year);
    for (const s of p.stack) {
      touch(s, (acc) => {
        acc.projects.set(p.slug, {
          slug: p.slug,
          title: p.title,
          year: p.year,
          featured: p.featured,
          hasRepo: Boolean(p.repoUrl),
        });
        acc.years.push(...years);
      });
    }
  }

  for (const c of companies) {
    const years = yearsFromText(c.dates.es);
    for (const s of c.stack) {
      touch(s, (acc) => {
        acc.companies.add(c.name);
        acc.years.push(...years);
      });
    }
    for (const ch of c.chapters ?? []) {
      const chYears = yearsFromText(ch.dates.es);
      for (const s of ch.stack) {
        touch(s, (acc) => {
          acc.companies.add(c.name);
          acc.years.push(...chYears);
        });
      }
    }
  }

  const profileByLabel = new Map(profileSkills.map((s) => [s.label, s]));

  const rows: SkillExperience[] = [...map.entries()].map(([label, acc]) => {
    const projectList = [...acc.projects.values()].sort((a, b) =>
      b.featured === a.featured ? a.title.localeCompare(b.title) : Number(b.featured) - Number(a.featured),
    );
    const featuredCount = projectList.filter((p) => p.featured).length;
    const companyList = [...acc.companies].sort();
    const yearList = [...new Set(acc.years)].sort((a, b) => a - b);
    const estimatedYears = estimateYears({
      years: yearList,
      projectCount: projectList.length,
      companyCount: companyList.length,
      featuredCount,
    });
    const profile = profileByLabel.get(label);
    const yearSpan =
      yearList.length >= 2
        ? `${yearList[0]}–${yearList[yearList.length - 1]}`
        : yearList.length === 1
          ? String(yearList[0])
          : "—";

    return {
      label,
      projectCount: projectList.length,
      companyCount: companyList.length,
      repoCount: projectList.filter((p) => p.hasRepo).length,
      estimatedYears,
      yearSpan,
      tier: tierFromScore(estimatedYears + projectList.length * 0.25, profile?.tier),
      ticks: ticksFromYears(estimatedYears, profile?.ticks),
      projects: projectList,
      companies: companyList,
    };
  });

  return rows.sort(
    (a, b) =>
      b.estimatedYears - a.estimatedYears ||
      b.projectCount - a.projectCount ||
      a.label.localeCompare(b.label),
  );
}

export function formatEstimatedYears(years: number, locale: Locale): string {
  const n = years % 1 === 0 ? String(years) : years.toFixed(1);
  if (locale === "es") {
    return years === 1 ? `~${n} año` : `~${n} años`;
  }
  return years === 1 ? `~${n} yr` : `~${n} yrs`;
}
