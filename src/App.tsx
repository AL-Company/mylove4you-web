import { Hero } from "./components/sections/Hero";
import { HowTo } from "./components/sections/HowTo";
import { Price } from "./components/sections/Price";
import { Questions } from "./components/sections/Questions";
import { Layout } from "./components/shared/Layout";

function App() {
  return <Layout title="LoveU">
    <Hero />
    <HowTo />
    <Price />
    <Questions />

  </Layout>;
}

export default App; 