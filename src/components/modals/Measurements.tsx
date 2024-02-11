import { useDesignerContext } from "../../hooks/useDesignerContext";
import { initAppState, initMeasurements } from "../../utility/initialVariables";
import { useEffect, useState } from 'react'
import { MeasurementCard } from "./measurement/MeasurementCard";
import { Buttons } from "../appComponents/Buttons";
import { toast } from "react-toastify";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import ModalLayout from "../../layout/ModalLayout";


export const Measurements = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [userMeasurements, setUserMeasurements] = useState<MeasurementProps>(initMeasurements);
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;

  const { isLoading, isError } = appState;

  const handleSave = () => {
    try {
      const newMeasurementEntries = sanitizeEntries(userMeasurements);
      console.log(newMeasurementEntries)

      setAppState(prev => ({ ...prev, success: true }))
      setToggleNav({ modalType: "userNavModal" })
      toast.success('Measurement Added!')
    }
    catch (error: any) {
      console.log(error)
      setAppState(prev => ({ ...prev, isError: true }))
      toast.error('error message')
    }
    finally {
      setAppState(prev => ({ ...prev, loading: false }))
    }
  }

  useEffect(() => {
    if (!isError) return
    const timeoutId = setTimeout(() => {
      setAppState(prev => ({ ...prev, isError: false }))
    }, 5000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isError])

  return (
    <ModalLayout
    modalType={toggleNav.modalType}
    expected="measurements"
    enlarge={true}
    extraClasses="px-3 py-2 gap-y-6"
    >
      {/* <div className={`flex-none -mt-7 md:-mt-4 min-h-fit sm:rounded-md mx-auto sm:w-[25rem] bg-white px-3 py-2 relative flex flex-col gap-y-6 w-full`}> */}
        <div className="flex items-center justify-between py-2 font-semibold">
          <span
            onClick={() => setToggleNav({ modalType: "userNavModal" })}
            className="text-sm hover:underline cursor-pointer font-semibold">Return</span>
          <h3 className="text-sm bg-slate-100 shadow-md p-0.5">Your Measurements</h3>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 transition-all">
          {
            Object.entries(userMeasurements).map(([key, value]) => (
              <MeasurementCard key={key}
                keyName={key as MEASUREMENT_METRICS}
                value={value}
                setUserMeasurements={setUserMeasurements}
              />
            ))
          }
        </div>

        <Buttons
          onClick={handleSave}
          px='' py='' isLoading={isLoading}
          classNames='self-center mt-6 rounded-sm font-semibold bg-orange-800 bg-opacity-95 text-xs text-white w-[95%] tracking-wide md:w-1/2 py-3 hover:bg-orange-700 active:bg-orange-800 transition-colors'
        >
          Save and Exit
        </Buttons>
      {/* </div> */}

    </ModalLayout>
  )
}
