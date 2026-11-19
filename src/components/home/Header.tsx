import Link from "next/link";

import { HeaderLogo } from "@/components/home/logo/HeaderLogo";
import { ThemeButton } from "@/components/theme/ThemeButton";

/** `page` is set on the pages that hang off the home page (blog, legal); the
    home page itself passes nothing and keeps its in-page "#top" links. */
export function Header({ page }: { page?: "blog" | "legal" }) {
  return (
    <header className="top">
      <div className="wrap">
        {page ? (
          <Link className="logo" href="/" aria-label="RDHLABS, home">
            <HeaderLogo />
          </Link>
        ) : (
          <a className="logo" href="#top" aria-label="RDHLABS, home">
            <HeaderLogo />
          </a>
        )}
        <nav className="nav" aria-label="Main">
          {page ? <Link href="/">Home</Link> : <a href="#top">Home</a>}
          <Link href="/blog" aria-current={page === "blog" ? "page" : undefined}>
            Blog
          </Link>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
