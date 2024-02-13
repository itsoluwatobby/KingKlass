import { FaCheck } from "react-icons/fa6"
import { formmatTime } from "../../../utility/helpers"

type OrderStepsProps = {
  date: Date;
  step: string;
  display?: boolean;
  active: boolean;
  fullyActive?: boolean
}
export default function OrderSteps({ date, step, active, display=true, fullyActive=true }: OrderStepsProps) {
  
  return (
    <div className="relative flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-6 transition-colors">
          <div className={`bg-opacity-65 rounded-full w-9 h-9 grid place-content-center ${fullyActive ? 'bg-[#DBC5B6]' : 'bg-[#6E6E6E]'}`}>
            <FaCheck className={`${fullyActive ? '' : 'hidden'} text-[1.2rem] text-[#8B4513]`} />
          </div>
          <span className={`${active ? '' : 'text-[#6E6E6E]'}`}><b>{step}</b></span>
        </div>
        <span className="text-[#6E6E6E] text-[12px] font-semibold">{formmatTime(date)}</span>
      </div>
      <div className={`${display ? 'block' : 'hidden'} absolute -bottom-12 left-[16px] ${active ? 'bg-[#8B4513]' : 'bg-[#6E6E6E]'} w-[2px] h-12 transition-colors`} />
    </div>
  )
}