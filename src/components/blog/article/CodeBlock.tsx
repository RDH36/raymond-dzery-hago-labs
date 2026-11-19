"use client";

import { useEffect, useRef, useState } from "react";

/** Code with a Copy button. The "scroll sideways" hint only shows when the
    block really overflows, so desktop readers never see it for short lines. */
export function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const pre = useRef<HTMLPreElement>(null);
  const [label, setLabel] = useState("Copy");
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const el = pre.current;
    if (!el) return;
    const measure = () => setOverflow(el.scrollWidth > el.clientWidth + 1);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    return () => ro.disconnect();
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setLabel("Copied");
      setTimeout(() => setLabel("Copy"), 1600);
    } catch {
      setLabel("Select and copy");
    }
  }

  return (
    <div className="code">
      <div className="code-h">
        <span>{lang}</span>
        <button type="button" className="copy" onClick={copy}>
          {label}
        </button>
      </div>
      <pre ref={pre} tabIndex={0}>
        <code>{code}</code>
      </pre>
      {overflow ? <p className="hint">Scroll sideways to read the rest →</p> : null}
    </div>
  );
}
