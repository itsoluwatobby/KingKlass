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
  noFullScreen?: boolean;
};
export default function ModalLayout({
  children,
  modalType,
  expected,
  classNames,
  noFullScreen = false,
  isAdminPage = false,
  extraClasses = "gap-y-4",
  enlarge = false,
}: ModalLayoutProps) {
  const { user } = useDesignerContext() as DesignerContextProps;
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    // console.log(isAdminPage)
    if (isMounted && isAdminPage && !user.isAdmin) {
      toast.warn("UnAuthorized");
      navigate("/");
    } else return;
    return () => {
      isMounted = false;
    };
  }, [isAdminPage, user.isAdmin]);

  return (
    <section
      className={`${
        modalType === expected ? "fixed" : "hidden"
      } h-[100vh] border  py-0 top-16 bottom-0 midscreen:w-full flex ${
        enlarge
          ? "w-full h-[100vh] mobile:-mt-0"
          : "w-full md:w-[60%] min-h-[95vh] mt14"
      } z-50 duration-300 p-4 ${
        noFullScreen ? "py-8" : "maxscreen:px-0"
      } ${classNames}`}
    >
      <div
        className={`bg-[#F8F8F8]  sm:rounded-md ${
          noFullScreen ? "rounded-md -mt-1 p-5" : ""
        } mx-auto sm:w-[25rem]  relative flex flex-col w-full ${extraClasses}`}
      >
        {children}
      </div>
    </section>
  );
}
