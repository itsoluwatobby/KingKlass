import { setCustomBackgroundImage } from '../../utility/setBackGroundImage'


export default function Testimonials() {
  return (
    <section className='flex flex-col w-full pt-1 pb-4'>
      <div className='relative w-full p-4 flex flex-col items-center bg-[#311807]'>
        <div 
        style={setCustomBackgroundImage(
          '/quotes.png',
          {
            backgroundSize: '15%',
            backgroundPosition: '10%',
          }
        )}
        className='flex w-full z-20 text-white items-end flex-col gap-y-4'>
          <h2 className='w-fit text-white text-3xl'>Our Happy Clients</h2>
          <p className='text-xs'>What Our Clients Say About Theur Tailoring Experience</p>
        </div>
      </div>
    </section>
  )
}