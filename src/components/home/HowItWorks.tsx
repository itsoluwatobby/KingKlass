import { HowKingClassWorks } from "../../utility/constants";


export default function HowItWorks() {
  return (
    <section className="relative p-4 flex flex-col gap-y-10 min-h-[75vh]">
      <h1 className="text-3xl font-bold text-center">How It Works</h1>
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