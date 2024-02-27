import { OrderStatus, OrderTableLabel, hoverClass, orderProps } from "../utility/constants"
import { orderTable } from "../utility/dummy"
import { formmatTime } from "../utility/helpers"

type Props = {}

export default function AdminOrders({}: Props) {
  const rowClass = "text-center p-2 self-center";

  return (
    <div className="overflow-y-scroll flex flex-col gap-5 w-full h-[90vh] pt-8">

      <div className="px-3 flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Orders</h3>
          <span className={hoverClass + "text-[14px] text-[#6E6E6E] cursor-pointer"}>See all</span>
        </div>

        <select name="" id="" className="border w-20">
          <option value="All">All</option>
        </select>

      <table className="w-full">
        <thead className="w-full">
          <tr className="border-0 border-b-[2px] w-full">
            {
              OrderTableLabel.map(label => (
                <th key={label} className="font-medium text-sm">{label}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="font-sans">
          {/* <td className="text-xs font-bold py-2 hidden">This week</td> */}
          {
            [...orderTable, ...orderTable]?.map((order) => (
              <tr key={order.orderId} className="border-0 border-b-[2px] text-xs rounded-[3px] even:bg-[#EFEFEF]">
                <td className={rowClass}>{order.orderId}</td>
                <td className={rowClass}>{formmatTime(order.date)}</td>
                <td className={rowClass}>
                  <div className="translate-x-7 text-gray-700 bg-gray-100 p-0.5 rounded-sm flex items-center gap-x-2 w-fit px-2">
                    <span className={`${orderProps[order.status]?.bgColor} w-[6px] h-[6px] rounded-full `} />
                    <span className={`text-xs ${orderProps[order.status]?.color}`}>{OrderStatus[order.status]}</span>
                  </div>
                </td>
                <td className={rowClass}>{order.customer}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
    
  )
}