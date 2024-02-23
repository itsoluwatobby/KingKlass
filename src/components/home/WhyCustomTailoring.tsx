import { IconType } from "react-icons";
import { SiZend } from "react-icons/si";

interface OfferProps {
  icon?: string;
  title: string;
  desc: string;
}

function Offer({ icon, title, desc }: OfferProps) {
  return (
    <div className="border-[0.5px] border-solid rounded-[8px] border-[#939393] px-8">
      <div className="flex flex-row  items-center gap-3 mb-0 pt-4">
        <SiZend className=" text-4xl  p-2 rounded-[6px] text-fdt-brown-normal bg-fdt-brown-light-hover" />
        <h4 className="text-fdt-brown-normal text-[1.125rem] font-normal my-0">{title}</h4>
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

        <div className="relative w-[90%] max-w-[400px] flex  flex-row py-3  items-center justify-center">
          <img
            className="w-[113px] h-[114px] absolute rounded-[6px] bottom-0 left-0"
            src="https://s3-alpha-sig.figma.com/img/50ee/0c86/082ecd0a165edbd169820a1a2450fbaf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRGh6ObPThUrcDqI9IpZ16qj88YWdfv5gO9xZfku-hvYZ6gQe2YnOxbbF2iHoDeWjuarN-iSsUD133mml-umvN09~VMLHEZw~2JG0OjZMgBOqMf4T3DIhcpS6E~3ySU~fnwU~0dwt2iHERmtuczUlP-ai7ByxYx9OyIxysSGA4uQbbQ9WFC~kADJsGZIepuAuS-fq3L7e2bTwWH00qjKPJ-GRtchkJSXgM0BJH7tfVnGGw7vnxaF~DidxQuFyPMlTKWmspylCzaXXtrkEeqyfm-B~~37X7rOEoxig~akcYAvzm1wBNKCMG4QMSkiP63SgFr-bZtHgruohinbXAZmhA__"
            alt=""
          />
          <img
            className="w-[260px] h-[290px] rounded-[6px] self-center"
            src="https://s3-alpha-sig.figma.com/img/b663/40a0/38f5ebf6fb53adf896f4a06b5e5351f4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UuHkCRxC~Ye3WAmax3sa6Cf1TtV5014LDURrja1936GZE5QGmqhVbGCL0DZLuQ4BL4baP99F6lgcP~Zjxp4g-OixMz0DqzLHu3cZWLBckeaKugWSEsLAjZ7hJg1N0CZxUF45PGqtD9yf3rJ7v6d98eZ-H1rACYiYL5Wt4xCKk7GZB-5~hoBT1-rKICPE-68lLugrkabc8xxpcBFIODOovX3TjIwdkUJQSVYbrDzOExTf4oaeFSNZf-e0TWBuHDA-d3WRfbrUr59b8LX0msmvcYIYU4IBqFDQQtjVQc6hVINKtkkdlNyXjKUsHdqEN7QokWY4Ax3ktxdw7w8ylAKZ8Q__"
          />
          <img
            className="w-[167px] h-[172px] absolute rounded-[6px] top-0 right-0"
            src="https://s3-alpha-sig.figma.com/img/b6b2/5856/dcf1bceed12d5b489bf805fa50890f18?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZP4ZmQuIDNnuUhoEzhgwMAfU8EwHJ6ILdrDYT7RsXKywxf3~y3I1~-aY2pz2a26bq8DAcfgpqpp79YBVTggvZrzXLtRftaLS4pmfdxpOlWkUAUPMvhMII7xSOAFHscLxw82FRLIuvuLfG4M~qVKHMuVen5iHj~F13-pYT9~ws891kr0jRgUqgM7ce8PJSQ7lEyugETW9lI2ipRfCG2-LocwKawCpO7aZBJJemX~a6uwq9Xe3sqL9nIeV0Amhictq6tgaGRt6YUrbGpYwKQ2RJUxnJueb3F0AF~shOysse~16S3z8uBuk451JBDwOUPibILkft2sPGlX8d37oxnSMOg__"
            alt=""
          />
        </div>

        <section className="flex flex-col gap-4 w-[90%] mt-5">
          <Offer
            icon="akda"
            title="Perfect Fit"
            desc="Tailored to your measurements for unparalleled comfort and confidence."
          />

          <Offer
            icon="akda"
            title="Perfect Fit"
            desc="Tailored to your measurements for unparalleled comfort and confidence."
          />

          <Offer
            icon="akda"
            title="Perfect Fit"
            desc="Tailored to your measurements for unparalleled comfort and confidence."
          />

          <Offer
            icon="akda"
            title="Perfect Fit"
            desc="Tailored to your measurements for unparalleled comfort and confidence."
          />
        </section>
      </div>
    </section>
  );
}
