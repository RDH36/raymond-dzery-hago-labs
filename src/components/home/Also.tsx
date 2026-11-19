import { alsoLinks } from "@/data/projects";

export function Also() {
  return (
    <nav className="also" aria-label="Other projects">
      <span className="lbl">Also</span>
      {alsoLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener"
          data-track="also_click"
          data-project={link.label}
        >
          {link.label}
        </a>
      ))}
      <a
        className="gh"
        href="https://github.com/RDH36?tab=repositories"
        target="_blank"
        rel="noopener"
        data-track="also_click"
        data-project="GitHub"
      >
        More projects on GitHub
      </a>
    </nav>
  );
}
