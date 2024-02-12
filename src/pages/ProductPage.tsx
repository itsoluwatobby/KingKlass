import HomeLayout from "../layout/HomeLayout";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
import { formatPrice, refindedReview } from "../utility/formatPrice";
import { PiTimer } from "react-icons/pi";
import { checkCount, reduceTextLength } from "../utility/truncateTextLength";
import { format } from "timeago.js";
import { IoShareSocialOutline } from "react-icons/io5";
import { Buttons } from "../components/appComponents/Buttons";
import Ratings from "../components/Ratings";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import DisplayCard from "../components/DisplayCard";
import { useRef, useState } from "react";
import PurchasePrompt from "../components/modalPrompts/PurchasePrompt";
import { useDesignerContext } from "../hooks/useDesignerContext";


export default function ProductPage() {
  const refContainer = useRef<HTMLDivElement>(null);
  const reviews = [
    {
      "id": 0,
      "rating": [0, 1, 2],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Martins",
      "createdAt": "2024-01-02, 10:45"
    },
    {
      "id": 1,
      "rating": [0, 1],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Mark",
      "createdAt": "2023-10-15, 08:45"
    },
    {
      "id": 2,
      "rating": [0, 1, 2],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Smart",
      "createdAt": "2023-11-25, 20:40"
    },
    {
      "id": 3,
      "rating": [0, 1, 2, 3, 4],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Felix",
      "createdAt": "2024-01-12, 08:45"
    },
    {
      "id": 4,
      "rating": [0],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "John",
      "createdAt": "2024-01-05, 05:45"
    },
    {
      "id": 5,
      "rating": [],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Carson",
      "createdAt": "2024-01-05, 05:45"
    },
    {
      "id": 6,
      "rating": [0, 1, 2, 3],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Mary",
      "createdAt": "2024-01-05, 05:45"
    },
    {
      "id": 7,
      "rating": [0, 1],
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.",
      "author": "Angel",
      "createdAt": "2024-01-05, 05:45"
    }
  ]
  const [userReviews] = useState<Reviews[][]>(refindedReview(reviews))
  const { setToggleNav } = useDesignerContext() as DesignerContextProps;

  const toggleScroll = (direction: 'RIGHT' | 'LEFT') => {
    if (!refContainer.current) return;
    direction === 'LEFT' ? refContainer.current.scrollLeft -= 480 : refContainer.current.scrollLeft += 480
  }

  return (
    <HomeLayout>
      <div className="flex flex-col gap-y-4 md:px-7">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-2">
          <article className="shadow-sm flex-none md:w-1/2 cursor-default transition-all h-96 w-full relative flex flex-col gap-y-2"
          >
            <span className="bg-red-300 bg-opacity-40 text-red-600 font-medium text-xs absolute top-4 left-4 rounded-sm p-1 px-3">New</span>
            <div
              style={setCustomBackgroundImage('')}
              className="flex-none h-full w-full bg-slate-200 rounded-sm"
            >
            </div>
            <span className="bg-gray-600 bg-opacity-40 text-white font-medium text-xs absolute bottom-5 right-4 font-sans rounded-sm px-2.5 p-0.5">1/1</span>
          </article>

          <div className="flex-none md:w-[50%] flex flex-col gap-y-4 w-full">
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

            <div className="flex w-full items-center justify-around px-3 text-xs">
              <Buttons
                onClick={() => toggleScroll('LEFT')}
                px='' py='py-2'
                classNames="font-medium bg-[#fffff5] border-[1px] border-[#8B4213] text-[#8B4513] w-36 rounded-sm cursor-pointer"
              >
                Inquire
              </Buttons>
              <Buttons
                onClick={() => setToggleNav({ modalType: "purchasePrompt" })}
                px='' py='py-2'
                classNames="font-medium text-black bg-[#8B4513] border-2 text-white hover:opacity-95 active:opacity-100 transition-opacity border-opacity-30 w-36 rounded-md cursor-pointer"
              >
                Buy now
              </Buttons>
            </div>

            <div className="flex flex-col px-3 text-xs">
              <h4 className="font-semibold text-[13px]">Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto nostrum veniam suscipit deserunt possimus, ea ipsam incidunt laboriosam cupiditate, nemo qui eum eos, quasi velit veritatis numquam a quod.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 midscreen:px-3 text-xs">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-[13px] font-semibold">Reviews</h4>
            <div className="flex items-center gap-x-1 text-xs border-0 border-b-2 pb-0.5">
              <p className="border border-yellow-200 text-yellow-500 w-fit font-medium font-sans p-0.5 rounded-sm">4.4/5</p>
              <span className="font-sans text-gray-600">{checkCount(64)} ratings</span>
            </div>

            <div
              ref={refContainer}
              className='px-2 scroll-smooth flex items-center gap-x-4 overflow-x-scroll'>
              {
                userReviews?.map((splittedReviews, index) => (
                  <div key={index} className="flex flex-col min-w-full md:flex-row md:gap-x-4">
                    {
                      splittedReviews?.map((eachReview) => (
                        <Reviews key={eachReview["id"]}
                          review={eachReview}
                        />
                      ))
                    }
                  </div>
                ))
              }
            </div>
            <div className='flex items-center -mt-5 gap-x-4 self-end'>
              <Buttons
                onClick={() => toggleScroll('LEFT')}
                px='' py=''
                classNames='rounded-full grid text-sm place-content-center w-6 h-6 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors'
              >
                <SlArrowLeft className='text-sm' />
              </Buttons>
              <Buttons
                onClick={() => toggleScroll('RIGHT')}
                px='' py=''
                classNames='rounded-full grid place-content-center w-6 h-6 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors'
              >
                <SlArrowRight className='text-sm' />
              </Buttons>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-bold text-sm">Popular</h3>
            <div className="px-3 overflow-x-scroll flex items-center gap-x-3 flex-none h-[14.5rem] w-full">
              {
                [1, 2, 5, 5, 5, 5].map(index => (
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
        <PurchasePrompt 
          productName=""
        />
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
    <div className="w-full flex items-start flex-col gap-y-2 border-0 midscreen:border-b-2 md:border-r-2 md:pr-2 py-1">
      <Ratings
        addScore={false} ratedStars={review["rating"]}
        type="rate"
      />
      <div className="flex gap-x-8">
        <p className="whitespace-pre-wrap">{review["content"]}</p>
        <span className="self-end flex-none text-gray-600 text-[11px] font-sans">{review["createdAt"]}</span>
      </div>
      <span className="flex-none text-gray-700">{review["author"]}</span>

    </div>
  )
}