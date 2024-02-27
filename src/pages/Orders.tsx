import HomeLayout from "../layout/HomeLayout";
import { Order } from "../components/modals/order/Order";
import OrderProgress from "../components/modals/OrderProgress";
import { useEffect, useState } from "react";
import { initAppState } from "../utility/initialVariables";
import { getOrders } from "../api/globalRequest";

export const Orders = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [order, setOrder] = useState<[]>()

  // const { isLoading, isError } = appState;

  useEffect(() => {
    let isMounted = true;
    const fetchOrders = async () => {
      try{
        setAppState(prev => ({ ...prev, isLoading: true }))
        const res = await getOrders();
        console.log(res)
        setOrder(res);
        console.log(order, appState)
      }
      catch(err: any) {
        console.log(err)
        setAppState(prev => ({...prev, isError: true }))
      }
      finally{
        setAppState(prev => ({ ...prev, isLoading: false }))
      }
    }
    isMounted ? fetchOrders() : null;
    return () => {
      isMounted = false
    }
  }, [])



  const orders = [
    {
      orderId: '#Order785445',
      productName: 'Gown',
      image: "",
      date: new Date("02-14-2024"),
      price: 10_500,
      status: 'Pending' as OrderStatusType
    },
    {
      orderId: '#Order125435',
      productName: 'White Iro and Buba',
      image: "",
      date: new Date("02-14-2024"),
      price: 8_200,
      status: 'In progress' as OrderStatusType
    },
    {
      orderId: '#Order335445',
      productName: 'T-Shirt',
      image: "",
      date: new Date("02-14-2024"),
      price: 12_000,
      status: 'Completed' as OrderStatusType
    },
    {
      orderId: '#Order987qw5',
      productName: 'White Agbada with one Kufi cap',
      image: "",
      date: new Date("02-14-2024"),
      price: 25_000,
      status: 'Completed' as OrderStatusType
    },
    {
      orderId: '#Order9871235',
      productName: 'White Agbada with one Kufi cap',
      image: "",
      date: new Date("02-14-2024"),
      price: 25_000,
      status: 'Completed' as OrderStatusType
    },
    {
      orderId: '#Order9876dfg5',
      productName: 'White Agbada with one Kufi cap',
      image: "",
      date: new Date("02-14-2024"),
      price: 25_000,
      status: 'Completed' as OrderStatusType
    },
    {
      orderId: '#Order9872ed5',
      productName: 'White Agbada with one Kufi cap',
      image: "",
      date: new Date("02-14-2024"),
      price: 25_000,
      status: 'Completed' as OrderStatusType
    },
  ]

  return (
    <HomeLayout
    >
      <div className="md:flex w-full md:px-5 md:py-7">
        <div className="scrollbar shadow-sm w-full flex flex-col gap-y-2 px-3 md:min-h-[85vh] md:max-h-[85vh] overflow-y-scroll">
          {
            orders.map((order) => (
              <Order key={order.orderId}
                orderObj={order}
              />
            ))
          }
        </div>
        <OrderProgress 
          orderId="" orderStatus="Completed"
        />
      </div>
    </HomeLayout>
  )
}
