import { getInitials } from "../utility/getInitials"
import { AdminNavLinks, DesktopDropdown } from "../utility/constants";
import { reduceTextLength } from "../utility/truncateTextLength";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { useSignout } from "../hooks/useSignout";
import { Buttons } from "./appComponents/Buttons";
import { useNavigate } from "react-router-dom";


type DropdownModalProps = {
  username: string;
  openDropdown: boolean;
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>
}
export const DropdownModal = ({ openDropdown, setOpenDropdown, username }: DropdownModalProps) => {
  const [signout] = useSignout();
  const { setToggleNav, setAppModals, user } = useDesignerContext() as DesignerContextProps;

  const actionButton = (type: 'LOGIN' | 'REGISTER') => {
    setToggleNav({ modalType: "pass" })
    setOpenDropdown(false)
    if (type === 'LOGIN') setAppModals(prev => ({...prev, signin: 'OPEN'}))
    else if (type === 'REGISTER') setAppModals(prev => ({...prev, signup: 'OPEN'}))
    else return
  }

  const close = () => {
    setOpenDropdown(false)
    signout()
  }
  return (
    <div className={`${openDropdown ? 'flex' : 'hidden'} animate-rollin absolute top-12 -right-5 px-3 py-1 bg-white flex-col w-60 rounded-bl-lg shadow-lg transition-all duration-300`}>
      <header className={`cursor-default border-0 border-b-[1px] border-gray-300 py-3 ${user.isSignedIn ? 'flex' : 'hidden'} items-center justify-between`}>
        <div className="flex items-center gap-x-2">
          <p className={`relative after:absolute after:bg-[#FF3E30] after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-2xl bg-[#D69203] text-white rounded-full w-12 h-12 grid place-content-center`}>{getInitials(username)}</p>
          <div className="flex flex-col font-semibold gap-y-0.5">
            <h3 className="text-[15px] whitespace-nowrap w-24 leading-5">Hi, {reduceTextLength(username)}</h3>
            <span className="font-normal text-xs">Welcome back</span>
          </div>
        </div>
      </header>

      {
        user.isAdmin ? 
          <RouteLinks
            signout={close}
            setOpenDropdown={setOpenDropdown}
            isSignedIn={user.isSignedIn}
            values={AdminNavLinks}
          />
        :
          <RouteLinks
            signout={close}
            setOpenDropdown={setOpenDropdown}
            isSignedIn={user.isSignedIn}
            values={DesktopDropdown}
          />
      }

    {
      user.isSignedIn ?
        null
        :
        <div className="-mt-14 self-center w-fit flex flex-col items-center gap-y-4">
            <Buttons
            onClick={() => actionButton('REGISTER')}
            px='' py=''
            classNames='rounded-[3px] font-semibold bg-[#8B4513] text-white grid place-content-center w-fit py-2 px-4 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors'
            >
            Register
          </Buttons>
            <Buttons
            onClick={() => actionButton('LOGIN')}
            px='' py=''
            classNames='rounded-[3px] font-semibold border-[1px] border-[#8B4513] text-[#8B4513] bg-white grid place-content-center w-fit py-2 px-6 hover:bg-opacity-80 active:bg-opacity-90 transition-colors'
            >
            Login
          </Buttons>
        </div>
      }
    </div>
  )
}

type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
  signout: () => void;
  isSignedIn: boolean;
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>
}
const RouteLinks = ({ values, setOpenDropdown, signout, isSignedIn }: RouteLinksProps) => {
  const { setToggleNav } = useDesignerContext() as DesignerContextProps;
  const navigate = useNavigate();

  const toggle = (type: ToggleNav) => {
    setOpenDropdown(false)
    setToggleNav({ modalType: type })
  }

  return (
    <div className="py-3 flex flex-col gap-y-6 font-semibold text-sm mt-1 w-full">
      {
        values?.map(link => (
          <div key={link.name}
            className={`hover:pl-[0.5px] transition-all ${link.name === 'Contact Us' ? 'border-0 border-b-[1px] border-gray-300 pb-4' : ''}`}
          >
            {
              link.name === 'Notifications' ?
                <p
                  onClick={() => toggle("notifications")}
                  className={`${isSignedIn ? 'flex' : 'hidden'} hover:bg-gray-100 transition-colors items-center justify-between cursor-pointer`}>
                  <span>
                    {link.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                </p>
                :
                link.name === 'Logout' ?
                  <p
                    onClick={signout}
                    className={`${isSignedIn ? 'flex' : 'hidden'} hover:bg-gray-100 transition-colors items-center justify-between cursor-pointer`}>
                    <span>
                      {link.name}
                    </span>
                  </p>
                  :
                  link.name === 'My Measurement' ?
                    <p
                      onClick={() => toggle("measurements" )}
                      className={`${isSignedIn ? 'flex' : 'hidden'} hover:bg-gray-100 transition-colors items-center justify-between cursor-pointer`}>
                      {link.name}
                    </p>
                    :
                    (
                      link.name.startsWith("Contact") ?
                        <a href={link.link} key={link.name} 
                        onClick={() =>{
                          setToggleNav({ modalType: "pass" })
                          setOpenDropdown(false)
                        }}
                        className="hover:scale-[0.99] transition-all w-full p-3 pr-0 border-0 border-b border-b-gray-300">{link.name}</a>
                      :
                        <div 
                        onClick={() => {
                          setOpenDropdown(false)
                          navigate(link.link)
                        }}
                        className="hover:bg-gray-100 w-full cursor-pointer">{link.name}</div>
                    )
            }
          </div>
        ))
      }
    </div>
  )
}