import { Link } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { formatPrice } from "../../utility/formatPrice";
import { CiTrash } from "react-icons/ci";
import { Buttons } from "../appComponents/Buttons";
import ModalLayout from "../../layout/ModalLayout";
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

export const CartPreview = () => {
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;
  const navigate = useNavigate()

  return (
    <ModalLayout
      modalType={toggleNav.modalType}
      expected="cartPreview"
      classNames="p-3"
      enlarge={true}
      noFullScreen={true}
      extraClasses="py-4 -mt-1.5 justify-between"
    >
      <LiaTimesSolid
        onClick={() => setToggleNav({ modalType: "pass" })}
        className='absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors'
      />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-4">
          <FaCheck className="text-4xl bg-[#DBC5B6] rounded-full p-2 text-[#8B4513]" />
          <span className="text-[#8B4513] text-sm">Item added to Cart</span>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          {
            [0, 1, 2].map(i => (
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
      </div>

      <div className="rounded-sm flex flex-col gap-y-4 items-center py-5">
        <Buttons
          onClick={() => setToggleNav(prev => ({ ...prev, modalType: 'carts', prevModal: "cartPreview" }))}
          px='' py=''
          // isLoading={isLoading}
          classNames='self-center rounded-sm font-semibold bg-[#8B4513] text-xs text-white w-[95%] md:w-1/2 py-3 hover:bg-[#8B4513] active:bg-[#8B4513] transition-colors'
        >
          View cart
        </Buttons>
        <Buttons
          onClick={() => navigate('/products')}
          px='' py=''
          // isLoading={isLoading}
          classNames='self-center rounded-sm font-semibold border-[1px] border-[#8B4513] text-sm text-[#8B4513] w-[95%] md:w-1/2 py-2.5 hover:bg-opacity-95 active:bg-opacity-100 transition-opacity'
        >
          Continue Shopping
        </Buttons>
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
        <figure className="w-10 h-10 rounded-[3px] flex-none border">
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
