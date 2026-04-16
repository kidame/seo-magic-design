import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  className?: string;
  shineColor?: string[];
  duration?: number;
  borderWidth?: number;
  children?: ReactNode;
}

const ShineBorder = ({
  className,
  shineColor = ["#5B2ECC", "#8bd450", "#9D7DF0"],
  duration = 8,
  borderWidth = 1,
  children,
}: ShineBorderProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      style={
        {
          "--shine-border-width": `${borderWidth}px`,
          "--shine-duration": `${duration}s`,
          "--shine-color-1": shineColor[0],
          "--shine-color-2": shineColor[1] || shineColor[0],
          "--shine-color-3": shineColor[2] || shineColor[0],
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      >
        <div
          className="absolute inset-[-200%] animate-shine-rotate"
          style={{
            background: `conic-gradient(from 0deg, var(--shine-color-1), var(--shine-color-2), var(--shine-color-3), transparent, transparent, var(--shine-color-1))`,
          }}
        />
      </div>
      {children}
    </div>
  );
};

export { ShineBorder };
