"use client";

import { useRef } from "react";

import type { Section } from "@/components/blog/article/sections";

/** Mobile "Contents": a button for the bottom bar and the sheet it opens.
    Backdrop click, the Close button or a link closes it. */
export function ContentsSheet({ sections }: { sections: Section[] }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className="bc" aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}>
        Contents
      </button>
      <dialog
        ref={dialog}
        className="sheet"
        aria-label="Contents"
        onClick={(e) => {
          const t = e.target as HTMLElement;
          if (t === dialog.current || t.closest("a,[data-close]")) dialog.current?.close();
        }}
      >
        <div className="sh-h">
          <p className="lbl">Contents</p>
          <button type="button" data-close>
            Close
          </button>
        </div>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </dialog>
    </>
  );
}
