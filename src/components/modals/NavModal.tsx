import { SlArrowRight } from "react-icons/sl";
import { NavLinks } from "../../utility/constants"
import { getInitials } from "../../utility/getInitials";
import { Buttons } from "../appComponents/Buttons";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { useSignout } from "../../hooks/useSignout";


export const NavModal = () => {
  const [signout] = useSignout();
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;
  const username = "Okereke";


  return (
    <section className={`${toggleNav.modalType === "openNavModal" ? 'fixed' : 'hidden'} bg-white midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300`}>
      <div className={`px-3 py-1 relative flex flex-col w-full min-h-[88vh]`}>
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <p className={`relative after:absolute after:bg-red-700 after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-3xl bg-gray-300 rounded-full w-14 h-14 grid place-content-center`}>{getInitials(username)}</p>
            <div className="flex flex-col font-semibold gap-y-0.5">
              <h3 className="text-[15px] whitespace-pre-wrap w-24 leading-5">Hi, {username}</h3>
              <span className="font-normal text-xs">Welcome back</span>
            </div>
          </div>
          <Buttons
            onClick={() => setToggleNav({ modalType: "userNavModal" })}
            px='' py=''
            classNames='rounded-full grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors'
          >
            <SlArrowRight className='text-xl' />
          </Buttons>
        </header>
        <RouteLinks
          values={NavLinks}
        />
        <Buttons
          onClick={signout}
          px='' py=''
          classNames='absolute left-3 bottom-16 rounded-md mt-10 font-semibold bg-gray-100 text-orange-700 grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-gray-200 active:bg-gray-100 transition-colors'
        >
          Sign out
        </Buttons>
      </div>
    </section>
  )
}


type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
}
const RouteLinks = ({ values }: RouteLinksProps) => {

  return (
    <div className="flex flex-col gap-y-3 font-semibold text-[12px] mt-5 w-full">
      {
        values?.map(link => (
          <a href={link.link} key={link.name} className="hover:scale-[0.99] transition-all w-full p-3 pr-0 border-0 border-b border-b-gray-300">{link.name}</a>
        ))
      }
    </div>
  )
}
