import { AboutUs } from "../../utility/constants";
import { Buttons } from "../appComponents/Buttons";
import { setCustomBackgroundImage } from '../../utility/setBackGroundImage'
import { KingKlass } from "../../svgs/Logo";


export default function About() {


  // min-h-[88vh]
  return (
    <section 
    id='aboutUs'
    className="bg-slate-50 px-4 py-6 overflow-y-scroll flex flex-col gap-y-6 items-center flex-none h-[minmax-(25vh,35vh)] w-full">
      <div className="flex flex-col items-center gap-x-3 w-full">
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
        <div className={`self-center relative min-w-2 min-h-2 bg-slate-300 rounded-full before:absolute before:content-[""] before:bg-slate-800 before:-left-8 before:w-2 before:h-2 before:rounded-full after:absolute after:content-[""] after:bg-slate-300 after:-right-8 after:w-2 after:h-2 after:rounded-full`} />
      </div>

      <KingKlass 
        size={{width: '165', height: '85'}} 
        classNames="opacity-20"
      />

      <div className="flex-none flex items-center w-full h-1/2">
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
            px='' py='py-3'
            classNames="text-[#842415] font-medium text-black bg-[#fffff5] border-2 border-orange-700 border-opacity-40 w-36 rounded-md cursor-default"
          >
            Our Story
          </Buttons>
        </div>
      </div>
    </section>
  )
}