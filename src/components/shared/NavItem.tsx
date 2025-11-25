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
        className="duration-300 font-normal ease-linear hover: text-primary px-3"
      >
        {text}
      </a>
    </li>
  );
};
