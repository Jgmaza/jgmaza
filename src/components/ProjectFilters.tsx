"use client";

import { useMemo, useState } from "react";
import { projects, categoryLabels } from "@/content/projects";
import type { ProjectCategory } from "@/content/types";
import { useLocale } from "@/lib/locale";
import { ProjectRow } from "./ProjectRow";

const filters: Array<"all" | ProjectCategory> = [
  "all",
  "experiencia",
  "producto",
  "hackathon",
  "exploracion",
];

export function ProjectFilters() {
  const { locale, copy } = useLocale();
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const label =
            filter === "all" ? copy.projects.all : categoryLabels[filter][locale];
          const selected = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                selected
                  ? "btn-filter-active border"
                  : "border border-line text-ink-muted hover:border-accent hover:text-accent"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-muted">{copy.projects.empty}</p>
      ) : (
        <div>
          {filtered.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
