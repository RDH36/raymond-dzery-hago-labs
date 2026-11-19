import { Header } from "@/components/home/Header";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MobileBar } from "@/components/home/MobileBar";
import type { Section } from "@/components/blog/article/sections";
import "@/app/home.css";
import "@/app/blog/blog.css";

/** The home page's frame (header, footer, thumb bar) around a single reading
    column. `.d2` scopes the blog rules on top of the home page's `.p1`. */
export function BlogShell({
  page,
  sections,
  children,
}: {
  page: "blog" | "legal";
  sections?: Section[];
  children: React.ReactNode;
}) {
  return (
    <div className="p1 d2" id="top">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header page={page} />
      <main id="main">{children}</main>
      <HomeFooter />
      <MobileBar page={page} sections={sections} />
    </div>
  );
}
