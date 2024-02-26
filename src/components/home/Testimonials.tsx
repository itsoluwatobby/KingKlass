import { format } from "timeago.js";
import { UserFeedback } from "../../utility/constants";
import { Buttons } from "../appComponents/Buttons";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef } from "react";
import { getInitials } from "../../utility/getInitials";
import Quote from "./icons/Quote";
import Google from "./icons/Google";

export default function Testimonials() {
  const refContainer = useRef<HTMLDivElement>(null);

  const toggleScroll = (direction: "RIGHT" | "LEFT") => {
    if (!refContainer.current) return;
    direction === "LEFT"
      ? (refContainer.current.scrollLeft -= 370)
      : (refContainer.current.scrollLeft += 370);
  };

  return (
    <section className="flex flex-col gap-y-1 w-full pb-4 mobile:min-h-[43vh] min-h-[50vh]">
      <div className="p-4 maxmobile:pr-7 py-2 pb-2 h-24 flex bg-[#311807] w-full text-white flex-row justify-between items-center">
        <Quote />

        <div className="flex flex-col text-right self-end h-full justify-center">
          <p className="text-1xl m-0 text-fdt-brown-normal">Testimonials</p>
          <h2 className="w-fit text-white text-3xl midmobile:text-2xl my-0 font-playfair-display font-medium">
            Our Happy Clients
          </h2>
        </div>
      </div>

      {/* Reviews */}
      <div
        ref={refContainer}
        className="scroll-smooth p-3 pb-0 flex items-center gap-x-4 overflow-x-scroll"
      >
        {UserFeedback.map((feedback, index) => (
          <FeedBacks
            key={index}
            author={feedback.author}
            comment={feedback.Comment}
            location={feedback.location}
            date={feedback.date}
          />
        ))}
      </div>

      <div className="w-full flex items-center justify-between px-5">
        <Google />
        <div className="flex items-center gap-x-4">
          <Buttons
            onClick={() => toggleScroll("LEFT")}
            px=""
            py=""
            classNames="rounded-full grid place-content-center w-8 h-8 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors"
          >
            <SlArrowLeft className="text-xl" />
          </Buttons>
          <Buttons
            onClick={() => toggleScroll("RIGHT")}
            px=""
            py=""
            classNames="rounded-full grid place-content-center w-8 h-8 bg-white hover:bg-gray-200 active:bg-gray-100 transition-colors"
          >
            <SlArrowRight className="text-xl" />
          </Buttons>
        </div>
      </div>
    </section>
  );
}

type FeedBacksProps = {
  author: string;
  comment: string;
  location: string;
  date: string;
};
const FeedBacks = ({ author, comment, location, date }: FeedBacksProps) => {
  const [firstName, lastName] = author.split(" ", 2);

  return (
    <div className="md:border-0 md:border-r-2 md:last:border-r-0 px-2 md:pr-4 flex-none flex flex-col gap-y-3 maxmobile:w-full w-[23rem] transition-all">
      <div className="capitalize font-semibold text-sm flex items-center gap-x-3">
        <h3 className="m-0 flex flex-row justify-center items-center w-8 h-8  bg-[#F2DDB1] font-bold rounded-full p-3">
          {getInitials(firstName)}
        </h3>
        <h3 className="m-0 text-fdt-grey-darker font-medium">
          {firstName} &nbsp;{getInitials(lastName)}
        </h3>
      </div>

      <p className="mt-0 text-sm self-stretch text-fdt-grey-dark font-normal leading-6">
        {comment}
      </p>

      <div className="capitalize font-normal text-xs tex-gray-800 flex items-center justify-between">
        <span className="capitalize text-sm self-stretch text-fdt-grey-dark font-normal">
          {location}
        </span>
        <span className="font-sans text-gray-600 text-[11px]">
          {format(date)}
        </span>
      </div>
    </div>
  );
};
