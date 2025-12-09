// import { useState } from "react";
import { useNavigate } from "react-router";
import Card from "../shared/Card";

type Category = {
  title: string;
  gradient: string;
};

// type TemplateCard = {
//   title: string;
//   gradient: string;
// };

const categoryCards: Category[] = [
  {
    title: "Casais",
    gradient: "linear-gradient(135deg, var(--lavanda), var(--rosa-magenta))",
  },
  {
    title: "Aniversários",
    gradient: "linear-gradient(135deg, var(--rosa-magenta), var(--laranja))",
  },
  {
    title: "Formaturas",
    gradient: "linear-gradient(135deg, var(--dourado-pastel), var(--laranja))",
  },
  {
    title: "Casais",
    gradient: "linear-gradient(135deg, var(--lavanda), var(--rosa-magenta))",
  },
  {
    title: "Aniversários",
    gradient: "linear-gradient(135deg, var(--rosa-magenta), var(--laranja))",
  },
  {
    title: "Formaturas",
    gradient: "linear-gradient(135deg, var(--dourado-pastel), var(--laranja))",
  },
];

// const templatesByCategory: Record<number, TemplateCard[]> = {
//   0: [
//     {
//       title: "Linha do tempo do casal",
//       gradient: "linear-gradient(135deg, var(--lavanda), var(--rosa-magenta))",
//     },
//     {
//       title: "Carta romântica com IA",
//       gradient: "linear-gradient(135deg, var(--rosa-magenta), var(--laranja))",
//     },
//     {
//       title: "Scrapbook de memórias",
//       gradient: "linear-gradient(135deg, var(--dourado-pastel), var(--laranja))",
//     },
//   ],
//   1: [
//     {
//       title: "Linha do tempo do aniversário",
//       gradient: "linear-gradient(135deg, var(--rosa-magenta), var(--laranja))",
//     },
//     {
//       title: "Carta de parabéns com IA",
//       gradient: "linear-gradient(135deg, var(--lavanda), var(--rosa-magenta))",
//     },
//     {
//       title: "Convite interativo",
//       gradient: "linear-gradient(135deg, var(--dourado-pastel), var(--laranja))",
//     },
//   ],
//   2: [
//     {
//       title: "Linha do tempo da formatura",
//       gradient: "linear-gradient(135deg, var(--lavanda), var(--rosa-magenta))",
//     },
//     {
//       title: "Carta de agradecimento",
//       gradient: "linear-gradient(135deg, var(--rosa-magenta), var(--laranja))",
//     },
//     {
//       title: "Scrapbook da turma",
//       gradient: "linear-gradient(135deg, var(--dourado-pastel), var(--laranja))",
//     },
//   ],
// };

// function CategoryTemplates({ selectedIndex }: { selectedIndex: number }) {
//   const templates = templatesByCategory[selectedIndex] ?? [];

//   if (!templates.length) return null;

//   return (
//     <div className="my-8 flex flex-wrap justify-center items-center gap-7 px-5">
//       {templates.map((tpl, i) => (
//         <Card
//           key={i}
//           title={tpl.title}
//           gradient={tpl.gradient}
//           width={240}
//           height={200}
//         />
//       ))}
//     </div>
//   );
// }

function CardsSection() {
  const navigate = useNavigate();

  return (
    <>
      <section id="product" className="mt-5 relative overflow-hidden bg-hero-gradient py-15 ">
        <a href="/#product" className="flex flex-center justify-center mt-auto"><h2>Produtos</h2></a>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-7 px-30 rounded-xl text-center">
          {categoryCards.map((card, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                return navigate(`/products`);
              }}
              className="focus:outline-none"
            >
              <Card
                title={card.title}
                gradient={card.gradient}
                width={200}
                height={150}
              />
            </button>
          ))}
        </div >
      </section>

      {/* {selectedIndex !== null && (
        <CategoryTemplates selectedIndex={selectedIndex} />
      )} */}
    </>
  );
}

export default CardsSection;