import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Profile } from "@/components/profile/Profile";
import { ProjectList } from "@/components/projects/ProjectList";
import { Stack } from "@/components/story/Stack";
import { Story } from "@/components/story/Story";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

/* The footer year is rendered at build time, so the page re-generates once a
   day. Without this it would still read 2026 next January. */
export const revalidate = 86400;

function Rule() {
  return <hr className="h-px w-full border-0 bg-rule" />;
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[680px] px-6 pb-14 pt-6 sm:px-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <main className="flex flex-col gap-10 pt-4">
        <Profile />
        <Rule />
        <ProjectList />
        <Rule />
        <Stack />
        <Rule />
        <Story />
        <Rule />
        <section aria-labelledby="blog" className="flex flex-col gap-3">
          <h2 id="blog" className="font-display text-[21px] font-semibold text-ink">
            <Link
              href="/blog"
              className="underline decoration-hairline underline-offset-[3px] hover:decoration-seal"
            >
              Blog
            </Link>
          </h2>
          <p className="text-[17px] leading-[1.7] text-body text-pretty">
            What I&apos;m building, what breaks, and the real numbers.
          </p>
        </section>
        <Rule />
        <Footer />
      </main>
    </div>
  );
}
