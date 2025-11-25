
interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

export const BtnLink = ({ href, text, className = "BntLink " }: BtnLinkProps) => {
    return (
        <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border bg-cta cursor-pointer transform transition duration-300 hover:scale-102 ${className}`}>
            <span className="relative z-10 text-white">{text}</span></a>
    );
}