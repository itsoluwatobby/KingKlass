
export const Hero = () => {

  // min-h-[90vh]
  return (
    <section className="hero relative flex w-full flex-row transition-all mb-4">
      <div className="md:mt-24 pt-6 pb-0 px-4 md:px-16 lg:px-28 flex flex-col items-start w-full">
        <h1 className="text-left text-fdt-brown-dark mt-0 mb-0 font-playfair-display  text-3xl whitespace-pre-wrap font-bold leading-[120%]">
          CRAFTING IDENTITY
        </h1>
        <p className="text-fdt-brown-normal mt-1 md:text-start text-sm whitespace-pre-wrap">
          We masterfully blend tradition and contemporary flair, crafting
          bespoke garments that embodies timeless elegance
        </p>
      </div>

      


        <img
          className="w-[50%] pr-3  h-[40%] self-center rounded-[6px] -bottom-3 -left-3"
          src="/HeroImage.png"
          alt=""
        />
      

    </section>
  );
};
