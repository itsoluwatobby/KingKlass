import Paragraph from "../components/appComponents/Paragraph";
import HomeLayout from "../layout/HomeLayout";
import { setCustomBackgroundImage } from "../utility/setBackGroundImage";


export default function AboutUs() {

  return (
    <HomeLayout>
      <div className="md:mx-auto md:w-[65%] flex flex-col gap-y-3 items-center px-4">
        <h3 className="text-3xl">About Us</h3>

        <div className="flex flex-col gap-y-3">
          <Paragraph 
            content={
              <p>
                The name &quot;<b>King Klass</b>&quot; is a reflection of our commitment to royalty in craftsmanship and a celebration of the enduring class in tailored fashion. 'King' symbolizes superiority, leadership, and the utmost quality, while 'Klass' speaks to the enduring style and classic sophistication that define our creations
              </p>
            }
          />

          <div className="flex-none flex w-full items-center h-40 md:h-52 md:px-4 md:gap-x-3">
            <div className="flex-auto flex flex-col items-center gap-y-2">
              <h4 className="font-medium text-[#8B4513] text-sm">ABOUT US</h4>
              <span className="font-semibold">Your Personal Tailor</span>
              <p className="text-[#6E6E6E] text-sm text-center">
                Merging traditional craftsmanship with contemporary flair, we craft bespoke garments that celebrate individuality and timeless style. 
              </p>
            </div>
            <div 
              style={setCustomBackgroundImage('/aboutus.png')}
              className="flex-none h-full w-[40%]"
            />
          </div>

          <Paragraph 
            content={
              <p className="flex flex-col">
                <b>Crafting Identity:</b>
                We believe that fashion is a powerful form of self-expression, and at King Klass, we empower individuals to craft their unique identity through exceptional and personalized fashion. Every stitch we make is a brushstroke on the canvas of individuality, creating garments that resonate with the essence of the wearer.
              </p>
            }
          />

          <Paragraph 
            content={
              <p className="flex flex-col">
                <b>Timeless Elegance:</b>
                Our vision is rooted in the pursuit of a world where every garment transcends fleeting trends, embodying timeless elegance. King Klass envisions a wardrobe that stands the test of time, where each piece tells a story of craftsmanship, passion, and the pursuit of excellence.
              </p>
            }
          />

          <Paragraph 
            content={
              <p className="flex flex-col">
                <b>Commitment to Craftsmanship:</b>
                Our brand is not just about fashion; it's about the artistry and skill invested in every garment. King Klass Designs redefines the fashion experience by seamlessly blending traditional craftsmanship with contemporary flair. We are dedicated to providing unparalleled tailoring services, ensuring that each garment not only fits flawlessly but also reflects the unique personality and aspirations of its wearer.
              </p>
            }
          />
        </div>
      </div>
    </HomeLayout>
  )
}

