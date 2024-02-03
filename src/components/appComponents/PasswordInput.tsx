
type InputTextProps<T> = {
  value: string;
  name: string;
  type?: 'text' | 'password';
  required?: boolean;
  classNames?: string;
  pattern?: string;
  disabled?: boolean;
  setInputText: React.Dispatch<React.SetStateAction<T>>
}

export default function PasswordInput<K>({ value, pattern, classNames, name, setInputText, required = false, type = 'password', disabled=false }: InputTextProps<K>) {

  const defaultClassNames = classNames ?? 'p-2 border-gray-300'

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder='*********************'
      pattern={(pattern ?? '')}
      required={required}
      autoComplete="off"
      disabled={disabled}
      className={`text-[13px] bg-inherit focus:outline-0 border placeholder:text-gray-400 ${defaultClassNames} p-2`}
      onChange={e => setInputText((prev: any) => (
        { ...prev, [e.target.name]: e.target.value })
      )}
    />
  )
}