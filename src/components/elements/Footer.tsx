import Container from "../shared/Container";

const footerLinks = [
  { label: "Planos", href: "#prices" },
  { label: "Como funciona", href: "#howto" },
  { label: "Perguntas frequentes", href: "#questions" },
  { label: "Checkout", href: "/checkout" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-body-soft py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-heading-1">Loveyuu</p>
          <p className="mt-2 max-w-sm text-heading-3">
            Presentes digitais personalizados com contador de relacionamento,
            fotos e QR Code exclusivo.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-heading-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gradient-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-sm text-heading-3">
          © {new Date().getFullYear()} Loveyuu. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
};
