import { AboutUs } from "../../utility/constants";
import { Buttons } from "../appComponents/Buttons";
import { DesignImage } from "../appComponents/Image";


export default function About() {


  // min-h-[88vh]
  return (
    <section className="px-4 py-6 overflow-y-scroll flex flex-col items-center gap-x-3 flex-none h-[90%] w-full">
      <div className="px-4 p-2 overflow-y-scroll flex items-center gap-x-3 min-h-[40vh] w-full">
        {
          AboutUs.map(about => (
            <article key={about.title} className="flex-none min-h-56 bg-gray-100 w-[21rem] flex flex-col items-center justify-between p-6 rounded-md">
              <figure className="bg-gray-400 w-10 h-8 rounded-sm">

              </figure>
              <h3 className="font-medium text-sm whitespace-nowrap text-center p-3">{about.title}</h3>
              <p className="text-xs text-center">
                {about.content}
              </p>
            </article>
          ))
        }
      </div>

      <div className="flex items-center w-full h-full">
        <DesignImage 
          image={'/machine.png'} classNames='w-1/2 h-64'
          rounded='rounded-l-md'
        />

        <div className="py-6 px-4 flex flex-col justify-around items-center w-full h-full">
          <h1 className="text-start text-3xl whitespace-pre-wrap font-medium">
            Our Journey So Far
          </h1>
          <p className="text-start font-medium text-xs whitespace-pre-wrap">
          We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.
          </p>

          <Buttons
            onClick={() => {}}
            pl='px-12' py='py-3' bgColor="bg-[#fffff5]"
            classNames="text-[#842415] font-medium text-black border border-[#481225]"
          >
            Our Story
          </Buttons>
        </div>
      </div>
    </section>
  )
}