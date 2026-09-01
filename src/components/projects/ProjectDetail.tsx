import { Button } from "@/components/ui/button";
import { Screenshots } from "@/components/projects/Screenshots";
import type { Project } from "@/data/projects";

const linkClass =
  "text-[15px] text-slate underline decoration-hairline underline-offset-[3px] hover:text-ink hover:decoration-seal";

export function ProjectDetail({ project }: { project: Project }) {
  const secondary = [
    ...(project.siteUrl
      ? [{ label: siteLabel(project.siteUrl), href: project.siteUrl }]
      : []),
    ...(project.extraLinks ?? []),
  ];

  return (
    <div className="flex flex-col gap-[18px] pt-1">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        {project.playStoreUrl ? (
          <Button asChild>
            <a href={project.playStoreUrl} target="_blank" rel="noopener">
              Get it on Google Play
            </a>
          </Button>
        ) : (
          <span className="text-[15px] text-muted">Not on Google Play yet.</span>
        )}
        {secondary.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            {link.label}
          </a>
        ))}
      </div>

      <Screenshots screenshots={project.screenshots} label={project.name} />

      <div className="flex flex-col gap-2.5">
        <p className="text-[17px] leading-[1.6] text-body text-pretty">
          {project.about}
        </p>
        <ul className="flex flex-col gap-2">
          {project.highlights.map((line) => (
            <li key={line} className="text-[16px] leading-[1.55] text-slate">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** mitsitsy.app reads better than "Site"; a vercel.app URL does not. */
function siteLabel(url: string) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return host.endsWith(".vercel.app") ? "Project site" : host;
}
