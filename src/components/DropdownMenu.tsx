import { getInitials } from "../utility/getInitials"
import { DesktopDropdown } from "../utility/constants";
import { reduceTextLength } from "../utility/truncateTextLength";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { Link } from "react-router-dom";


type DropdownModalProps = {
  isSignedIn: boolean;
  username: string;
  openDropdown: boolean;
}
export const DropdownModal = ({ isSignedIn, openDropdown, username }: DropdownModalProps) => {
  // const { setToggleNav, setAppModals } = useDesignerContext() as DesignerContextProps;

  // const actionButton = (type: 'LOGIN' | 'REGISTER') => {
  //   setToggleNav({ modalType: "pass" })
  //   if (type === 'LOGIN') setAppModals(prev => ({...prev, signin: 'OPEN'}))
  //   else if (type === 'REGISTER') setAppModals(prev => ({...prev, signup: 'OPEN'}))
  //   else return
  // }


  return (
    <div className={`${openDropdown ? '' : ''} absolute top-12 -right-5 px-3 py-1 flex bg-white flex-col w-60 h-fit rounded-bl-lg shadow-lg`}>
      <header className={`border-0 border-b-[1px] py-3 ${isSignedIn ? 'flex' : 'hidden'} items-center justify-between`}>
        <div className="flex items-center gap-x-2">
          <p className={`relative after:absolute after:bg-[#FF3E30] after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-2xl bg-[#D69203] text-white rounded-full w-12 h-12 grid place-content-center`}>{getInitials(username)}</p>
          <div className="flex flex-col font-semibold gap-y-0.5">
            <h3 className="text-[15px] whitespace-nowrap w-24 leading-5">Hi, {reduceTextLength(username)}</h3>
            <span className="font-normal text-xs">Welcome back</span>
          </div>
        </div>

      </header>

      <RouteLinks
        values={DesktopDropdown}
      />
    </div>
  )
}

type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
}
const RouteLinks = ({ values }: RouteLinksProps) => {
  const { setToggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <div className="py-3 flex flex-col gap-y-6 font-semibold text-sm mt-1 w-full">
      {
        values?.map(link => (
          <div key={link.name}
            className={`hover:pl-[0.5px] transition-all ${link.name === 'Contact Us' ? 'border-0 border-b-[1px] pb-4' : ''}`}
          >
            {
              link.name === 'Notifications' ?
                <p
                  onClick={() => setToggleNav({ modalType: "notifications" })}
                  className="flex hover:bg-gray-100 transition-colors items-center justify-between cursor-pointer">
                  <span>
                    {link.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                </p>
                :
                link.name === 'My Measurement' ?
                  <p
                    onClick={() => setToggleNav({ modalType: "measurements" })}
                    className="flex hover:bg-gray-100 transition-colors items-center justify-between cursor-pointer">
                    {link.name}
                  </p>
                  :
                  <Link to={'/' + link.link} className="">{link.name}</Link>
            }
          </div>
        ))
      }
    </div>
  )
}