"use client";

import Link from "next/link";
import type { Project } from "@/content/types";
import { categoryLabels } from "@/content/projects";
import { useLocale } from "@/lib/locale";
import { PresentationBadge } from "./PresentationBadge";

export function ProjectRow({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-row group flex items-start justify-between gap-4 border-b border-line/70 py-5"
    >
      <div className="min-w-0 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <PresentationBadge presentation={project.presentation} locale={locale} />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            {categoryLabels[project.category][locale]}
          </span>
          <span className="font-mono text-[11px] text-ink-muted">{project.year}</span>
        </div>
        <h3 className="project-title font-display text-xl tracking-tight text-ink sm:text-2xl">
          {project.title}
        </h3>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
          {t(project.tagline)}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-ink-muted/80">
          {project.stack.slice(0, 5).join(" · ")}
        </p>
      </div>
      <span
        aria-hidden
        className="mt-1 shrink-0 font-mono text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}
