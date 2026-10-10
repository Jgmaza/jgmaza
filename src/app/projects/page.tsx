"use client";

import { Reveal } from "@/components/Reveal";
import { ProjectFilters } from "@/components/ProjectFilters";
import { useLocale } from "@/lib/locale";

export default function ProjectsPage() {
  const { copy } = useLocale();

  return (
    <section className="page-shell py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Projects
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {copy.projects.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
          {copy.projects.intro}
        </p>
      </Reveal>
      <Reveal delay={80} className="mt-12">
        <ProjectFilters />
      </Reveal>
    </section>
  );
}
