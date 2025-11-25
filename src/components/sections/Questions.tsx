import { Container } from "../shared/Container";
import { useState } from "react";

interface Questions {
    question: string;
    answer: string;
}

const questionsData: Questions[] = [
    {
        question: "O que é a Loveyuu?",
        answer: "A Loveyuu é uma plataforma que permite criar páginas personalizadas com fotos no estilo Ghibli para presentear pessoas especiais. Você pode adicionar músicas, fotos e criar uma experiência única e memorável."
    },
    {
        question: "Quais são as formas de pagamento? Tem como parcelar?",
        answer: "Aceitamos pagamentos via PIX, cartão de crédito e boleto bancário. Para o plano Premium, oferecemos parcelamento em até 3x sem juros no cartão de crédito."
    },
    {
        question: "Quanto tempo demora para receber o QR Code no e-mail?",
        answer: "Após a confirmação do pagamento, você recebe o QR Code instantaneamente no seu e-mail cadastrado. Se o pagamento for via PIX, o processamento é imediato. Para boleto, pode levar até 2 dias úteis."
    },
    {
        question: "A página personalizada tem validade?",
        answer: "Depende do plano escolhido! O plano Básico tem validade de 1 ano. Já o plano Premium tem acesso vitalício - sua página fica disponível para sempre!"
    },
    {
        question: "Posso editar minha página depois de criá-la?",
        answer: "Sim! Você pode editar as fotos, textos e músicas da sua página a qualquer momento através do painel de controle. Basta fazer login com seu e-mail para acessar as configurações."
    },
    {
        question: "Como posso entrar em contato com o suporte ao cliente?",
        answer: "Estamos aqui para ajudar! Você pode entrar em contato através do nosso e-mail suporte@loveyuu.com ou pelo WhatsApp (XX) XXXXX-XXXX. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h."
    }
];

export const Questions = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestions = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="questions" className="py-20 bg-body scroll-mt-0">
            <Container>
                {/* Título da Seção */}
                <div className="text-center mb-5">
                    <h2 className="text-5xl md:text-6xl font-bold text-heading-1 mb-4">
                        Perguntas Frequentes
                    </h2>
                </div>

                {/* Lista de Questions*/}
                <div className="max-w-4xl mx-auto space-y-4">
                    {questionsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-box-bg border border-box-border rounded-xl overflow-hidden transition-all duration-300"
                        >
                            {/* Pergunta - Clicável */}
                            <button
                                onClick={() => toggleQuestions(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-body-medium transition-colors duration-200"
                            >
                                <h3 className="text-lg font-semibold text-heading-1 pr-4">
                                    {item.question}
                                </h3>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-heading-3 flex items-center justify-center transition-transform duration-300 ${
                                        openIndex === index ? "rotate-45 border-pink-500" : ""
                                    }`}
                                >
                                    <span className={`text-xl ${openIndex === index ? "text-pink-500" : "text-heading-3"}`}>
                                        +
                                    </span>
                                </div>
                            </button>

                            {/* Resposta - Expansível */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <div className="px-6 pb-6 pt-2">
                                    <p className="text-heading-3 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};