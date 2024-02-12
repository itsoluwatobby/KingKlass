import { Link } from "react-router-dom";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { formatPrice } from "../utility/formatPrice";
import { Buttons } from "../components/appComponents/Buttons";
import HomeLayout from "../layout/HomeLayout";
import { OrderStatus } from "../utility/constants";


export const Orders = () => {
  const { toggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <HomeLayout
    >
      {/* <div className={`flex-none -mt-7 md:-mt-4 min-h-fit sm:rounded-md mx-auto sm:w-[25rem] py-4 bg-white relative flex flex-col justify-between w-full`}> */}
        <div className="w-full flex flex-col gap-y-1">
          {
            [0,1,2,3,4,].map(i => (
              <Order key={i}
                orderObj={{
                  orderId: '#Order785445',
                  productName: 'Gown',
                  image: "new Date('2024 01 25')",
                  price: 10_500,
                  status: 'Pending'
                }}
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
    price: string | number;
    status: OrderStatusType;
  };
}
const Order = ({ orderObj }: OrderProps) => {

  return (
    <div className="hover:opacity-80 transition-opacity font-sans flex flex-col border-[1px] bg-slate-100 p-2 text-[12px] w-full">
      <h3>{orderObj.orderId}</h3>
      <div className="flex flex-col py-2 justify-between w-[95%] border-0 border-b-[2px] h-full">
        <Link to={``} className="flex-none w-[85%] flex items-center">
          <figure className="w-10 h-10 rounded-[3px] flex-none">
            <img src={orderObj.image} alt={orderObj.productName} className="object-cover h-full w-full rounded-[3px]" />
          </figure>
          <div className="flex items-center flex-col gap-y-1 px-3">
            <span>{orderObj.productName}</span>
            <span className="font-sans font-semibold text-[12px]">&#x20A6;{formatPrice(orderObj.price)}</span>
          </div>
        </Link>

        <div>
          <div>
            <span className={`${''} w-2 h-2 rounded-full `}/>
            <span>{OrderStatus[orderObj.status]}</span>
          </div>

        </div>
      </div>
    </div>
  )
}
