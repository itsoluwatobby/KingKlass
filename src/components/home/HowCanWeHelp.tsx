interface ImgCardProp {
  name: string;
  src: string;
}

function ImgCard({ name, src }: ImgCardProp) {
  return (
    <figure className="w-[45%] m-0 rounded-lg drop-shadow-lg">
      <img
        className="w-full mb-0 object-cover rounded-tr-lg rounded-tl-lg"
        src={src}
      />
      <figcaption className="bg-fdt-brown-darker  mt-[-4px] text-fdt-grey-light py-1 text-center text-sm font-medium">
        {name}
      </figcaption>
    </figure>
  );
}

function HowCanWeHelp() {
  return (
    <section className="mt-10 pb-10 flex flex-col justify-center items-center">
      <h3 className="text-[1.25rem] font-normal font-playfair-display text-fdt-brown-dark mb-4">
        HOW CAN WE HELP YOU ?
      </h3>

      <div className="w-[90%] flex mx-2 gap-5 flex-row flex-wrap justify-center">
        <ImgCard name="AGBADA" src="/agbada.png" />
        <ImgCard name="SHIRTS" src="https://shorturl.at/ptzVZ" />
        <ImgCard name="SENATOR" src="/senator.png" />
        <ImgCard name="SUITS" src="/suit.png" />
      </div>
    </section>
  );
}

export default HowCanWeHelp;
