import { format } from 'timeago.js';
import { UserFeedback } from '../../utility/constants';
import { setCustomBackgroundImage } from '../../utility/setBackGroundImage'
import { Buttons } from '../appComponents/Buttons';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef } from 'react';


export default function Testimonials() {
  const refContainer = useRef<HTMLDivElement>(null);

  const toggleScroll = (direction: 'RIGHT'|'LEFT') => {
    if (!refContainer.current) return;
    direction === 'LEFT' ? refContainer.current.scrollLeft -= 400 : refContainer.current.scrollLeft += 400
  }

  return (
    <section className='bg-gray-100 px-3 flex flex-col gap-y-1 w-full pt-1 pb-4 min-h-[50vh]'>
      <div className='rounded-md relative w-full p-4 pb-2 h-24 flex flex-col items-center bg-[#311807]'>
        <div
          style={setCustomBackgroundImage(
            '/quotes.png',
            {
              backgroundSize: '8%',
              backgroundPosition: '10%',
            }
          )}
          className='flex w-full z-20 text-white items-end flex-col gap-y-4'>
          <h2 className='w-fit text-white text-3xl'>Our Happy Clients</h2>
          <p className='text-xs'>What Our Clients Say About Theur Tailoring Experience</p>
        </div>
      </div>

      {/* COMMENTS */}
      <div 
      ref={refContainer}
      className='scroll-smooth p-3 flex items-center gap-x-4 overflow-x-scroll'>
        {
          UserFeedback.map((feedback, index) => (
            <FeedBacks key={index}
              author={feedback.author} comment={feedback.Comment}
              location={feedback.location}
              date={feedback.date}
            />
          ))
        }
      </div>
      
      <div className='w-full flex items-center justify-between px-3'>
        <p className='flex items-center font-semibold'>
          <span className='text-[#176BEF]'>G</span><span className='text-[#FF3E30]'>o</span><span className='text-[#F7B529]'>o</span><span className='text-[#176BEF]'>g</span>
          <span className='text-[#179C52]'>l</span><span className='text-[#FF3E30]'>e</span>
        </p>

        <div className='flex items-center gap-x-4'>
          <Buttons
            onClick={() => toggleScroll('LEFT')}
            pl='' py=''
            classNames='rounded-full grid place-content-center w-8 h-8 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors'
          >
            <SlArrowLeft className='text-xl' />
          </Buttons>
          <Buttons
            onClick={() => toggleScroll('RIGHT')}
            pl='' py=''
            classNames='rounded-full grid place-content-center w-8 h-8 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors'
          >
            <SlArrowRight className='text-xl' />
          </Buttons>
        </div>
      </div>
    </section>
  )
}

type FeedBacksProps = {
  author: string;
  comment: string;
  location: string;
  date: string
}
const FeedBacks = ({ author, comment, location, date }: FeedBacksProps) => {
  const [firstName, lastName] = author.split(' ', 2);

  return (
    <div className='flex-none flex flex-col gap-y-3 maxmobile:w-full w-[23rem]'>
      <div className='capitalize font-semibold text-sm flex items-center gap-x-3'>
        <h3 className='flex-none w-8 h-8 grid place-content-center bg-[#F2DDB1] font-bold rounded-full p-2'>{author.substring(0, 1)}</h3>
        <h3 className=''>{firstName} &nbsp;{lastName.substring(0, 1)}</h3>
      </div>

      <p className='text-xs'>{comment}</p>

      <div className='capitalize font-normal text-xs tex-gray-800 flex items-center justify-between'>
        <span className='capitalize'>{location}</span>
        <span className='font-sans text-gray-600 text-[11px]'>{format(date)}</span>
      </div>
    </div>
  )
}