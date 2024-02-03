import { CiSearch } from "react-icons/ci"


type SeacrhBarProps = {
  search: string
}

export default function SearchBar({ search }: SeacrhBarProps) {
  
  return (
    <div className="w-full rounded-[3px] bg-slate-200 relative">
      <input type="text" 
        value={search}
        placeholder="Search"
        className="w-full p-3 text-xs placeholder:text-gray-700 focus:outline-0 border-0 bg-inherit rounded-[3px]"
      />
      <CiSearch className="absolute text-xl right-2 top-2" />
    </div>
  )
}