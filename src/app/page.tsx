"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProjectRow } from "@/components/ProjectRow";
import { getFeaturedProjects } from "@/content/projects";
import { profile } from "@/content/profile";
import { useLocale } from "@/lib/locale";

export default function HomePage() {
  const { t, copy } = useLocale();
  const featured = getFeaturedProjects();
  const [portraitReady, setPortraitReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setPortraitReady(true);
    img.onerror = () => setPortraitReady(false);
    img.src = profile.portrait;
  }, []);

  return (
    <>
      <section className="page-shell flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-16 sm:py-20">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {profile.handle}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink">
                {profile.shortName}
              </h1>
              <p className="mt-3 font-mono text-sm tracking-wide text-ink-muted">
                {t(profile.classTitle)} · {t(profile.tagline)}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                {t(profile.headline)}
              </p>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-muted">
                {t(profile.supporting)}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="btn-primary border px-5 py-2.5 text-sm transition-opacity"
                >
                  {copy.home.ctaWork}
                </Link>
                <Link
                  href="/projects"
                  className="border border-line bg-surface px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent"
                >
                  {copy.home.ctaProjects}
                </Link>
                <Link
                  href="/about"
                  className="border border-line bg-surface px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent"
                >
                  {copy.home.ctaAbout}
                </Link>
                <a
                  href={profile.links.cv}
                  className="btn-ghost px-5 py-2.5 text-sm"
                >
                  {copy.home.ctaCv}
                </a>
              </div>
            </div>

            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden border border-line bg-[color-mix(in_srgb,var(--accent-soft)_70%,white)] lg:mx-0 lg:max-w-none">
              {portraitReady ? (
                // Optional asset: drop photo at public/jose-maza.jpg
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.portrait}
                  alt={copy.home.portraitAlt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
                  <span className="font-display text-4xl tracking-tight text-accent">
                    JM
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {profile.handle}
                  </span>
                </div>
              )}
            </figure>
          </div>
        </Reveal>
      </section>

      <section className="page-shell border-t border-line/60 pb-24 pt-14">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              {copy.home.featured}
            </h2>
            <Link
              href="/projects"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent hover:underline"
            >
              {copy.home.viewAll} →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div>
            {featured.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
