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
    <BlogShell>
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[21px] font-semibold text-ink">Blog</h1>
        <p className="text-[17px] leading-[1.7] text-body text-pretty">
          What I&apos;m building, what breaks, and the real numbers.
        </p>
      </header>
      <Link
        href="/blog/how-i-built-my-guild"
        className="group -mx-3 flex flex-col gap-1.5 rounded-[10px] px-3 py-3 hover:bg-hover"
      >
        <span className="text-[14px] text-muted">November 2026 · 3 min read</span>
        <h2 className="font-display text-[19px] font-semibold text-ink underline-offset-[3px] decoration-seal group-hover:underline">
          How I built my Guild
        </h2>
        <p className="text-[16px] leading-[1.55] text-slate text-pretty">
          Ten AI agents, each with a name and one job. What they do, what broke,
          and why I still make the decisions.
        </p>
        <span className="text-[15px] text-slate underline decoration-hairline underline-offset-[3px] group-hover:text-ink group-hover:decoration-seal">
          Read the article <span aria-hidden="true">→</span>
        </span>
      </Link>
    </BlogShell>
  );
}
