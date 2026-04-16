import { memo, useMemo } from "react";

interface GradualBlurProps {
  position?: "top" | "bottom";
  strength?: number;
  height?: string;
  divCount?: number;
  exponential?: boolean;
  opacity?: number;
  target?: "parent" | "page";
  zIndex?: number;
  className?: string;
}

const getGradientDirection = (position: string) =>
  position === "top" ? "to top" : "to bottom";

function GradualBlur({
  position = "bottom",
  strength = 2,
  height = "6rem",
  divCount = 5,
  exponential = false,
  opacity = 1,
  target = "parent",
  zIndex = 1000,
  className = "",
}: GradualBlurProps) {
  const blurDivs = useMemo(() => {
    const divs = [];
    const increment = 100 / divCount;
    const direction = getGradientDirection(position);

    for (let i = 1; i <= divCount; i++) {
      const progress = i / divCount;

      let blurValue: number;
      if (exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * strength;
      } else {
        blurValue = 0.0625 * (progress * divCount + 1) * strength;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      divs.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: "0",
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity,
          }}
        />
      );
    }
    return divs;
  }, [position, strength, divCount, exponential, opacity]);

  const isPage = target === "page";

  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{
        position: isPage ? "fixed" : "absolute",
        [position]: 0,
        left: 0,
        right: 0,
        height,
        zIndex: isPage ? zIndex + 100 : zIndex,
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {blurDivs}
      </div>
    </div>
  );
}

export default memo(GradualBlur);
