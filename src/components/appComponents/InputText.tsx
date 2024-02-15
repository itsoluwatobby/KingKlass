import { useDesignerContext } from "../../hooks/useDesignerContext";
import { WarningTexts } from "../../utility/regexExpConfig";
import Warning from "./Warning";

type InputTextProps<T> = {
  value: string;
  name: string;
  placeholder: string;
  type?: 'name' | 'text' | 'email' | 'tel';
  required?: boolean;
  classNames?: string;
  pattern?: string;
  validEmail?: boolean;
  id: string
  disabled?: boolean;
  setInputText: React.Dispatch<React.SetStateAction<T>>
}

export default function InputText<K>({ value, id, pattern, placeholder, classNames, name, setInputText, required = false, type = 'text', disabled = false, validEmail }: InputTextProps<K>) {
  const { appModals } = useDesignerContext() as DesignerContextProps;

  const defaultClassNames = classNames ?? 'p-2 border-gray-300'
  const textMsg = !validEmail ? 'invalid-email': 'conflict';

  return (
    <div className="w-full relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        pattern={pattern ?? ''}
        required={required}
        autoComplete="off"
        disabled={disabled}
        className={`w-full text-[13px] bg-inherit focus:outline-0 border placeholder:text-gray-400 ${defaultClassNames} p-2`}
        onChange={e => setInputText((prev: any) => (
          { ...prev, [e.target.name]: e.target.value })
        )}
      />

      {
        (type === 'email' && appModals.signup === 'OPEN' && value && !validEmail) ?
          <Warning text={WarningTexts[textMsg]} />
          : null
      }
      
    </div>
  )
}