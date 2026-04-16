import { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
}

const PullQuote = ({ children, attribution }: PullQuoteProps) => (
  <blockquote className="my-12 md:my-16 py-8 md:py-10 border-t border-b border-primary/20 text-center">
    <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground max-w-[36ch] mx-auto">
      {children}
    </p>
    {attribution && (
      <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {attribution}
      </footer>
    )}
  </blockquote>
);

export default PullQuote;
