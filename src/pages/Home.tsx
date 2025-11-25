import { Hero } from "../components/sections/Hero";
import { HowTo } from "../components/sections/HowTo";
import { Price } from "../components/sections/Price";
import { Questions } from "../components/sections/Questions";


export const Home = () => {
  return (
    <div>
      <Hero />
      <HowTo />
      <Price />
      <Questions />
    </div>
  )
}