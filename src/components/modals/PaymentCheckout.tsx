import { Link } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { formatPrice } from "../../utility/formatPrice";
import { CiCloud, CiTrash } from "react-icons/ci";
import { Buttons } from "../appComponents/Buttons";
import ModalLayout from "../../layout/ModalLayout";
import { BsBank } from "react-icons/bs";
import { CopyComponent } from "./paymentCheckout/CopyComponent";
import { MagicNumbers } from "../../utility/constants";
import { deleteImage, imageUpload } from "../../utility/imageMutation";
import { ChangeEvent, useState } from "react";


export const PaymentCheckout = () => {
  const { toggleNav, setToggleNav, paymentProgress, setPaymentProgress } = useDesignerContext() as DesignerContextProps;
  const [receipt, setReceipt] = useState<string>('')
  const paymentAmount = '21200'
  const accountDetails = {
    bankName: 'United bank for Africa',
    accountNumber: '0021454544',
    accountName: 'KingKlass'
  }

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const dp = (event.target.files as FileList)[0]
    console.log(dp)
    if (dp.size > MagicNumbers.imageSize) {
      alert(`MAX ALLOWED FILE SIZE 1.4mb`)
    }
    else {
      // upload image
      imageUpload(dp, 'receipts')
      .then(async (res) => {
        if (receipt) {
          await deleteImage(receipt, 'receipts') //delete image existing image
        }
        setReceipt(res.url);
      })
      .catch((err) => {
        console.log(err)
        alert('ERROR UPLOADING IMAGE')
      })
    }
  }

  return (
    <ModalLayout
    modalType={toggleNav.modalType}
    expected="paymentCheckout"
    classNames="p-3"
    enlarge={true}
    extraClasses="p-4 pb-6 md:-mt-1 justify-between"
    >
      <div className="self-center flex flex-col items-center gap-y-4">
        <div className="flex items-center w-36 py-2 font-sans text-sm justify-between transition-all">
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
            msg='Amount copied'
          />
        </div>
      </div>

       {
          paymentProgress.progress === 'pending' ? 
            <div className="flex flex-col items-center gap-y-4">
              <span>Before you make this transfer</span>
              <div className="mobile:px-5 flex flex-col gap-y-2 text-sm text-gray-800">
                <span>Transfer only the exact amount</span>
                <span>Please confirm the account number before making payment</span>
              </div>
            </div>
          : 
          (
          <div className='flex flex-col self-center items-center w-full'>
            <figure className="w-20 h-12">
              <img src="/bank.png" className="w-full h-full object-contain"/>
            </figure>
            <div className="flex flex-col font-semibold items-center gap-y-1.5">
              <h4>{accountDetails.bankName}</h4>
              <CopyComponent 
                classNames="font-semibold"
                msg='Acount Number Copied'
                text={accountDetails.accountNumber}
              />
              <div className="flex items-center gap-x-1 text-[13px]">
                <span className="text-gray-600">Account Name: </span>
                <span>{accountDetails.accountName}</span>
              </div>
            </div>

            <label htmlFor="uploadReceipt" className="border rounded-[3px] self-center flex flex-col gap-y-2 items-center bg-gray-50 w-[75%] p-3 cursor-default mt-5">
              <CiCloud className='text-gray-800 text-2xl' />
              <input type="file" id='uploadReceipt' accept="image/*" 
              hidden onChange={handleFile}
              />
              <span className='text-xs text-gray-600 underline'>{receipt ? 'Receipt added' : 'Click to insert receipt'}</span>
            </label>
          </div>
          )
        }

        <div className={`rounded-sm flex flex-col ${paymentProgress.progress === 'completed' ? 'gap-y-8' : 'gap-y-20'} items-center py-5`}>
          <Buttons
            disabled={paymentProgress.progress === 'completed' && !receipt ? true : false }
            onClick={() => {
              if (paymentProgress.progress === 'completed') {
                setToggleNav(prev => ({...prev, modalType: "paymentPrompt", prevModal: "pass" }))
              }
              else {
                setPaymentProgress({ progress: "completed" })
              }
            }}
            px='' py='' 
            // isLoading={isLoading}
            classNames={`self-center rounded-sm font-semibold ${paymentProgress.progress === 'completed' ? (receipt.length ? 'bg-[#8B4513] hover:bg-[#8B4413] active:bg-[#8B4513]' : 'bg-gray-500') : 'bg-[#8B4513] hover:bg-[#8B4413] active:bg-[#8B4513]'} text-sm text-white w-[95%] md:w-1/2 py-3 hover:bg-[#8B4513] active:bg-[#8B4513] transition-colors tracking-wide`}
          >
            {paymentProgress.progress === 'completed' ? 'Paid' : 'Proceed'}
          </Buttons>
          
          <p className={`${paymentProgress.progress === 'completed' ? 'block' : 'hidden'} text-[13px] text-center text-gray-700`}>
            You will get a confirmation once we receive your payment
          </p>

          <div className="flex items-center justify-between w-[90%] self-center">
            <Buttons
              onClick={() => {
                setPaymentProgress({ progress: "pending" })
                setToggleNav({ modalType: 'pass' })
              }}
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
