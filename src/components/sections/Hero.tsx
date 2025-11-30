function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero-gradient py-15">
      <div className="flex justify-around items-center flex-1">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            Experiências<br></br>
             Digitais que<br></br> Marcam Momentos
          </h1>

          <p className="text-base text-white/80 mb-6">
            Cartes conbes, timelines e páginas comemorativas personalizadas.
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition">
            Criar experiência
          </button>
        </div>

        <div className="w-100 h-96 bg-amber-50 rounded-md overflow-hidden shadow-md">
          <img
            src="src/assets/image 1.jpg"
            alt="Imagem decorativa"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;