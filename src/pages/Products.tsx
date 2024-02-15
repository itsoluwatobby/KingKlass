import { LuSettings2 } from "react-icons/lu";
import SearchBar from "../components/SeacrhBar";
import DisplayCard from "../components/DisplayCard";
import HomeLayout from "../layout/HomeLayout";
import { getProducts } from "../api/globalRequest";
import { useEffect, useState } from "react";
import { initAppState } from "../utility/initialVariables";


export default function Products() {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [products, setProducts] = useState<object>()

  // const { isLoading, isError } = appState;

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      try{
        setAppState(prev => ({ ...prev, isLoading: true }))
        const res = await getProducts()
        setProducts(res);
        console.log(products, appState)
      }
      catch(err: any) {
        console.log(err)
        setAppState(prev => ({...prev, isError: true }))
      }
      finally{
        setAppState(prev => ({ ...prev, isLoading: false }))
      }
    }
    isMounted ? fetchProduct() : null;
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <HomeLayout>
      <>
        <div className="px-2 bg-white self-center flex items-center sticky top-0 gap-x-4 z-20 w-full md:w-1/2">
          <SearchBar search="" />
          <LuSettings2 className="flex-none text-4xl bg-slate-200 p-1 font-normal" />
        </div>

        <div className="px-2 h-full self-center grid grid-cols-3 lg:grid-cols-4 mobile:grid-cols-2 gap-x-6 md:gap-x-16 gap-y-10">
          {
            [...Array(25).keys()].map(index => (
              <DisplayCard key={index}
                designInfo={{
                  image: `/image${index}.png`, price: 10_500,
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