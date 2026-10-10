import type { Presentation } from "@/content/types";
import { presentationLabels } from "@/content/projects";
import type { Locale } from "@/content/types";

export function PresentationBadge({
  presentation,
  locale,
}: {
  presentation: Presentation;
  locale: Locale;
}) {
  const label = presentationLabels[presentation][locale];
  const cls =
    presentation === "demo"
      ? "badge-live"
      : presentation === "lore"
        ? "badge-lore"
        : "badge-build";

  return (
    <span
      className={`inline-flex border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] ${cls}`}
    >
      {label}
    </span>
  );
}
