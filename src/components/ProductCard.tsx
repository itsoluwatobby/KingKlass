import { format } from "timeago.js";
import { formatPrice } from "../utility/formatPrice";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
import { PiTimer } from "react-icons/pi";
import { reduceTextLength } from "../utility/truncateTextLength";
import { Link } from "react-router-dom";


export type ProductCardProps = {
    img_url: string;
    price: string | number;
    estimated: number;
    name: string; 
}

export default function DisplayCard( { img_url, price, estimated, name } : ProductCardProps) {
  
  return (
    <Link to={'/products/fahj357622i7sdh23'}>
      <article className="flex-none cursor-pointer hover:skew-y-1 hover:opacity-95 transition-all h-44 w-[9.8rem] lg:w-36 relative flex flex-col gap-y-2"
        >
        <span className="bg-red-300 bg-opacity-40 text-red-600 font-medium text-xs absolute top-1.5 left-1.5 rounded-sm p-1">New</span>
        <div
        style={setCustomBackgroundImage(img_url)}
        className="flex-none h-[85%] w-full bg-slate-300 rounded-sm"
        >
        </div>
        <div className="text-xs w-full flex flex-col gap-y-1 font-sans">
          <div className="flex items-center justify-between">
            <span className="font-medium">&#x20A6;{formatPrice(price)}</span>
            <p className="flex items-center text-[11px]">
              <PiTimer />
              <span>{reduceTextLength(format(estimated), 10)}</span>
            </p>
          </div>
          <p className="text-[13px]">{reduceTextLength(name)}</p>
        </div>
      </article>
    </Link>
  )
}