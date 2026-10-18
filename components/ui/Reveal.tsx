import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div
      className={"reveal " + className}
      style={{ animationDelay: delay + "s" } as CSSProperties}
    >
      {children}
    </div>
  );
}
