import Container from "../shared/Container";

export const Price = () => {
  return (
    <section id="prices" className="mt-5 relative overflow-hidden bg-hero-gradient py-15 ">
      <Container>
        <div className="text-center mb-5">
          <h2 className="flex flex-center justify-center mt-auto">
            Preços
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 flex flex-col mt-5 relative overflow-hidden bg-hero-gradient py-15 ">
            <div className="flex items-start justify-between mb-8 mt-4">
              <div>
                <h3 className="text-heading-2 text-xl mb-2">Basic</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-heading-1">
                    R$39,0
                  </span>
                  <span className="text-2xl text-heading-3 line-through">
                    R$35
                  </span>
                </div>
              </div>
              <div className="text-6xl">🧸</div>
            </div>

            <div className="border-t border-box-border mb-6"></div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-heading-2">
                <span className="text-pink-500 text-xl">✓</span>
                <span>1 ano de acesso</span>
              </li>
              <li className="flex items-center gap-3 text-heading-2">
                <span className="text-pink-500 text-xl">✓</span>
                <span>1 foto</span>
              </li>
              <li className="flex items-center gap-3 text-heading-3">
                <span className="text-red-500 text-xl">✗</span>
                <span>Sem música</span>
              </li>
            </ul>


            <button className="w-full bg-[var(--rosa-claro)] hover:bg-[var(--rosa-magenta)] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-pink-700/40 cursor-pointer">
              Quero fazer meu site
            </button>
          </div>


          <div className="rounded-2xl p-8 flex flex-col mt-5 relative overflow-hidden bg-hero-gradient py-15 ">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-pink-gradient px-6 py-2 rounded-full flex items-center gap-2">
                <span className="mt-5 text-white text-sm font-bold">
                  ⭐ MAIS ESCOLHIDO
                </span>
              </div>
            </div>


            <div className="flex items-start justify-between mb-8 mt-4">
              <div>
                <h3 className="text-heading-2 text-xl mb-2">Premium</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-heading-1">
                    R$39,90
                  </span>
                  <span className="text-2xl text-heading-3 line-through">
                    R$50
                  </span>
                </div>
              </div>
              <div className="text-6xl">💝</div>
            </div>


            <div className="border-t border-pink-500/30 mb-6"></div>


            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-heading-2">
                <span className="text-pink-500 text-xl">✓</span>
                <span>Pra sempre</span>
              </li>
              <li className="flex items-center gap-3 text-heading-2">
                <span className="text-pink-500 text-xl">✓</span>
                <span>3 fotos</span>
              </li>
              <li className="flex items-center gap-3 text-heading-2">
                <span className="text-pink-500 text-xl">✓</span>
                <span>Com música</span>
              </li>
            </ul>

            <button className="w-full bg-[var(--rosa-claro)] hover:bg-[var(--rosa-magenta)] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-pink-900/80 cursor-pointer">
              Quero fazer meu site
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
