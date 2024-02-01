import { SlArrowLeft } from "react-icons/sl";
import { UserNavigation } from "../utility/constants"
import { Buttons } from "./appComponents/Buttons";
import { useDesignerContext } from "../hooks/useDesignerContext";
// import { useSignout } from "../hooks/useSignout";
import { Link } from "react-router-dom";

export const UserNavModal = () => {
  // const [signout] = useSignout();
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <section className={`${toggleNav.isToggled.userNavModal ? 'flex' : 'hidden'} fixed bg-gray-50 midscreen:w-full w-[70%] min-h-[90vh] mt-14 flex-col z-50 duration-500`}>
      <header className="relative flex items-center justify-center w-full bg-opacity-95 bg-pink-100 pt-3 p-2">
        <Buttons
          onClick={() => setToggleNav(prev => ({
            ...prev, isToggled: {
              openNavModal: true, userNavModal: false
            }
          }))}
          px='' py=''
          classNames='rounded-full absolute left-4 grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors'
        >
          <SlArrowLeft className='text-xl' />
        </Buttons>

        <h3 className="text-base text-center font-semibold w-fit leading-5">Menu</h3>
      </header>

      <RouteLinks
        values={UserNavigation}
      />
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
    <div className="flex flex-col gap-y-4 p-3 font-semibold text-sm mt-5 w-full">
      {
        values?.map(link => (
          <Link to={link.link} key={link.name} className="">{link.name}</Link>
        ))
      }
    </div>
  )
}