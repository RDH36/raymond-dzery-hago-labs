import { stack } from "@/data/profile";

export function Stack() {
  return (
    <section aria-labelledby="stack" className="flex flex-col gap-3">
      <h2 id="stack" className="font-display text-[21px] font-semibold text-ink">
        {stack.heading}
      </h2>
      <ul className="flex flex-col gap-2">
        {stack.lines.map((line) => (
          <li key={line} className="text-[16px] leading-[1.55] text-slate">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
