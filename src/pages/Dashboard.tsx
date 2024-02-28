import { BsPersonGear, BsBox } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { TrackCards } from "../components/dashboard/TrackCards";
import { OrderStatus, OrderTableLabel, CustomerTableLabel, hoverClass, orderProps } from "../utility/constants";
import { orderTable } from "../utility/dummy";
import { formmatTime } from "../utility/helpers";

export default function Dashboard() {
  const rowClass = "text-center p-2 self-center";

  return (
    <div className="overflow-y-scroll h-[90vh] flex flex-col gap-5 w-full pt-3">
      <div className="p-3 flex maxmobile:flex-col flex-row gap-3 md:flex-wrap">
        <TrackCards
          title="Total customers"
          count={1234} Icon={BsPersonGear}
          updatedAt={new Date().toUTCString()}
        />
        <TrackCards
          title="Total revenue generated"
          count={'100380500'} Icon={MdCurrencyExchange}
          updatedAt={new Date().toUTCString()}
        />
        <TrackCards
          title="Uploaded products"
          count={20} Icon={BsBox}
          updatedAt={new Date().toUTCString()}
        />
      </div>

      <div className="px-3 flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Pending Orders</h3>
          <span className={hoverClass + "text-[14px] text-[#6E6E6E] cursor-pointer"}>See all</span>
        </div>

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
              orderTable?.map((order) => (
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
      
      <div className="px-3 flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Customers contact</h3>
          <span className={hoverClass + "text-[14px] text-[#6E6E6E] cursor-pointer"}>See all</span>
        </div>

        <table className="w-full">
          <thead className="w-full">
            <tr className="border-0 border-b-[2px] w-full">
              {
                CustomerTableLabel.map(label => (
                  <th key={label} className="font-medium text-sm">{label}</th>
                ))
              }
            </tr>
          </thead>
          <tbody className="font-sans">
            {/* <td className="text-xs font-bold py-2 hidden">This week</td> */}
            {
              orderTable?.map((order) => (
                <tr key={order.orderId} className="border-0 border-b-[2px] text-xs rounded-[3px] even:bg-[#EFEFEF]">
                  <td className={rowClass}>{order.orderId}</td>
                  <td className={rowClass}>{formmatTime(order.date)}</td>
                  <td className={rowClass}>
                    <div className="translate-x-7 text-gray-700 bg-gray-100 p-0.5 rounded-sm flex items-center gap-x-2 w-fit px-2">
                      <span className={`${orderProps[order.status]?.bgColor} w-[6px] h-[6px] rounded-full `} />
                      <span className={`text-xs ${orderProps[order.status]?.color}`}>{OrderStatus[order.status]}</span>
                    </div>
                  </td>
                  <td className={rowClass}>
                    <div className="translate-x-7 text-[#8B4513] font-semibold text-xs cursor-pointer bg-gray-200 p-0.5 rounded-sm w-fit px-2">
                      View
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
