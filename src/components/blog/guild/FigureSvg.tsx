import { architecture } from "@/components/blog/guild/svg-architecture";
import { cycle } from "@/components/blog/guild/svg-cycle";

const figures = { architecture, cycle };

/** Two inline drawings per figure, swapped at 640 px by CSS. Inline so they
    read the page's colour variables in light and dark. */
export function FigureSvg({ name, caption }: { name: keyof typeof figures; caption: string }) {
  const svg = figures[name];
  return (
    <figure className="fig fig-svg">
      <div className="svgw" dangerouslySetInnerHTML={{ __html: svg.desktop }} />
      <div className="svgm" dangerouslySetInnerHTML={{ __html: svg.mobile }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
