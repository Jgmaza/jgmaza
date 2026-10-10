"use client";

import { profile } from "@/content/profile";
import { useLocale } from "@/lib/locale";

export function SiteFooter() {
  const { copy } = useLocale();

  return (
    <footer className="mt-auto border-t border-line/60">
      <div className="page-shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs tracking-wide text-ink-muted">
          {copy.footer.rights}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-ink-muted">
          <a href={profile.links.cv} className="hover:text-accent">
            CV
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.links.retro}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            {copy.footer.retro}
          </a>
        </div>
      </div>
    </footer>
  );
}
