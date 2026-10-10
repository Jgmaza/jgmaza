"use client";

import { Reveal } from "@/components/Reveal";
import { SkillBars } from "@/components/SkillBars";
import { profile } from "@/content/profile";
import { useLocale } from "@/lib/locale";

export default function AboutPage() {
  const { t, copy } = useLocale();

  return (
    <section className="page-shell py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          About
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {copy.about.title}
        </h1>
        <p className="mt-2 font-mono text-sm text-ink-muted">
          {profile.shortName} · {profile.handle}
        </p>
        <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
          {t(profile.about)}
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-14 max-w-2xl">
        <SkillBars />
      </Reveal>

      <Reveal delay={120} className="mt-16 max-w-xl border-t border-line/60 pt-10">
        <h2 className="font-display text-2xl tracking-tight">{copy.about.retro}</h2>
        <p className="mt-2 text-sm text-ink-muted">{copy.about.retroHint}</p>
        <a
          href={profile.links.retro}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm text-accent hover:underline"
        >
          {profile.links.retro.replace("https://", "")} →
        </a>
      </Reveal>
    </section>
  );
}
