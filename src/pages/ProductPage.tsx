import HomeLayout from "../layout/HomeLayout";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";
import { currencyFormat, refindedReview } from "../utility/formatPrice";
import { PiTimer } from "react-icons/pi";
import { checkCount, reduceTextLength } from "../utility/truncateTextLength";
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

const initProductPreview = {
  product: {} as ProductType, productReviews: [] as ReviewsType[], productsPreview: [] as ProductType[]
}
export default function ProductPage() {
  const refContainer = useRef<HTMLDivElement>(null);
  const prod = useParams() as { productId: string };
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [productRes, setProductRes] = useState<typeof initProductPreview>(initProductPreview);

  const { isLoading, isError, isSuccess } = appState;
  const { product, productReviews, productsPreview } = productRes;

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => { 
      try {
        setAppState((prev) => ({ ...prev, isLoading: true }));
        const res = await getProduct(prod?.productId) as ProductType;
        const productReview = await getReviews(prod?.productId);
        const previews = randomizedProducts(await getProducts() as ProductType[]);

        setProductRes(prev => ({ 
          ...prev, product: { ...res }, productsPreview: previews,
          productReviews: [...productReview] 
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

  const [userReviews] = useState<ReviewsType[][]>(refindedReview(productReviews));
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
        <RequestStages useRelative={true}
          isLoading={isLoading} isError={isError}
          targetVal={product} isSuccess={isSuccess as boolean} errorText="Error Fetching Product" warnText="Product not found"
          >
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-2">
            <article className="shadow-sm flex-none md:w-1/2 cursor-default transition-all h-96 w-full relative flex flex-col gap-y-2">
              <span className="bg-red-300 bg-opacity-40 text-red-600 font-medium text-xs absolute top-4 left-4 rounded-sm p-1 px-3">
                New
              </span>
              <div
                style={setCustomBackgroundImage(product.img_url)}
                className="flex-none h-full w-full bg-slate-200 rounded-sm"
              ></div>
              <span className="bg-gray-600 bg-opacity-40 text-white font-medium text-xs absolute bottom-5 right-4 font-sans rounded-sm px-2.5 p-0.5">
                1/1
              </span>
            </article>

            <div className="flex-none md:w-[50%] flex flex-col gap-y-4 w-full">
              <div className="px-3 flex flex-col gap-y-1.5">
                <p className="text-sm">
                  {product.name}
                </p>
                <span className="font-sans font-medium text-xs">
                  {currencyFormat(+product.price)}
                </span>
                <div className="flex items-center justify-between">
                  <p className="flex items-center text-[11px]">
                    <PiTimer />
                    <span>{reduceTextLength(format(product.created_at), 15)}</span>
                  </p>
                  {/* make it copy product link */}
                  <IoShareSocialOutline className="text-2xl" />
                </div>
              </div>

              <div className="flex w-full items-center justify-around px-3 text-xs">
                <Buttons
                  onClick={() => toggleScroll("LEFT")}
                  px=""
                  py="py-2"
                  classNames="font-medium bg-[#fffff5] border-[1px] border-[#8B4213] text-[#8B4513] w-36 rounded-sm cursor-pointer"
                >
                  Inquire
                </Buttons>
                <Buttons
                  onClick={() => setToggleNav({ modalType: "purchasePrompt" })}
                  px=""
                  py="py-2"
                  classNames="font-medium text-black bg-[#8B4513] border-2 text-white hover:opacity-95 active:opacity-100 transition-opacity border-opacity-30 w-36 rounded-md cursor-pointer"
                >
                  Buy now
                </Buttons>
              </div>

              <div className="flex flex-col px-3 text-xs">
                <h4 className="font-semibold text-[13px]">Description</h4>
                <p>
                  {product.description}
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
              refContainer={refContainer} isLoading={isLoading}
              isError={isError} productReviews={userReviews}
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
                {
                  productsPreview.map((product) => (
                    <ProductCard key={product.id}
                      id={product.id}
                      img_url={product.img_url} 
                      price={product.price} 
                      // created_at={product.created_at}
                      estimated={product.estimated}
                      name={product.name}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </RequestStages>
      </div>
      <PurchasePrompt productName="" />
    </HomeLayout>
  );
}
