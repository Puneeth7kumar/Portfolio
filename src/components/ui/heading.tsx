import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "display" | "h1" | "h2" | "h3";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  gradient?: boolean;
};

const levelClasses: Record<HeadingLevel, string> = {
  display: "ds-display",
  h1: "ds-h1",
  h2: "ds-h2",
  h3: "ds-h3",
};

export function Heading({
  level = "h2",
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = level === "display" ? "h1" : level;

  return (
    <Tag
      className={cn(
        levelClasses[level],
        "tracking-tight text-text-high",
        gradient && "text-gradient",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
