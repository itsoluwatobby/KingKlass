import { IoSearchOutline } from "react-icons/io5";

type SeacrhBarProps = {
  query: string;
  handleInputChange: (e: any) => void;
};

export default function SearchBar({
  query,
  handleInputChange,
}: SeacrhBarProps) {
  return (
    <div className="w-full rounded-[3px]  relative">
      <IoSearchOutline className="absolute left-3 top-[10px] text-[22px] text-fdt-grey-dark font-normal" />
      <input
        type="search"
        value={query}
        placeholder="Search"
        className="text-fdt-grey-dark text-[16px] rounded-full border-solid border-fdt-grey-light-active w-full border-[0.3px] py-[10px] font-montserrat font-normal pl-12"
        onChange={handleInputChange}
      />
    </div>
  );
}
