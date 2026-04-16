import { ReactNode } from "react";

interface ArticleSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  id?: string;
}

const ArticleSection = ({ number, title, children, id }: ArticleSectionProps) => {
  const sectionId = id ?? `section-${number}`;
  return (
    <section
      id={sectionId}
      data-article-section
      data-section-number={number}
      data-section-title={title}
      className="relative scroll-mt-28 mb-16 md:mb-20"
    >
      <span
        aria-hidden="true"
        className="absolute -top-4 md:-top-8 -left-2 md:-left-6 font-mono font-semibold text-[96px] md:text-[140px] leading-none text-primary/[0.06] select-none pointer-events-none"
      >
        {number}
      </span>
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-6">
          {title}
        </h2>
        <div className="space-y-5 article-prose">{children}</div>
      </div>
    </section>
  );
};

export default ArticleSection;
