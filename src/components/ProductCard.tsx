import { format } from "timeago.js";
import { currencyFormat } from "../utility/formatPrice";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
// import { PiTimer } from "react-icons/pi";
import { TfiTimer } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./styles/ProductCard.css";
import { reduceTextLength } from "../utility/truncateTextLength";

<<<<<<< HEAD
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
=======
type ProductCardProps = {
  id: string;
  img_url: string;
  price: string | number;
  estimated: number;
  name: string;
  created_at: string;
}

export default function ProductCard({ id, img_url, created_at, price, estimated, name } : ProductCardProps) {
  void(estimated);

  return (
    <Link to={`/products/${id}`}>
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
              <span>{reduceTextLength(format(created_at), 12)}</span>
>>>>>>> 526c7ce7c05da0b52bf9a240527b6022ea758fae
            </p>

        </div>
        <h5 className="product--card--name">
          Casual senator with banga stripe
        </h5>

      </div>
    </Link>
  );
}
