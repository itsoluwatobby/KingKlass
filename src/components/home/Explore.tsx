import { setCustomBackgroundImage } from '../../utility/setBackGroundImage';
import WhatWeOffer from './WhatWeOffer';


export default function Explore() {

  // min-h-[100vh]
  return (
    <section className='py-4 flex flex-col md:flex-row-reverse gap-y-2 min-h-[75vh] transition-all md:text-sm'>

      <div className='md:hidden flex flex-col gap-1 items-center p-2 p4-3'>
        <h3 className="text-[#842415] md:text-xl text-2xl">GALLERY</h3>
        <h4 className='font-semibold text-lg md:text-lg'>WHY CUSTOM TAILORING?</h4>
        <p className='text-center md:text-base text-[13px]'>Choose custom tailoring for a perfect fit, unique style expression, unparalleled craftsmanship, and an enduring wardrobe investment.</p>
      </div>

      <div className='flex-auto w-full self-center flex items-center md:text-base'>
        <div className='mx-auto relative w-96 h-96 self-center'>
          <div
            style={setCustomBackgroundImage('/image1.png')}
            className='absolute shadow-md flex-none z-10 top-0 left-[20%] w-32 h-36 rounded-[3px]'
          />
          <div
            style={setCustomBackgroundImage('/image3.png')}
            className='absolute shadow-md flex-none z-10 bottom-2 left-[8%] w-44 h-48 rounded-[3px]'
          />
          <div
            className='absolute shadow-md flex-none bg-gray-300 z-0 top-[5.5rem] right-[15%] bg-opacity-50 w-44 h-48 rounded-[3px]'
          />
          <div
            style={setCustomBackgroundImage('/image2.png')}
            className='absolute shadow-md flex-none top-20 right-[12%] w-44 h-48 rounded-[3px]'
          />
        </div>
      </div>

      <WhatWeOffer />
    </section>
  )
}
