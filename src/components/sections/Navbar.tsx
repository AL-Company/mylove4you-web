function Navbar() {
  return (
    <div className="flex justify-between items-center px-15">
      <div>
        <a href="">
          <div className="text-4xl font-bold">MyLove4you</div>
        </a>
      </div>

      <div className="flex gap-15 text-2xl font-bold">
        <a href="Produtos"><h2>Produtos</h2></a>
        <a href="Templates"><h2>Templates</h2></a>
        <a href="Preços"><h2>Preços</h2></a>
        <a href="Login"><h2>Login</h2></a>
      </div>
    </div>
  );
}


export default Navbar;