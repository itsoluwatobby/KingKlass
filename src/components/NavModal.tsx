import { SlArrowRight } from "react-icons/sl";
import { FooterLinks } from "../utility/constants"
import { getInitials } from "../utility/getInitials";
import { Buttons } from "./appComponents/Buttons";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { useSignout } from "../hooks/useSignout";

export const NavModal = () => {
  const { QuickLinks } = FooterLinks;
  const [signout] = useSignout();
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;
  const username = "Okereke Uzochukwu";

//  
  return (
    <section className={`p-3 ${toggleNav.isToggled.openNavModal ? 'flex' : 'hidden'} fixed bg-gray-50 midscreen:w-full w-[70%] min-h-[90vh] mt-14 flex-col z-50 duration-500`}>
      <header className="flex items-center justify-between">
        <div className="flex items-start gap-x-2">
          <p className={`relative after:absolute after:bg-red-700 after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-2xl bg-gray-300 rounded-full w-14 h-14 grid place-content-center`}>{getInitials(username)}</p>
          <div className="flex flex-col font-semibold gap-y-0.5">
            <h3 className="text-[15px] whitespace-pre-wrap w-24 leading-5">Hi, {username}</h3>
            <span className="font-normal text-xs">Welcome back</span>
          </div>
        </div>

        <Buttons
          onClick={() => setToggleNav(prev => ({ ...prev, isToggled: {
            openNavModal: false, userNavModal: true } 
          }))}
          px='' py=''
          classNames='rounded-full grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors'
        >
          <SlArrowRight className='text-xl' />
        </Buttons>
      </header>

      <RouteLinks 
      values={QuickLinks.values}
      />

      <Buttons
        onClick={signout}
        px='' py=''
        classNames='rounded-md mt-10 font-semibold border-[1px] border-orange-700 grid place-content-center w-full md:w-1/2 py-3 hover:bg-gray-200 active:bg-gray-100 transition-colors'
      >
        Sign out
      </Buttons>
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
    <div className="flex flex-col gap-y-2 font-semibold text-[12px] mt-5 w-full">
      {
        values?.map(link => (
          <div key={link.name} className="cursor-pointer hover:scale-[0.99] transition-all w-full p-2 pr-0 border-0 border-b border-b-black flex items-center justify-between">
            <a href={link.link} className="">{link.name}</a>

            <Buttons
              onClick={() => { }}
              px='' py=''
              classNames='rounded-full grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors'
            >
              <SlArrowRight className='text-lg' />
            </Buttons>
          </div>
        ))
      }
    </div>
  )
}