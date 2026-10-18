import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "standard" | "wide";
}

export function Container({
  children,
  className = "",
  size = "standard",
  ...props
}: ContainerProps) {
  return (
    <div
      className={"container-shell " + (size === "wide" ? "container-shell--wide " : "") + className}
      {...props}
    >
      {children}
    </div>
  );
}
