import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import { Icon3 } from "./icons/Icon3";
import { Icon4 } from "./icons/Icon4";

export default function WhatWeOffer() {
  return (
    <div className='lg:pl-16 md:pl-10 h-80 flex flex-col w-full transition-all'>

      <div className='hidden md:flex flex-col gap-1 p-2 p4-3'>
        <h3 className="text-[#842415] md:text-xl text-2xl">GALLERY</h3>
        <h4 className='font-semibold text-lg md:text-lg'>WHY CUSTOME TAILORING?</h4>
        <p className='md:text-sm'>Choose custom tailoring for a perfect fit, unique style expression, unparalleled craftsmanship, and an enduring wardrobe investment.</p>
      </div>

      <div className="grid grid-cols-2 self-center px-4 md:px-0 pb-2 flex-none h-80 w-full">
        <div
          className={`midscreen:px-4 p-2 h-40 flex md:flex-row md:gap-x-2 flex-col items-center gap-y-2`}>
          <div className='bg-[#964235] p-1 rounded-sm'>
            <Icon1 />
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-0.5">
            <h3 className="font-semibold">Perfect Fit</h3>
            <p className="text-xs midscreen:text-center">Tailored to your measurements for unparalleled comfort and confidence.</p>
          </div>
        </div>

        <div
          className={`midscreen:px-4 p-2 h-40 flex md:flex-row md:gap-x-2 flex-col items-center gap-y-2`}>
          <div className='bg-[#964235] p-1 rounded-sm'>
            <Icon2 />
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-0.5">
            <h3 className="font-semibold">Individual Style</h3>
            <p className="text-xs midscreen:text-center">Express your unique taste with personalized fabrics and designs.</p>
          </div>
        </div>

        <div
          className={`midscreen:px-4 p-2 h-40 flex md:flex-row md:gap-x-2 flex-col items-center gap-y-2`}>
          <div className='bg-[#964235] p-1 rounded-sm'>
            <Icon3 />
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-0.5">
            <h3 className="font-semibold">Craftmanship</h3>
            <p className="text-xs midscreen:text-center">Prioritizing quality and attention to detail for sophisticated clothing.</p>
          </div>
        </div>

        <div
          className={`midscreen:px-4 p-2 h-40 flex md:flex-row md:gap-x-2 flex-col items-center gap-y-2`}>
          <div className='bg-[#964235] p-1 rounded-sm'>
            <Icon4 />
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-0.5">
            <h3 className="font-semibold">Timeless Wardrobe</h3>
            <p className="text-xs midscreen:text-center">Invest in enduring style that transcends trends, a lasting value.</p>
          </div>
        </div>

      </div>
    </div>
  )
}