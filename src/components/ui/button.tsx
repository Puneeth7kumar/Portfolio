import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "glow";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-premium hover:opacity-95 focus-visible:ring-brand-purple/50",
  outline:
    "border border-white/20 bg-white/[0.02] text-text-high hover:bg-white/[0.06] focus-visible:ring-white/30",
  glow: "bg-brand-gradient text-white shadow-glow hover:shadow-[0_0_56px_rgba(139,92,246,0.45)] focus-visible:ring-brand-pink/50",
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "interactive inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition duration-300",
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900",
        "disabled:pointer-events-none disabled:opacity-60",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
