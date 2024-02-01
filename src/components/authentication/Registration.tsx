
import { initAppState, initSignUpInfo } from "../../utility/initialVariables"
import { useEffect, useState } from "react";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const Registration = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [userCredentials, setUserCredentials] = useState<UserInfo>(initSignUpInfo);
  const navigate = useNavigate();

  const { email, name, password, confirm_password } = userCredentials
  const { isLoading, isError } = appState;
  const canSubmit = [email, password, name, confirm_password].every(Boolean)

  const handleSubmit = () => {
    if (!canSubmit || isLoading) return
    setAppState(prev => ({ ...prev, loading: true }))
    try {
      const userDetails = sanitizeEntries(
        { email, name, password, confirm_password });
      console.log(userDetails)

      setAppState(prev => ({ ...prev, success: true }))
      setUserCredentials(initSignUpInfo)
      toast.success('Welcome!!!')
      navigate('/signin')
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
    <section className='w-full h-full flex flex-col mt-16'>
      Sginup
    </section>
  )
}
