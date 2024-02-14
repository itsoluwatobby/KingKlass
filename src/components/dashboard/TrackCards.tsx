import { IconType } from "react-icons";
import { MdMoreHoriz } from "react-icons/md";
import { format } from "timeago.js";
import { formatPrice } from "../../utility/formatPrice";
import { checkCount } from "../../utility/truncateTextLength";

type TrackCardsProps = {
  title: string;
  Icon: IconType;
  count: number | string;
  updatedAt: string;
}
export const TrackCards = ({ title, Icon, count, updatedAt }: TrackCardsProps) => {

  return (
    <article className="cursor-default rounded-md border flex flex-col p-1.5 w-full gap-y-2.5 shadow-sm">
      <div className="flex justify-between">
        <div className="w-fit flex items-center gap-x-3">
          <span className="text-[#6E6E6E] text-sm">{title}</span>
          <Icon className="bg-[#DBC5B6] rounded-full text-2xl p-1" />
        </div>
        <MdMoreHoriz className="text-xl text-[#6E6E6E] cursor-pointer hover:opacity-90 transition-opacity" />
      </div>

      <h4 className="font-sans text-2xl font-semibold text-[#8B4513]">{typeof count === 'number' ? checkCount(count) : <span>&#x20A6;{formatPrice(count)}</span>}</h4>

      <span className="text-[13px] font-sans text-[#6E6E6E]">Last updated {format(updatedAt)}</span>
      
    </article>
  )
}