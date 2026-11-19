import Link from "next/link";

import { HeaderLogo } from "@/components/home/logo/HeaderLogo";
import { ThemeButton } from "@/components/theme/ThemeButton";

export function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="RDHLABS, home">
          <HeaderLogo />
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#top">Home</a>
          <Link href="/blog">Blog</Link>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
