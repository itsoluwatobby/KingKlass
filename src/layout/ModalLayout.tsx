// import { Outlet } from "react-router-dom"

type ModalLayoutProps = {
  children: JSX.Element;
  modalType: ToggleNav;
  expected: ToggleNav;
  classNames?: string;
  enlarge?: boolean;
}
export default function ModalLayout({ children, modalType, expected, classNames, enlarge=false }: ModalLayoutProps) {

  //  ${classNames}
  return (
    <section className={`${modalType === expected ? 'fixed' : 'hidden'} bottom-0 bg-gray-700 bg-opacity-40 midscreen:w-full flex ${enlarge ? 'w-full h-[90%] -mt-3 mobile:-mt-1' : 'w-full md:w-[60%] min-h-[95vh] mt-14'} z-50 duration-300 p-4 maxscreen:px-0 ${classNames}`}>
      {children}
    </section>
  )
}