import { currencyFormat } from "../../utility/formatPrice";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { formmatTime } from "../../utility/helpers";
import { orderProps } from "../../utility/constants";
import OrderSteps from "./order/OrderSteps";
import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

type OrderProgressProps = {
  orderId: string;
  orderStatus: OrderStatusType;
};
export default function OrderProgress({
  orderId,
  orderStatus,
}: OrderProgressProps) {
  const { toggleNav, setToggleNav } =
    useDesignerContext() as DesignerContextProps;
  const [orderStages] = useState({
    Pending: {
      "1st": { active: false },
      "2nd": { active: false },
      "3rd": { active: false },
      "4th": { active: false, fullyActive: false },
      "5th": { active: false, fullyActive: false },
    },
    "In progress": {
      "1st": { active: true },
      "2nd": { active: true },
      "3rd": { active: false },
      "4th": { active: false, fullyActive: false },
      "5th": { active: false, fullyActive: false },
    },
    Completed: {
      "1st": { active: true },
      "2nd": { active: true },
      "3rd": { active: true },
      "4th": { active: true, fullyActive: true },
      "5th": { active: true, fullyActive: true },
    },
  });

  return (
    <section
      className={`${
        toggleNav.modalType === "orderProgress"
          ? "midscreen:fixed flex"
          : "md:flex hidden"
      } bottom-0 midscreen:bg-gray-700 midscreen:bg-opacity-40 midscreen:w-full w-full h-[90%] md:min-h-[90vh] md:max-h-[90vh] -mt-3 mobile:-mt-1 z-20 duration-300 midscreen:pt-10 pb-4 p-3`}
    >
      <div
        className={`relative flex-none border border-gray-300 -mt-7 min-h-fit rounded-md mx-auto sm:w-[25rem] midscreen:bg-white md:bg-slate-50 flex flex-col w-full p-4 pb-6 md:-mt-1 md-hidden justify-between overflow-y-scroll`}
      >
        <LiaTimesSolid
          onClick={() => setToggleNav({ modalType: "pass" })}
          className="absolute right-0 top-0.5 z-30 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors md:hidden"
        />

        <article
          id={orderId}
          className="rounded-[3px] cursor-default font-sans flex flex-col p-2 gap-y-2.5 text-[12px] w-full"
        >
          <div
            className={`${
              orderStatus === "Completed" ? "flex md:hidden" : "hidden"
            } flex-col gap-y-2 pb-2`}
          >
            <span className="text-center text-[#6E6E6E] text-[13px]">
              Your order has been completed, kindly react out to the tailor for
              pickup
            </span>
            <button
              title="Start chat"
              className="self-end flex items-center gap-x-1.5 cursor-pointer p-0.5 hover:bg-gray-100 hover:opacity-90 transition-all"
            >
              <span className="font-medium text-gray-700">Chat</span>
              <BsChatLeftText className="text-[#8B4513]" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium">&#x20A6;{"Order345644"}</h3>
            <div className="text-gray-700 bg-gray-100 p-0.5 rounded-sm flex items-center gap-x-2 w-fit px-2">
              <span
                className={`${orderProps[orderStatus].bgColor} w-[6px] h-[6px] rounded-full `}
              />
              <span className={`text-xs ${orderProps[orderStatus].color}`}>
                {orderStatus}
              </span>
            </div>
          </div>

          <span className="text-gray-600 text-[11px] font-semibold">
            {formmatTime(new Date("02-05-2024"))}
          </span>

          <div className={`flex-none w-full flex mt-1`}>
            <figure className="w-24 h-24 rounded-[6px] flex-none bg-slate-100">
              {[].length ? (
                <img
                  src={""}
                  alt={""}
                  className="object-cover h-full w-full rounded-[3px]"
                />
              ) : null}
            </figure>
            <div className="flex flex-col gap-y-1 px-3">
              <span>{"White Agbada with one kufi cap"}</span>
              <span className="font-sans font-semibold text-[12px]">
                &#x20A6;{currencyFormat(25_000)}
              </span>
              <p
                className={`${
                  orderStatus === "Completed" ? "hidden" : "flex"
                } gap-x-1`}
              >
                <span>
                  <b>Note: </b>
                </span>
                <span className="text-gray-500 font-medium text-xs">
                  I prefer a classic and regal design for the Agbada. Please use
                  rich, vibrant colors.
                </span>
              </p>
            </div>
          </div>

          <p
            className={`${
              orderStatus === "Completed"
                ? "border-0 border-b-[1px] pb-3"
                : "hidden"
            } flex gap-x-2`}
          >
            <span>
              <b>Note: </b>
            </span>
            <span className="text-gray-500 font-medium text-xs">
              I prefer a classic and regal design for the Agbada. Please use
              rich, vibrant colors.
            </span>
          </p>

          <h4 className="hidden md:block self-center font-semibold text-sm">
            Order Progress
          </h4>
          <div
            className={`${
              orderStatus === "Pending" ? "hidden" : "flex"
            } flex-col p-3 gap-y-[3rem]`}
          >
            <OrderSteps
              active={orderStages[orderStatus]["1st"].active}
              step="Order Completed"
              date={new Date("02-05-2024")}
            />
            <OrderSteps
              active={orderStages[orderStatus]["2nd"].active}
              step="Material Sourcing"
              date={new Date("02-05-2024")}
            />
            <OrderSteps
              active={orderStages[orderStatus]["3rd"].active}
              step="Sewing"
              date={new Date("02-05-2024")}
            />
            <OrderSteps
              active={orderStages[orderStatus]["4th"].active}
              fullyActive={orderStages[orderStatus]["4th"].fullyActive}
              step="Ironing and packaging"
              date={new Date("02-05-2024")}
            />
            <OrderSteps
              display={false}
              active={orderStages[orderStatus]["5th"].active}
              fullyActive={orderStages[orderStatus]["5th"].fullyActive}
              step="Pickup"
              date={new Date("02-05-2024")}
            />
          </div>

          <button className="text-[#8B4513] hidden md:block font-bold focus:outline-0 border-0 rounded-[3px] hover:bg-slate-200 w-fit p-1 self-center hover:opacity-90 active:opacity-100 transition-all">
            Message Tailor
          </button>
        </article>
      </div>
    </section>
  );
}
