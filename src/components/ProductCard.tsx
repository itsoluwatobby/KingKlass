// import { format } from "timeago.js";
import { currencyFormat } from "../utility/formatPrice";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
// import { PiTimer } from "react-icons/pi";
import { TfiTimer } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "./styles/ProductCard.css";
import { reduceTextLength } from "../utility/truncateTextLength";

export type ProductCardProps = {
  img_url: string;
  price: number | string;
  estimated: number;
  name: string;
  id: string;
};

export default function ProductCard({
  img_url,
  price,
  estimated,
  name,
  id,
}: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/products/${id}`)}
      className="bg-[#F8F8F8] w-[45%] max-w-[300px]  flex flex-col relative shadow-md rounded-[4px]"
    >
      <img
        src={img_url}
        style={setCustomBackgroundImage(img_url)}
        alt="product image"
        className="object-cover aspect-[0.9/1] rounded-tr-[6px] rounded-tl-[4px]"
      />

      <span className="absolute top-0 left-0 m-2 rounded-[2px] bg-[#585858] p-1 px-2 text-center text-[12px] font-normal text-white font-montserrat">
        New
      </span>

      <div className="m-0 lg:px-3 mobile:px-1 py-1 pb-0 font-montserrat">
        <h5 className="text-base mobile:text-[14px]  m-0 font-normal">
          {reduceTextLength("White Senator with Kofu cap", 15)}
        </h5>

        <div className="mt-2.5 mb-0 flex items-center">
          <span className="mr-2 rounded bg-[#EFBF13] px-2.5 py-0.5 text-xs font-normal font-montserrat">
            5.0
          </span>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#EFBF13]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#EFBF13]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#EFBF13]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#EFBF13]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#EFBF13]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>

        <div className="mb-2 flex items-center justify-between p-0 m-o">
          <span className="m-0 p-0 text-lg font-montserra-alternates font-semibold">
            {currencyFormat(+price)}
          </span>

          <p className="flex gap-1 items-center text-[14px]">
            <TfiTimer style={{ fontSize: "1rem" }} />
            <span>{estimated}days</span>
          </p>
        </div>
      </div>
    </article>
  );
}
