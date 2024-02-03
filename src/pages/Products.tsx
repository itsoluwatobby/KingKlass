import { LuSettings2 } from "react-icons/lu";
import SearchBar from "../components/SeacrhBar";


export default function Products() {

  return (
    <main className="w-full h-full flex flex-col mt-16 p-2">
      <div className="flex items-center gap-x-4 w-full">
        <SearchBar search="" />
        <LuSettings2 className="flex-none text-2xl" />
      </div>
      Products
    </main>
  )
}