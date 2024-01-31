import { BsCart3 } from 'react-icons/bs';
import { KingKlass } from '../svgs/Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import { useCallback } from 'react';


export default function Navbar() {

  const iconClass = useCallback(() => {
    return `cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`
  }, [])

  return (
    <nav className="z-50 bg-white shadow-sm rounded-b-sm midscreen:w-full w-[70%]  px-6 pt-4 pb-2 fixed top-0 flex items-end justify-between">
      <RxHamburgerMenu className={iconClass()} />
      <KingKlass size={{width: '65', height: '35'}} />
      <BsCart3 className={iconClass()} />
    </nav>
  )
}