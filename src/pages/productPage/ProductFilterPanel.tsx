import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { Buttons } from "../../components/appComponents/Buttons";
import DemarcationLine from "../../components/appComponents/DemarcationLine";

function ProductFilterPanel() {
  const { toggleNav, setToggleNav } =
    useDesignerContext() as DesignerContextProps;

  return (
    <FadedBGWrapper
      modalType={toggleNav.modalType}
      expected="productFilterPanel"
      classNames="!h-[85%] !w-[75%] !mr-[25%] !rounded-tr-none !rounded-tl-none font-montserrat"
      isButtomSheet={true}
    >
      <div className="flex flex-col h-full justify-between pb-6">
        <form
          action=""
          className="flex flex-col border-t border-gray-200 lg:border-t-0 gap-y-3 text-sm"
        >
          <fieldset className="w-full text-sm">
            <legend className="block w-full  px-5 py-2  font-medium">
              Category
            </legend>

            <div className="px-5 py-1 flex flex-col gap-5 text-fdt-grey-darker font-normal">
              {["Agbada", "Senator", "Chinos", "Suits"].map((category) => (
                <FilterCategory key={category} category={category} />
              ))}
            </div>
          </fieldset>

          <DemarcationLine classNames="" />

          <fieldset className="w-full">
            <legend className="block w-full  px-5 py-2  font-medium">
              Rating
            </legend>
            <div className="px-5 py-1 flex flex-col gap-4 text-fdt-grey-darker font-norma">
              {[5, 4, 3, 2, 1].map((rating) => (
                <FilterRating rating={rating} />
              ))}
            </div>
          </fieldset>
        </form>

        <Buttons
          onClick={() =>
            setToggleNav((prev) => ({
              ...prev,
              modalType: "pass",
              prevModal: "pass",
            }))
          }
          px=""
          py=""
          // isLoading={isLoading}
          classNames="self-center rounded-md font-semibold bg-[#8B4513] text-base text-montserrat text-white w-[95%] md:w-1/2 py-2 hover:bg-[#8B4513] active:bg-[#8B4513] transition-colors"
        >
          Apply Filters
        </Buttons>
      </div>
    </FadedBGWrapper>
  );
}

interface FilterCheckboxProps {
  category: string;
}

const FilterCategory = function ({ category }: FilterCheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        id={category}
        type="checkbox"
        name={`type[${category}]`}
        className="cursor-pointer checked:accent-fdt-brown-normal h-4 w-4"
      />

      <label htmlFor="New" className="ml-2">
        {category}
      </label>
    </div>
  );
};

interface FilterRatingProps {
  rating: number;
}
const FilterRating = function ({ rating }: FilterRatingProps) {
  return (
    <div className="flex items-center">
      <input
        id={`${rating}`}
        type="radio"
        name="rating"
        value={rating}
        className="cursor-pointer checked:accent-fdt-brown-normal h-4 w-4"
      />

      <label
        htmlFor={`${rating}`}
        className="ml-2 flex items-center gap-x-1 justify-center"
      >
        <p className="text-center leading-5">{rating}</p>
        <span>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#EFBF13]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default ProductFilterPanel;
