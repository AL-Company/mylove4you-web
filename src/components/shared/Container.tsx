import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends ComponentProps<"div"> {
  className?: string;
}

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(
        "mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5",
        className
      )}
      {...props}
    />
  );
}
