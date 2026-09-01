import { Footer } from "@/components/Footer";
import { Profile } from "@/components/profile/Profile";
import { ProjectList } from "@/components/projects/ProjectList";
import { Story } from "@/components/story/Story";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

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
        <Story />
        <Rule />
        <Footer />
      </main>
    </div>
  );
}
