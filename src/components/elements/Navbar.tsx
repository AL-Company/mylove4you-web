import Container from "../shared/Container";
import logo from "../../assets/favicon.ico";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";

const navItems = [
  { href: "#howto", text: "Como Fazer" },
  { href: "#prices", text: "Preços" },
  { href: "#about-us", text: "Sobre" },
  { href: "#questions", text: "Perguntas Frequentes" },
];

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-body/80 backdrop-blur-2xl">
      <Container className="py-4">
        <nav
          className="flex items-center justify-between gap-6"
          aria-label="Menu principal"
        >
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Voltar ao início"
          >
            <img
              src={logo}
              alt="Marca Loveyuu"
              className="h-10 w-10 rounded-full"
              loading="lazy"
            />
            <span className="font-display text-xl tracking-wide text-heading-1">
              Loveyuu
            </span>
          </a>
          <ul className="hidden gap-2 lg:flex">
            {navItems.map((item) => (
              <NavItem href={item.href} text={item.text} key={item.href} />
            ))}
          </ul>
          <div className="hidden lg:block">
            <BtnLink href="/checkout" size="md">
              Começar agora
            </BtnLink>
          </div>
          <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
            <BtnLink href="/checkout" size="md">
              Criar site
            </BtnLink>
          </div>
        </nav>
        <ul
          className="mt-3 flex gap-4 overflow-x-auto text-sm text-heading-3 lg:hidden"
          aria-label="Atalhos rápidos"
        >
          {navItems.map((item) => (
            <NavItem
              href={item.href}
              text={item.text}
              key={`mobile-${item.href}`}
            />
          ))}
        </ul>
      </Container>
    </header>
  );
};
