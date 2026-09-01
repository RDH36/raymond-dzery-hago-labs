import { profile } from "@/data/profile";

export function ContactEmail() {
  return (
    <a
      href={`mailto:${profile.email}`}
      data-track="contact_click"
      className="self-start text-[17px] font-medium text-ink underline decoration-hairline underline-offset-4 hover:decoration-seal"
    >
      {profile.email}
    </a>
  );
}
