import { format } from "timeago.js";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { CiEdit } from "react-icons/ci";
import { MeasurementMetrics } from "../../utility/constants";


export const Measurements = () => {
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <section className={`${toggleNav.modalType !== "measurements" ? 'fixed' : 'hidden'} bg-white midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300`}>
      <div className={`px-3 py-2 relative flex flex-col gap-y-6 w-full min-h-[88vh]`}>
        <span 
        onClick={() => setToggleNav({ modalType: "userNavModal" })}
        className="text-sm hover:underline cursor-pointer font-semibold">Back</span>
        
        <div className="w-full grid grid-cols-2 gap-4">
          {
            MeasurementMetrics.map(name => (
              <Measurement key={name}
                measurementObj={{
                  name: name,
                  metric: "new Date('2024 01 25')"
                }}
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
    metric: string;
  };
}
const Measurement = ({ measurementObj }: MeasurementProps) => {

  return (
    <div className="font-sans border rounded-[3px] flex flex-col p-1.5 even:bg-slate-50 odd:bg-slate-100 gap-y-3 font-semibold text-[12px] w-full">
      <div className="flex items-center justify-between">
        <p className="font-medium">{measurementObj.name}</p>
        <CiEdit className="text-xl cursor-pointer" />
      </div>
    
      <input type="text" 
      placeholder="__cm"
      className={`self-start placeholder:text-gray-900 placeholder:text-xs w-10 px-1`}
      />
    </div>
  )
}
