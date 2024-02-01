import { Motto } from '../../svgs/Motto';
import { setCustomBackgroundImage } from '../../utility/setBackGroundImage';


export default function Explore() {

  // min-h-[100vh]
  return (
    <section className='relative py-4 flex flex-col gap-y-8 min-h-[80vh]'>
      <div className="absolute w-fit top-[19rem] z-10 left-[44%] maxmobile:left-[40%] md:left-[44%]">
        <Motto size={{ width: "90", height: "89" }} />
      </div>
      <div className="absolute w-fit bottom-[19rem] left-[44%] maxmobile:left-[40%] md:left-[44%]">
        <Motto size={{ width: "90", height: "89" }} />
      </div>
      <DesignSamples
        image='/image1.png' description='We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.'
      />
      <DesignSamples
        image='/image2.png' description='We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.'
        flexDirection='flex-row-reverse'
        textDirection='text-start'
      />
      <DesignSamples
        image='/image3.png' description='We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.'
      />
    </section>
  )
}


type DesignSampleProps = {
  image: string;
  description: string;
  flexDirection?: string;
  textDirection?: string;
}
const DesignSamples = ({ image, description, flexDirection = "flex-row", textDirection = 'text-end' }: DesignSampleProps) => {

  return (
    <div className={`flex-none h-64 flex ${flexDirection} items-center w-full h-full`}>
      <div
      style={setCustomBackgroundImage(
        image
      )} 
      className="flex-none min-h-[20rem] rounded-l-md w-1/2"
      ></div>

      <p className={`p-3 ${textDirection} font-medium text-xs whitespace-pre-wrap`}>
        {description}
      </p>
    </div>
  )
}