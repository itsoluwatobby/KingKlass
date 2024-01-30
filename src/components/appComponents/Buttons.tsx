
type ButtonProps = {
  pl: string;
  py: string;
  bgColor: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  classNames?: string;
}
export const Buttons = ({ children, onClick, bgColor='bg-gray-300', pl='px-4', py='py-2', classNames, disabled=false }: ButtonProps) => {

  return (
    <button 
    disabled={disabled}
    onClick={onClick}
    className={`rounded-md hover:opacity-90 active:opactiy-100 transition-opacity ${pl} ${py} ${bgColor} ${classNames}`}>
      {children}
    </button>
  )
}