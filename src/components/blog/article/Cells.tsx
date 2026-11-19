/** One square per agent run: the first `on` are coloured. Decorative, the
    number is in the sentence next to it. */
export function Cells({ on, total }: { on: number; total: number }) {
  return (
    <div className="cells" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <i key={i} className={i < on ? "on" : undefined} />
      ))}
    </div>
  );
}
