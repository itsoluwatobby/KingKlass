import { BsCart3 } from 'react-icons/bs';
import { KingKlass } from '../svgs/Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import { useCallback } from 'react';
import { useDesignerContext } from '../hooks/useDesignerContext';
import { MdOutlineCancel } from 'react-icons/md';


export default function Navbar() {
  const { toggleNav, setToggleNav } = useDesignerContext() as DesignerContextProps;

  const iconClass = useCallback(() => {
    return `cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`
  }, [])

  return (
    <header className="z-30 bg-white shadow-sm rounded-b-sm midscreen:w-full w-[70%] px-6 pt-4 pb-2 fixed top-0 flex items-end justify-between">
      {
        toggleNav.isToggled.openNavModal ? 
        <MdOutlineCancel 
          onClick={() => setToggleNav(prev => ({ ...prev, isToggled: {
            openNavModal: false, userNavModal: false } 
          }))}
          className={iconClass()} 
        />
        :
        <RxHamburgerMenu 
          onClick={() => setToggleNav(prev => ({ ...prev, isToggled: {
            openNavModal: true, userNavModal: false } 
          }))}
          className={iconClass()} 
        />
      }
      <KingKlass size={{width: '65', height: '35'}} />
      <BsCart3 className={iconClass()} />
    </header>
  )
}