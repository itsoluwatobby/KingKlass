import About from "../components/home/About"
import Explore from "../components/home/Explore"
import { Hero } from "../components/home/Hero"
import Testimonials from "../components/home/Testimonials"


export const Home = () => {


  return (
    <main className="w-full h-full flex flex-col mt-16">
      <Hero />
      <About />
      <Explore />
      <Testimonials />
    </main>
  )
}