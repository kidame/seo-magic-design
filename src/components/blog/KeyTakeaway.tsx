import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface KeyTakeawayProps {
  children: ReactNode;
}

const KeyTakeaway = ({ children }: KeyTakeawayProps) => (
  <aside
    role="note"
    className="mt-8 glass-card rounded-xl p-5 md:p-6 border-l-4 border-l-primary/60"
  >
    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-light mb-2 inline-flex items-center gap-2">
      <Sparkles size={12} aria-hidden="true" />
      À retenir
    </p>
    <p className="text-base text-foreground font-medium leading-relaxed">{children}</p>
  </aside>
);

export default KeyTakeaway;
