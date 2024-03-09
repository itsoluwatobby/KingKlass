import { useDesignerContext } from "../../hooks/useDesignerContext";
import { initAppState, initMeasurements } from "../../utility/initialVariables";
import { useEffect, useState } from "react";
import { MeasurementCard } from "./measurement/MeasurementCard";
import { Buttons } from "../appComponents/Buttons";
import { toast } from "react-toastify";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { PiWarning } from "react-icons/pi";

export const Measurements = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [userMeasurements, setUserMeasurements] =
    useState<MeasurementProps>(initMeasurements);
  const { toggleNav, setToggleNav } =
    useDesignerContext() as DesignerContextProps;

  const { isLoading, isError } = appState;

  const handleSave = () => {
    try {
      const newMeasurementEntries = sanitizeEntries(userMeasurements);
      console.log(newMeasurementEntries);

      setAppState((prev) => ({ ...prev, success: true }));
      setToggleNav({ modalType: toggleNav.prevModal as ToggleNav });
      toast.success("Measurement Added!");
    } catch (error: any) {
      console.log(error);
      setAppState((prev) => ({ ...prev, isError: true }));
      toast.error("error message");
    } finally {
      setAppState((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    if (!isError) return;
    const timeoutId = setTimeout(() => {
      setAppState((prev) => ({ ...prev, isError: false }));
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isError]);

  return (
    <FadedBGWrapper
      modalType={toggleNav.modalType}
      expected="measurements"
      enlarge={true}
      isButtomSheet={true}
      classNames=""
      title="Measurements"
    >
      <div className="flex flex-col gap-y-2">
        <div className="h-[60vh] w-full grid grid-cols-2 gap-y-3 gap-x-4  transition-all border-3 px-4 py-2">
          {Object.entries(userMeasurements).map(([key, value]) => (
            <MeasurementCard
              key={key}
              keyName={key as MEASUREMENT_METRICS}
              value={value}
              setUserMeasurements={setUserMeasurements}
            />
          ))}
        </div>

        <p className="text-sm text-fdt-grey-dark-active font-normal flex justify-center gap-x-1 items-center p-1 mt-0">
          <span>
            <PiWarning className=" text-sm -mt-[2.3px]"/>
          </span>
          All measurement are in cm
        </p>
        <Buttons
          onClick={handleSave}
          px=""
          py=""
          isLoading={isLoading}
          classNames="font-montserrat self-center mb-1 text-base font-semibold bg-fdt-brown-normal py-2.5  text-white w-[95%] tracking-wide md:w-1/2 py-3 active:bg-orange-800 transition-colors"
        >
          Save and Exit
        </Buttons>
      </div>
    </FadedBGWrapper>
  );
};
