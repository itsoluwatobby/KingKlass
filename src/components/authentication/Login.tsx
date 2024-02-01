import { initAppState, initSignInInfo } from "../../utility/initialVariables"
import { useEffect, useState } from "react";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


export const Login = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [userCredentials, setUserCredentials] = useState<UserInfo>(initSignInInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state.from ?? '/'

  const { email, password } = userCredentials
  const { isLoading, isError } = appState;
  const canSubmit = [email, password].every(Boolean)

  const handleSubmit = () => {
    if (!canSubmit || isLoading) return
    setAppState(prev => ({ ...prev, loading: true }))
    try {
      const userDetails = sanitizeEntries({ email, password });
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
    <section className='w-full h-full flex flex-col mt-16'>
      login
    </section>
  )
}