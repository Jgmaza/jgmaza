"use client";

import Link from "next/link";
import { DemoPreview } from "@/components/DemoPreview";
import { Reveal } from "@/components/Reveal";
import { PresentationBadge } from "@/components/PresentationBadge";
import { getCompany } from "@/content/companies";
import { categoryLabels } from "@/content/projects";
import type { Project } from "@/content/types";
import { useLocale } from "@/lib/locale";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, t, copy } = useLocale();
  const company = project.companyId ? getCompany(project.companyId) : undefined;

  return (
    <article className="page-shell py-16 sm:py-20">
      <Reveal>
        <Link
          href="/projects"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted hover:text-accent"
        >
          {copy.projectDetail.back}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <PresentationBadge presentation={project.presentation} locale={locale} />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            {categoryLabels[project.category][locale]}
          </span>
          <span className="font-mono text-[11px] text-ink-muted">{project.year}</span>
        </div>

        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted">{t(project.tagline)}</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
          {t(project.summary)}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary border px-5 py-2.5 text-sm"
            >
              {copy.projectDetail.demo}
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-line bg-surface px-5 py-2.5 text-sm text-ink hover:border-accent"
            >
              {copy.projectDetail.source}
            </a>
          ) : null}
        </div>

        {project.disclaimer ? (
          <p className="mt-6 max-w-2xl text-sm italic text-ink-muted">
            {t(project.disclaimer)}
          </p>
        ) : null}
      </Reveal>

      {project.preview || project.demoUrl || project.repoUrl ? (
        <Reveal delay={60} className="mt-12 max-w-3xl">
          <DemoPreview project={project} />
        </Reveal>
      ) : null}

      <Reveal delay={100} className="mt-14 grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {copy.projectDetail.problem}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            {t(project.problem)}
          </p>
        </section>
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {copy.projectDetail.outcome}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            {t(project.outcome)}
          </p>
        </section>
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {copy.projectDetail.decisions}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-muted">
            {project.decisions.map((d, i) => (
              <li key={i}>{t(d)}</li>
            ))}
          </ul>
        </section>
        <section className="space-y-6">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {copy.projectDetail.role}
            </h2>
            <p className="mt-3 text-[15px] text-ink-muted">{t(project.role)}</p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {copy.projectDetail.stack}
            </h2>
            <p className="mt-3 font-mono text-sm tracking-wide text-ink-muted">
              {project.stack.join(" · ")}
            </p>
          </div>
          {company ? (
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                {copy.projectDetail.related}
              </h2>
              <Link
                href="/work"
                className="mt-3 inline-block text-[15px] text-accent hover:underline"
              >
                {company.name} →
              </Link>
            </div>
          ) : null}
        </section>
      </Reveal>
    </article>
  );
}
