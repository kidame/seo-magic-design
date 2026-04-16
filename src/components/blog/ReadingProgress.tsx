import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.querySelector("article#article-content");
    if (!target) return;
    let raf = 0;
    const update = () => {
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress((scrolled / Math.max(total, 1)) * 100);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-40 pointer-events-none"
      role="progressbar"
      aria-label="Progression de lecture"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
