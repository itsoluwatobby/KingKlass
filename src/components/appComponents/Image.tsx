
type ImageProps = {
  image: string;
  rounded: string;
  classNames: string;
}

export const DesignImage = ({ image, rounded, classNames }: ImageProps) => {

  return (
    <figure className={`flex-none bg-gray-300 ${rounded} ${classNames}`}>
    <img src={image} alt={image} 
    className={`w-full h-full ${rounded} object-cover`} />
  </figure>
  )
}