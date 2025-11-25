import Container from "../shared/Container";
import logo from "../../assets/favicon.ico";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";

const navItems = [
  { href: "#prices", text: "Preços" },
  { href: "#questions", text: "Perguntas Frequentes" },
  { href: "#howto", text: "Como Fazer" },
  { href: "#about-us", text: "Sobre" },
];

export const Navbar = () => {
  return (
    <header className="absolute inset-x-0 z-50 py-2 bg-body">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex items-center relative gap-3">
            <a href="/" className="relative flex itens-center gap-3">
              <img src={logo} alt="LoveU Logo" className="w-15 h-15"></img>
            </a>
            <div className="inline-flex text-lg font-semibold text-heading-1">
              LoveUU
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between
                 lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body
                 border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">

                    <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0
                     pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                        {navItems.map((item, key) => (<NavItem href={item.href} text={item.text} key={key} />))}
                    </ul>
                    <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                        <BtnLink text="Começar Agora" href="/checkout" className="" width={200} />
                    </div>
                </div>
            </nav>
        </Container>
    </header>
  );
};
