import { LuSettings2 } from "react-icons/lu";
import SearchBar from "../components/SeacrhBar";
import DisplayCard from "../components/DisplayCard";
import HomeLayout from "../layout/HomeLayout";


export default function Products() {

  return (
    <HomeLayout>
      <>
        <div className="px-2 bg-white flex items-center sticky top-0 gap-x-4 z-20 w-full">
          <SearchBar search="" />
          <LuSettings2 className="flex-none text-4xl bg-slate-200 p-1 font-normal" />
        </div>

        <div className="px-2 h-full self-center grid grid-cols-3 lg:grid-cols-4 mobile:grid-cols-2 gap-x-6 gap-y-10">
          {
            [...Array(25).keys()].map(index => (
              <DisplayCard key={index}
                designInfo={{
                  image: '', price: 10_500,
                  createdAt: new Date().toUTCString(),
                  name: "King Klass trouser, custom"
                }}
              />
            ))
          }
        </div>
      </>
    </HomeLayout>
  )
}