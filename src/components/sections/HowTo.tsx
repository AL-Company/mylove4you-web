import { Container } from "../shared/Container";

interface HowTo {
    number: string;
    title: string;
    description: string;
    emoji: string;
}

const steps: HowTo[] = [
    {
        number: "1",
        title: "Preencha os dados",
        description: "Insira suas informações pessoais, escolha o tema, adicione suas fotos favoritas e escreva uma mensagem especial do coração.",
        emoji: "💬"
    },
    {
        number: "2",
        title: "Faça o pagamento",
        description: "Escolha entre PIX, cartão de crédito ou boleto. Pagamento seguro e rápido. Parcelamento disponível no plano Premium.",
        emoji: "💰"
    },
    {
        number: "3",
        title: "Receba o seu site + QR Code no e-mail",
        description: "Após confirmar o pagamento, você receberá instantaneamente o link do seu site personalizado e um QR Code exclusivo para compartilhar.",
        emoji: "📧"
    },
    {
        number: "4",
        title: "Surpreenda seu amor",
        description: "Compartilhe o link ou QR Code com aquela pessoa especial e crie um momento inesquecível cheio de amor e carinho!",
        emoji: "💝"
    }
];

export const HowTo = () => {
    return (
        <section id="howto" className="py-20 bg-body scroll-mt-20">
            <Container>
                {/* Título e Ícone */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl md:text-6xl font-bold text-heading-1 mb-4">
                            Como fazer?
                        </h2>
                    </div>
                    
                    {/* Ícone de balão de fala com coração */}
                    <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full flex items-center justify-center">
                            <span className="text-7xl">💬</span>
                        </div>
                    </div>
                </div>

                {/* Linha decorativa de fluxo */}
                <div className="hidden lg:block max-w-6xl mx-auto mb-8">
                    <svg viewBox="0 0 800 100" className="w-full h-24 opacity-30">
                        <path
                            d="M 50 50 Q 200 20, 350 50 T 750 50"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,5"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgb(236, 72, 153)" />
                                <stop offset="100%" stopColor="rgb(244, 63, 94)" />
                            </linearGradient>
                        </defs>
                        <polygon points="745,50 755,45 755,55" fill="rgb(244, 63, 94)" />
                    </svg>
                </div>

                {/* Grid de Steps */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-box-bg border border-box-border rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 transform hover:-translate-y-1"
                        >
                            {/* Número do Step */}
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/30">
                                    {step.number}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-heading-1 mb-2">
                                        {step.title}
                                    </h3>
                                </div>
                                <div className="text-4xl flex-shrink-0">
                                    {step.emoji}
                                </div>
                            </div>

                            {/* Descrição */}
                            <p className="text-heading-3 leading-relaxed pl-[72px]">
                                {step.description}
                            </p>

                            {/* Imagem Placeholder (você pode substituir por imagens reais) */}
                            <div className="mt-6 pl-[72px]">
                                <div className="bg-body-medium rounded-xl h-40 flex items-center justify-center border border-box-border">
                                    <span className="text-6xl">{step.emoji}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Final */}
                <div className="text-center mt-16">
                    <a
                        href="#prices"
                        className="inline-block bg-pink-gradient hover:bg-pink-gradient-hover text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/30"
                    >
                        Começar Agora 💕
                    </a>
                </div>
            </Container>
        </section>
    );
};