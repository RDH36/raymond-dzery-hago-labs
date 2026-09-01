"use client";

import { useRef, useState } from "react";

/** Owns the scrolling and the two buttons. The images themselves arrive as
    children from a server component, so they stay in the served HTML. */
export function ScreenshotStrip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const strip = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = (direction: 1 | -1) => {
    const node = strip.current;
    if (!node) return;
    const card = node.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + 12 : node.clientWidth * 0.8;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({ left: distance * direction, behavior: reduced ? "auto" : "smooth" });
  };

  const onScroll = () => {
    const node = strip.current;
    if (!node) return;
    setAtStart(node.scrollLeft <= 1);
    setAtEnd(node.scrollLeft + node.clientWidth >= node.scrollWidth - 1);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end gap-1.5">
        <StepButton
          label={`Previous ${label} screenshot`}
          disabled={atStart}
          onClick={() => step(-1)}
          path="M11 4 L6 9 L11 14"
        />
        <StepButton
          label={`Next ${label} screenshot`}
          disabled={atEnd}
          onClick={() => step(1)}
          path="M7 4 L12 9 L7 14"
        />
      </div>
      <ul
        ref={strip}
        onScroll={onScroll}
        tabIndex={0}
        aria-label={`${label} screenshots`}
        className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-3 px-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}

function StepButton({
  label,
  path,
  disabled,
  onClick,
}: {
  label: string;
  path: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded-full border border-rule text-slate hover:border-hairline hover:text-ink disabled:opacity-35 disabled:hover:border-rule disabled:hover:text-slate"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </button>
  );
}
