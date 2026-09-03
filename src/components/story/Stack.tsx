import { withLinks } from "@/components/story/ProseLinks";
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
            {withLinks(line, stack.tools, "tech_click")}
          </li>
        ))}
      </ul>
    </section>
  );
}
