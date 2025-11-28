import Container from "../shared/Container";
import { BtnLink } from "../shared/BtnLink";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero-gradient">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-500/20 blur-[150px]" />
      </div>
      <Container className="relative flex min-h-[85vh] flex-col items-center justify-center gap-10 py-24 text-center lg:py-32">
        <p className="eyebrow">Presente Digital</p>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gradient-primary">
            Eternize momentos especiais
          </span>{" "}
          com um site personalizado e exclusivo
        </h1>
        <p className="max-w-2xl text-lg text-heading-2 md:text-xl">
          Gere um contador do relacionamento, adicione fotos estilo Ghibli,
          escolha uma música especial e envie um QR Code para criar um momento
          inesquecível.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <BtnLink href="/checkout" size="lg">
            Criar meu site agora
          </BtnLink>
          <BtnLink href="#prices" variant="outline" size="lg">
            Ver planos
          </BtnLink>
        </div>
        <div className="grid w-full gap-6 text-left md:grid-cols-3">
          {[
            { label: "Sites entregues", value: "2.100+" },
            { label: "Avaliação média", value: "4.9/5" },
            { label: "Entrega", value: "Até 5 minutos via e-mail" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-heading-3">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-heading-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
