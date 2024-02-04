import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import { Icon3 } from "./icons/Icon3";
import { Icon4 } from "./icons/Icon4";



export default function WhatWeOffer() {
  return (
    <div className='grid grid-cols-2 self-center px-4 pb-2 flex-none h-80 w-full'>
      <div
        className={`px-4 p-2 h-40 flex flex-col items-center gap-y-2`}>
        <div className='bg-[#964235] p-1 rounded-sm'>
          <Icon1 />
        </div>
        <h3>Perfect Fit</h3>
        <p className="text-xs text-center">Tailored to your measurements for unparalleled comfort and confidence.</p>
      </div>
      <div
        className={`px-4 p-2 h-40 flex flex-col items-center gap-y-2`}>
        <div className='bg-[#964235] p-1 rounded-sm'>
          <Icon2 />
        </div>
        <h3>Individual Style</h3>
        <p className="text-xs text-center">Express your unique taste with personalized fabrics and designs.</p>
      </div>
      <div
        className={`px-4 p-2 h-40 flex flex-col items-center gap-y-2`}>
        <div className='bg-[#964235] p-1 rounded-sm'>
          <Icon3 />
        </div>
        <h3>Craftmanship</h3>
        <p className="text-xs text-center">Prioritizing quality and attention to detail for sophisticated clothing.</p>
      </div>
      <div
        className={`px-4 p-2 h-40 flex flex-col items-center gap-y-2`}>
        <div className='bg-[#964235] p-1 rounded-sm'>
          <Icon4 />
        </div>
        <h3>Timeless Wardrobe</h3>
        <p className="text-xs text-center">Invest in enduring style that transcends trends, a lasting value.</p>
      </div>
    </div>
  )
}