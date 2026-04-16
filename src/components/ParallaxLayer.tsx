import { ReactNode } from "react";
import { useParallax, UseParallaxOptions } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps extends UseParallaxOptions {
  children?: ReactNode;
  className?: string;
  /** HTML tag to render. Default "div" */
  as?: keyof JSX.IntrinsicElements;
}

const ParallaxLayer = ({
  children,
  className,
  as: Tag = "div",
  ...parallaxOptions
}: ParallaxLayerProps) => {
  const ref = useParallax<HTMLDivElement>(parallaxOptions);

  return (
    // @ts-ignore: dynamic tag
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
};

export default ParallaxLayer;
