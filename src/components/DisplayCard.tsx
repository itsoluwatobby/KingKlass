import { format } from "timeago.js";
import { formatPrice } from "../utility/formatPrice";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
import { PiTimer } from "react-icons/pi";
import { reduceTextLength } from "../utility/truncateTextLength";
import { Link } from "react-router-dom";


type DisplayCardProps = {
  designInfo: {
    image: string;
    price: string | number;
    createdAt: string;
    name: string; 
  }
}

export default function DisplayCard({ designInfo }: DisplayCardProps) {
  const { image, price, createdAt, name } = designInfo;
  
  return (
    <Link to={'/products/fahj357622i7sdh23'}>
      <article className="flex-none cursor-pointer hover:skew-y-1 hover:opacity-95 transition-all h-44 w-[9.8rem] lg:w-36 relative flex flex-col gap-y-2"
        >
        <span className="bg-red-300 bg-opacity-40 text-red-600 font-medium text-xs absolute top-1.5 left-1.5 rounded-sm p-1">New</span>
        <div
        style={setCustomBackgroundImage(image)}
        className="flex-none h-[85%] w-full bg-slate-300 rounded-sm"
        >
        </div>
        <div className="text-xs w-full flex flex-col gap-y-1 font-sans">
          <div className="flex items-center justify-between">
            <span className="font-medium">#{formatPrice(price)}</span>
            <p className="flex items-center text-[11px]">
              <PiTimer />
              <span>{reduceTextLength(format(createdAt), 10)}</span>
            </p>
          </div>
          <p className="text-[13px]">{reduceTextLength(name)}</p>
        </div>
      </article>
    </Link>
  )
}