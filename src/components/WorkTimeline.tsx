"use client";

import { useState } from "react";
import Link from "next/link";
import { companies } from "@/content/companies";
import { getProjectsByCompany } from "@/content/projects";
import { useLocale } from "@/lib/locale";

export function WorkTimeline() {
  const { t, copy } = useLocale();
  const [openId, setOpenId] = useState<string | null>(companies[0]?.id ?? null);

  return (
    <ol className="relative ml-2 border-l border-line pl-8 sm:ml-3 sm:pl-10">
      {companies.map((company) => {
        const open = openId === company.id;
        const linked = getProjectsByCompany(company.id);

        return (
          <li
            key={company.id}
            className="timeline-node relative pb-10 last:pb-0"
            data-open={open ? "true" : "false"}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : company.id)}
              className="timeline-dot absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg transition-shadow sm:-left-[2.65rem]"
            />
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : company.id)}
              className="w-full text-left"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-2xl tracking-tight text-ink sm:text-[1.75rem]">
                  {company.name}
                </h2>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                    company.status === "ongoing" ? "text-accent" : "text-ink-muted"
                  }`}
                >
                  {company.status === "ongoing" ? copy.work.ongoing : copy.work.cleared}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs tracking-wide text-ink-muted">
                {t(company.dates)}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{t(company.role)}</p>
            </button>

            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <div className="mt-4 space-y-4 border-t border-line/50 pt-4">
                  <p className="max-w-2xl text-[15px] leading-relaxed text-ink-muted">
                    {t(company.summary)}
                  </p>

                  {company.note ? (
                    <p className="max-w-2xl text-sm italic text-ink-muted/90">
                      {t(company.note)}
                    </p>
                  ) : null}

                  <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                    {company.stack.join(" · ")}
                  </p>

                  {company.chapters?.length ? (
                    <div className="space-y-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                        {copy.work.chapters}
                      </p>
                      {company.chapters.map((chapter) => (
                        <div
                          key={chapter.id}
                          className="border-l-2 border-accent/30 pl-4"
                        >
                          <p className="font-medium text-ink">{t(chapter.title)}</p>
                          <p className="font-mono text-[11px] text-ink-muted">
                            {t(chapter.dates)}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                            {t(chapter.summary)}
                          </p>
                          <p className="mt-1 font-mono text-[11px] text-ink-muted/80">
                            {chapter.stack.join(" · ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {linked.length > 0 ? (
                    <div className="space-y-2">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                        {copy.work.projects}
                      </p>
                      <ul className="space-y-1">
                        {linked.map((project) => (
                          <li key={project.slug}>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="work-project-link"
                            >
                              {project.title} →
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
