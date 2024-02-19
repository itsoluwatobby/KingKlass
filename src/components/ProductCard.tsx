import { format } from "timeago.js";
import { currencyFormat } from "../utility/formatPrice";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
// import { PiTimer } from "react-icons/pi";
import { TfiTimer } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./styles/ProductCard.css";
import { reduceTextLength } from "../utility/truncateTextLength";

export type ProductCardProps = {
  img_url: string;
  price: number;
  estimated: number;
  name: string;
  id: string
};

export default function ProductCard({
  img_url,
  price,
  estimated,
  name,
  id
}: ProductCardProps) {
  console.log(id)
  return (
    <Link
      to={`/products/${id}`}
      className="product--card relative w-full overflow-hidden bg-white shadow-md"
    >
      <img
        src={img_url}
        style={setCustomBackgroundImage(img_url)}
        alt="product image"
        className="product--card--image"
      />
      {/* <span className="bg-black  rounded bg-opacity-2 text-white font-medium text-xs absolute top-1.5 left-1.5 rounded-sm p-2">
        New
      </span> */}

      <span className="absolute top-0 left-0 m-2 rounded-lg bg-black p-1 px-2 text-center text-sm font-medium text-white">30% OFF</span>

      <div className="product--card--info">
      
        <div className="mb-2 flex items-center justify-between">
            <span className="product--card--price roboto-bold text-slate-900">
            {currencyFormat(price)}
            </span>

            <p className="flex gap-1 items-center text-[14px]">
              <TfiTimer style={{fontSize: "1rem"}} />
              <span>{estimated} days</span>
            </p>

        </div>
        <h5 className="product--card--name">
          Casual senator with banga stripe
        </h5>

      </div>
    </Link>
  );
}
