
type InputTextProps<T> = {
  value: string;
  name: string;
  placeholder: string;
  type?: 'name' | 'text' | 'email' | 'tel';
  required?: boolean;
  classNames?: string;
  pattern?: string;
  setInputText: React.Dispatch<React.SetStateAction<T>>
}

export default function InputText<K>({ value, pattern, placeholder, classNames, name, setInputText, required=false, type='text' }: InputTextProps<K>) {
  
  const defaultClassNames = classNames ?? 'p-2 border-gray-300'
  
  return (
    <input 
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    pattern={(pattern ?? '')}
    required={required}
    autoComplete="off"
    className={`text-[13px] bg-inherit focus:outline-0 border placeholder:text-gray-300 ${defaultClassNames} p-2`}
    onChange={e => setInputText((prev: any) => (
    { ...prev, [e.target.name]: e.target.value})
    )}
    />
  )
}