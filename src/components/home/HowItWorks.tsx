import { KingKlass } from "../../svgs/Logo";
import { AboutUs, HowKingClassWorks } from "../../utility/constants";


export default function HowItWorks() {

  //75vh
  return (
    <section className="relative p-4 flex flex-col gap-y-6 min-h-">

       <div className="flex flex-col items-center gap-x-3 w-full">
        <div className="px-4 p-1 overflow-y-scroll flex items-center gap-x-3 min-h- w-full">
          {
            AboutUs.map(about => (
              <article key={about.title} className="flex-none min-h-48 bg-gray-100 w-[21rem] flex flex-col items-center justify-between p-6 rounded-md">
                {/* <figure className="bg-gray-400 w-10 h-8 rounded-sm">

                </figure> */}
                <h3 className="tracking-wide font-medium text-sm whitespace-nowrap text-center p-3">{about.title}</h3>
                <p className="text-xs text-center tracking-wide">
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
        classNames="opacity-20 self-center"
      />

      <h1 className="text-3xl font-bold text-center">How It Works</h1>

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