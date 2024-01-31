import { setCustomBackgroundImage } from "../../utility/setBackGroundImage"

export const ContactUs = () => {


  return (
    <section 
    id="contactUs"
    style={setCustomBackgroundImage(
      '/background.png'
    )}
    className="bg-gray-50 text-white px-3 flex flex-col gap-y-1 w-full pt-4 pb-2 min-h-[50vh]">
      <h1 className="text-3xl font-semibold text-center">Contact Us</h1>

    </section>
  )
}