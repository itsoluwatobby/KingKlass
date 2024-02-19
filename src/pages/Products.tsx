import { LuSettings2 } from "react-icons/lu";
import SearchBar from "../components/SeacrhBar";
import ProductCard from "../components/ProductCard";
import HomeLayout from "../layout/HomeLayout";
import { getProducts } from "../api/globalRequest";
import { useEffect, useState } from "react";
import { initAppState } from "../utility/initialVariables";
import { ProductCardProps } from "../components/ProductCard";
import "./styles/Products.css"

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

  console.log(products);
  return (
    <HomeLayout>
      <>
        <div className="filters mt-4 mb-4 px-2 bg-white self-center flex items-center sticky top-0 gap-x-4 z-20 w-full md:w-1/2">
          <SearchBar placeholder="Search" />
          <LuSettings2 className="bg-light text-secondary flex-none text-4xl bg-slate-200 p-1 font-normal rounded" />
        </div>

        <div className="product--container">
          {products.map((item) => (
            <ProductCard
              img_url={item.img_url}
              name={item.name}
              price={item.price}
              estimated={item.estimated}
              id={item.id}
            />
          ))}
        </div>
      </>
    </HomeLayout>
  );
}
