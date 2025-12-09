function Footer() {
  return (
    <footer className="mt-10">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Gere textos interativos
        </h2>

        <div className="rounded-2xl px-10 py-8 flex flex-col md:flex-row items-center justify-between
                        bg-gradient-to-r from-[rgba(75,31,184,0.9)] via-[rgba(180,108,255,0.8)] to-[rgba(255,62,157,0.9)]
                        shadow-lg">
          <p className="text-xl max-w-xl text-white">
            Gere textos incríveis com IA em segundos.
          </p>

          <button
            className="mt-6 md:mt-0 bg-pink-500 hover:bg-pink-600 text-white font-semibold
                       py-3 px-8 rounded-full shadow-md transition cursor-pointer"
          >
            Gerar texto com IA
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-6 justify-around text-sm text-white/80">
        <a href="/" className="hover:text-white">Inicio</a>
        <a href="/products" className="hover:text-white">Produto</a>
        <a href="/login" className="hover:text-white">Login</a>
        <a href="/help" className="hover:text-white">Ajuda</a>
        <a href="/prices" className="hover:text-white">Preços</a>
        <a href="/about" className="hover:text-white font-semibold">Sobre</a>
      </div>
    </footer>
  );
}

export default Footer;