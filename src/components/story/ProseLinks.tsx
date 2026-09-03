import { Fragment } from "react";

/**
 * Turns "[Expo] and [Unity]" into links, leaving the prose around them.
 * Shared so the tools and the story render links identically.
 */
export function withLinks(
  text: string,
  links: Record<string, string>,
  trackAs: string,
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
        className="font-semibold text-ink underline decoration-hairline underline-offset-[3px] hover:decoration-seal"
      >
        {part}
      </a>
    );
  });
}
