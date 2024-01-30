import React from 'react'
import { DesignImage } from '../appComponents/Image'

type Props = {}

export default function Testimonials({}: Props) {
  return (
    <section className='flex flex-col w-full'>
      <div className='relative w-full p-4 flex flex-col items-center bg-[#311807]'>
        <DesignImage 
          image='/quotes.png' rounded=''
          classNames='absolute'
        />
      </div>
    </section>
  )
}