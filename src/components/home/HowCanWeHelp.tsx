interface ImgCardProp {
  name: string;
  src: string
}

function ImgCard({ name, src}: ImgCardProp) {
  return (
    <figure className="w-25 m-0 rounded-lg drop-shadow-lg">
    <img
      className="w-full mb-0 object-cover rounded-tr-lg rounded-tl-lg"
      src="https://www.slingacademy.com/wp-content/uploads/2022/10/bottle.webp"
    />
    <figcaption className="bg-fdt-brown-darker  mt-[-4px] text-fdt-grey-light py-1 text-center text-sm font-medium">
      {name}
    </figcaption>
  </figure>
  )
}

function HowCanWeHelp() {
  return (
    <section className="pb-10 flex flex-col justify-center items-center">
      <h3 className="text-[1.25rem] font-normal font-playfair-display">HOW CAN WE HELP YOU ?</h3>

      <div className="w-[95%] flex mx-2 flex-row justify-center gap-2">
        <ImgCard name="SENATOR" src="/senator.png"/>
        <ImgCard name="AGBADA" src="/agbada.png"/>
        <ImgCard name="SHIRTS" src="/shirts"/>
        {/* <ImgCard name="SUITS" src="/suits.png"/> */}
      </div>
    </section>
  );
}

export default HowCanWeHelp;
