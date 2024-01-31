
type ButtonProps = {
  pl: string;
  py: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  classNames?: string;
}
export const Buttons = ({ children, onClick, pl='px-4', py='py-2', classNames, disabled=false }: ButtonProps) => {

  return (
    <button 
    disabled={disabled}
    onClick={onClick}
    className={`hover:opacity-90 active:opactiy-100 transition-opacity ${pl} ${py} ${classNames}`}>
      {children}
    </button>
  )
}