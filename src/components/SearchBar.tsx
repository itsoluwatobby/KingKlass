import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

type SeacrhBarProps = {
  search: string;
};
export default function SearchBar({ search }: SeacrhBarProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-[3px]  relative">
      <IoSearchOutline className="absolute left-3 top-[10px] text-[22px] text-fdt-grey-dark font-normal" />
      <input
        type="search"
        value={search}
        placeholder="Search"
        className="text-fdt-grey-dark text-[16px] rounded-full border-solid border-fdt-grey-light-active w-full border-[0.3px] py-[10px] font-montserrat font-normal pl-12"
        onChange={(e) => navigate(`/products?search=${e.target.value}`)}
      />
    </div>
  );
}
