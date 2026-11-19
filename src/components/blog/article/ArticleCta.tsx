import { links, profile } from "@/data/profile";

const linkedin = links.find((l) => l.label === "LinkedIn")?.href ?? "";

export function ArticleCta() {
  return (
    <aside className="cta" aria-labelledby="cta-t">
      <h2 id="cta-t">Want help setting up your own guild?</h2>
      <div className="cta-b">
        <p>
          I can help you set up agents, briefs, memory and checks for your own projects, in Claude
          Code. Write to me and tell me what you build.
        </p>
        <div className="acts">
          <a className="btn" href={`mailto:${profile.email}`}>
            Email me
          </a>
          {linkedin ? (
            <a className="ln" href={linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          ) : null}
        </div>
        <p className="addr">{profile.email}</p>
      </div>
    </aside>
  );
}
