const logos = [
  "Google Search Console",
  "Screaming Frog",
  "Semrush",
  "Ahrefs",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Infomaniak",
  "Vercel",
  "Cloudflare",
  "Core Web Vitals",
  "Schema.org",
  "Lighthouse",
  "PageSpeed",
];

const LogoTicker = () => {
  return (
    <section className="py-8 border-y border-border/30 overflow-hidden" aria-label="Technologies et outils utilisés">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-6 md:px-10 flex items-center"
            >
              <span className="text-sm md:text-base font-mono text-muted-foreground whitespace-nowrap tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
