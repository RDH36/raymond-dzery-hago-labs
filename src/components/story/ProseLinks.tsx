import { Fragment } from "react";

const DEFAULT_CLASS =
  "font-semibold text-ink underline decoration-hairline underline-offset-[3px] hover:decoration-seal";

/**
 * Turns "[Expo] and [Unity]" into links, leaving the prose around them.
 * Shared so the tools and the story render links identically.
 */
export function withLinks(
  text: string,
  links: Record<string, string>,
  trackAs: string,
  className = DEFAULT_CLASS,
) {
  return text.split(/\[([^\]]+)\]/).map((part, index) => {
    const href = index % 2 === 1 ? links[part] : undefined;
    if (!href) return <Fragment key={index}>{part}</Fragment>;

    return (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener"
        data-track={trackAs}
        data-project={part}
        className={className}
      >
        {part}
      </a>
    );
  });
}
