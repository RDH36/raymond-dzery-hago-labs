import { Also } from "@/components/home/Also";
import { Header } from "@/components/home/Header";
import { HomeFooter } from "@/components/home/HomeFooter";
import { Hero } from "@/components/home/Hero";
import { MobileBar } from "@/components/home/MobileBar";
import { ProjectSection } from "@/components/home/ProjectSection";
import { Stack } from "@/components/story/Stack";
import { Story } from "@/components/story/Story";
import { projects } from "@/data/projects";
import "./home.css";

/* The footer year is rendered at build time, so the page re-generates once a
   day. Without this it would still read 2026 next January. */
export const revalidate = 86400;

export default function Home() {
  return (
    <div className="p1">
      <Header />
      <main id="top">
        <Hero />
        <div className="wrap" id="work">
          <div className="head">
            <p className="lbl">Things I build</p>
            <p className="lbl">{String(projects.length).padStart(2, "0")}</p>
          </div>
          {projects.map((project) => (
            <ProjectSection key={project.slug} project={project} />
          ))}
          <Also />
          <Stack />
          <Story />
        </div>
      </main>
      <HomeFooter />
      <MobileBar />
    </div>
  );
}
