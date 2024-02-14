import { formatPrice } from "../../../utility/formatPrice";
import { useState } from "react";
import { OrderStatus } from "../../../utility/constants";
import { formmatTime } from "../../../utility/helpers";
import { useDesignerContext } from "../../../hooks/useDesignerContext";

type OrderProps = {
  orderObj: {
    orderId: string;
    image: string;
    productName: string;
    date: string | Date;
    price: string | number;
    status: OrderStatusType;
  };
}
export const Order = ({ orderObj }: OrderProps) => {
  const { setToggleNav } = useDesignerContext() as DesignerContextProps;
  const [orderProps] = useState<OrderPropsTypes>(
    {
      "Pending": {
        bgColor: "bg-[#6E6E6E]",
        color: "text-[#6E6E6E]",
        width: "w-[0%]"
      },
      "In progress": {
        bgColor: "bg-[#E28835]",
        color: "text-[#E28835]",
        width: "w-[36%]"
      },
      "Completed": {
        bgColor: "bg-[#138F27]",
        color: "text-[#138F27]",
        width: "w-[100%]"
      }
    }
  )

  return (
    <article 
    onClick={() => setToggleNav({ modalType: "orderProgress" })}
    className="rounded-[3px] cursor-default hover:opacity-90 transition-opacity font-sans flex flex-col border-[1px] bg-slate-50 p-2 text-[12px] w-full">
      <h3 className="font-medium">{orderObj.orderId}</h3>
      <div className="flex flex-col gap-y-2 py-2 justify-between w-[95%] h-full">
        <div className="flex-none w-[85%] flex">
          <figure className="w-12 h-12 rounded-[3px] flex-none bg-slate-100">
            {
              orderObj.image ?
              <img src={orderObj.image} alt={orderObj.productName} className="object-cover h-full w-full rounded-[3px]" />
              : null  
            }
          </figure>
          <div className="flex flex-col gap-y-1 px-3">
            <span>{orderObj.productName}</span>
            <span className="font-sans font-semibold text-[12px]">&#x20A6;{formatPrice(orderObj.price)}</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="text-gray-700 bg-gray-100 p-0.5 rounded-sm flex items-center gap-x-2 w-fit px-2">
            <span className={`${orderProps[orderObj.status].bgColor} w-[6px] h-[6px] rounded-full `}/>
            <span className={`text-xs ${orderProps[orderObj.status].color}`}>{OrderStatus[orderObj.status]}</span>
          </div>
          
          <span className="text-gray-600">{formmatTime(orderObj.date as unknown as Date)}</span>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-[2px]">
        <div className={`${orderProps[orderObj.status].bgColor} w-full h-full ${orderProps[orderObj.status].width} transition-all`} />
      </div>
    </article>
  )
}
