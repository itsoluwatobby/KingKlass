import { LiaTimesSolid } from "react-icons/lia";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { Buttons } from "../appComponents/Buttons"
import { useState } from "react";

type PurchasePromptProps = {
  productName: string;
  openPurchasePrompt: Toggle; 
  setOpenPurchasePrompt: React.Dispatch<React.SetStateAction<Toggle>>
}

type SelectionTypes = {
  saved: boolean;
  new: boolean;
}

export default function PurchasePrompt({ productName, openPurchasePrompt, setOpenPurchasePrompt }: PurchasePromptProps) {
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;
  const [selectionType, setSelectionType] = useState<SelectionTypes>({saved: false, new: true})

  
  return (
    <FadedBGWrapper
    modalType={openPurchasePrompt}
    expected="OPEN"
    >
      <div className="self-center w-96 maxscreen:w-[95%] flex flex-col items-center gap-y-4 bg-white rounded-t-lg py-4 px-2">
        <div className="flex justify-between">
          <h3 className="whitespace-pre-wrap flex-none w-[90%]">{productName}</h3>
          <LiaTimesSolid
            onClick={() => setOpenPurchasePrompt('CLOSE')}
            className='flex-none p-0.5 font-bold bg-white shadow-sm shadow-slate-800 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors'
          />
        </div>

        <div className="w-full flex flex-col p-1 text-sm gap-y-3">
          <span className="font-semibold">Select a measurement</span>

          <Selection 
            name="saved" checked={selectionType.saved}
            title="Use my saved measurement"
            setSelectionType={setSelectionType}
          />
          <Selection 
            name="new" checked={selectionType.new}
            title="Measurement"
            setSelectionType={setSelectionType}
          />
        </div>

        <div className="flex flex-col items-center gap-y-10 w-full self-center py-2">
          <input type="text" name="" id=""
          placeholder="Add a note"
          className="w-[95%] text-[13px] focus:outline-none border-0 border-b border-gray-400"
          />
          <Buttons
            onClick={() => {
              setOpenPurchasePrompt('CLOSE')
              setToggleNav({ modalType: "cartPreview" })
            }}
            px='' py=''
            classNames='rounded-[3px] text-sm font-semibold bg-[#8B4513] text-white grid place-content-center w-[90%] md:w-1/2 py-2.5 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors'
            >
            Add to cart
          </Buttons>
        </div>
      </div>
    </FadedBGWrapper>
  )
}

type SelectionProps = {
  name: string;
  checked: boolean;
  title: string;
  setSelectionType: React.Dispatch<React.SetStateAction<SelectionTypes>>;
}

const Selection = ({ name, checked, title, setSelectionType }: SelectionProps) => {

  return (
    <div className="relative flex items-center gap-x-3 w-fit">
      <input type="checkbox" name={name} id={name} 
      checked={checked}
      onChange={e => setSelectionType(prev => ({ ...prev, [e.target.name]: e.target.checked }))}
      className="z-10"
      hidden
      />
      <div className={`absolute rounded-full w-2.5 h-2.5 ${checked ? 'bg-black' : ''} -outline-offset-8 border border-gray-900 outline-slate-900 outline-[1px]`}/>
      <label htmlFor={name} className="pl-5 text-[13px] font-medium">{title}</label>
    </div>
  )
}