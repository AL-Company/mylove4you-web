
interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({href, text} : NavItemProps) => {
    return (
        <li>
            <a href={href} className="duration-300 font-normal ease-linear hover: text-primary px-3">{text}</a>
        </li>
    );
}