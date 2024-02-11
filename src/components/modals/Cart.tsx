import { Link } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { formatPrice } from "../../utility/formatPrice";
import { CiTrash } from "react-icons/ci";
import { Buttons } from "../appComponents/Buttons";
import ModalLayout from "../../layout/ModalLayout";


export const Carts = () => {
  const { toggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <ModalLayout
    modalType={toggleNav.modalType}
    expected="carts"
    classNames="p-3"
    enlarge={true}
    >
      <div className={`flex-none -mt-7 md:-mt-4 min-h-fit sm:rounded-md mx-auto sm:w-[25rem] py-4 bg-white relative flex flex-col justify-between w-full`}>
        <div className="w-full flex flex-col gap-y-1">
          {
            [0,1,2,3,4,].map(i => (
              <Cart key={i}
                cartObj={{
                  productName: 'Gown',
                  image: "new Date('2024 01 25')",
                  price: 10_500
                }}
              />
            ))
          }
        </div>

        <div className="border border-gray-300 rounded-sm flex flex-col gap-y-8 items-center py-5">
          <div className="px-6 font-bold flex items-center justify-between text-xs w-full">
            <span>Total</span>
            <span className="font-sans">#{formatPrice(20_400)}.00</span>
          </div>
          <Buttons
            onClick={() => {}}
            px='' py='' 
            // isLoading={isLoading}
            classNames='self-center rounded-sm font-semibold bg-[#8B4513] text-xs text-white w-[95%] md:w-1/2 py-3 hover:bg-orange-700 active:bg-orange-800 transition-colors'
          >
            Checkout
          </Buttons>
        </div>
      </div>
    </ModalLayout>
  )
}


type CartProps = {
  cartObj: {
    image: string;
    productName: string;
    price: string | number;
  };
}
const Cart = ({ cartObj }: CartProps) => {

  return (
    <div className="hover:opacity-80 transition-opacity font-sans flex items-center p-2 border-[1px] even:bg-slate-50 odd:bg-slate-100 justify-between text-[12px] w-full">
      <Link to={``} className="flex-none w-[85%] flex items-center">
        <figure className="w-10 h-10 rounded-[3px] flex-none">
          <img src={cartObj.image} alt={cartObj.productName} className="object-cover h-full w-full rounded-[3px]" />
        </figure>
        <div className="flex items-center flex-col gap-y-1 px-3">
          <span>{cartObj.productName}</span>
          <span className="font-sans font-semibold text-[12px]">#{formatPrice(cartObj.price)}</span>
        </div>
      </Link>
     
      <CiTrash className="text-xl cursor-pointer hover::sacle-[1.002] active:scale-[1] transition-transform" />
    </div>
  )
}
