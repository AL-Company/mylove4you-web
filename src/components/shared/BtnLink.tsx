import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type BtnVariant = "primary" | "outline" | "ghost";
type BtnSize = "md" | "lg";

interface BtnLinkProps extends ComponentProps<"a"> {
  variant?: BtnVariant;
  size?: BtnSize;
  fullWidth?: boolean;
}

const baseByVariant: Record<BtnVariant, string> = {
  primary: "btn-base btn-primary text-base",
  outline: "btn-base btn-outline text-base",
  ghost: "btn-base btn-ghost text-base",
};

const sizeByVariant: Record<BtnSize, string> = {
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

export const BtnLink = ({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={twMerge(
        baseByVariant[variant],
        sizeByVariant[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
};
