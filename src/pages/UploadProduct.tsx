import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { currencyFormat } from "../utility/formatPrice";
import { CiTrash } from "react-icons/ci";
import { formmatTime } from "../utility/helpers";
import { Buttons } from "../components/appComponents/Buttons";
import TextArea from "../components/appComponents/TextArea";
import InputText from "../components/appComponents/InputText";
import { LiaTimesSolid } from "react-icons/lia";
import { hoverClass } from "../utility/constants";

const initProduct = {
  productName: "",
  description: "",
  price: "",
  duration: "",
  productImages: [],
};
export default function UploadProduct() {
  const [active, setActive] = useState<string>("uploaded");
  const [newProduct, setNewProduct] = useState<typeof initProduct>(initProduct);
  const categories = ["Native wear", "Italian wear", "Senators"];

  const { productName, description, price, duration } = newProduct;
  const [loading, setLoading] = useState<boolean>(false);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = event.target.files as FileList;
    // upload image
    void imageFiles;
    void loading;
    setLoading(true);
    // imageFiles?.map((image) => {
    //   if (image.size > MagicNumbers.imageSize) {
    //     return alert(`MAX ALLOWED FILE SIZE 1.4mb`)
    //   }
    //   imageUpload(image, 'products')
    //   .then(async (res) => {
    //     // if (userDetails.file) {
    //     //   await deleteImage(userDetails.file, 'displayPictures') //delete image existing image
    //     // }
    //     setLoading(false)
    //     setNewProduct(prev => ({ ...prev, file: res.url }));
    //   })
    //   .catch(() => {
    //     setLoading(false)
    //     alert('ERROR UPLOADING IMAGE')
    //   })
    // })
  };

  return (
    <div className="overflow-y-scroll h-[90vh] w-full p-3 py-8">
      <div className="flex w-full h-full gap-x-4 gap-y-8 lg:flex-row flex-col">
        <section className="flex flex-col lg:w-1/2 w-full gap-y-7">
          <h3 className="font-semibold text-xl">Products</h3>

          <div className="flex text-sm items-center w-full p-1 bg-gray-200 rounded-[3px]">
            <button
              onClick={() => setActive("uploaded")}
              className={`p-1 rounded-[3px] cursor-pointer w-1/2 ${
                active === "uploaded"
                  ? "text-[#8B4513] font-bold bg-white"
                  : "bg-gray-200"
              } hover:opacity-95 transition-all`}
            >
              Uploaded
            </button>
            <button
              onClick={() => setActive("draft")}
              className={`w-1/2 p-1 rounded-[3px] cursor-pointer ${
                active === "draft"
                  ? "text-[#8B4513] font-bold bg-white"
                  : "bg-gray-200"
              } hover:opacity-95 transition-all`}
            >
              Draft
            </button>
          </div>

          <select name="" id="" className="border p-1 text-[#6E6E6E]">
            <option value="category">Category</option>
          </select>

          <div className="globalScrollbar w-full flex flex-col gap-y-1 max-h-[70%] overflow-y-scroll px-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Product
                key={i}
                productObj={{
                  productName: "Gown",
                  image: "new Date('2024 01 25')",
                  price: 10_500,
                }}
              />
            ))}
          </div>
        </section>

        <section className="lg:w-1/2 w-full flex flex-col gap-y-4 font-sans text-sm">
          <Buttons
            onClick={() => {}}
            px=""
            py=""
            isLoading={false}
            classNames={`self-end rounded-[3px] font-medium bg-[#8B4513] text-sm text-white text-center w-fit py-1.5 px-3`}
          >
            Add new Product
          </Buttons>
          <div className="border rounded-md bg-gray-100 p-1.5 flex flex-col gap-5">
            <div className="flex flex-col gap-y-1">
              <span className="text-sm font-semibold">Product Description</span>
              <InputText
                value={productName}
                id={productName}
                setInputText={setNewProduct}
                name={"productName"}
                placeholder="Product name..."
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-sm font-semibold">Product Description</span>
              <TextArea
                value={description}
                setInputText={setNewProduct}
                name={"description"}
                placeholder="Type description here..."
              />
            </div>

            <div>
              <span className="font-meduim">Select a category</span>
              <div className="flex bg-white items-center flex-wrap md:w-[75%] p-1 gap-x-2 w-[90%]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={
                      "rounded-sm focus:outline-0 border-0 w-fit p-0.5 px-1 bg-gray-200 flex items-center gap-x-1.5" +
                      hoverClass
                    }
                  >
                    {cat}{" "}
                    <LiaTimesSolid className="text-sm font-bold text-black" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-3 relative">
                <span className="text-[#6E6E6E]">Price</span>
                <InputText
                  type="tel"
                  value={price}
                  name="price"
                  id="price"
                  setInputText={setNewProduct}
                  placeholder=""
                  classNames="rounded-[5px] h-9"
                />
                <span className="text-gray-500 absolute left-12 font-semibold">
                  &#x20A6;
                </span>
              </div>
              <div className="flex items-center gap-3 relative">
                <span className="text-[#6E6E6E]">Duration</span>
                <InputText
                  type="tel"
                  value={duration}
                  name="duration"
                  id="duration"
                  setInputText={setNewProduct}
                  placeholder=""
                  classNames="rounded-[5px] h-9"
                />
                <span className="text-gray-500 absolute right-2">days</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <figure
                  key={i}
                  className="bg-gray-300 relative w-14 h-12 rounded-[3px]"
                >
                  <img
                    src=""
                    alt=""
                    className="w-full h-full object-cover rounded-[3px]"
                  />
                  <LiaTimesSolid className="absolute text-sm font-bold text-black bg-white rounded-full -top-1 p-0.5 -right-1 hover:scale-[1.03] active:scale-[1] transition-transform" />
                </figure>
              ))}
              <label
                htmlFor="productImages"
                className="border border-gray-300 w-14 h-12 rounded-[3px] text-4xl hover:scale-[1.05] active:scale-[1] transition-transform cursor-default text-gray-400 grid place-content-center"
              >
                +
              </label>
              <input
                type="file"
                hidden
                id="productImages"
                multiple
                onChange={handleFile}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type ProductProps = {
  productObj: {
    image: string;
    productName: string;
    price: number;
  };
};
const Product = ({ productObj }: ProductProps) => {
  return (
    <div className="hover:opacity-80 transition-opacity font-sans flex items-center p-2 border-[1px] even:bg-slate-50 odd:bg-slate-100 justify-between text-[12px] w-full">
      <Link to={``} className="flex-none w-[70%] flex items-center">
        <figure className="w-10 h-10 rounded-[3px] flex-none">
          <img
            src={productObj.image}
            alt={productObj.productName}
            className="object-cover h-full w-full rounded-[3px]"
          />
        </figure>
        <div className="flex items-center flex-col gap-y-1 px-3">
          <span>{productObj.productName}</span>
          <span className="font-sans font-semibold text-[12px]">
            {currencyFormat(productObj.price)}
          </span>
        </div>
      </Link>

      <div className="flex flex-col min-w-32 gap-y-1.5">
        <CiTrash className="text-xl self-end cursor-pointer hover::sacle-[1.002] active:scale-[1] transition-transform" />
        <div className="flex items-center self-end text-[#6E6E6E] w-full">
          <span className="">Last edited</span>
          <span>{formmatTime(new Date())}</span>
        </div>
      </div>
    </div>
  );
};
