import { profile } from "@/data/profile";

export function ContactEmail() {
  return (
    <a className="mail" href={`mailto:${profile.email}`} data-track="contact_click">
      {profile.email}
    </a>
  );
}
