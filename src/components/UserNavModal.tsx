import { SlArrowLeft } from "react-icons/sl";
import { UserNavigation } from "../utility/constants"
import { Buttons } from "./appComponents/Buttons";
import { useDesignerContext } from "../hooks/useDesignerContext";
import { useEffect, useState } from "react";
import { initAppModals, initAppState, initUserDetail } from "../utility/initialVariables";
import { RouteLinks } from "./userModal/RouteLinks";
import { CiEdit } from "react-icons/ci";
import UserDetailForm from "./userModal/UserDetailForm";
import { sanitizeEntries } from "../utility/sanitizeEntries";
import { toast } from "react-toastify";


type ActiveModalType = 'UserNavModal' | 'Profile'
export const UserNavModal = () => {
  const { toggleNav, setToggleNav, setAppModals } = useDesignerContext() as DesignerContextProps;
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [userDetails, setUserDetails] = useState<UserDetails>(initUserDetail);
  const [toggleModal, setToggleModal] = useState<ActiveModalType>('UserNavModal');

  const { isLoading, isError } = appState;

  const handleSubmit = () => {
    if (isLoading) return
    setAppState(prev => ({ ...prev, loading: true }))
    try {
      const result = sanitizeEntries(userDetails);
      console.log(result)

      setAppState(prev => ({ ...prev, success: true }))
      setUserDetails(initUserDetail)
      toast.success('Profile Updated!!')
      setToggleModal('UserNavModal')
    }
    catch (error: unknown) {
      console.log(error)
      setAppState(prev => ({ ...prev, isError: true }))
      toast.error('error message')
    }
    finally {
      setAppState(prev => ({ ...prev, loading: false }))
    }
  }

  useEffect(() => {
    if (!isError) return
    const timeoutId = setTimeout(() => {
      setAppState(prev => ({ ...prev, isError: false }))
    }, 5000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isError])

  return (
    <section className={`${toggleNav.isToggled.userNavModal ? 'fixed' : 'hidden'} bg-white midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300`}>
      <div className={`relative flex flex-col gap-y-4 w-full min-h-[90vh]`}>
        <header className="relative flex items-center justify-center w-full bg-opacity-95 bg-[#EEE3DC] pt-3 p-2">
          {
            toggleModal === 'Profile' ?
              <Buttons
                onClick={() => setToggleModal('UserNavModal')}
                px='' py=''
                classNames='rounded-full absolute left-4 grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors'
              >
                <SlArrowLeft className='text-lg' />
              </Buttons>
              :
              <Buttons
                onClick={() => {
                  setToggleNav(prev => ({
                    ...prev, isToggled: {
                      openNavModal: true, userNavModal: false
                    }
                  }))
                  setAppModals(initAppModals);
                }}
                px='' py=''
                classNames='rounded-full absolute left-4 grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors'
              >
                <SlArrowLeft className='text-lg' />
              </Buttons>
          }

          <h3 className="text-base text-center font-semibold w-fit leading-5">{toggleModal === 'Profile' ? 'Profile' : 'Menu'}</h3>
        </header>

        <div 
        onClick={() => setToggleModal('Profile')}
        className={`${toggleModal === 'Profile' ? 'hidden' : 'block'} absolute right-2 top-11 hover:bg-slate-200 active:bg-inherit transition-colors p-1 cursor-default rounded-sm font-semibold flex items-center w-fit`}>
          <span className="underline text-xs">Edit</span>
          <CiEdit className="text-lg" />
        </div>

        <div className="flex flex-col gap-y-3 p-3 text-[13px] font-medium">
          {
            toggleModal === 'Profile' ?
              // for Edit profile view
              <UserDetailForm
                userDetails={userDetails} disabled={false}
                setUserDetails={setUserDetails}
              />
              :
              // for profile view
              <UserDetailForm
                userDetails={userDetails} disabled={true}
                setUserDetails={setUserDetails}
              />
          }
        </div>

      { 
          toggleModal === 'Profile' ? 
          <Buttons
            onClick={handleSubmit}
            px='' py='' isLoading={isLoading}
            classNames='absolute left-3 bottom-28 rounded-md mt-10 font-semibold bg-gray-100 text-orange-700 grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-gray-200 active:bg-gray-100 transition-colors'
          >
            Save
          </Buttons>
        :
          <RouteLinks
            values={UserNavigation}
          />
        }
      </div>
    </section>
  )
}
