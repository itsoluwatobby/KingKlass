import { useNavigate } from "react-router-dom";
import { Motto } from "../../svgs/Motto";
import { Buttons } from "../appComponents/Buttons";
import { DesignImage } from "../appComponents/Image";

export const Hero = () => {
  const navigate = useNavigate();

  // min-h-[90vh]
  return (
    <section className="hero relative flex w-full flex-none transition-all">
      <div className="md:mt-24 py-6 px-4 md:px-16 lg:px-28 flex flex-col items-center w-full h-full">
        <h1 className="text-fdt-brown-dark mt-0 mb-0 font-playfair-display  text-3xl whitespace-pre-wrap font-bold">
          CRAFTING IDENTITY
        </h1>
        <p className="text-fdt-brown-normal mt-0 md:text-start text-sm whitespace-pre-wrap">
          We masterfully blend tradition and contemporary flair, crafting
          bespoke garments that embodies timeless elegance
        </p>

        <Buttons
          onClick={() => navigate("/aboutus")}
          px="px-3"
          py="py-3"
          classNames="mobile:text-[12px] border-0 text-white maxmobile:self-start bg-fdt-brown-normal font-bold  md:w-[65%]"
        >
          Discover Collections
        </Buttons>

        <Buttons
          onClick={() => navigate("/aboutus")}
          px="px-3"
          py="py-3"
          classNames="mobile:text-[12px] mt-2 border-[1px] border-fdt-brown-normal text-fdt-brown-normal maxmobile:self-start bg-inherit font-bold md:w-[65%]"
        >
          Book an appointment
        </Buttons>

      </div>

        <img
          src={"./HeroImage.png"}
          alt={"Hero Image"}
          className="w-full h-full"
        />

      <div className="absolute w-fit md:top-2 midscreen:bottom-2 left-[44%] lg:left-[46%] maxmobile:left-[40%] md:left-[44%]">
        <Motto size={{ width: "4rem", height: "4rem" }} />
      </div>
    </section>
  );
};
