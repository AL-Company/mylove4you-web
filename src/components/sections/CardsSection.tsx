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
      <div className="mt-16 flex flex-wrap justify-center items-center gap-7 px-5 rounded-xl text-center">
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

      {/* {selectedIndex !== null && (
        <CategoryTemplates selectedIndex={selectedIndex} />
      )} */}

      < h2 className="text-2xl font-bold mb-4 mt-8 text-grey" >
        Gere textos interativas
      </h2 >

      <div className="rounded-2xl px-10 py-8 flex flex-col md:flex-row items-center justify-between
                      bg-gradient-to-r from-[rgba(75,31,184,0.9)] via-[rgba(180,108,255,0.8)] to-[rgba(255,62,157,0.9)]
                      shadow-lg">
        <p className="text-xl max-w-xl">
          Gere textos incríveis com IA em segundos.
        </p>

        <button
          className="mt-6 md:mt-0 bg-pink-500 hover:bg-pink-600 text-white font-semibold
                     py-3 px-8 rounded-full shadow-md transition cursor-pointer"
        >
          Gerar texto com IA
        </button>
      </div>
    </>
  );
}

export default CardsSection;