import { AccordionAnchor } from "@/components/projects/AccordionAnchor";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { alsoLinks, projects } from "@/data/projects";

export function ProjectList() {
  return (
    <section aria-labelledby="things" className="flex flex-col gap-5">
      <h2 id="things" className="font-display text-[21px] font-semibold text-ink">
        Things I build
      </h2>
      <AccordionAnchor>
        <ul className="flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </AccordionAnchor>
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[16px]">
        <span className="text-[14px] text-muted">Also</span>
        {alsoLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener"
            data-track="also_link_click"
            data-project={link.label}
            className="whitespace-nowrap text-slate underline decoration-hairline underline-offset-[3px] hover:text-ink hover:decoration-seal"
          >
            {link.label}
          </a>
        ))}
      </p>
      <a
        href="https://github.com/RDH36?tab=repositories"
        target="_blank"
        rel="noopener"
        data-track="github_click"
        className="self-start text-[16px] text-slate underline decoration-hairline underline-offset-[3px] hover:text-ink hover:decoration-seal"
      >
        More projects on GitHub
      </a>
    </section>
  );
}
