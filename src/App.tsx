// import { Route, Routes } from "react-router";
// import { Footer } from "./components/elements/Footer";
// import { Navbar } from "./components/elements/Navbar";
// import Checkout from "./pages/Checkout";
// import { Home } from "./pages/Home";
// import SitePreview from "./pages/SitePreview";

// function App() {
//   return (
//     <div className="flex min-h-screen flex-col bg-body text-heading-1">
//       <Navbar />
//       <main className="flex flex-1 flex-col gap-y-20 pb-20 pt-20 md:gap-y-32">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/site/:id" element={<SitePreview />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <main className="max-w-[1240px] mx-auto md:py-0">
      <div className="flex justify-between h-screen bg-[var(--surface-glass)] rounded-2xl py-8 px-20 shadow-lg">
        <div>
          <a href="">
            <div>MyLove4you</div>
          </a>
        </div>
        <div className="flex gap-10">
          <a href="Produtos">
            <h2>Produtos</h2>
          </a>
          <a href="Templates">
            <h2>Templates</h2>
          </a>
          <a href="Preços">
            <h2>Preços</h2>
          </a>
          <a href="Login">
            <h2>Login</h2>
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
