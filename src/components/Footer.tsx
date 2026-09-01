import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer>
      <p className="text-[15px] text-muted">By {profile.name}</p>
    </footer>
  );
}
