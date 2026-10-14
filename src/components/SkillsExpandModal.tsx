"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef } from "react";
import { useLocale } from "@/lib/locale";
import {
  buildSkillExperience,
  formatEstimatedYears,
  type SkillExperience,
} from "@/lib/skillExperience";

type SkillsExpandModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SkillsExpandModal({ open, onClose }: SkillsExpandModalProps) {
  const { locale, copy } = useLocale();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const skills = useMemo(() => buildSkillExperience(), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="skills-modal" role="presentation">
      <button
        type="button"
        className="skills-modal__backdrop"
        aria-label={copy.about.skillsClose}
        onClick={onClose}
      />
      <div
        className="skills-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="skills-modal__header">
          <div>
            <p className="skills-modal__eyebrow">{copy.about.skillsExpandEyebrow}</p>
            <h2 id={titleId} className="skills-modal__title">
              {copy.about.skillsExpandTitle}
            </h2>
            <p className="skills-modal__intro">{copy.about.skillsExpandIntro}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="skills-modal__close"
            onClick={onClose}
          >
            {copy.about.skillsClose}
          </button>
        </header>

        <div className="skills-modal__meta">
          <span>
            {skills.length} {copy.about.skillsCount}
          </span>
          <span>{copy.about.skillsEstimateNote}</span>
        </div>

        <ul className="skills-modal__list">
          {skills.map((skill, index) => (
            <SkillRow key={skill.label} skill={skill} index={index} locale={locale} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillRow({
  skill,
  index,
  locale,
}: {
  skill: SkillExperience;
  index: number;
  locale: "es" | "en";
}) {
  const { copy } = useLocale();
  const delay = Math.min(index * 28, 420);

  return (
    <li className="skills-modal__row" style={{ animationDelay: `${delay}ms` }}>
      <div className="skills-modal__row-top">
        <div className="min-w-0">
          <div className="skills-modal__label-row">
            <span className="skills-modal__label">{skill.label}</span>
            <span className="skills-modal__tier">{skill.tier}</span>
          </div>
          <p className="skills-modal__stats">
            <strong>{formatEstimatedYears(skill.estimatedYears, locale)}</strong>
            <span aria-hidden>·</span>
            <span>
              {skill.projectCount}{" "}
              {skill.projectCount === 1
                ? copy.about.skillsProject
                : copy.about.skillsProjects}
            </span>
            {skill.repoCount > 0 ? (
              <>
                <span aria-hidden>·</span>
                <span>
                  {skill.repoCount}{" "}
                  {skill.repoCount === 1 ? copy.about.skillsRepo : copy.about.skillsRepos}
                </span>
              </>
            ) : null}
            {skill.yearSpan !== "—" ? (
              <>
                <span aria-hidden>·</span>
                <span>{skill.yearSpan}</span>
              </>
            ) : null}
          </p>
        </div>
        <div className="skills-modal__ticks" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`skills-modal__tick ${i < skill.ticks ? "is-on" : ""}`}
            />
          ))}
        </div>
      </div>

      {skill.projects.length > 0 ? (
        <div className="skills-modal__chips">
          {skill.projects.slice(0, 5).map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="skills-modal__chip">
              {p.title}
            </Link>
          ))}
          {skill.projects.length > 5 ? (
            <span className="skills-modal__chip skills-modal__chip--more">
              +{skill.projects.length - 5}
            </span>
          ) : null}
        </div>
      ) : skill.companies.length > 0 ? (
        <p className="skills-modal__companies">
          {copy.about.skillsViaCompanies}: {skill.companies.join(", ")}
        </p>
      ) : null}
    </li>
  );
}
