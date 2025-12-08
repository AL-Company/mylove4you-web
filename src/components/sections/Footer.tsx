
function Footer() {
  return (
    <footer className="mt-10">
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
