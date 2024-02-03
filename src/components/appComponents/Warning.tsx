import { CiWarning } from 'react-icons/ci'

type WarningProps = {
  text: string;
}

export default function Warning({ text }: WarningProps) {

  return (
    <div className={`${!text ? 'hidden' : 'flex'} self-start text-xs pb-1 text-red-700 font-medium items-center gap-x-1`}>
      <CiWarning />
      <span className='text-[11px]'>{text}</span>
    </div>
  )
}