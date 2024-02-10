// import { Outlet } from "react-router-dom"

type ModalLayoutProps = {
  children: JSX.Element;
  modalType: ToggleNav;
  expected: ToggleNav;
  classNames?: string;
}
export default function ModalLayout({ children, modalType, expected, classNames }: ModalLayoutProps) {
  return (
    <section className={`${modalType === expected ? 'fixed' : 'hidden'} bg-white midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300 ${classNames}`}>
      {children}
    </section>
  )
}