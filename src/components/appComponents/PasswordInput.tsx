import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { PiEyeClosed } from "react-icons/pi";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { WarningTexts } from "../../utility/regexExpConfig";
import Warning from "./Warning";

type InputTextProps<T> = {
  id: string;
  value: string;
  name: string;
  required?: boolean;
  classNames?: string;
  pattern?: string;
  validPassword?: boolean;
  matchingPassword?: boolean;
  disabled?: boolean;
  setInputText: React.Dispatch<React.SetStateAction<T>>
}

export default function PasswordInput<K>({ value, id, pattern, classNames, name, setInputText, validPassword, matchingPassword, required = false, disabled=false }: InputTextProps<K>) {
  const [revealPass, setRevealPass] = useState<Toggle>('CLOSE');
  const { appModals } = useDesignerContext() as DesignerContextProps;

  const defaultClassNames = classNames ?? 'p-2 border-gray-300'

  const buttonClassNames = "absolute right-2 top-2 text-xl cursor-pointer hover:scale-[1.002] active:scale-[1] z-10 transition-transform"

  const textMsg = !validPassword ? 'invalid-password' : 'pass'
  const match = !matchingPassword ? 'no-match' : 'pass'

  return (
    <div className="w-full relative">
      <input
        type={revealPass === 'OPEN' ? "text" : 'password'}
        name={name}
        id={id}
        value={value}
        placeholder='*********************'
        pattern={(pattern ?? '')}
        required={required}
        autoComplete="off"
        disabled={disabled}
        className={`font-sans w-full text-[13px] bg-inherit focus:outline-0 border placeholder:text-gray-400 ${defaultClassNames} p-2`}
        onChange={e => setInputText((prev: any) => (
          { ...prev, [e.target.name]: e.target.value })
        )}
      />
      {
        revealPass === 'OPEN' ?
        <PiEyeClosed 
        onClick={() => setRevealPass('CLOSE')}
        className={buttonClassNames} />
        :
        <AiOutlineEye 
        onClick={() => setRevealPass('OPEN')}
        className={buttonClassNames} />
      }

      {
        (appModals.signup === 'OPEN' && value && (!validPassword || !matchingPassword)) ?
        ( name === 'password' ? 
          <Warning text={WarningTexts[textMsg]} />
          : <Warning text={WarningTexts[match]} />
        ) : null
      }
    </div>
  )
}
