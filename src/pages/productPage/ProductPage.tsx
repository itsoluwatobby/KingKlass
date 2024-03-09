import HomeLayout from "../../layout/HomeLayout";
import { currencyFormat, refindedReview } from "../../utility/formatPrice";
import { checkCount } from "../../utility/truncateTextLength";

import { IoShareSocialOutline } from "react-icons/io5";
import { Buttons } from "../../components/appComponents/Buttons";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProductCard from "../../components/ProductCard";
import { useEffect, useRef, useState } from "react";
import PurchasePrompt from "./MeasurementOptionPrompt";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { useParams } from "react-router-dom";
import { initAppState } from "../../utility/initialVariables";
import { getProduct, getProducts, getReviews } from "../../api/globalRequest";
import RequestStages from "../../components/RequestStage";
import { randomizedProducts } from "../../utility/helpers";
import ProductReviews from "../../components/products/ProductReviews";
import { TfiTimer } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";
import DemarcationLine from "../../components/appComponents/DemarcationLine";

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
  const { user, setAppModals } = useDesignerContext() as DesignerContextProps;
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
  }, []);

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
                <div className="flex flex-row gap-1 text-sm text-fdt-grey-light items-center">
                  <span className="bg-fdt-grey-dark font-bold  top-4 left-4 rounded-sm p-1 px-1.5 backdrop-blur-md">
                    New
                  </span>

                  <span className="bg-[#FD5757]  font-bold  top-4 rounded-sm py-1 px-1.5 backdrop-blur-md">
                    -60%
                  </span>
                </div>
                <IoShareSocialOutline className="text-2xl" />
              </div>

              <div className="flex flex-row gap-1.5 text-base text-fdt-grey-darker items-center">
                <span>Senator</span>
                <GoDotFill className="text-sm text-black" />
                <span>Chinos</span>
                <GoDotFill className="text-sm text-black" />
                <span>Lace</span>
              </div>

              <h3 className="text-2xl font-medium text-wrap">
                KingsKalss Trouser and Shirt and blue cap with
              </h3>

              <p className="flex gap-[.2rem] items-center text-base mt-1 text-fdt-grey-darker">
                <TfiTimer style={{ fontSize: "1rem" }} />
                <span>{product.estimated}days</span>
              </p>

              <DemarcationLine classNames="border-t-0.5 mx-7 border-fdt-grey-normal my-4"/>

              <div className="flex w-full items-center justify-between text-xs">
                <h2 className="text-3xl font-montserrat-alternates font-medium text-fdt-brown-normal">
                  {currencyFormat(10500)}
                </h2>
                <Buttons
                  onClick={() => {
                    user.isSignedIn
                      ? setToggleNav({ modalType: "purchasePrompt" })
                      : setAppModals((prev) => ({ ...prev, signin: "OPEN" }));
                  }}
                  px="px-6"
                  py="py-3"
                  classNames="font-semibold text-base font-bold bg-fdt-brown-normal text-white hover:opacity-95 transition-opacity  rounded-md cursor-pointer"
                >
                  Buy now
                </Buttons>
              </div>

              <DemarcationLine classNames="border-t-0.5 mx-7 border-fdt-grey-normal my-4"/>

              <div className="flex flex-col gap-2 font-montserrat">
                <h4 className="font-medium text-xl">Description</h4>
                <p className="text-base font-normal text-fdt-grey-dark-active text-wrap">
                  Handcrafted with care, this garment reflects Nigeria's rich
                  cultural heritage, adding a touch of authenticity to your
                  wardrobe. Perfect for any occasion, from formal events to
                  casual outings, the Senator cloth offers versatility without
                  compromising on comfort or quality. Elevate your look, embrace
                  your roots, and make a statement with our Senator cloth –
                  because true style knows no boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 midscreen:px-3 font-montserrat">
            <div className="flex flex-col gap-y-3">
              <h4 className="text-xl font-medium">Reviews</h4>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-0.5 pb-1 border-fdt-grey-normal">
                <p className=" bg-[#F1CB43] text-fdt-grey-darker p-1  rounded-sm">
                  4.4/5
                </p>
                <span className="text-fdt-grey-darker">
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

            <div className="flex flex-col gap-y-3 items-start  font-montserrat ">
              <h4 className="font-medium text-xl">Similar Products</h4>
              <div className="px-1 overflow-x-scroll flex justify-start items-center bg-[#F4F4F4] pt-3 gap-x-3   w-full">
                {productsPreview.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    img_url={product.img_url}
                    price={product.price}
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