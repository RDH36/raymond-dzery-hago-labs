import { ContactEmail } from "@/components/profile/ContactEmail";
import { withLinks } from "@/components/story/ProseLinks";
import { story, yearsShipping } from "@/data/profile";

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
          {withLinks(
            paragraph.replace("{years}", String(yearsShipping)),
            story.links,
            "story_link_click",
          )}
        </p>
      ))}
      <div className="flex pt-3">
        <ContactEmail />
      </div>
    </section>
  );
}
