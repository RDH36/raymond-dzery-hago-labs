import "@/app/blog/article.css";
import { ArticleCta } from "@/components/blog/article/ArticleCta";
import { sections } from "@/components/blog/article/sections";
import { Toc } from "@/components/blog/article/Toc";
import { blogMetadata } from "@/components/blog/blogMetadata";
import { BlogShell } from "@/components/blog/BlogShell";
import { PartOne } from "@/components/blog/guild/PartOne";
import { PartThree } from "@/components/blog/guild/PartThree";
import { PartTwo } from "@/components/blog/guild/PartTwo";
import { articleNode } from "@/lib/jsonld";

/* Same reason as the home page: the footer year is rendered at build time. */
export const revalidate = 86400;

const path = "/blog/how-i-built-my-guild";
const title = "How I built my Guild, a team of AI agents";
const description =
  "Eleven AI agents with a name and one job each, running in Claude Code between my PC and a small server. What each one does, how a task moves through the team, and a short tutorial to build your own.";

export const metadata = blogMetadata(path, "article", title, description);

const jsonLd = articleNode({
  path,
  headline: title,
  description,
  published: "2026-11-19",
  modified: "2026-11-19",
});

export default function GuildArticle() {
  return (
    <BlogShell page="blog" sections={sections}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="post col">
        <header className="post-h">
          <p className="lbl meta">
            Blog · <time dateTime="2026-11-19">19 November 2026</time> · 7 min read
          </p>
          <h1>
            How I built <span>my Guild</span>
          </h1>
          <p className="chapo">
            Eleven AI agents, each with a name and one job. One of them lives on a server and
            answers me on Discord. I still make the decisions.
          </p>
        </header>
        <Toc />
        <div className="prose">
          <PartOne />
          <PartTwo />
          <PartThree />
        </div>
        <ArticleCta />
      </article>
    </BlogShell>
  );
}
