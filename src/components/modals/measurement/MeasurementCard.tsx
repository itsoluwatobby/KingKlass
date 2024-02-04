import { ChangeEvent } from "react";
import { CiEdit } from "react-icons/ci";

type MeasurementCardProps = {
  keyName: MEASUREMENT_METRICS;
  value: string;
  setUserMeasurements: React.Dispatch<React.SetStateAction<MeasurementProps>>
}
export const MeasurementCard = ({ keyName, value, setUserMeasurements }: MeasurementCardProps) => {

  const handleEntry = (event: ChangeEvent<HTMLInputElement>) => {
    const [name, eventValue] = [event.target.name, event.target.value];
    setUserMeasurements(prev => ({ ...prev, [name]: eventValue }));
  }

  return (
    <div className="font-sans border rounded-[3px] flex flex-col p-1.5 even:bg-slate-50 odd:bg-slate-100 gap-y-3 font-semibold text-[12px] w-full">
      <div className="flex items-center justify-between">
        <p className="font-medium">{keyName}</p>
        <CiEdit className="text-xl cursor-pointer" />
      </div>

      <input type="number"
        inputMode='numeric'
        name={keyName}
        value={value}
        min={0}
        placeholder="--cm"
        onChange={handleEntry}
        className={`border-0 focus:outline-0 self-start placeholder:text-gray-900 placeholder:text-xs w-12 px-1 py-0.5`}
      />
    </div>
  )
}
