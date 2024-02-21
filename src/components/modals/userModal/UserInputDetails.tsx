import { useState } from 'react';
import InputText from '../../appComponents/InputText'
import PasswordInput from '../../appComponents/PasswordInput';
import { useDesignerContext } from '../../../hooks/useDesignerContext';

type UserInputDetailsProps<T> = {
  name: string;
  title: string;
  placeholder?: string;
  value: string;
  disabled: boolean;
  id: string;
  validPassword?: boolean;
  validEmail?: boolean;
  matchingPassword?: boolean;
  type: 'tel' | 'email' | 'text' | 'password';
  setUserDetails: React.Dispatch<React.SetStateAction<T>>
}

export default function UserInputDetails<T>({ name, id, title, setUserDetails, type, placeholder, value, disabled, validPassword, matchingPassword, validEmail }: UserInputDetailsProps<T>) {
  const [displayInstruction, setDisplayInstruction] = useState<boolean>(false)
  const { appModals } = useDesignerContext() as DesignerContextProps;

  return (
    <div className="flex flex-col gap-y-0.5 w-full">
      <label htmlFor={id} className='text-xs mobile:text-[13px] flex items-center gap-x-3'>{title} 
      {
        (appModals.signup === 'OPEN' && title === 'Password') ?
        (
          !value ? <div className={`text-xs font-bold ${/^(?!.*[\^\\/(),"*_+-].*$)/.test(value) ? 'text-black' : 'text-red-500'}`}>
          Not allowed <span className='line-through'>^()"_+-*\/</span>
          </div> 
          : 
          <>
          {
            <ul 
            onClick={() => setDisplayInstruction(true)}
            className={`${displayInstruction ? 'hidden' : 'flex'} font-sans px-3 gap-x-3 bg-slate-900 rounded-md text-xs w-fit self-center mt-0.5 overflow-x-auto`}>
              <li className='flex flex-col'>
                <span className={`before:content-['*'] flex items-center gap-1 ${!value ? 'text-white' : /[a-z]/.test(value) ? 'text-green-500' : 'text-red-500'}`}>lowercase</span>
                <span className={`before:content-['*'] flex items-center gap-1 ${!value ? 'text-white' : /[A-Z]/.test(value) ? 'text-green-500' : 'text-red-500'}`}>uppercase</span>
              </li>
              <li className='flex flex-col'>
                <span className={`before:content-['*'] flex items-center gap-1 ${!value ? 'text-white' : /[@£$!%*?&]/.test(value) ? 'text-green-500' : 'text-red-500'}`}>a symbol</span>
                <span className={`before:content-['*'] flex items-center gap-1 ${!value ? 'text-white' : /[\d]/.test(value) ? 'text-green-500' : 'text-red-500'}`}>number</span>
              </li>
              <li className='flex flex-col'>
                <span className={`before:content-['*'] flex items-center gap-1 ${!value ? 'text-white' : value.length >= 9 ? 'text-green-500' : 'text-red-500'}`}>
                  minimum 9
                </span>
                <span className={`text-xs line-through ${!value ? 'text-white' : /^(?!.*[\^\\/(),"*_+-].*$)/.test(value) ? 'text-green-500' : 'text-red-500'}`}>
                ^()"_+-*\/
                </span>
              </li>
            </ul>
            }
          </>
        ) : null
      }
      </label>
      {
        type === 'password' ?
          <PasswordInput
            name={name} disabled={disabled} id={id}
            validPassword={validPassword}
            matchingPassword={matchingPassword}
            value={value} setInputText={setUserDetails} classNames="border-gray-200"
          />
          :
          <InputText
            type={type} name={name} id={id}
            placeholder={placeholder ?? title}
            disabled={disabled} validEmail={validEmail}
            value={value} setInputText={setUserDetails} classNames="border-gray-200"
          />
      }
    </div>
  )
}
