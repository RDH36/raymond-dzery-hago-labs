import { Fragment } from "react";

import { ContactEmail } from "@/components/profile/ContactEmail";
import { story } from "@/data/profile";

export function Story() {
  return (
    <section aria-labelledby="why" className="flex flex-col gap-3">
      <h2 id="why" className="font-display text-[21px] font-semibold text-ink">
        {story.heading}
      </h2>
      {story.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={
            index === story.paragraphs.length - 1
              ? "text-[17px] leading-[1.7] text-slate text-pretty"
              : "text-[17px] leading-[1.7] text-body text-pretty"
          }
        >
          {withAthenixLink(paragraph)}
        </p>
      ))}
      <div className="flex pt-3">
        <ContactEmail />
      </div>
    </section>
  );
}

/** The middle paragraph carries an {athenix} slot rather than raw markup. */
function withAthenixLink(paragraph: string) {
  const [before, after] = paragraph.split("{athenix}");
  if (after === undefined) return paragraph;

  return (
    <Fragment>
      {before}
      <a
        href={story.athenix.href}
        target="_blank"
        rel="noopener"
        className="underline decoration-[#b9bdc3] underline-offset-[3px] hover:decoration-seal"
      >
        {story.athenix.label}
      </a>
      {after}
    </Fragment>
  );
}
