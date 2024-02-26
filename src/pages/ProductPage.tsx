import HomeLayout from "../layout/HomeLayout";
import { currencyFormat, refindedReview } from "../utility/formatPrice";
import { checkCount } from "../utility/truncateTextLength";
import { format } from "timeago.js";
import { IoShareSocialOutline } from "react-icons/io5";
import { Buttons } from "../components/appComponents/Buttons";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProductCard from "../components/ProductCard";
import { useEffect, useRef, useState } from "react";
import PurchasePrompt from "../components/modalPrompts/PurchasePrompt";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { useParams } from "react-router-dom";
import { initAppState } from "../utility/initialVariables";
import { getProduct, getProducts, getReviews } from "../api/globalRequest";
import RequestStages from "../components/RequestStage";
import { randomizedProducts } from "../utility/helpers";
import ProductReviews from "../components/products/ProductReviews";
import { TfiTimer } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";

const initProductPreview = {
  product: {} as ProductType,
  productReviews: [] as ReviewsType[],
  productsPreview: [] as ProductType[],
};
export default function ProductPage() {
  const refContainer = useRef<HTMLDivElement>(null);
  const prod = useParams() as { productId: string };
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [productRes, setProductRes] =
    useState<typeof initProductPreview>(initProductPreview);

  const { isLoading, isError, isSuccess } = appState;
  const { product, productReviews, productsPreview } = productRes;

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      try {
        setAppState((prev) => ({ ...prev, isLoading: true }));
        const res = (await getProduct(prod?.productId)) as ProductType;
        const productReview = await getReviews(prod?.productId);
        const previews = randomizedProducts(
          (await getProducts()) as ProductType[]
        );

        setProductRes((prev) => ({
          ...prev,
          product: { ...res },
          productsPreview: previews,
          productReviews: [...productReview],
        }));
        setAppState((prev) => ({ ...prev, isSuccess: true }));
      } catch (err: any) {
        console.log(err);
        setAppState((prev) => ({ ...prev, isError: true }));
      } finally {
        setAppState((prev) => ({ ...prev, isLoading: false }));
      }
    };
    isMounted ? fetchProduct() : null;
    return () => {
      isMounted = false;
    };
  }, [prod.productId]);

  const [userReviews] = useState<ReviewsType[][]>(
    refindedReview(productReviews)
  );
  const { setToggleNav } = useDesignerContext() as DesignerContextProps;

  const toggleScroll = (direction: "RIGHT" | "LEFT") => {
    if (!refContainer.current) return;
    direction === "LEFT"
      ? (refContainer.current.scrollLeft -= 480)
      : (refContainer.current.scrollLeft += 480);
  };

  return (
    <HomeLayout>
      <div className="relative flex flex-col gap-y-4 md:px-7 h-full">
        <RequestStages
          useRelative={true}
          isLoading={isLoading}
          isError={isError}
          targetVal={product}
          isSuccess={isSuccess as boolean}
          errorText="Error Fetching Product"
          warnText="Product not found"
        >
          <div className="flex flex-col  md:flex-row md:gap-x-2 mt-0">
            <article className="shadow-sm flex-none md:w-1/2 cursor-default transition-all w-full relative flex flex-col gap-y-2">
              <img
                src={product.img_url}
                alt=""
                className="bg-cover object-cover bg-center bg-local bg-no-repeat w-full aspect-[1.06/1] py-0"
              />

              <span className="bg-fdt-grey-dark bg-opacity-30 text-white font-medium text-xs absolute bottom-5 right-4 font-sans rounded-sm px-2.5 p-0.5">
                1/1
              </span>
            </article>

            <div className="font-montserrat flex-none md:w-[50%] gap-y-2 flex flex-col p-4 mt-0 w-full">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 text-sm text-fdt-grey-light">
                  <span className="bg-fdt-grey-dark font-bold  top-4 left-4 rounded-sm p-1 px-1.5 backdrop-blur-md">
                    New
                  </span>
                  <GoDotFill />
                  <span className="bg-[#FD5757]  font-bold  top-4 rounded-sm py-1 px-1.5 backdrop-blur-md">
                    -60%
                  </span>
                </div>
                <IoShareSocialOutline className="text-2xl" />
              </div>

              <div className="flex flex-row gap-2 text-base text-fdt-grey-darker">
                <span>Senator, </span>
                <span>Chinos</span>
              </div>

              <h3 className="text-2xl font-medium text-wrap">
                KingsKalss Trouser and Shirt and blue cap with
              </h3>

              <div className="mt-1 mb-0 flex items-center">
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

              <p className="flex gap-[.2rem] items-center text-base mt-1 text-fdt-grey-darker">
                <TfiTimer style={{ fontSize: "1rem" }} />
                <span>{product.estimated}days</span>
              </p>

              <DemarcationLine />

              <div className="flex w-full items-center justify-between text-xs">
                <h2 className="text-3xl font-montserrat-alternates font-medium text-fdt-brown-normal">
                  {currencyFormat(10500)}
                </h2>
                <Buttons
                  onClick={() => setToggleNav({ modalType: "purchasePrompt" })}
                  px="px-6"
                  py="py-3"
                  classNames="font-semibold text-base font-bold bg-fdt-brown-normal text-white hover:opacity-95 transition-opacity  rounded-md cursor-pointer"
                >
                  Buy now
                </Buttons>
              </div>

              <DemarcationLine />

              <div className="flex flex-col gap-2 font-montserrat">
                <h4 className="font-medium text-xl">Description</h4>
                <p className="text-base font-normal text-fdt-grey-dark-active text-wrap">
                  Handcrafted with care, this garment
                  reflects Nigeria's rich cultural heritage, adding a touch of
                  authenticity to your wardrobe. Perfect for any occasion, from
                  formal events to casual outings, the Senator cloth offers
                  versatility without compromising on comfort or quality.
                  Elevate your look, embrace your roots, and make a statement
                  with our Senator cloth – because true style knows no
                  boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 midscreen:px-3 text-xs">
            <div className="flex flex-col gap-y-3">
              <h4 className="text-[13px] font-semibold">Reviews</h4>
              <div className="flex items-center gap-x-1 text-xs border-0 border-b-2 pb-0.5">
                <p className="border border-yellow-200 text-yellow-500 w-fit font-medium font-sans p-0.5 rounded-sm">
                  4.4/5
                </p>
                <span className="font-sans text-gray-600">
                  {checkCount(64)} ratings
                </span>
              </div>

              <ProductReviews
                refContainer={refContainer}
                isLoading={isLoading}
                isError={isError}
                productReviews={userReviews}
                isSuccess={isSuccess as boolean}
              />

              <div className="flex items-center -mt-5 gap-x-4 self-end">
                <Buttons
                  onClick={() => toggleScroll("LEFT")}
                  px=""
                  py=""
                  classNames="rounded-full grid text-sm place-content-center w-6 h-6 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors"
                >
                  <SlArrowLeft className="text-sm" />
                </Buttons>
                <Buttons
                  onClick={() => toggleScroll("RIGHT")}
                  px=""
                  py=""
                  classNames="rounded-full grid place-content-center w-6 h-6 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors"
                >
                  <SlArrowRight className="text-sm" />
                </Buttons>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-bold text-sm">Popular</h3>
              <div className="px-3 overflow-x-scroll flex items-center gap-x-3 flex-none h-[14.5rem] w-full">
                {productsPreview.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    img_url={product.img_url}
                    price={product.price}
                    // created_at={product.created_at}
                    estimated={product.estimated}
                    name={product.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </RequestStages>
      </div>
      <PurchasePrompt productName="" />
    </HomeLayout>
  );
}

const DemarcationLine = () => {
  return <hr className="border-t-0.5 mx-7 border-fdt-grey-normal my-4" />;
};
