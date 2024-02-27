// import About from "../components/home/About"
import { ContactUs } from "../components/home/ContactUs"
import { Hero } from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWorks"
import Testimonials from "../components/home/Testimonials"
import Stats from "../components/home/Stats"
import HowCanWeHelp from "../components/home/HowCanWeHelp.tsx"
import WhyCustomTailoring from "../components/home/WhyCustomTailoring"
import { Buttons } from "../components/appComponents/Buttons.tsx"
import { useNavigate } from "react-router-dom"


export const Home = () => {

  const navigate = useNavigate();

  return (
    <main className="border-black items-center w-full flex flex-col mt-16">
      <Hero />
      <section className="w-full max-w-[800px] flex flex-row justify-evenly items-center mt-0 mb-6">
        <Buttons
          onClick={() => navigate("/products")}
          px="px-3"
          py="py-2"
          classNames="mobile:text-[12px] border-0 text-white  bg-fdt-brown-normal font-bold"
        >
          Discover Collections
        </Buttons>

        <Buttons
          onClick={() => navigate("/aboutus")}
          px="px-3"
          py="py-2"
          classNames="mobile:text-[12px] border-[1px] border-fdt-brown-normal text-fdt-brown-normal  bg-inherit font-bold"
        >
          Book an appointment
        </Buttons>
      </section>
      <Stats />
      <HowCanWeHelp />
      <HowItWorks />
      <WhyCustomTailoring />
      <Testimonials />
      <ContactUs />
    </main>
  )
}