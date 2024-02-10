// import { Outlet } from "react-router-dom"

type FadedBGWrapperProps = {
  children: JSX.Element;
  modalType: Toggle | ToggleNav;
  expected: ToggleNav | Toggle;
  classNames?: string;
}
export default function FadedBGWrapper({ children, expected, modalType, classNames }: FadedBGWrapperProps) {
  return (
    <section className={`${modalType === expected ? 'fixed' : 'hidden'} bg-gray-700 bg-opacity-40 midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300 p-4 ${classNames}`}>
      {children}
    </section>
  )
}