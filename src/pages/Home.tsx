// import About from "../components/home/About"
import { ContactUs } from "../components/home/ContactUs"
import { Hero } from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWorks"
import Testimonials from "../components/home/Testimonials"
import Stats from "../components/home/Stats"
import HowCanWeHelp from "../components/home/HowCanWeHelp"
import WhyCustomTailoring from "../components/home/WhyCustomTailoring"

export const Home = () => {
  return (
    <main className="border-black items-center w-full flex flex-col mt-16">
      <Hero />
      <Stats />
      <HowCanWeHelp />
      <HowItWorks />
      <WhyCustomTailoring />
      <Testimonials />
      <ContactUs />
    </main>
  )
}