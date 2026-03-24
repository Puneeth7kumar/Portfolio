import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "interactive glass-card p-6 transition duration-300 hover:-translate-y-1 md:p-8",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:border before:border-border-subtle before:content-['']",
        "relative overflow-hidden",
        className
      )}
      {...props}
    />
  );
}
