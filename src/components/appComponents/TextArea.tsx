import { MagicNumbers } from "../../utility/constants";

type InputTextProps<T> = {
  value: string;
  placeholder: string;
  required?: boolean;
  classNames?: string;
  name: string;
  setInputText: React.Dispatch<React.SetStateAction<T>>
  size?: { row: number; col: number; }
}

export default function TextArea<K>({ 
value, placeholder, classNames, name, setInputText, required=false,
size={ row: 4, col: 5}
}: InputTextProps<K>) {
  
  const { maxTextLength, minTextLength } = MagicNumbers;
  const defaultClassNames = classNames ?? 'p-2 border-gray-300'
  const { col, row } = size;
  
  
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <textarea 
      value={value}
      name={name}
      cols={col} rows={row}
      placeholder={placeholder}
      required={required}
      className={`text-[13px] focus:outline-0 resize-none bg-inherit border placeholder:text-gray-300 ${defaultClassNames} p-1`}
      onChange={e => setInputText((prev: any) => (
        { ...prev, [e.target.name]: e.target.value})
        )}
      />

      <span className={`font-sans tracking-wider self-end font-medium ${(value?.length >= (minTextLength as number) && value?.length !== maxTextLength) ? 'text-red-400' : value?.length === maxTextLength ? 'text-red-600' : ''} transition-colors`}>
        {value?.length ?? 0}/{maxTextLength}
      </span>
    </div>
  )
}