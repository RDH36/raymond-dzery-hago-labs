import { ContactEmail } from "@/components/profile/ContactEmail";
import { withLinks } from "@/components/story/ProseLinks";
import { story, yearsShipping } from "@/data/profile";

export function Story() {
  return (
    <section aria-labelledby="why" className="g txt">
      <h2 id="why" className="lbl">
        {story.heading}
      </h2>
      <div className="body">
        {story.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={index === story.paragraphs.length - 1 ? "soft" : undefined}
          >
            {withLinks(
              paragraph.replace("{years}", String(yearsShipping)),
              story.links,
              "story_link_click",
              "b",
            )}
          </p>
        ))}
        <ContactEmail />
      </div>
    </section>
  );
}
