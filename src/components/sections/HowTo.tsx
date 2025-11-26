import { BtnLink } from "../shared/BtnLink";
import Container from "../shared/Container";

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
    description:
      "Insira suas informações pessoais, escolha o tema, adicione suas fotos favoritas e escreva uma mensagem especial do coração.",
    emoji: "💬",
  },
  {
    number: "2",
    title: "Faça o pagamento",
    description:
      "Escolha entre PIX, cartão de crédito ou boleto. Pagamento seguro e rápido. Parcelamento disponível no plano Premium.",
    emoji: "💰",
  },
  {
    number: "3",
    title: "Receba o seu site + QR Code no e-mail",
    description:
      "Após confirmar o pagamento, você receberá instantaneamente o link do seu site personalizado e um QR Code exclusivo para compartilhar.",
    emoji: "📧",
  },
  {
    number: "4",
    title: "Surpreenda seu amor",
    description:
      "Compartilhe o link ou QR Code com aquela pessoa especial e crie um momento inesquecível cheio de amor e carinho!",
    emoji: "💝",
  },
];

export const HowTo = () => {
  return (
    <section id="howto" className="section-padding bg-body">
      <Container className="space-y-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="eyebrow">Em poucos cliques</p>
          <h2 className="font-display text-4xl text-heading-1 md:text-5xl">
            Como criar seu site romântico
          </h2>
          <p className="max-w-3xl text-lg text-heading-3">
            Todo o processo acontece em minutos e você recebe tudo por e-mail
            com QR Code pronto para compartilhar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.number}
              className="card-shell p-8 transition-transform duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-xl font-bold text-heading-1">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {step.title}
                  </h3>
                  <p className="text-heading-3">{step.description}</p>
                </div>
                <span className="ml-auto text-4xl" aria-hidden="true">
                  {step.emoji}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <BtnLink href="#prices" size="lg">
            Começar agora 💕
          </BtnLink>
        </div>
      </Container>
    </section>
  );
};
