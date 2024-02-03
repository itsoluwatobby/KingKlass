import { useParams } from "react-router-dom"
import HomeLayout from "../layout/HomeLayout";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
import { formatPrice } from "../utility/formatPrice";
import { PiTimer } from "react-icons/pi";
import { checkCount, reduceTextLength } from "../utility/truncateTextLength";
import { format } from "timeago.js";
import { IoShareSocialOutline } from "react-icons/io5";
import { Buttons } from "../components/appComponents/Buttons";
import Ratings from "../components/Ratings";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import DisplayCard from "../components/DisplayCard";


export default function ProductPage() {
  const { productId } = useParams();

  console.log(productId)

  return (
    <HomeLayout>
      <div className="flex flex-col gap-y-4">
        <article className="shadow-sm flex-none cursor-default transition-all h-96 w-full relative flex flex-col gap-y-2"
          >
          <span className="bg-red-300 bg-opacity-40 text-red-600 font-medium text-xs absolute top-4 left-4 rounded-sm p-1 px-3">New</span>
          <div
          style={setCustomBackgroundImage('')}
          className="flex-none h-full w-full bg-slate-200 rounded-sm"
          >
          </div>
          <span className="bg-gray-600 bg-opacity-40 text-white font-medium text-xs absolute bottom-5 right-4 font-sans rounded-sm px-2.5 p-0.5">1/2</span>
        </article>

        <div className="px-3 flex flex-col gap-y-1.5">
          <p className="text-sm">KingKlass Trouser and Shirt and blue cap with..</p>
          <span className="font-sans font-medium text-xs">#{formatPrice(10_500)}</span>

          <div className="flex items-center justify-between">
            <p className="flex items-center text-[11px]">
              <PiTimer />
              <span>{reduceTextLength(format(new Date()), 10)}</span>
            </p>
            {/* make it copy product link */}
            <IoShareSocialOutline className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 px-3 text-xs">
          <div className="flex w-full items-center justify-around">
            <Buttons
                onClick={() => { }}
                px='' py='py-2'
                classNames="font-medium text-black bg-[#fffff5] border-2 border-orange-700 text-orange-700 border-opacity-30 w-36 rounded-sm cursor-pointer"
              >
              Inquire
            </Buttons>
            <Buttons
                onClick={() => { }}
                px='' py='py-2'
                classNames="font-medium text-black bg-[#fffff5] border-2 bg-orange-800 text-white border-opacity-30 w-36 rounded-sm cursor-pointer"
              >
              Inquire
            </Buttons>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[13px]">Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.
            </p>
          </div>

          <div className="flex flex-col gap-y-3">
            <h4 className="text-[13px] font-semibold">Reviews</h4>
            <div className="flex items-center gap-x-1 text-xs border-0 border-b-2 pb-0.5">
              <p className="border border-yellow-200 text-yellow-500 w-fit font-medium font-sans p-0.5 rounded-sm">4.4/5</p>
              <span className="font-sans text-gray-600">{checkCount(64)} ratings</span>
            </div>

            <div className="flex flex-col">
              {
                [1,2].map(index => (
                  <Reviews key={index}
                    review={{
                      rating: [0,1,2], author: 'Ibrahim',
                      createdAt: new Date().toUTCString(),
                      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod."
                    }}
                  />
                ))
              }
            </div>
            <div className='flex items-center gap-x-4 self-end'>
              <Buttons
                onClick={() => {}}
                px='' py=''
                classNames='rounded-full grid text-sm place-content-center w-6 h-6 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors'
              >
                <SlArrowLeft className='text-sm' />
              </Buttons>
              <Buttons
                onClick={() => {}}
                px='' py=''
                classNames='rounded-full grid place-content-center w-6 h-6 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors'
              >
                <SlArrowRight className='text-sm' />
              </Buttons>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 items-start">
            <h3 className="font-bold text-sm">Popular</h3>
            <div className="px-4 p-1 overflow-y-scroll flex items-center gap-x-3 min-h- w-full">
              {
                [1,2,5,5,5,5].map(index => (
                  <DisplayCard key={index}
                  designInfo={{
                    image: '', price: 10_500,
                    createdAt: new Date().toUTCString(),
                    name: "King Klass trouser, custom"
                  }}
                />
                ))
              }
          </div>
          </div>
          
        </div>
      </div>
    </HomeLayout>
  )
}


type ReviewsProps = {
  review: {
    rating: number[];
    content: string;
    author: string;
    createdAt: string;
  }
}
const Reviews = ({ review }: ReviewsProps) => {

  return (
    <div className="w-full flex items-start flex-col gap-y-2 border-0 border-b-2 py-1">
      <Ratings 
        addScore={false} ratedStars={review.rating}
        type="rate"
      />
      <div className="flex gap-x-8">
        <p>{review.content}</p>
        <span className="self-end flex-none text-gray-600 text-[11px] font-sans">{review.createdAt}</span>
      </div>
      <span className="flex-none text-gray-700">{review.author}</span>

    </div>
  )
}