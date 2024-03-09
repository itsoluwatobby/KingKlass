import { useDesignerContext } from "../../hooks/useDesignerContext";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { Buttons } from "../../components/appComponents/Buttons";
import { ChangeEvent, useEffect, useState } from "react";

type PurchasePromptProps = {
  productName: string;
};

type SelectionTypes = {
  savedMeasurement: boolean;
  newMeasurement: boolean;
};

export default function PurchasePrompt({ productName }: PurchasePromptProps) {
  const { toggleNav, setToggleNav } =
    useDesignerContext() as DesignerContextProps;

  const [measurementType, setMeasurementType] = useState<SelectionTypes>({
    savedMeasurement: false,
    newMeasurement: false,
  });

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const eName = e.target.name;
    console.log(measurementType);
    if (eName === "new") {
      setMeasurementType({
        savedMeasurement: false,
        newMeasurement: true,
      });
    } else if (eName === "saved") {
      setMeasurementType({
        newMeasurement: false,
        savedMeasurement: true,
      });
    }

    console.log(measurementType);
  };

  useEffect(() => {
    if (measurementType.newMeasurement) {
      setToggleNav((prev) => ({
        ...prev,
        modalType: "measurements",
        prevModal: "purchasePrompt",
      }));
    }
  }, [measurementType.newMeasurement]);

  const canClick = [...Object.values(measurementType)].some(Boolean);

  return (
    <FadedBGWrapper
      modalType={toggleNav.modalType}
      enlarge={true}
      expected="purchasePrompt"
      classNames=""
      isButtomSheet={true}
    >
      <div className="w-full flex flex-col p-1 text-sm gap-y-4 font-montserrat">
        <span className="font-medium text-xl mb-1">
          Select a measurement {productName}
        </span>

        <MeasurementSelection
          name="saved"
          checked={measurementType.savedMeasurement}
          title="Use my saved measurement"
          handleSelectionChange={handleCheck}
        />
        <MeasurementSelection
          name="new"
          checked={measurementType.newMeasurement}
          title={"New measurement"}
          handleSelectionChange={handleCheck}
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
          classNames={`self-center rounded-md text-base font-semibold ${
            canClick
              ? "bg-[#8B4513] hover:bg-[#8B4413] active:bg-[#8B4513]"
              : "bg-gray-500"
          } text-white grid place-content-center w-[90%] md:w-1/2 py-2.5 transition-colors`}
        >
          Add to cart
        </Buttons>
      </div>
    </FadedBGWrapper>
  );
}

type SelectionProps = {
  name: string;
  checked: boolean;
  title: string;
  // setSelectionType: React.Dispatch<React.SetStateAction<SelectionTypes>>;
  handleSelectionChange: (e: any) => void;
};

const MeasurementSelection = ({
  name,
  title,
  checked,
  handleSelectionChange,
}: SelectionProps) => {
  return (
    <div className="flex   flex-row w-fit  justify-center items-center">
      <input
        type="radio"
        name={name}
        id={"name"}
        checked={checked}
        onChange={handleSelectionChange}
        className="cursor-pointer w-4 h-4 checked:accent-fdt-brown-normal mr-1.5 "
      />
      <label htmlFor={name} className="font-normal text-sm ml-2">
        {title}
      </label>
    </div>
  );
};
