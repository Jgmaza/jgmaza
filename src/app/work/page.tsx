"use client";

import { Reveal } from "@/components/Reveal";
import { WorkTimeline } from "@/components/WorkTimeline";
import { useLocale } from "@/lib/locale";

export default function WorkPage() {
  const { copy } = useLocale();

  return (
    <section className="page-shell py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Work
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {copy.work.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
          {copy.work.intro}
        </p>
      </Reveal>
      <Reveal delay={100} className="mt-14">
        <WorkTimeline />
      </Reveal>
    </section>
  );
}
