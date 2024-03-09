import { useNavigate } from "react-router-dom";
import { Buttons } from "../appComponents/Buttons";

interface StepProp {
  number: string;
  title: string;
  desc: string;
}

function Step({ number, desc, title }: StepProp) {
  return (
    <div className="pl-6 min-w-[150px] max-w-[300px] relative mobile:max-w-[150px]" id="howItWorks">
      <span className="text-fdt-brown-light-active font-normal text-3xl absolute top-[50%] -left-2 mobile:left-1 right-1">
        {number}
      </span>
      <h4 className="mb-0 text-fdt-brown-normal font-normal text-[18px] w-full">
        {title}
      </h4>
      <p className="text-fdt-brown-darker font-light font-inherit mt-2 m-0">
        {desc}
      </p>
    </div>
  );
}

function HowItWorks() {
  const howItWork = [
    {
      number: "1",
      title: "Explore Categories",
      desc: "Browse through our diverse collections, including Agbada, Suits, and Native Attire",
    },

    {
      number: "2",
      title: "Personalize Your Order",
      desc: "Customize your selection by choosing fabrics, styles, and adding personal details",
    },

    {
      number: "3",
      title: "Place Your Order",
      desc: "Effortlessly place your order through our user-friendly platform",
    },

    {
      number: "4",
      title: "Track Progress",
      desc: "Keep track of your order's journey from creation to completion",
    },
  ];

  const navigate = useNavigate()

  return (
    <section className="w-full pb-5 bg-fdt-grey-light-hover flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-5">
        <h3 className="text-base mb-0 font-normal text-fdt-brown-normal">
          OUR SERVICES
        </h3>
        <h3 className="text-[1.25rem] mt-2 font-normal font-playfair-display text-fdt-brown-dark">
          HOW IT WORKS
        </h3>
        <Buttons
          classNames="mb-0 mt-2 rounded-[8px] font-bold  text-white bg-fdt-brown-normal"
          px="px-[24px]"
          py="py-[12px]"
          onClick={() => navigate("/products")}
        >
          Get Started
        </Buttons>
      </div>

      <section className="py-4 max-w-[800px] rounded-[8px] bg-[#F8F8F8]  mx-2 flex flex-row flex-wrap justify-evenly gap-1">
        {howItWork.map((step) => (
          <Step key={step.number} number={step.number} title={step.title} desc={step.desc} />
        ))}
      </section>
    </section>
  );
}

export default HowItWorks;
