import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  contentClassName?: string;
};

export function SectionContainer({
  className,
  contentClassName,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section className={cn("relative w-full py-16 sm:py-20 lg:py-24 xl:py-28", className)} {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
