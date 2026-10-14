"use client";

import { useState } from "react";
import { skills } from "@/content/profile";
import { useLocale } from "@/lib/locale";
import { SkillsExpandModal } from "@/components/SkillsExpandModal";

export function SkillBars() {
  const { copy } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
          {copy.about.skills}
        </h2>
        <button
          type="button"
          className="skills-expand-btn"
          onClick={() => setOpen(true)}
        >
          {copy.about.skillsExpand}
          <span aria-hidden>→</span>
        </button>
      </div>
      <ul className="mt-5 space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.label}
            className="grid gap-2 sm:grid-cols-[10rem_1fr_auto] sm:items-center"
          >
            <span className="text-sm text-ink">{skill.label}</span>
            <div className="flex gap-1.5" aria-label={`${skill.ticks} of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 ${
                    i < skill.ticks ? "bg-accent" : "bg-line"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
              {skill.tier}
            </span>
          </li>
        ))}
      </ul>

      <SkillsExpandModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
