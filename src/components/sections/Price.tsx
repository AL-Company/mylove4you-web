import { Container } from "../shared/Container";

export const Price = () => {
    return (
        <section id="prices" className="py-20 bg-body scroll-mt-0">
            <Container>
                {/* Título da Seção */}
                <div className="text-center mb-5">
                    <h2 className="text-5xl md:text-6xl font-bold text-heading-1 mb-4">
                        Preços
                    </h2>
                </div>

                {/* Grid de Preços */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card Básico */}
                    <div className="bg-box-bg border border-box-border rounded-2xl p-8 flex flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-heading-2 text-xl mb-2">Básico</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-heading-1">R$14,99</span>
                                </div>
                            </div>
                            <div className="text-6xl">🧸</div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-box-border mb-6"></div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3 text-heading-2">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span>1 ano de acesso</span>
                            </li>
                            <li className="flex items-center gap-3 text-heading-2">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span>1 foto</span>
                            </li>
                            <li className="flex items-center gap-3 text-heading-2">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span>Fotos Ghibli</span>
                            </li>
                            <li className="flex items-center gap-3 text-heading-3">
                                <span className="text-red-500 text-xl">✗</span>
                                <span>Sem música</span>
                            </li>
                        </ul>

                        {/* CTA Button */}
                        <button className="w-full bg-pink-gradient hover:bg-pink-gradient-hover text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                            Quero fazer meu site
                        </button>
                    </div>

                    {/* Card Premium - Destacado */}
                    <div className="bg-box-bg border-2 border-pink-500 rounded-2xl p-8 flex flex-col relative">
                        {/* Badge "Mais Escolhido" */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-pink-gradient px-6 py-2 rounded-full flex items-center gap-2">
                                <span className="text-white text-sm font-bold">⭐ MAIS ESCOLHIDO</span>
                            </div>
                        </div>

                        {/* Header */}
                        <div className="flex items-start justify-between mb-8 mt-4">
                            <div>
                                <h3 className="text-heading-2 text-xl mb-2">Premium</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-heading-1">R$35</span>
                                    <span className="text-2xl text-heading-3 line-through">R$49</span>
                                </div>
                            </div>
                            <div className="text-6xl">💝</div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-pink-500/30 mb-6"></div>

                        {/* Features */}
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
                                <span>Fotos Ghibli</span>
                            </li>
                            <li className="flex items-center gap-3 text-heading-2">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span>Com música</span>
                            </li>
                        </ul>

                        {/* CTA Button */}
                        <button className="w-full bg-pink-gradient hover:bg-pink-gradient-hover text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/30">
                            Quero fazer meu site
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};