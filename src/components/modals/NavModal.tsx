import { SlArrowRight } from "react-icons/sl";
import { AdminNavLinks, NavLinks } from "../../utility/constants"
import { getInitials } from "../../utility/getInitials";
import { Buttons } from "../appComponents/Buttons";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { useSignout } from "../../hooks/useSignout";
import ModalLayout from "../../layout/ModalLayout";


export const NavModal = () => {
  const [signout] = useSignout();
  const { toggleNav, user, setToggleNav, setAppModals } = useDesignerContext() as DesignerContextProps;
  const username = "Okereke";

  const actionButton = (type: 'LOGIN' | 'REGISTER') => {
    setToggleNav({ modalType: "pass" })
    if (type === 'LOGIN') setAppModals(prev => ({...prev, signin: 'OPEN'}))
    else if (type === 'REGISTER') setAppModals(prev => ({...prev, signup: 'OPEN'}))
    else return
  }
  return (
    <ModalLayout
    modalType={toggleNav.modalType}
    expected="openNavModal"
    enlarge={true}
    classNames="md:hidden"
    extraClasses="px-3 py-1 top-4"
    >
      <header className={`${user.isSignedIn ? 'flex' : 'hidden'} items-center justify-between`}>
        <div className="flex items-center gap-x-2">
          <p className={`relative after:absolute after:bg-[#FF3E30] after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-3xl bg-[#D69203] text-white rounded-full w-14 h-14 grid place-content-center`}>{getInitials(username)}</p>
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

      {
        user.isAdmin ? 
          <RouteLinks
            setToggleNav={setToggleNav}
            values={AdminNavLinks}
          />
        :
          <RouteLinks
            setToggleNav={setToggleNav}
            values={NavLinks}
          />
      }

      {
        user.isSignedIn ?
        <Buttons
          onClick={signout}
          px='' py=''
          classNames='self-center mt-32 rounded-[3px] font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors'
          >
          Sign out
        </Buttons>
        :
        <div className="absolute bottom-10 w-[95%] flex flex-col items-center gap-y-4">
            <Buttons
            onClick={() => actionButton('REGISTER')}
            px='' py=''
            classNames='rounded-[3px] font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors'
            >
            Register
          </Buttons>
            <Buttons
            onClick={() => actionButton('LOGIN')}
            px='' py=''
            classNames='rounded-[3px] font-semibold border-[1px] border-[#8B4513] text-[#8B4513] bg-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-opacity-80 active:bg-opacity-90 transition-colors'
            >
            Login
          </Buttons>
        </div>
      }
    </ModalLayout>
  )
}


type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
  setToggleNav: React.Dispatch<React.SetStateAction<ToggleOption>>
}
const RouteLinks = ({ values, setToggleNav }: RouteLinksProps) => {

  return (
    <div className="flex flex-col gap-y-3 font-semibold text-[12px] mt-5 w-full">
      {
        values?.map(link => (
          <a href={link.link} key={link.name} 
          onClick={() => setToggleNav({ modalType: "pass" })}
          className="hover:scale-[0.99] transition-all w-full p-3 pr-0 border-0 border-b border-b-gray-300">{link.name}</a>
        ))
      }
    </div>
  )
}
