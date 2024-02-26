import { LuSettings2 } from "react-icons/lu";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import HomeLayout from "../layout/HomeLayout";
import { getProducts } from "../api/globalRequest";
import { useEffect, useState } from "react";
import { initAppState } from "../utility/initialVariables";
import RequestStages from "../components/RequestStage";
import { useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";


export default function Products() {
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const { search } = useLocation();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setfilteredProducts] = useState<ProductType[]>([]);

  const { isLoading, isError, isSuccess } = appState;

  useEffect(() => {
    const val = search.split('=')[1];
    setfilteredProducts(products?.filter(product => (product.name.toLowerCase()).includes(val))?.sort((a,b) => b.created_at.localeCompare(a.created_at)))
  }, [search.split('=')[1]])

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      try {
        setAppState((prev) => ({ ...prev, isLoading: true }));
        const res = await getProducts() as ProductType[];
        setProducts(res);
        setAppState((prev) => ({ ...prev, isSuccess: true }));
      } catch (err: any) {
        console.log(err);
        setAppState((prev) => ({ ...prev, isError: true }));
      } finally {
        setAppState((prev) => ({ ...prev, isLoading: false }));
      }
    };
    isMounted ? fetchProduct() : null;
    return () => {
      isMounted = false;
    };
  }, []);

  // const sortedProducts = products?.sort((a,b) => b.created_at.localeCompare(a.created_at));

  return (
    <HomeLayout>
      <>
        <div className="px-3 self-center flex items-center sticky top-0 gap-x-4 z-20 w-full md:w-1/2">
          <SearchBar search={search?.split('=')[1]} />
          <MdClear className="flex-none text-3xl  p-1 font-normal text-black hover:cursor-pointer" />
        </div>

        <div className="text-fdt-grey-darker flex justify-center items-center gap-2 self-end mx-3 mt-4 mb-2 text-base font-montserrat px-4 py-1 rounded-full border-[0.5px] border-solid border-fdt-grey-normal">
          Filter
          <LuSettings2 className="text-2xl"/>
        </div>

          <div className="w-full px-1 h-full flex flex-row flex-wrap gap-8 mobile:gap-4 justify-center">
            <RequestStages useRelative={true}
            isLoading={isLoading} isError={isError}
            targetVal={products} isSuccess={isSuccess as boolean} errorText="Error Fetching Products" warnText="No products available"
            >
              {
                filteredProducts.map((item) => (
                  <ProductCard key={item.id}
                    img_url={item.img_url}
                    id={item.id}
                    price={item.price}
                    estimated={item.estimated}
                    name={item.name}
                  />
                )) 
              }
            </RequestStages>
          </div>
      </>
    </HomeLayout>
  );
}
