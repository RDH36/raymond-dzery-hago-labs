import { withLinks } from "@/components/story/ProseLinks";
import { stack } from "@/data/profile";

export function Stack() {
  return (
    <section aria-labelledby="stack" className="g txt">
      <h2 id="stack" className="lbl">
        {stack.heading}
      </h2>
      <div className="body">
        <ul className="stack">
          {stack.lines.map((line) => (
            <li key={line}>{withLinks(line, stack.tools, "tech_click", "b")}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
