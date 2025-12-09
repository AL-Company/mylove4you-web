import CardsSection from "./components/sections/CardsSection";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import { Price } from "./components/sections/Price";

function App() {
  return (
    <main className="m-auto max-w-[1240px] md:py-0 min-h-screen">
      <div className="glass mt-auto min-h-screen rounded-2xl py-6 px-20 shadow-lg">
        <Navbar />
        <Hero />
        <CardsSection />
        <Price/>
        <Footer />
      </div>
    </main>
  );
};

export default App;
