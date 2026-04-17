"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light" | "mono";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl",
};

export function Logo({ className, variant = "default", size = "md" }: LogoProps) {
  const textColor =
    variant === "light" ? "text-[#F5F2ED]" : "text-[#0A0908]";
  const accentColor =
    variant === "light" ? "text-[#C84B31]" : "text-[#C84B31]";

  return (
    <span
      className={cn(
        "font-serif font-semibold tracking-tight leading-none select-none",
        sizes[size],
        textColor,
        className
      )}
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      Blackline
      <span className={cn("italic", accentColor)}>IA</span>
    </span>
  );
}
