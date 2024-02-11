import { LiaTimesSolid } from "react-icons/lia";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { Buttons } from "../appComponents/Buttons"
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PaymentPrompt() {
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;
  const navigate = useNavigate()

  return (
    <FadedBGWrapper
      modalType={toggleNav.modalType}
      enlarge={true}
      expected="paymentPrompt"
    >
      <div className="relative mx-auto mt-32 w-fit h-fit flex flex-col items-center gap-y-5 bg-white rounded-t-lg rounded-b-md py-10 px-10">
        <FaCheck className="text-[3.5rem] bg-[#DBC5B6] bg-opacity-65 rounded-full p-3 text-[#8B4513]" />

        <h3 className="font-semibold text-center">Great your order has been sent!</h3>
        <span className="text-xs text-gray-600">You will receive a confirmation shortly</span>

        <div className="rounded-sm flex flex-col gap-y-3 items-center w-full">
          <Buttons
            onClick={() => navigate('/products')}
            px='' py=''
            // isLoading={isLoading}
            classNames='self-center rounded-sm font-semibold bg-[#8B4513] text-xs text-white w-full py-3 hover:bg-[#8B4513] active:bg-[#8B4513] transition-colors'
            >
            Continue Shopping
          </Buttons>
          <Buttons
            onClick={() => setToggleNav({ modalType: 'carts' })}
            px='' py=''
            // isLoading={isLoading}
            classNames='self-center whitespace-nowrap rounded-sm font-semibold border-[1px] border-[#8B4513] text-sm text-[#8B4513] w-full py-2.5 hover:bg-opacity-95 active:bg-opacity-100 transition-opacity'
            >
            View order
          </Buttons>
        </div>

        <LiaTimesSolid
          onClick={() => setToggleNav({ modalType: 'pass' })}
          className='absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors'
        />
      </div>
    </FadedBGWrapper>
  )
}
