"use client";

import type { Project } from "@/content/types";
import { presentationLabels } from "@/content/projects";
import { useLocale } from "@/lib/locale";

function demoHost(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}

type DemoPreviewProps = {
  project: Project;
};

/** Browser-style screenshot frame with hover lift (same interaction as retro portfolio). */
export function DemoPreview({ project }: DemoPreviewProps) {
  const { locale, copy } = useLocale();
  const host = demoHost(project.demoUrl);
  const href = project.demoUrl ?? project.repoUrl;
  const hasShot = Boolean(project.preview);

  const caption = host
    ? `${copy.projectDetail.previewDemo} · ${host}`
    : project.repoUrl
      ? copy.projectDetail.previewSource
      : copy.projectDetail.previewLore;

  const frame = (
    <div className="demo-preview">
      <div className="demo-preview__chrome" aria-hidden>
        <span className="demo-preview__dot demo-preview__dot--r" />
        <span className="demo-preview__dot demo-preview__dot--y" />
        <span className="demo-preview__dot demo-preview__dot--g" />
        <span className="demo-preview__url">
          {host ?? (project.repoUrl ? "github.com" : "lore.build")}
        </span>
      </div>

      <div className="demo-preview__viewport">
        {hasShot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.preview}
            alt=""
            className="demo-preview__shot"
          />
        ) : (
          <div className="demo-preview__fallback">
            <span className="demo-preview__fallback-title">{project.title}</span>
            <span className="demo-preview__fallback-hint">
              {presentationLabels[project.presentation][locale]}
            </span>
          </div>
        )}
        <div className="demo-preview__veil" aria-hidden />
      </div>
    </div>
  );

  return (
    <div className="demo-preview-wrap">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="demo-preview-link"
          aria-label={
            project.demoUrl
              ? `${copy.projectDetail.demo}: ${project.title}`
              : `${copy.projectDetail.source}: ${project.title}`
          }
        >
          {frame}
        </a>
      ) : (
        frame
      )}
      <p className="demo-preview__caption">{caption}</p>
    </div>
  );
}
