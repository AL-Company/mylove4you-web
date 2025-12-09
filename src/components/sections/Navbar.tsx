function Navbar() {
  const handleNavigation = (href: string) => {
    const isExternalPage = href.startsWith('/') && !href.startsWith('/#');
    
    if (isExternalPage) {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease-out';
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  };

  return (
    <div className="flex justify-between items-center px-0">
      <div className="pr-6">
        <a href="/">
          <div className="text-4xl font-bold">MyLove4you</div>
        </a>
      </div>

      <div className="flex gap-10 text-2xl font-bold">
        <a href="/#product"><h2>Produtos</h2></a>
        <a href="/templates" onClick={(e) => { e.preventDefault(); handleNavigation('/templates'); }}><h2>Templates</h2></a>
        <a href="#prices"><h2>Preços</h2></a>
        <a href="/login" onClick={(e) => { e.preventDefault(); handleNavigation('/login'); }}><h2>Login</h2></a>
      </div>
    </div>
  );
}

export default Navbar;