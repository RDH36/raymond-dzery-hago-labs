import { links } from "@/data/profile";

export function SocialLinks() {
  const live = links.filter((link) => link.href !== "");

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-slate">
      {live.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            rel="me noopener"
            target="_blank"
            data-track="social_click"
            data-project={link.label}
            className="underline decoration-faint underline-offset-[3px] hover:text-ink hover:decoration-seal"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
