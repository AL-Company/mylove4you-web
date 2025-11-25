
interface BtnLinkProps {
    href: string;
    text: string;
    width: number;
    className?: string;
}

export const BtnLink = ({ href, text, className = "BntLink ", width, ...props }: BtnLinkProps) => {
    return (
        <a href={href}
            style={{ width }}
            className={`
            px-6 py-3 rounded-full outline-none relative overflow-hidden border bg-cta cursor-pointer transform transition duration-300 hover:scale-102  ${className}`}
            {...props}
            >
            
            <span className="flex align-center justify-center relative z-10 text-white">{text}</span>
        </a>
    );
}