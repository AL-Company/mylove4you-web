import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Cards from './components/sections/CardsSection';
import Footer from './components/sections/Footer';

function App()  {
  return (
    <main className=" max-w-[1240px] md:py-0 min-h-screen">
      <div className="glass min-h-screen rounded-2xl py-6 px-20 shadow-lg">
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
      </div>
    </main>
  );
};

export default App;
