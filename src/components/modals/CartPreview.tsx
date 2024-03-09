import { Link } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { currencyFormat } from "../../utility/formatPrice";
import { Buttons } from "../appComponents/Buttons";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FadedBGWrapper from "../../layout/FadedBGWrapper";

export const CartPreview = () => {
  const { toggleNav, setToggleNav } =
    useDesignerContext() as DesignerContextProps;
  const navigate = useNavigate();

  return (
    <FadedBGWrapper
      modalType={toggleNav.modalType}
      expected="cartPreview"
      classNames="!h-[85%] !w-[75%] !ml-[25%] !rounded-tr-[0] !rounded-tl-[12px]"
      isButtomSheet={true}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-4">
            <FaCheck className="text-5xl bg-fdt-brown-light-active rounded-full p-2 text-fdt-brown-normal" />
            <span className="text-fdt-brown-normal text-base font-montserrat font-semibold">
              Item added to Cart
            </span>
          </div>
          <div className="globalScrollbar w-full flex flex-col gap-y-2 max-h-[80%] overflow-y-scroll px-1 pb-4">
            {[0, 1, 2, 3].map((i) => (
              <CartItem
                key={i}
                cartObj={{
                  productName: "Gown",
                  image: "new Date('2024 01 25')",
                  price: 10_500,
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex-none rounded-sm flex flex-col gap-y-4 items-center py-5 justify-self-end">
          <Buttons
            onClick={() =>
              setToggleNav((prev) => ({
                ...prev,
                modalType: "carts",
                prevModal: "cartPreview",
              }))
            }
            px=""
            py=""
            // isLoading={isLoading}
            classNames="self-center rounded-md font-semibold bg-[#8B4513] text-base text-montserrat text-white w-[95%] md:w-1/2 py-2 hover:bg-[#8B4513] active:bg-[#8B4513] transition-colors"
          >
            View cart
          </Buttons>
          <Buttons
            onClick={() => navigate("/products")}
            px=""
            py=""
            // isLoading={isLoading}
            classNames="self-center rounded-md font-semibold border-[1px] border-fdt-brown-normal text-base text-montserrat text-fdt-brown-normal w-[95%] md:w-1/2 py-2 hover:bg-opacity-95 active:bg-opacity-100 transition-opacity"
          >
            Continue Shopping
          </Buttons>
        </div>{" "}
      </div>
    </FadedBGWrapper>
  );
};

type CartItemProps = {
  cartObj: {
    image: string;
    productName: string;
    price: number;
  };
};
const CartItem = ({ cartObj }: CartItemProps) => {
  return (
    <div className="hover:opacity-80 transition-opacity font-sans flex items-center rounded-md p-1 border-[1px] justify-between w-full">
      <Link to={``} className="flex-none w-[85%] flex items-center">
        <figure className="w-11 h-11 rounded-[3px] flex-none border">
          <img
            src={
              "https://images.unsplash.com/photo-1493455198445-863243d88564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={cartObj.productName}
            className="object-cover h-full w-full rounded-sm"
          />
        </figure>
        <div className="flex items-start flex-col gap-y-2 px-3 text-fdt-grey-darker">
          <span className="font-montserrat text-sm font-normal">
            {"KingsKlass shirt"}
          </span>
          <span className="font-semibold text-[12px] font-montserrat-alternates">
            {currencyFormat(cartObj.price)}
          </span>
        </div>
      </Link>

      {/* <CiTrash className="text-xl cursor-pointer hover::sacle-[1.002] active:scale-[1] transition-transform" /> */}
    </div>
  );
};
