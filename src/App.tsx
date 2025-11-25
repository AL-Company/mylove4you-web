import { Layout } from "./components/shared/Layout";
import { Hero } from "./components/sections/Hero";
import { HowTo } from "./components/sections/HowTo";
import { Price } from "./components/sections/Price";
import { Questions } from "./components/sections/Questions";
import Create from "./components/sections/Create";

function App() {
  return <Layout title="LoveU">
    <Hero />
    <HowTo />
    <Price />
    <Questions />
    <Create />
  </Layout>;
}

export default App; 