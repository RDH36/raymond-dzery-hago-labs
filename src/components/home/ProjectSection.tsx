import Image from "next/image";
import { Fragment } from "react";

import type { Project } from "@/data/projects";

/** One numbered catalogue row. The data-cta attributes feed the mobile bar. */
export function ProjectSection({ project: p }: { project: Project }) {
  return (
    <section
      className="g row"
      id={p.slug}
      data-cta={p.barLabel}
      data-href={p.primary.href}
    >
      <p className="no">{p.number}</p>
      <div className="copy">
        <div className="name">
          <Image src={p.thumbnail} alt="" width={96} height={96} loading="eager" />
          <h2>{p.name}</h2>
        </div>
        <p className="sum">{p.about}</p>
        <dl>
          {p.facts.map(([label, value]) => (
            <Fragment key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </Fragment>
          ))}
        </dl>
        <ul className="pts">
          {p.highlights.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="acts">
          <a
            className="btn"
            href={p.primary.href}
            target="_blank"
            rel="noopener"
            data-track="project_cta_click"
            data-project={p.name}
          >
            {p.primary.label}
          </a>
          {(p.extraLinks ?? []).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener"
              data-track="project_link_click"
              data-project={p.name}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="shots">
        <div className="set">
          {p.screenshots.map((s) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              sizes="(max-width: 900px) 30vw, 22vw"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
