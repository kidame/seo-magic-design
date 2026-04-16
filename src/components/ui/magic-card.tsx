import { useCallback, useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  className?: string;
  children: ReactNode;
  glowFrom?: string;
  glowTo?: string;
  glowSize?: number;
}

const MagicCard = ({
  className,
  children,
  glowFrom = "#5B2ECC",
  glowTo = "#8bd450",
  glowSize = 250,
}: MagicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    cardRef.current?.style.setProperty("--glow-opacity", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current?.style.setProperty("--glow-opacity", "0");
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--glow-opacity": "0",
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity)",
          background: `radial-gradient(${glowSize}px circle at var(--mouse-x) var(--mouse-y), ${glowFrom}20, ${glowTo}10, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export { MagicCard };
