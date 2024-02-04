import { BsCart3 } from 'react-icons/bs';
import { KingKlass } from '../svgs/Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import { useCallback } from 'react';
import { useDesignerContext } from '../hooks/useDesignerContext';
import { LiaTimesCircle } from 'react-icons/lia';
import { initAppModals } from '../utility/initialVariables';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const { toggleNav, setToggleNav, setAppModals } = useDesignerContext() as DesignerContextProps;

  const iconClass = useCallback(() => {
    return `cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`
  }, [])

  const toggleModal = (type: 'open'|'close') => {
    if (type === 'open') {
      setToggleNav({ modalType: "openNavModal" })
    }
    else {
      setToggleNav({ modalType: "pass" })
    }
    setAppModals(initAppModals);
  }

  return (
    <header className="z-30 bg-white shadow-sm rounded-b-sm midscreen:w-full w-[60%] px-6 pt-4 pb-2 fixed top-0 flex items-end justify-between">
      {
        toggleNav.modalType === 'openNavModal' ? 
        <LiaTimesCircle 
          onClick={() => toggleModal('close')}
          className={iconClass()} 
        />
        :
        <RxHamburgerMenu 
          onClick={() => toggleModal('open')}
          className={iconClass()} 
        />
      }
      <Link to={'/'}>
        <KingKlass size={{width: '65', height: '35'}} />
      </Link>
      <BsCart3 className={`${toggleNav.modalType !== "notifications" ? 'visible' : 'invisible'} cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`} />
    </header>
  )
}