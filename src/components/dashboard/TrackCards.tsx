import { IconType } from "react-icons";
import { format } from "timeago.js";
import { currencyFormat } from "../../utility/formatPrice";
import { checkCount } from "../../utility/truncateTextLength";

type TrackCardsProps = {
  title: string;
  Icon: IconType;
  count: number | string;
  updatedAt: string;
};
export const TrackCards = ({
  title,
  Icon,
  count,
  updatedAt,
}: TrackCardsProps) => {
  return (
    <article className="cursor-default rounded-md border flex md:items-center md:gap-x-5 md:w-fit md:flex-row flex-col p-1.5 md:px-6 md:py-4 w-full gap-y-2.5 shadow-sm">
      {/* <div className="flex justify-between"> */}
      <div className="hidden midscreen:flex w-fit items-center gap-x-3">
        <span className="text-[#6E6E6E] text-sm">{title}</span>
        <Icon className="bg-[#DBC5B6] rounded-full text-2xl p-1" />
      </div>
      {/* <MdMoreHoriz className="text-xl text-[#6E6E6E] cursor-pointer hover:opacity-90 transition-opacity" /> */}
      {/* </div> */}

      <h4 className="hidden midscreen:block font-sans text-2xl font-semibold text-[#8B4513]">
        {typeof count === "number" ? (
          checkCount(count)
        ) : (
          <span>{currencyFormat(+count)}</span>
        )}
      </h4>

      <span className="hidden midscreen:block text-[13px] font-sans text-[#6E6E6E]">
        Last updated {format(updatedAt)}
      </span>

      <Icon className="flex-none midscreen:hidden md:bg-purple-200 rounded-full text-3xl p-1" />

      <div className="hidden md:flex flex-col">
        <h4 className="font-sans text-2xl font-semibold text-[#8B4513]">
          {typeof count === "number" ? (
            checkCount(count)
          ) : (
            <span>{currencyFormat(+count)}</span>
          )}
        </h4>
        <span className="text-xs whitespace-nowrap font-sans text-[#6E6E6E]">
          Last updated {format(updatedAt)}
        </span>
      </div>
    </article>
  );
};
