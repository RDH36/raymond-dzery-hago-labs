import { TocSpy } from "@/components/blog/article/TocSpy";
import { sections } from "@/components/blog/article/sections";

/* Open on desktop, folded on a phone. The inline script runs before paint so
   there is no flash; the details element then belongs to the reader. */
const openOnDesktop =
  "if(matchMedia('(min-width: 901px)').matches)document.getElementById('toc').open=true";

export function Toc() {
  return (
    <>
      <details className="toc" id="toc" suppressHydrationWarning>
        <summary>
          <span className="lbl">Contents</span>
          <span className="cnt">{sections.length} parts</span>
        </summary>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </details>
      <script dangerouslySetInnerHTML={{ __html: openOnDesktop }} />
      <TocSpy />
    </>
  );
}
