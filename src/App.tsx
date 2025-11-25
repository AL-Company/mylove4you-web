import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import { BrowserRouter,Route,Routes } from "react-router";
import { Home } from "./pages/Home";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div className="flex flex-col gap-y-20  md:gap-y-32 overflow-hidden">
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App; 