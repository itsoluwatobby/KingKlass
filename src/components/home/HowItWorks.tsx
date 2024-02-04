import { Motto } from "../../svgs/Motto";
import { HowKingClassWorks } from "../../utility/constants";
import { ImageCard } from "./ImageCard";


export default function HowItWorks() {
  const Previews = [
    { image: '/image1.png', title: 'AGBADA' },
    { image: '/image2.png', title: 'SENATOR' },
    { image: '/image3.png', title: 'SUITS' }
  ]
  //75vh
  return (
    <section className="relative p-4 flex flex-col gap-y-6 min-h-">

      <div className="relative flex flex-col items-center gap-y-2 w-full">
          <h3 className="text-[#842415] text-sm">TAILORED ASSISTANCE</h3>

          <h4 className="font-semibold text-xl">HOW CAN WE HELP YOU?</h4>

        <div className="px-4 p-1 overflow-y-scroll flex items-center gap-x-2 w-full">
          {
            Previews.map(preview => (
              <ImageCard key={preview.title} 
                image={preview.image} title={preview.title}
              />
            ))
          }
          </div>

          <div className="absolute w-fit bottom-2 left-[28%] maxmobile:left-[25%] md:left-[28%]">
            <Motto size={{ width: "90", height: "89" }} />
          </div>
        {/* <div className={`self-center relative min-w-2 min-h-2 bg-slate-300 rounded-full before:absolute before:content-[""] before:bg-slate-800 before:-left-8 before:w-2 before:h-2 before:rounded-full after:absolute after:content-[""] after:bg-slate-300 after:-right-8 after:w-2 after:h-2 after:rounded-full`} /> */}
      </div>

      {/* <KingKlass 
        size={{width: '165', height: '85'}} 
        classNames="opacity-20 self-center"
      /> */}

      <div className="flex flex-col gap-y-2 pb-2">
        <h3 className="text-[#842415] text-sm text-center">SERVICES</h3>
        <h1 className="text-3xl font-bold text-center">How It Works</h1>
      </div>

      <div className='flex flex-col gap-y-10'>
        {
          HowKingClassWorks.map((howTo, index) => (
            <Steps key={index}
              index={index+1} title={howTo.title}
              content={howTo.content}
              textDirection={howTo.textDirection}
              position={howTo.position}
              padding={howTo.padding}
            />
           ))
        }
      </div>
    </section>
  )
}


type StepsProps = {
  index: number;
  title: string;
  content: string;
  textDirection: string;
  padding: string;
  position: string;
}
const Steps = ({ index, title, content, textDirection, position, padding }: StepsProps) => {

  return (
    <article className={`relative flex flex-col gap-y-2 ${textDirection} ${padding}`}>
      <div className={`absolute -top-5 ${position} border-[1px] border-gray-300 font-sans rounded-sm text-2xl text-gray-400 py-0.5 px-2.5`}>
        {index}
      </div>
      <h4 className="z-20 font-medium text-xl capitalize">{title}</h4>
      <p className="text-gray-700 text-xs">{content}</p>
    </article>
  )
}