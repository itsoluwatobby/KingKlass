import InputText from '../appComponents/InputText'
import PasswordInput from '../appComponents/PasswordInput';

type UserInputDetailsProps<T> = {
  name: string;
  title: string;
  placeholder?: string;
  value: string;
  disabled: boolean;
  type: 'tel' | 'email' | 'text' | 'password';
  setUserDetails: React.Dispatch<React.SetStateAction<T>>
}

export default function UserInputDetails<T>({ name, title, setUserDetails, type, placeholder, value, disabled }: UserInputDetailsProps<T>) {

  return (
    <div className="flex flex-col gap-y-0.5 w-full">
      <label htmlFor={name} className='text-xs mobile:text-[13px]'>{title}</label>
      {
        type === 'password' ?       
        <PasswordInput
        type={type} name={name} disabled={disabled}
        value={value} setInputText={setUserDetails} classNames="border-gray-200"
        />
        :
        <InputText
          type={type} name={name}
          placeholder={placeholder ?? title}
          disabled={disabled}
          value={value} setInputText={setUserDetails} classNames="border-gray-200"
        />
      }
    </div>
  )
}