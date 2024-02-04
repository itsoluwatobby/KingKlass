import { useDesignerContext } from "../../hooks/useDesignerContext";
import { CiEdit } from "react-icons/ci";
import { MeasurementMetrics } from "../../utility/constants";
import { initMeasurementParams) } from "../../utility/initVariables";
import { useState } from 'react'


export const Measurements = () => {
  const [userMeasurement, setUserMeasurement] = useState<MeasurementProps[]>(initMeasurementParams);
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;

  const handleSave = () => {
    try {
      console.log(userMeasureme)
    }
    catch (error: any) {
      console.log(error)
    }
  }
  void(handleSave)
  
  return (
    <section className={`${toggleNav.modalType !== "measurements" ? 'fixed' : 'hidden'} bg-white midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300`}>
      <div className={`px-3 py-2 relative flex flex-col gap-y-6 w-full min-h-[88vh]`}>
        <span 
        onClick={() => setToggleNav({ modalType: "userNavModal" })}
        className="text-sm hover:underline cursor-pointer font-semibold">Back</span>
        
        <div className="w-full grid grid-cols-2 gap-4">
          {
            userMeasurements.map(measure => (
              <Measurement key={measure.name}
                measurementObj={{
                  name: measure.name,
                  value: measure.value
                }}
                setUserMeasurement={setUserMeasurement}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}


type MeasurementProps = {
  measurementObj: {
    name: string;
    value: string;
  };
  setUserMeasurement: React.Dispatch<React.SetStateAction<MeasurementProps[]>>
}
const Measurement = ({ measurementObj, setUserMeasurement }: MeasurementProps) => {

  return (
    <div className="font-sans border rounded-[3px] flex flex-col p-1.5 even:bg-slate-50 odd:bg-slate-100 gap-y-3 font-semibold text-[12px] w-full">
      <div className="flex items-center justify-between">
        <p className="font-medium">{measurementObj.name}</p>
        <CiEdit className="text-xl cursor-pointer" />
      </div>
    
      <input type="tel" 
        inputMode='numeric'
        name={measurementObj.name}
        value={measurementObj.value}
        placeholder="__cm"
        onChange={e => setUserMeasurement(prev => ({ ...prev, [e.target.name]: e.target.value }))}
        className={`border-0 focus:outline-0 self-start placeholder:text-gray-900 placeholder:text-xs w-10 px-1`}
      />
    </div>
  )
}
