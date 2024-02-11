import { format } from "timeago.js";
import { Link } from "react-router-dom";
import MiniLogo from "../../svgs/MiniLogo";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import ModalLayout from "../../layout/ModalLayout";


export const Notifications = () => {
  const { toggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <ModalLayout
    modalType={toggleNav.modalType}
    expected="notifications"
    enlarge={true}
    >

      <div className={`flex-none -mt-7 md:-mt-4 min-h-fit sm:rounded-md mx-auto sm:w-[25rem] bg-white px-3 py-2 relative flex flex-col gap-y-6 w-full`}>
        <h2 className="text-xl font-semibold">Notifications</h2>
        
        <div className="w-full flex flex-col gap-y-1">
          {
            [0,1,2,3,4,].map(i => (
              <Notification key={i}
                notificationObj={{
                  name: 'Your Order#0934834 is completed and now readyfor pickup',
                  createdAt: "new Date('2024 01 25')"
                }}
              />
            ))
          }
        </div>
      </div>
    </ModalLayout>
  )
}


type NotificationProps = {
  notificationObj: {
    name: string;
    createdAt: string;
  };
}
const Notification = ({ notificationObj }: NotificationProps) => {

  return (
    <Link to={''} className="hover:opacity-80 transition-opacity font-sans flex flex-col border-0 border-b-[1px] py-2 even:bg-slate-50 odd:bg-slate-100 gap-y-3 font-semibold text-[12px] w-full">
      <p className="font-normal indent-5">{notificationObj.name}</p>
     
      <div className="flex items-center gap-x-3 px-3">
        <div className="bg-pink-800 bg-opacity-15 w-fit p-1 rounded-full h-6 grid place-content-center">
          <MiniLogo 
          size={{width: '18', height: '8'}}
          classNames=""
          />
        </div>
        <span>KingKlass</span>
        <span className="text-xl -mt-2.5 text-gray-700">.</span>
        <span className="font-sans font-normal text-[11px] text-gray-600">{format(notificationObj.createdAt)}</span>
      </div>
    </Link>
  )
}
