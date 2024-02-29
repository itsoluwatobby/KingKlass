import { LiaTimesSolid } from "react-icons/lia";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { Buttons } from "../appComponents/Buttons";
import { ChangeEvent, useEffect, useState } from "react";

type PurchasePromptProps = {
  productName: string;
};

type SelectionTypes = {
  saved: boolean;
  new: boolean;
};

export default function PurchasePrompt({ productName }: PurchasePromptProps) {
  const { toggleNav, setToggleNav } =
    useDesignerContext() as DesignerContextProps;
  const [selectionType, setSelectionType] = useState<SelectionTypes>({
    saved: false,
    new: false,
  });

  useEffect(() => {
    if (selectionType.new)
      setToggleNav((prev) => ({
        ...prev,
        modalType: "measurements",
        prevModal: "pass",
      }));
  }, [selectionType.new]);

  const canClick = [...Object.values(selectionType)].some(Boolean);

  return (
    <FadedBGWrapper
      modalType={toggleNav.modalType}
      enlarge={true}
      expected="purchasePrompt"
    >
      <div className="mx-auto mt-20 w-96 h-fit maxmobile:w-[95%] flex flex-col items-center gap-y-4 bg-white rounded-t-xl rounded-b-md py-4 px-2">
        <div className="flex justify-between w-full">
          <h3 className="whitespace-pre-wrap flex-none w-[90%]">
            {productName}
          </h3>
          <LiaTimesSolid
            onClick={() => setToggleNav({ modalType: "pass" })}
            className="self-end flex-none p-0.5 font-bold bg-white shadow-sm shadow-slate-800 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors"
          />
        </div>

        <div className="w-full flex flex-col p-1 text-sm gap-y-3">
          <span className="font-semibold">Select a measurement</span>

          <Selection
            name="saved"
            checked={selectionType.saved}
            title="Use my saved measurement"
            setSelectionType={setSelectionType}
          />
          <Selection
            name="new"
            checked={selectionType.new}
            title={"Measurement"}
            setSelectionType={setSelectionType}
          />
        </div>

        <div className="flex flex-col items-center gap-y-10 w-full self-center py-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add a note"
            className="w-[95%] text-[13px] focus:outline-none border-0 border-b border-gray-400"
          />
          <Buttons
            disabled={!canClick}
            onClick={() => {
              setToggleNav((prev) => ({
                ...prev,
                modalType: "cartPreview",
                prevModal: "pass",
              }));
            }}
            px=""
            py=""
            classNames={`rounded-[3px] text-sm font-semibold ${
              canClick
                ? "bg-[#8B4513] hover:bg-[#8B4413] active:bg-[#8B4513]"
                : "bg-gray-500"
            } text-white grid place-content-center w-[90%] md:w-1/2 py-2.5 transition-colors`}
          >
            Add to cart
          </Buttons>
        </div>
      </div>
    </FadedBGWrapper>
  );
}

type SelectionProps = {
  name: string;
  checked: boolean;
  title: string;
  setSelectionType: React.Dispatch<React.SetStateAction<SelectionTypes>>;
};

const Selection = ({
  name,
  checked,
  title,
  setSelectionType,
}: SelectionProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const eName = e.target.name;
    if (eName === "new") {
      setSelectionType({ saved: false, new: e.target.checked });
    } else if (eName === "saved") {
      setSelectionType({ new: false, saved: e.target.checked });
    }
  };

  return (
    <div className="relative flex items-center gap-x-3 w-fit">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={handleCheck}
        className="z-10 cursor-pointer"
        hidden
      />
      <label
        htmlFor={name}
        className={`outline-black outline-offset-[1px] outline outline-1 rounded-full w-3 h-3 cursor-pointer ${
          checked ? "bg-black" : ""
        } border border-gray-900`}
      />
      <span className="text-[13px] font-medium">{title}</span>
    </div>
  );
};
