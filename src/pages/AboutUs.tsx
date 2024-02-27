import HomeLayout from "../layout/HomeLayout";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

export default function AboutUs() {
  const devs = [
    {
      name: "Obimba Smart",
      img: "https://avatars.githubusercontent.com/u/67028610?v=4",
      role: "Backend",
      linkedin: "https://www.linkedin.com/in/obimba-smart/",
      email: "obimbasmartchukwunenye@gmail.com",
      github: "https://github.com/obimbasmart",
    },

    {
      name: "Oluwatobi Akinola",
      img: "https://avatars.githubusercontent.com/u/74466699?v=4",
      role: "Frontend",
      linkedin: "https://linkedin.com/in/itsoluwatobby",
      email: "itsoluwatobby@gmail.com",
      github: "https://github.com/itsoluwatobby",
    },
  ];
  return (
    <HomeLayout>
      <div className="md:mx-auto md:w-[65%] flex flex-col gap-y-3 items-center">
        <div className="w-full flex justify-center items-center bg-[url('/aboutus.png')] aspect-[2.87/1] bg-cover">
          <h3 className="text-2xl font-playfair-display font-medium text-fdt-brown-dark">
            ABOUT US
          </h3>
        </div>

        <p className="font-montserrat mx-4 my-8 selection:text-base font-normal text-fdt-grey-darker leading-7">
          <span className="block text-fdt-brown-normal mb-5">WHO WE ARE</span>
          The name "King Klass" is a reflection of our commitment to royalty in
          craftsmanship and a celebration of the enduring class in tailored
          fashion. 'King' symbolizes superiority, leadership, and the utmost
          quality, while 'Klass' speaks to the enduring style and classic
          sophistication that define our creations
          <br /> <br className="m-0 p-0" />
          At King Klass, we believe fashion is more than just clothing—it's a
          canvas for self-expression. Through personalized fashion, we empower
          individuals to craft their unique identity, stitch by stitch. Our
          vision is simple: to create garments that transcend trends, embodying
          timeless elegance and telling a story of craftsmanship, passion, and
          excellence, ensuring a wardrobe that stands the test of time. At King
          Klass Designs, we blend traditional craftsmanship with contemporary
          flair, redefining the fashion experience. With unparalleled tailoring
          services, each garment fits flawlessly, reflecting the wearer's
          personality and aspirations.
        </p>

        <section className="flex flex-col justify-center items-center gap-4">
          {devs.map((dev) => (
            <Dev key={dev.name} {...dev} />
          ))}
        </section>
      </div>
    </HomeLayout>
  );
}

interface DevProps {
  name: string;
  github: string;
  linkedin: string;
  img: string;
  email: string;
  role: string;
}

function Dev({ ...attrs}: DevProps) {
  return (
    <div className="flex w-[92%] aspect-[5/1] px-4 py-3 gap-2 bg-white rounded-md font-sans shadow-md">
      <img
        className="w-[30%] aspect-square object-fill rounded-md"
        src={attrs.img}
        alt=""
      />

      <div className="flex flex-col justify-between font-montserrat">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-medium">{attrs.name}</h3>
          <span className="block w-fit rounded-sm text-fdt-grey-dark-active bg-fdt-brown-light font-normal px-2 py-1 text-xs italic">
            {attrs.role}
          </span>
        </div>

        <div className="flex justify-evenly text-xl mb-1">
          <CiMail
            onClick={() => (window.location.href = `mailto:${attrs.email}`)}
          />
          <a href={attrs.github}>
            <FiGithub />
          </a>
          <a href={attrs.linkedin}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
