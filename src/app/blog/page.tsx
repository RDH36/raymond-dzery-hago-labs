import Link from "next/link";

import { blogMetadata } from "@/components/blog/blogMetadata";
import { BlogShell } from "@/components/blog/BlogShell";

/* Same reason as the home page: the footer year is rendered at build time. */
export const revalidate = 86400;

const title = "Blog: building apps from Madagascar";
const description =
  "What Raymond Dzery Hago is building from Antananarivo, what breaks, and the real numbers. Starting with how he built a team of AI agents.";

export const metadata = blogMetadata("/blog", "website", title, description);

export default function BlogPage() {
  return (
    <BlogShell page="blog">
      <div className="col">
        <header className="list-h">
          <h1>Blog</h1>
          <p className="intro">What I&apos;m building, what breaks, and the real numbers.</p>
        </header>
        <ul className="entries">
          <li className="entry">
            <p className="lbl">
              <time dateTime="2026-11-19">19 November 2026</time> · 7 min read
            </p>
            <h2>
              <Link href="/blog/how-i-built-my-guild">How I built my Guild, a team of AI agents</Link>
            </h2>
            <p className="desc">
              Eleven AI agents with a name and one job each, running in Claude Code between my PC
              and a small server. What each one does, how a task moves through the team, and a
              short tutorial to build your own.
            </p>
            <p className="more">
              Read the article <span aria-hidden="true">→</span>
            </p>
          </li>
        </ul>
      </div>
    </BlogShell>
  );
}
