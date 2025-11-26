import type { ComponentProps } from "react";

interface NavItemProps extends ComponentProps<"li"> {
  href: string;
  text: string;
}

export const NavItem = ({ href, text, ...props }: NavItemProps) => {
  return (
    <li {...props}>
      <a
        href={href}
        className="px-3 text-sm font-medium text-heading-2 transition-colors duration-300 hover:text-gradient-primary"
      >
        {text}
      </a>
    </li>
  );
};
