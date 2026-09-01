import { AccordionAnchor } from "@/components/projects/AccordionAnchor";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { projects } from "@/data/projects";

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
      <a
        href="https://github.com/RDH36?tab=repositories"
        target="_blank"
        rel="noopener"
        className="self-start text-[16px] text-slate underline decoration-hairline underline-offset-[3px] hover:text-ink hover:decoration-seal"
      >
        More projects on GitHub
      </a>
    </section>
  );
}
