import { Buttons } from "../appComponents/Buttons";
import { setCustomBackgroundImage } from '../../utility/setBackGroundImage'


export default function About() {

  // min-h-[88vh]
  return (
    <section 
    id='aboutUs'
    className="bg-slate-50 py-4 overflow-y-scroll flex flex-col gap-y-6 items-center flex-none h-[minmax-(25vh,35vh)] w-full">
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
            From bespoke suits to trend-setting designs, we ensure every stitch reflects sophistication. Join us on a journey of elegance and individuality - because at Kingsklass designs, your style reigns supreme.
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