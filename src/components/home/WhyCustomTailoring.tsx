import { SiZend } from "react-icons/si";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { GiClothespin } from "react-icons/gi";
import { MdPersonAddAlt } from "react-icons/md";
import React from "react";

interface OfferProps {
  Icon?: any;
  title: string;
  desc: string;
}

function Offer({ Icon, title, desc }: OfferProps) {
  return (
    <div className="border-[0.5px] border-solid rounded-[8px] border-[#939393] px-8">
      <div className="flex flex-row  items-center gap-3 mb-0 pt-4">
        {React.cloneElement(Icon, {
          className:
            "text-4xl  p-2 rounded-[6px] text-fdt-brown-normal bg-fdt-brown-light-hover",
        })}
        <h4 className="text-fdt-brown-normal text-[1.125rem] font-normal my-0">
          {title}
        </h4>
      </div>

      <p className="mt-2 text-fdt-brown-darker font-light">{desc}</p>
    </div>
  );
}

export default function WhyCustomTailoring() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-fdt-brown-normal font-normal mb-0">GALLARY</h4>
        <h3 className="text-fdt-brown-dark font-playfair-display text-[1.25rem] font-normal mt-1">
          Why Custom Tailoring ?
        </h3>
        <img
            className="w-[60%] aspect-[1/1.12] rounded-[6px] bottom-0 left-0"
            src="/WhyCustomT.png"
            alt=""
          />
      </div>

        <section className="flex flex-col gap-4 w-[90%] my-5">
          <Offer
            Icon={<SiZend />}
            title="Perfect Fit"
            desc="Tailored to your measurements for unparalleled comfort and confidence"
          />

          <Offer
            Icon={<GiClothespin />}
            title="Crafstmanship"
            desc="Prioritizing quality and attention to detail for sophisticated clothing"
          />

          <Offer
            Icon={<MdPersonAddAlt />}
            title="Individual Style"
            desc="Express your unique taste with personalized fabrics and designs"
          />

          <Offer
            Icon={<RiArchiveDrawerFill />}
            title="Timeless Wardrobe"
            desc="Invest in enduring style that transcends trends, a lasting value"
          />
        </section>

    </section>
  );
}
