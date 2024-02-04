import { setCustomBackgroundImage } from "../../utility/setBackGroundImage";

type DesignSampleProps = {
  image: string;
  title: string;
}
export const ImageCard = ({ image, title }: DesignSampleProps) => {

  return (
    <article className={`rounded-[3px] flex-none bg-pink-200 bg-opacity-80 h-60 flex flex-col items-center w-[33.3%]`}>
      <div
      style={setCustomBackgroundImage(image)} 
      className="flex-none min-h-[90%] rounded-l-[2px] w-full rounded-[3px]"
      ></div>

      <p className={`pt-1 uppercase font-semibold text-xs whitespace-pre-wrap`}>
        {title}
      </p>
    </article>
  )
}