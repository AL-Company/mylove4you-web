import Card from "../shared/Card";
function CardsSection() {
  const cards = [
    {
      title: "Casais",
      icon: "src/assets/icon-casais.png",
      gradient: "linear-gradient(135deg, var(--lavanda), var(--rosa-magenta))",
      width: 240,
      height: 200,
    },
    {
      title: "Aniversários",
      icon: "src/assets/icon-aniversarios.png",
      gradient: "linear-gradient(135deg, var(--rosa-magenta), var(--laranja))",
      width: 240,
      height: 200,
    },
    {
      title: "Formaturas",
      icon: "src/assets/icon-formaturas.png",
      gradient: "linear-gradient(135deg, var(--dourado-pastel), var(--laranja))",
      width: 240,
      height: 200,
    }
  ];

  return (
    <div className="mt-16 flex flex-wrap justify-center items-center gap-7 px-5 rounded-xl" >
      {cards.map((card, i) => (
        <Card
          key={i}
          title={card.title}
          icon={card.icon}
          gradient={card.gradient}
          width={card.width}
          height={card.height}
        />
      ))}
    </div>
  );
}


export default CardsSection;