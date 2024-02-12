import { Link } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { formatPrice } from "../../utility/formatPrice";
import { CiTrash } from "react-icons/ci";
import { Buttons } from "../appComponents/Buttons";
import ModalLayout from "../../layout/ModalLayout";
import { BsBank } from "react-icons/bs";
import { CopyComponent } from "./paymentCheckout/CopyComponent";


export const PaymentCheckout = () => {
  const { toggleNav, setToggleNav, paymentProgress, setPaymentProgress } = useDesignerContext() as DesignerContextProps;
  const paymentAmount = '21200'
  const accountDetails = {
    bankName: 'United bank for Africa',
    accountNumber: '0021454544',
    accountName: 'KingKlass'
  }

  return (
    <ModalLayout
    modalType={toggleNav.modalType}
    expected="pass"
    classNames="p-3"
    enlarge={true}
    extraClasses="p-4 pb-10 md:-mt-1 justify-between"
    >
     
        <div className="self-center flex flex-col items-center gap-y-4">
          <div className="flex items-center w-36 py-2 font-sans text-sm justify-between">
            <span className={`bg-[#8B4513] text-white rounded-full w-6 h-6 grid place-content-center`}>1</span>
            <div className="bg-[#f48a3f] h-[1px] w-[66%]" />
            <span className={`${paymentProgress.progress === 'pending' ? 'border border-[#8B4513] bg-gray-100' : 'bg-[#8B4513] text-white'} rounded-full w-6 h-6 grid place-content-center`}>2</span>
          </div>

          <div className="flex flex-col items-center gap-y-3 self-center">
            <BsBank className="text-2xl text-gray-500" />
            <CopyComponent 
              classNames="font-medium"
              element={
              <b>Pay &#x20A6;{formatPrice(paymentAmount)}</b>}
              text={paymentAmount}
            />
          </div>
        </div>

       {
          paymentProgress.progress === 'pending' ? 
            <div className="flex flex-col items-center gap-y-4">
                <span>Before you make this transfer</span>
                <div className="flex flex-col gap-y-2 text-sm text-gray-800">
                  <span>Transfer only the exact amount</span>
                  <span>Please confirm the account number before proceeding</span>
                </div>
              </div>
            :
              <div className='flex flex-col self-center items-center'>
                <figure className="w-20 h-12">
                  <img src="/bank.png" className="w-full h-full object-contain"/>
                </figure>
                <div className="flex flex-col font-semibold items-center gap-y-1.5">
                  <h4>{accountDetails.bankName}</h4>
                  <CopyComponent 
                    classNames="font-semibold"
                    text={accountDetails.accountNumber}
                  />
                  <div className="flex items-center gap-x-1 text-[13px]">
                    <span className="text-gray-600">Account Name: </span>
                    <span>{accountDetails.accountName}</span>
                  </div>
                </div>
              </div>
        }

        <div className="rounded-sm flex flex-col gap-y-20 items-center py-5">
          <Buttons
            onClick={() => setPaymentProgress({ progress: "comfirmed" })}
            px='' py='' 
            // isLoading={isLoading}
            classNames='self-center rounded-sm font-semibold bg-[#8B4513] text-xs text-white w-[95%] md:w-1/2 py-3 hover:bg-[#8B4513] active:bg-[#8B4513] transition-colors tracking-wide'
          >
            {paymentProgress.progress === 'pending' ? 'Paid' : 'Proceed'}
          </Buttons>
          {/* proceed to upload receipt page */}
          <div className="flex items-center justify-between w-[90%] self-center">
            <Buttons
              onClick={() => setToggleNav({ modalType: 'pass' })}
              px='' py='' 
              // isLoading={isLoading}
              classNames='self-center rounded-[3px] font-semibold border-[1px] border-gray-300 text-sm text-[#8B4513] w-32 p-2.5 hover:bg-opacity-95 active:bg-opacity-100 transition-opacity'
            >
              Cancel
            </Buttons>
            <Buttons
              onClick={() => setToggleNav({ modalType: 'pass' })}
              px='' py='' 
              // isLoading={isLoading}
              classNames='self-center rounded-[3px] font-semibold border-[1px] border-gray-300 text-sm text-[#8B4513] w-32 py-2.5 hover:bg-opacity-95 active:bg-opacity-100 transition-opacity'
            >
              Help
            </Buttons>
          </div>
        </div>
    </ModalLayout>
  )
}
