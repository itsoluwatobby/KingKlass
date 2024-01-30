import { Motto } from "../../svgs/Motto"
import { Buttons } from "../appComponents/Buttons"

export const Hero = () => {

  // min-h-[90vh]
  return (
    <section className="relative flex items-center w-full flex-none h-[90%]">
      <div className="py-6 px-4 flex flex-col justify-around items-center w-full h-full">
        <h1 className="text-center text-3xl whitespace-pre-wrap font-bold">
          CRAFTING IDENTITY
        </h1>
        <p className="text-center whitespace-pre-wrap">
          We are masters at blending tradition and contemporary flair, crafting bespoke garments that embodies timeless elegance
        </p>

        <Buttons
          onClick={() => {}}
          pl='px-8' py='py-3' bgColor="bg-[#842415]"
          classNames="text-white"
        >
          Discover
        </Buttons>
      </div>

      <figure className="flex-none w-1/2 h-full bg-gray-300 rounded-l-md">
        <img src="/HeroImage.png" alt="" className="w-full h-full rounded-l-md object-cover" />
      </figure>

      <div className="absolute w-fit bottom-2 left-[42%] md:left-[47%]">
        <Motto size={{ width: "90", height: "89" }} />
      </div>
    </section>
  )
}