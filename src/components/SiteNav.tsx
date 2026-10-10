"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";
import { useLocale } from "@/lib/locale";

const links = [
  { href: "/work", key: "work" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/about", key: "about" as const },
];

export function SiteNav() {
  const pathname = usePathname();
  const { locale, setLocale, copy } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="page-shell flex h-14 items-center justify-between gap-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg tracking-tight text-ink">
            {profile.shortName}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted group-hover:text-accent">
            {profile.handle}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                {copy.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 font-mono text-[11px] uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`btn-ghost px-1.5 py-0.5 ${locale === "es" ? "text-accent" : ""}`}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
            <span className="text-line">/</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`btn-ghost px-1.5 py-0.5 ${locale === "en" ? "text-accent" : ""}`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
          <a
            href={profile.links.cv}
            className="btn-ghost hidden px-2.5 py-1 text-sm sm:inline"
          >
            {copy.nav.cv}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost px-2.5 py-1 text-sm"
          >
            {copy.nav.github}
          </a>
        </div>
      </div>

      <nav className="page-shell flex gap-4 border-t border-line/40 py-2 sm:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm ${
              pathname.startsWith(link.href) ? "text-accent" : "text-ink-muted"
            }`}
          >
            {copy.nav[link.key]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
