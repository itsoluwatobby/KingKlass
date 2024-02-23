// import About from "../components/home/About"
import { ContactUs } from "../components/home/ContactUs"
import Explore from "../components/home/Explore"
import { Hero } from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWorks"
import Testimonials from "../components/home/Testimonials"
import Stats from "../components/home/Stats"


export const Home = () => {
  return (
    <main className="border-black items-center w-full flex flex-col mt-16">
      <Hero />
      <Stats />
      <HowItWorks />
      <Explore />
      <Testimonials />
      <ContactUs />
    </main>
  )
}