import { Route, Routes } from "react-router";
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import Checkout from "./pages/Checkout";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-body text-heading-1">
      <Navbar />
      <main className="flex flex-1 flex-col gap-y-20 pb-20 pt-20 md:gap-y-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
