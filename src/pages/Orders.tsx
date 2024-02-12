import { Link } from "react-router-dom";
import { formatPrice } from "../utility/formatPrice";
import HomeLayout from "../layout/HomeLayout";
import { OrderStatus, orderProps } from "../utility/constants";
import { format } from "timeago.js";


export const Orders = () => {

  const orders = [
    {
      orderId: '#Order785445',
      productName: 'Gown',
      image: "",
      date: "new Date('2024 01 25')",
      price: 10_500,
      status: 'Pending' as OrderStatusType
    },
    {
      orderId: '#Order125435',
      productName: 'White Iro and Buba',
      image: "",
      date: "new Date('2024 01 25')",
      price: 8_200,
      status: 'In progress' as OrderStatusType
    },
    {
      orderId: '#Order335445',
      productName: 'T-Shirt',
      image: "",
      date: "new Date('2024 01 25')",
      price: 12_000,
      status: 'Completed' as OrderStatusType
    },
    {
      orderId: '#Order987645',
      productName: 'White Agbada with one Kufi cap',
      image: "",
      date: "new Date('2024 01 25')",
      price: 25_000,
      status: 'Completed' as OrderStatusType
    },
  ]

  return (
    <HomeLayout
    >
      <div className="w-full flex flex-col gap-y-2 px-3">
        {
          orders.map((order) => (
            <Order key={order.orderId}
              orderObj={order}
            />
          ))
        }
      </div>
    </HomeLayout>
  )
}

type OrderProps = {
  orderObj: {
    orderId: string;
    image: string;
    productName: string;
    date: string;
    price: string | number;
    status: OrderStatusType;
  };
}
const Order = ({ orderObj }: OrderProps) => {

  return (
    <div className="hover:opacity-80 transition-opacity font-sans flex flex-col border-[1px] bg-slate-50 p-2 text-[12px] w-full">
      <h3 className="font-medium">{orderObj.orderId}</h3>
      <div className="flex flex-col gap-y-2 py-2 justify-between w-[95%] h-full">
        <Link to={``} className="flex-none w-[85%] flex">
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
        </Link>

        <div className="w-full flex items-center justify-between">
          <div className="text-gray-700 bg-gray-200 p-0.5 rounded-sm flex items-center gap-x-2 w-fit pr-3">
            <span className={`${orderProps[orderObj.status].bgColor} w-[6px] h-[6px] rounded-full `}/>
            <span className={`text-xs ${orderProps[orderObj.status].color}`}>{OrderStatus[orderObj.status]}</span>
          </div>
          
          <span className="text-gray-600">{format(orderObj.date)}</span>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-[2px]">
        <div className={`${orderProps[orderObj.status].bgColor} w-full h-full ${orderProps[orderObj.status].width} transition-all`} />
      </div>
    </div>
  )
}
