import { links } from "@/data/profile";

export function SocialLinks() {
  const live = links.filter((link) => link.href !== "");

  return (
    <ul className="soc" aria-label="Elsewhere">
      {live.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            rel="me noopener"
            target="_blank"
            data-track="social_click"
            data-project={link.label}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
