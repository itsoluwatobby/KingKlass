import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom";


type SeacrhBarProps = {
  search: string;
}
export default function SearchBar({ search }: SeacrhBarProps) {
  const navigate = useNavigate()

  return (
    <div className="w-full rounded-[3px] bg-slate-100 relative">
      <input type="text" 
        value={search}
        placeholder="Search"
        className="w-full p-3 text-xs placeholder:text-gray-700 focus:outline-0 border-0 bg-inherit rounded-[3px]"
        onChange={e => navigate(`/products?search=${e.target.value}`)}
      />
      <CiSearch className="absolute text-xl right-2 top-2" />
    </div>
  )
}
