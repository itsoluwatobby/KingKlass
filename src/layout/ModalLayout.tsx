// import { Outlet } from "react-router-dom"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { toast } from "react-toastify";

type ModalLayoutProps = {
  children: React.ReactNode;
  modalType: ToggleNav;
  expected: ToggleNav;
  classNames?: string;
  enlarge?: boolean;
  extraClasses?: string;
  isAdminPage?: boolean;
}
export default function ModalLayout({ children, modalType, expected, classNames, isAdminPage, extraClasses='gap-y-4', enlarge=false }: ModalLayoutProps) {
  const { user } = useDesignerContext() as DesignerContextProps;
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    if (isMounted && isAdminPage && !user.isAdmin) {
      toast.warn('UnAuthorized')
      navigate('/')
    }
    return () => {
      isMounted = false
    }
  }, [isAdminPage, user.isAdmin])

  return (
    <section className={`${modalType === expected ? 'fixed' : 'hidden'} bottom-0 bg-gray-700 bg-opacity-40 midscreen:w-full flex ${enlarge ? 'w-full h-[90%] -mt-3 mobile:-mt-1' : 'w-full md:w-[60%] min-h-[95vh] mt-14'} z-50 duration-300 p-4 maxscreen:px-0 ${classNames}`}>
      <div className={`flex-none -mt-7 md:-mt-4 min-h-fit sm:rounded-md mx-auto sm:w-[25rem] bg-white relative flex flex-col w-full ${extraClasses}`}>
        {children}
      </div>
    </section>
  )
}