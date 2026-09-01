import Image from "next/image";

import { ProjectDetail } from "@/components/projects/ProjectDetail";
import type { Project } from "@/data/projects";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <li>
      <article>
      {/* Shared `name` makes this a native exclusive accordion: opening one row
          closes the others, with no client JavaScript at all. */}
      <details
        name="projects"
        id={project.slug}
        className="group -mx-3 rounded-[10px] px-3 open:bg-hover"
      >
        <summary className="group/row -mx-3 flex items-start gap-3.5 rounded-[10px] px-3 py-3 hover:bg-hover group-open:hover:bg-transparent">
          <Image
            src={project.thumbnail}
            alt=""
            width={60}
            height={60}
            className="size-15 shrink-0 rounded-[14px]"
          />
          <div className="flex flex-grow flex-col gap-1.5 pt-0.5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-[19px] font-semibold text-ink underline-offset-[3px] decoration-seal group-hover/row:underline group-open:underline">
                {project.name}
              </h3>
              <div className="flex shrink-0 items-center gap-3">
                {project.status === "soon" ? (
                  <span className="text-[14px] text-muted">soon</span>
                ) : null}
                <Chevron />
              </div>
            </div>
            <span className="text-[16px] leading-[1.55] text-slate text-pretty">
              {project.tagline}
            </span>
            <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-muted">
              {project.attributes.map((attribute) => (
                <li key={attribute}>{attribute}</li>
              ))}
            </ul>
          </div>
        </summary>
        <div className="pb-3">
          <ProjectDetail project={project} />
        </div>
      </details>
      </article>
    </li>
  );
}

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="block text-muted transition-transform group-open:rotate-180 group-open:text-slate"
    >
      <path d="M5 7 L9 11 L13 7" />
    </svg>
  );
}
