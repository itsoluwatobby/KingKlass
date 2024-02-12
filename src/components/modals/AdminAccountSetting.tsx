import { Buttons } from "../appComponents/Buttons";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { useEffect, useState } from "react";
import { initAccountInfo, initAppState } from "../../utility/initialVariables";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import ModalLayout from "../../layout/ModalLayout";
import UserInputDetails from "./userModal/UserInputDetails";


export const AdminAccountSetting = () => {
  const { toggleNav, setToggleNav, user } = useDesignerContext() as DesignerContextProps;
  const [appState, setAppState] = useState<AppStateType>(initAppState)
  const [accountDetails, setAccountDetails] = useState<typeof initAccountInfo>(initAccountInfo);

  const { accountNumber, bankName, accountName } = accountDetails;
  const { isLoading, isError } = appState;

  const handleSubmit = () => {
    if (isLoading) return
    setAppState(prev => ({ ...prev, loading: true }))
    try {
      const result = sanitizeEntries(accountDetails);
      console.log(result)

      setAppState(prev => ({ ...prev, success: true }))
      setAccountDetails(initAccountInfo)
      toast.success('Account details saved!!')
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
    <ModalLayout
      modalType={toggleNav.modalType}
      expected="adminAccountSetting"
      enlarge={true}
    >   
      <span
        onClick={() => setToggleNav(prev => ({...prev, modalType: prev.prevModal as ToggleNav }))}
        className="absolute left-3 top-1 text-sm hover:underline cursor-pointer font-semibold">Return
      </span>

      <div className="font-sans mt-12 flex flex-col gap-y-3 px-3 py-1 text-[13px] font-medium">
        <UserInputDetails
          title="Account Number" value={accountNumber} name='accountNumber' type='tel' disabled={false}
          setUserDetails={setAccountDetails} id='accountNumber'
        />
        <UserInputDetails
          title="Bank Name" value={bankName} name='bankName' type='text' disabled={false} id='bankName'
          setUserDetails={setAccountDetails}
        />
        <UserInputDetails
          title="Account Name" value={accountName} name='accountName' type='text' disabled={false}
          setUserDetails={setAccountDetails} id='accountName'
        />
      </div>

      <Buttons
        onClick={handleSubmit}
        px='' py='' isLoading={isLoading}
        classNames={`absolute left-3 ${user.isAdmin ? 'bottom-14' : 'bottom-28'} rounded-[3px] mt-10 h-12 font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3`}
      >
        Save
      </Buttons>   
    </ModalLayout>
  )
}
