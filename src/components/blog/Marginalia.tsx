import { ReactNode } from "react";

interface MarginaliaProps {
  label?: string;
  children: ReactNode;
}

const Marginalia = ({ label, children }: MarginaliaProps) => (
  <aside
    className="
      my-6 md:my-8
      lg:ml-auto lg:mr-0 lg:w-64 lg:max-w-[16rem]
      lg:border-l-2 lg:border-l-primary/40 lg:pl-4
      text-[13px] leading-snug
    "
  >
    {label && (
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary-light mb-1">
        {label}
      </p>
    )}
    <div className="text-muted-foreground italic">{children}</div>
  </aside>
);

export default Marginalia;
