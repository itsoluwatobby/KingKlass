import BottomSheet from "./BottomSheet"


type FadedBGWrapperProps = {
  children: JSX.Element;
  modalType: Toggle | ToggleNav;
  expected: ToggleNav | Toggle;
  classNames?: string;
  enlarge?: boolean
}
export default function FadedBGWrapper({ children, expected, modalType, classNames, enlarge=false }: FadedBGWrapperProps) {
  
  if (modalType === "purchasePrompt" || modalType === "measurements")
    return (
          <BottomSheet classNames={`pb-2${classNames}`}>{children}</BottomSheet>
      )
  
  return (
    <section className={`top-0 ${modalType === expected ? 'fixed' : 'hidden'} bg-gray-700 bg-opacity-40 midscreen:w-full flex ${enlarge ? 'w-full h-full' : 'w-full md:w-[60%] min-h-[95vh]'} z-50 duration-300 p-4 ${classNames}`}>
      {children}
    </section>
  )
}