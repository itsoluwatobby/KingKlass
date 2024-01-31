import { AboutUs } from "../../utility/constants";
import { Buttons } from "../appComponents/Buttons";
import { setCustomBackgroundImage } from '../../utility/setBackGroundImage'


export default function About() {


  // min-h-[88vh]
  return (
    <section className="px-4 py-6 overflow-y-scroll flex flex-col gap-y-6 items-center flex-none h-[minmax-(25vh,35vh)] w-full">
      <div className="px-4 p-1 overflow-y-scroll flex items-center gap-x-3 min-h- w-full">
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

      <div className="flex-none flex items-center w-full h-1/2">
        {/* <DesignImage 
          image={'/machine.png'} classNames='w-1/2 h-[minmax(5rem,6rem)]'
          rounded='rounded-l-md'
        /> */}
        <div
          style={setCustomBackgroundImage(
            '/machine.png'
          )} 
          className="flex-none min-h-[20rem] rounded-l-md w-1/2"
          ></div>

        <div className="py-6 px-4 flex flex-col gap-y-5 items-center w-full h-full">
          <h1 className="text-start text-2xl whitespace-pre-wrap font-medium">
            Our Journey So Far
          </h1>
          <p className="text-start font-medium text-xs whitespace-pre-wrap">
            We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.
          </p>

          <Buttons
            onClick={() => { }}
            pl='px-8' py='py-3' bgColor="bg-[#fffff5]"
            classNames="text-[#842415] font-medium text-black border border-[#481225]"
          >
            Our Story
          </Buttons>
        </div>
      </div>
    </section>
  )
}