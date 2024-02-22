// import About from "../components/home/About"
import { ContactUs } from "../components/home/ContactUs"
import Explore from "../components/home/Explore"
import { Hero } from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWorks"
import Testimonials from "../components/home/Testimonials"


export const Home = () => {


  return (
    <main className="w-full h-full flex flex-col mt-16">
      <Hero />
      <HowItWorks />
      <Explore />
      {/* <About /> */}
      <Testimonials />
      <ContactUs />
    </main>
  )
}