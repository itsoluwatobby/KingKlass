import { Motto } from "../../svgs/Motto"
import { Buttons } from "../appComponents/Buttons"
import { DesignImage } from "../appComponents/Image"

export const Hero = () => {

  // min-h-[90vh]
  return (
    <section className="relative flex items-cente w-full flex-none h-[90%]">
      <div className="md:mt-16 py-6 px-4 flex flex-col gap-y-8 mobile:gap-y-4 items-center w-full h-full">
        <h1 className="text-center mobile:text-2xl text-3xl whitespace-pre-wrap font-bold">
          CRAFTING IDENTITY
        </h1>
        <p className="text-center text-sm whitespace-pre-wrap">
          We are masters at blending tradition and contemporary flair, crafting bespoke garments that embodies timeless elegance
        </p>

        <Buttons
          onClick={() => {}}
          pl='px-8' py='py-3'
          classNames="text-white bg-[#842415] rounded-md"
        >
          Discover
        </Buttons>
      </div>

      <DesignImage 
        image={'/HeroImage.png'} classNames='w-1/2 h-full'
        rounded='rounded-l-md'
      />

      <div className="absolute w-fit bottom-2 left-[44%] maxmobile:left-[40%] md:left-[44%]">
        <Motto size={{ width: "90", height: "89" }} />
      </div>
    </section>
  )
}