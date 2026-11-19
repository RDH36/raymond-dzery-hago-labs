import { BlogShell } from "@/components/blog/BlogShell";

export const legalUpdated = "19 November 2026";

/** Privacy and Terms share one frame: a date, a title, a short lead, then
    titled sections. The text itself stays in each page. */
export function LegalPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <BlogShell page="legal">
      <div className="col">
        <header className="leg-h">
          <p className="lbl">Last updated: {legalUpdated}</p>
          <h1>{title}</h1>
          <div className="prose lede">
            <p>{lede}</p>
          </div>
        </header>
        {children}
      </div>
    </BlogShell>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="lrow">
      <h2>{title}</h2>
      <div className="prose">{children}</div>
    </section>
  );
}
