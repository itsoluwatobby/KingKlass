import { useDesignerContext } from "../../hooks/useDesignerContext";
import { initAppState, initMeasurements } from "../../utility/initialVariables";
import { useEffect, useState } from 'react'
import { MeasurementCard } from "./measurement/MeasurementCard";
import { Buttons } from "../appComponents/Buttons";
import { toast } from "react-toastify";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import ModalLayout from "../../layout/ModalLayout";
import { LiaTimesSolid } from "react-icons/lia";


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
      setToggleNav({ modalType: toggleNav.prevModal as ToggleNav })
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
      extraClasses="px-3 py-2 pb-12 md:mt-2 sm:shadow-2xl sm:bg-gray-50 gap-y-6 h-fit"
    >
      <LiaTimesSolid
        onClick={() => setToggleNav({ modalType: "pass" })}
        className='hidden md:block absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors'
      />
      <div className="flex items-center justify-between py-2 font-semibold">
        <span
          onClick={() => setToggleNav(prev => ({ ...prev, modalType: prev.prevModal as ToggleNav }))}
          className="md:hidden text-sm hover:underline cursor-pointer font-semibold">Return</span>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 transition-all">
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
    </ModalLayout>
  )
}
