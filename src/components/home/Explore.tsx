import React from 'react'
import { Motto } from '../../svgs/Motto';

type Props = {}

export default function Explore({}: Props) {

  // min-h-[100vh]
  return (
    <section className='relative p-4 flex flex-col gap-y-8'>
      <div className="absolute w-fit top-60 z-10 left-[42%] md:left-[47%]">
        <Motto size={{ width: "90", height: "89" }} />
      </div>
      <div className="absolute w-fit bottom-60 left-[42%] md:left-[47%]">
        <Motto size={{ width: "90", height: "89" }} />
      </div>
      <DesignSamples 
        image='' description='We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.' 
      />
      <DesignSamples 
        image='' description='We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.' 
        flexDirection='flex-row-reverse'
        textDirection='text-start'
      />
      <DesignSamples 
        image='' description='We intertwine timeless craftsmanship with personalized elegance, crafting bespoke garments that tell a story of enduring style.'
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
const DesignSamples = ({ image, description, flexDirection="flex-row", textDirection='text-end' }: DesignSampleProps) => {

  return (
    <div className={`flex-none h-64 flex ${flexDirection} items-center w-full h-full`}>
      <figure className="flex-none w-1/2 h-full bg-gray-300 rounded-l-md">
        <img src={image} alt="" className="w-full h-full rounded-l-md object-cover" />
      </figure>
    
      <p className={`p-3 ${textDirection} font-medium text-xs whitespace-pre-wrap`}>
       {description}
      </p>
    </div>
  )
}