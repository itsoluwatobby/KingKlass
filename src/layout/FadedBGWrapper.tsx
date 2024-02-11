// import { Outlet } from "react-router-dom"

type FadedBGWrapperProps = {
  children: JSX.Element;
  modalType: Toggle | ToggleNav;
  expected: ToggleNav | Toggle;
  classNames?: string;
  enlarge?: boolean
}
export default function FadedBGWrapper({ children, expected, modalType, classNames, enlarge=false }: FadedBGWrapperProps) {
  return (
    <section className={`${modalType === expected ? 'fixed' : 'hidden'} bg-gray-700 bg-opacity-40 midscreen:w-full flex ${enlarge ? 'w-full h-full -mt-3 mobile:-mt-1' : 'w-full md:w-[60%] min-h-[95vh] mt-14'} z-50 duration-300 p-4 ${classNames}`}>
      {children}
    </section>
  )
}