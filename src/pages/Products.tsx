import { LuSettings2 } from "react-icons/lu";
import SearchBar from "../components/SeacrhBar";
import DisplayCard from "../components/ProductCard";
import HomeLayout from "../layout/HomeLayout";
import { getProducts } from "../api/globalRequest";
import { useEffect, useState } from "react";
import { initAppState } from "../utility/initialVariables";
import { ProductCardProps } from "../components/ProductCard";

export default function Products() {
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  // const { isLoading, isError } = appState;

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      try {
        setAppState((prev) => ({ ...prev, isLoading: true }));
        const res = await getProducts();
        console.log(products);
        setProducts(res);
        console.log(products, appState);
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

  console.log(products)
  return (
    <HomeLayout>
      <>
        <div className="px-2 bg-white self-center flex items-center sticky top-0 gap-x-4 z-20 w-full md:w-1/2">
          <SearchBar search="" />
          <LuSettings2 className="flex-none text-4xl bg-slate-200 p-1 font-normal" />
        </div>

        <div className="px-2 h-full self-center grid grid-cols-3 lg:grid-cols-4 mobile:grid-cols-2 gap-x-6 md:gap-x-16 gap-y-10">
          {products.map((item) => (
            <DisplayCard
              img_url={item.img_url}
              name={item.name}
              price={item.price}
              estimated={item.estimated}
            />
          ))}
        </div>
      </>
    </HomeLayout>
  );
}
