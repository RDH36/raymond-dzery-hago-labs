import { blogMetadata } from "@/components/blog/blogMetadata";
import { BlogShell } from "@/components/blog/BlogShell";
import { withLinks } from "@/components/story/ProseLinks";

/* Same reason as the home page: the footer year is rendered at build time. */
export const revalidate = 86400;

const title = "How I built my Guild, a team of AI agents";
const description =
  "Ten AI agents with a name and one job each, running in Claude Code from Antananarivo. What the team does, what broke, and why I still decide.";

export const metadata = blogMetadata("/blog/how-i-built-my-guild", "article", title, description);

const members = [
  ["Eldrin", "Technical director, plans and briefs", "16 Oct"],
  ["Varek", "Developer, writes the code", "16 Oct"],
  ["Lyra", "Quality, writes the automated tests", "16 Oct"],
  ["Thorgal", "Varek's mentor, for the hard problems", "21 Oct"],
  ["Mira", "Tester, uses the app in a real browser", "26 Oct"],
  ["Corvin", "Pricing and retention", "28 Oct"],
  ["Fenwick", "Marketing, store listings, SEO", "28 Oct"],
  ["Orin", "Rereads our work, writes the lessons", "30 Oct"],
  ["Sorel", "Short video editor", "30 Oct"],
  ["Nyla", "Interface design, before any code", "31 Oct"],
];

const textClass = "text-[17px] leading-[1.7] text-body text-pretty";
const headingClass = "pt-3 font-display text-[19px] font-semibold text-ink";
const cellClass = "border-b border-rule py-2 pr-3 align-top last:pr-0";

export default function GuildArticle() {
  return (
    <BlogShell showBlogLink>
      <article className="flex flex-col gap-3">
        <header className="flex flex-col gap-3">
          <span className="text-[14px] text-muted">
            Blog · November 2026 · 3 min read
          </span>
          <h1 className="font-display text-[21px] font-semibold text-ink">
            How I built my Guild
          </h1>
          <p className="text-[19px] font-medium leading-[1.4] text-ink">
            Ten AI agents, each with a name and one job. I still make the
            decisions.
          </p>
        </header>

        <p className={textClass}>
          {withLinks(
            "I build my apps and games alone, from Antananarivo. Since 16 October 2026 I also have a team: ten AI agents running in [Claude Code], Anthropic's coding tool. I call the team the Guild. The agents call me Master, because someone has to decide, and that stays me.",
            { "Claude Code": "https://claude.com/product/claude-code" },
            "blog_link_click",
          )}
        </p>

        <h2 className={headingClass}>A name and one job</h2>
        <p className={textClass}>
          A general assistant does everything a little. So every member gets a
          name, a job, and limits. Varek, the developer, is the only one allowed
          to change a project&apos;s code. Lyra, in charge of quality, can write
          tests but never touches the app. Nobody grades their own work.
        </p>
        <table className="w-full border-collapse text-left text-[15px] leading-[1.45] text-body">
          <thead className="text-[14px] text-muted">
            <tr>
              <th scope="col" className={`${cellClass} font-normal`}>Member</th>
              <th scope="col" className={`${cellClass} font-normal`}>Job</th>
              <th scope="col" className={`${cellClass} font-normal`}>Joined in 2026</th>
            </tr>
          </thead>
          <tbody>
            {members.map(([name, job, joined]) => (
              <tr key={name}>
                <th scope="row" className={`${cellClass} font-semibold text-ink`}>
                  {name}
                </th>
                <td className={cellClass}>{job}</td>
                <td className={`${cellClass} text-slate`}>{joined}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className={headingClass}>Nothing is done until a real browser agrees</h2>
        <p className={textClass}>
          Tests can pass on a screen nobody can use. Since 26 October, nothing
          counts as finished until two things happen: Lyra&apos;s automated tests
          pass, then Mira, our tester, opens the real app in a browser, at phone
          and computer sizes, and tries to break it. Either one can send the work
          back.
        </p>

        <h2 className={headingClass}>My PC loses power. The Guild picks up again.</h2>
        <p className={textClass}>
          Orin, who keeps the team&apos;s records, counted about ten power cuts
          and overheating shutdowns in the 30 days to 30 October. Each one killed
          two or three work sessions. So the Guild now has a recovery routine:
          one command collects where everything stood, restarts what was cut, and
          reports back in six lines.
        </p>

        <h2 className={headingClass}>The agent that reads our mistakes</h2>
        <p className={textClass}>
          Orin also rereads the team&apos;s work and writes lessons into each
          member&apos;s memory. His last review found a problem nobody had
          noticed:
        </p>
        <p className="flex flex-col gap-1">
          <b className="font-display text-[21px] font-semibold text-ink">76 / 190</b>
          <span className="text-[16px] leading-[1.55] text-slate text-pretty">
            In 76 of 190 test runs, the tester&apos;s report failed to reach the
            agent waiting for it, between 30 October and 3 November.
          </span>
        </p>
        <p className={textClass}>
          He proposed a fix. We tested it, it failed, and we did not apply it.
          That still counts as the system working.
        </p>

        <h2 className={headingClass}>What the Guild can&apos;t do</h2>
        <p className={textClass}>
          The first design of this website was a wall of brightly painted
          objects. It passed a test with a first-time visitor, with no blockers.
          I looked at it and called it a kid&apos;s website, so we threw it away.
        </p>
        <p className={textClass}>
          A team can check that a thing works. Deciding whether it&apos;s good is
          still my job.
        </p>
      </article>
    </BlogShell>
  );
}
