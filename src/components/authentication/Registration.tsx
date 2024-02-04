
import { initAppState, initSignUpInfo, inputValidation } from "../../utility/initialVariables"
import { useEffect, useState } from "react";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { LiaTimesSolid } from "react-icons/lia";
import { Buttons } from "../appComponents/Buttons";
import UserInputDetails from "../modals/userModal/UserInputDetails";
import { FcGoogle } from "react-icons/fc";
import { Validation_RegExp } from "../../utility/regexExpConfig";


export const Registration = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const { appModals, setAppModals } = useDesignerContext() as DesignerContextProps;
  const [userCredentials, setUserCredentials] = useState<UserInfo>(initSignUpInfo);
  const [validation, setValidation] = useState<Validations>(inputValidation);

  const { email, name, password, confirm_password } = userCredentials;
  const { validEmail, validPassword, matchingPassword } = validation;

  const { isLoading, isError } = appState;
  const canSubmit = [email, password, confirm_password, validEmail, validPassword, matchingPassword].every(Boolean);

  const handleSubmit = () => {
    if (!canSubmit || isLoading) return
    setAppState(prev => ({ ...prev, loading: true }))
    try {
      const userDetails = sanitizeEntries(
        { email, name, password, confirm_password });
      console.log(userDetails)
      setAppState(prev => ({ ...prev, success: true }))
      setUserCredentials(initSignUpInfo)
      toast.success('Registration successful!')
      setValidation(inputValidation);
      setAppModals({ signup: 'CLOSE', signin: 'OPEN' })
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
    if (email) {
      setValidation(prev => ({ ...prev, validEmail: Validation_RegExp['EMAIL_REG'].test(email) }))
    }
    else if (password) {
      setValidation(prev => ({ ...prev, validPassword: Validation_RegExp['PASS_REG'].test(password) }))
    }
  }, [email, password])

  useEffect(() => {
    if (password && confirm_password) {
      setValidation(prev => ({ ...prev, matchingPassword: password === confirm_password }))
    }
  }, [password, confirm_password])

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
    <section className={`${appModals.signup === 'OPEN' ? 'fixed' : 'hidden'} bg-gray-700 bg-opacity-40 midscreen:w-full w-full md:w-[60%] min-h-[95vh] mt-14 z-50 duration-300 p-4`}>
      <div className={`m-auto relative bg-white w-[90%] sm:w-[70%] rounded-md p-5 min-h-[85vh] max-h-[85vh]`}>
        <div className="w-full flex flex-col py-3 items-center gap-y-3">
          <h3 className="font-medium text-xl">Register</h3>

          <div className="self-start text-[13px] text-gray-900">
            <span>Do you have an account? </span>
            <button
              onClick={() => setAppModals({ signup: 'CLOSE', signin: 'OPEN' })}
              className="border-0 focus:outline-0 hover:opacity-90 underline underline-offset-2">Sign in</button>
          </div>

          <UserInputDetails
            placeholder="Username"
            title="Username (optional)"
            value={name as string}
            name='name' disabled={false}
            setUserDetails={setUserCredentials} type='text'
          />

          <UserInputDetails
            placeholder="iamuser@jj.com" validEmail={validEmail}
            title="Email" value={email} name='email' disabled={false}
            setUserDetails={setUserCredentials} type='email'
          />

          <UserInputDetails
            title="Password" value={password} name='password' disabled={false}
            setUserDetails={setUserCredentials} type='password'
            validPassword={validPassword}
          />

          <UserInputDetails
            title="Confirm Password" value={confirm_password as string} name='confirm_password' disabled={false}
            matchingPassword={matchingPassword}
            setUserDetails={setUserCredentials} type='password'
          />

          <div className="flex flex-col w-full gap-y-4 mt-2">
            <Buttons
              onClick={handleSubmit} disabled={!canSubmit}
              px='' py='' isLoading={isLoading}
              classNames={`self-center rounded-sm font-semibold bg-orange-800 text-xs text-white w-[95%] md:w-1/2 py-3 ${canSubmit ? 'hover:bg-orange-700 active:bg-orange-800' : 'bg-slate-600'} transition-colors`}
            >
              Continue
            </Buttons>

            <span className="text-gray-700 self-center">or</span>

            <Buttons
              onClick={handleSubmit}
              px='' py='' isLoading={isLoading}
              classNames='self-center rounded-sm font-semibold bg-blue-600 text-white w-[95%] md:w-1/2 py-2 hover:bg-blue-700 grid place-content-center active:bg-blue-800 transition-colors'
            >
              <div className="flex items-center gap-x-4 text-xs">
                <FcGoogle className="text-xl" />
                <span>Continue with Google</span>
              </div>
            </Buttons>
          </div>
        </div>

        <LiaTimesSolid
          onClick={() => setAppModals(prev => ({ ...prev, signup: 'CLOSE' }))}
          className='absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors'
        />

      </div>

    </section>
  )
}
