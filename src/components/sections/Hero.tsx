import Container from "../shared/Container";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center space-y-3 relative z-10">
          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-gradient-1">Surpreenda</span>
              <br />
              <span className="text-gradient-2">quem você ama</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4">
            <p className="text-lg sm:text-xl text-heading-3 leading-relaxed">
              Crie um contador dinâmico do tempo de relacionamento.
              <br />
              Compartilhe com quem você ama e faça um{" "}
              <span className="text-pink-400 font-semibold">
                presente surpresa inesquecível
              </span>
              .
            </p>
            <p className="text-base sm:text-lg text-muted flex items-center justify-center gap-2">
              Só apontar para o QR Code
              <span className="text-2xl">💕</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="/checkout"
              className="group relative inline-block px-8 py-4 bg-pink-gradient text-white text-lg font-semibold rounded-2xl shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Quero fazer meu site</span>
              <div className="absolute inset-0 bg-pink-gradient-hover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-rose-400/10 rounded-full blur-2xl"></div>
      </Container>
    </section>
  );
};
