import { Motto } from "../../svgs/Motto";
import { HowKingClassWorks } from "../../utility/constants";
import { ImageCard } from "./ImageCard";
import { Buttons } from '../appComponents/Buttons';
import { useDesignerContext } from "../../hooks/useDesignerContext";


export default function HowItWorks() {
  const { setAppModals } = useDesignerContext() as DesignerContextProps;
  const Previews = [
    { image: '/image1.png', title: 'AGBADA' },
    { image: '/image2.png', title: 'SENATOR' },
    { image: '/image3.png', title: 'SUITS' }
  ]
  //75vh
  return (
    <section className="relative md:mt-10 lg:px-44 md:px-32 p-4 flex flex-col gap-y-6 transition-all min-h-">

      <div className="relative flex flex-col items-center gap-y-2 w-full">
          <h3 className="text-[#842415] text-sm">TAILORED ASSISTANCE</h3>

          <h4 className="font-semibold text-xl">HOW CAN WE HELP YOU?</h4>

        <div className="relative px-4 p-1 overflow-x-scroll flex items-center md:justify-center gap-x-7 maxmobile:gap-x-2 w-full lg:gap-x-10">
          {
            Previews.map(preview => (
              <ImageCard key={preview.title} 
                image={preview.image} title={preview.title}
              />
            ))
          }
          <div className="absolute w-fit bottom-2 left-[28%] maxmobile:left-[34%] md:left-[28%]">
            <Motto size={{ width: "90", height: "89" }} />
          </div>
        </div>
      </div>

      {/* <KingKlass 
        size={{width: '165', height: '85'}} 
        classNames="opacity-20 self-center"
      /> */}

      <div className="flex flex-col gap-y-2 pb-2">
        <h3 className="text-[#842415] text-sm text-center">SERVICES</h3>
        <h1 className="text-3xl font-bold text-center">How It Works</h1>
      </div>

      <div className='lg:px-36 flex flex-col gap-y-10'>
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

      <Buttons
        onClick={() => setAppModals(prev => ({ ...prev, signin: 'OPEN' }))}
        px='' py='py-3'
        classNames="text-[#842415] self-center mt-2 font-medium text-black bg-[#fffff5] border-2 border-orange-700 border-opacity-40 w-36 rounded-md cursor-default"
      >
        Get Started
      </Buttons>
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
    <article className={`midscreen:relative flex flex-col  md:even:items-end md:odd:items-start gap-y-2 ${textDirection} ${padding}`}>
      <div className={`midscreen:absolute w-fit -top-5 ${position} border-[1px] border-gray-300 font-sans rounded-sm text-2xl text-gray-400 py-0.5 px-2.5`}>
        {index}
      </div>
      <h4 className="z-20 font-medium text-xl capitalize">{title}</h4>
      <p className="text-gray-700 text-xs">{content}</p>
    </article>
  )
}