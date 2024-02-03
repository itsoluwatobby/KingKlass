import { initAppState, initSignInInfo } from "../../utility/initialVariables"
import { useEffect, useState } from "react";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { Buttons } from "../appComponents/Buttons";
import { LiaTimesSolid } from "react-icons/lia";
import UserInputDetails from "../userModal/UserInputDetails";
import { FcGoogle } from "react-icons/fc";


export const Login = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const { appModals, setAppModals } = useDesignerContext() as DesignerContextProps;
  const [userCredentials, setUserCredentials] = useState<UserInfo>(initSignInInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state ?? '/'

  const { email, password, remember_me } = userCredentials
  const { isLoading, isError } = appState;
  const canSubmit = [email, password].every(Boolean)

  const handleSubmit = () => {
    if (!canSubmit || isLoading) return
    setAppState(prev => ({ ...prev, loading: true }))
    try {
      const userDetails = sanitizeEntries({ email, password, remember_me });
      console.log(userDetails)

      setAppState(prev => ({ ...prev, success: true }))
      setUserCredentials(initSignInInfo)
      toast.success('Welcome!!!')
      navigate(pathname, { replace: true })
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
void(handleSubmit)
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
    <section className={`${appModals.signin === 'OPEN' ? 'fixed' : 'hidden'} bg-gray-700 bg-opacity-40 midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300 p-4`}>
      <div className={`m-auto relative bg-white flex flex-col gap-y-4 w-[90%] sm:w-[70%] rounded-md p-5 min-h-[85vh] max-h-[85vh]`}>
        <div className="w-full flex flex-col py-8 items-center gap-y-5">
          <h3 className="font-medium text-xl">Login</h3>

          <div className="self-start text-xs text-gray-800">
            <span>Don't have an account yet? </span>
            <button 
            onClick={() => setAppModals({ signup: 'OPEN', signin: 'CLOSE' })}
            className="border-0 focus:outline-0 hover:opacity-90 underline underline-offset-2">Register</button>
          </div>

          <UserInputDetails
            placeholder="iamuser@jj.com"
            title="Email" value={email} name='email' disabled={false}
            setUserDetails={setUserCredentials} type='email'
          />
          <UserInputDetails
            title="Password" value={password} name='password' disabled={false}
            setUserDetails={setUserCredentials} type='password'
          />

          <div className="flex flex-col w-full gap-y-7 mt-2">
            <div className="flex items-center w-full justify-between text-xs">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" 
                  name="remember_me"
                  checked={remember_me}
                  onChange={e => setUserCredentials(prev => ({...prev, remember_me: e.target.checked}))}
                />
                <span>Stay signed in</span>
              </div>
              <span>Forgot your password?</span>
            </div>

            <Buttons
              onClick={handleSubmit}
              px='' py='' isLoading={isLoading}
              classNames='self-center rounded-sm font-semibold bg-orange-800 text-xs text-white w-[95%] md:w-1/2 py-3 hover:bg-orange-700 active:bg-orange-800 transition-colors'
            >
              Login
            </Buttons>

            <span className="text-gray-700 self-center">or</span>

            <Buttons
              onClick={handleSubmit}
              px='' py='' isLoading={isLoading}
              classNames='self-center rounded-sm font-semibold bg-blue-700 text-white w-[95%] md:w-1/2 py-2 hover:bg-blue-700 grid place-content-center active:bg-blue-800 transition-colors'
            >
              <div className="flex items-center gap-x-4 text-xs">
                <FcGoogle className="text-xl" /> 
                <span>Continue with Google</span>
              </div>
            </Buttons>
          </div>
        </div>

        <LiaTimesSolid
          onClick={() => setAppModals(prev => ({ ...prev, signin: 'CLOSE' }))}
          className='absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors'
        />

      </div>
        
    </section>
  )
}
