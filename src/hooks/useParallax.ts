import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface UseParallaxOptions {
  /** Vertical speed intensity (0.05–1). Default 0.3 */
  speed?: number;
  /** Optional horizontal speed */
  speedX?: number;
  /** Scroll direction: "normal" follows scroll, "reverse" opposes it */
  direction?: "normal" | "reverse";
  /** Optional end scale (e.g. 1.05) */
  scale?: number;
  /** Optional opacity range [from, to] */
  opacity?: [number, number];
  /** ScrollTrigger start position. Default "top bottom" */
  start?: string;
  /** ScrollTrigger end position. Default "bottom top" */
  end?: string;
  /** Scrub smoothness (seconds). Default 1.5 */
  scrub?: number | boolean;
  /** Disable on mobile entirely */
  disableOnMobile?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    speed = 0.3,
    speedX,
    direction = "normal",
    scale,
    opacity,
    start = "top bottom",
    end = "bottom top",
    scrub = 1.5,
    disableOnMobile = false,
  } = options;

  const isMobile = useIsMobile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Mobile: disable or reduce
    if (isMobile && disableOnMobile) return;

    let cleanup: (() => void) | undefined;

    // Dynamic import to avoid SSR issues and keep bundle lean
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Responsive intensity multiplier
      const width = window.innerWidth;
      let multiplier = 1;
      if (width < 768) multiplier = 0.3; // mobile: 70% reduction
      else if (width < 1024) multiplier = 0.65; // tablet: 35% reduction

      const dir = direction === "reverse" ? -1 : 1;
      const yDistance = speed * 100 * dir * multiplier;
      const xDistance = speedX ? speedX * 100 * dir * multiplier : 0;

      // Build animation properties
      const toVars: gsap.TweenVars = {
        y: yDistance,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          // Add will-change during animation only
          onToggle: (self) => {
            if (self.isActive) {
              el.style.willChange = "transform";
            } else {
              el.style.willChange = "auto";
            }
          },
        },
      };

      if (xDistance !== 0) toVars.x = xDistance;
      if (scale) toVars.scale = scale;
      if (opacity) {
        // Set initial opacity and animate to target
        gsap.set(el, { opacity: opacity[0] });
        toVars.opacity = opacity[1];
      }

      const tween = gsap.to(el, toVars);

      cleanup = () => {
        tween.kill();
        const st = tween.scrollTrigger;
        if (st) st.kill();
        el.style.willChange = "auto";
      };
    };

    init();

    return () => {
      cleanup?.();
    };
  }, [speed, speedX, direction, scale, opacity, start, end, scrub, isMobile, disableOnMobile]);

  return ref;
}
