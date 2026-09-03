import { Fragment } from "react";

import { stack } from "@/data/profile";

export function Stack() {
  return (
    <section aria-labelledby="stack" className="flex flex-col gap-3">
      <h2 id="stack" className="font-display text-[21px] font-semibold text-ink">
        {stack.heading}
      </h2>
      <ul className="flex flex-col gap-2.5">
        {stack.lines.map((line) => (
          <li key={line} className="text-[17px] leading-[1.65] text-body">
            {withToolLinks(line)}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Turns "[Next.js] and [Expo]" into links, leaving the prose around them. */
function withToolLinks(line: string) {
  return line.split(/\[([^\]]+)\]/).map((part, index) => {
    const href = index % 2 === 1 ? stack.tools[part] : undefined;
    if (!href) return <Fragment key={index}>{part}</Fragment>;

    return (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener"
        data-track="tech_click"
        data-project={part}
        className="font-semibold text-ink underline decoration-hairline underline-offset-[3px] hover:decoration-seal"
      >
        {part}
      </a>
    );
  });
}
