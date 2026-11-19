import Link from "next/link";

import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navClass =
  "text-[15px] text-slate underline decoration-hairline underline-offset-[3px] hover:text-ink hover:decoration-seal";

/** The home page's column, for the pages that hang off it. */
export function BlogShell({
  showBlogLink = false,
  children,
}: {
  showBlogLink?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[680px] px-6 pb-14 pt-6 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <nav aria-label="Main" className="flex gap-4">
          <Link href="/" className={navClass}>
            Home
          </Link>
          {showBlogLink ? (
            <Link href="/blog" className={navClass}>
              Blog
            </Link>
          ) : null}
        </nav>
        <ThemeToggle />
      </div>
      <main className="flex flex-col gap-10 pt-4">
        {children}
        <hr className="h-px w-full border-0 bg-rule" />
        <Footer />
      </main>
    </div>
  );
}
