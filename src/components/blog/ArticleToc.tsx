import { useEffect, useState } from "react";

type Section = { id: string; number: string; title: string };

const ArticleToc = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-article-section]")
    );
    const list = nodes.map((n) => ({
      id: n.id,
      number: n.dataset.sectionNumber ?? "",
      title: n.dataset.sectionTitle ?? n.querySelector("h2")?.textContent ?? "",
    }));
    setSections(list);

    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  if (sections.length === 0) return null;

  return (
    <aside
      className="hidden lg:block sticky top-28 self-start"
      aria-label="Sommaire de l'article"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
        Sommaire
      </p>
      <nav>
        <ol className="space-y-3 border-l border-border/60">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block pl-4 -ml-px border-l text-sm transition-colors ${
                  activeId === s.id
                    ? "border-primary text-primary-light"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.number && (
                  <span className="font-mono text-[10px] mr-2 opacity-70">{s.number}</span>
                )}
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export default ArticleToc;
