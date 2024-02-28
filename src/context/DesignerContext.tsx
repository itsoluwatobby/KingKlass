import { createContext, useEffect, useState } from 'react'
import { initAppModals, initNavModals, initUser } from '../utility/initialVariables';
import { getUser } from '../api/globalRequest';
import { toast } from 'react-toastify';

export const DesignerContext = createContext<DesignerContextProps | null>(null);

export const DesignerDataProvider = ({ children }: ChildrenNode) => {
  const [starRating, setStarRating] = useState<number[]>([]);
  const [appModals, setAppModals] = useState<AppModals>(initAppModals);
  const [toggleNav, setToggleNav] = useState<ToggleOption>(initNavModals);
  const [user, setUser] = useState<User>(initUser);
  const [paymentProgress, setPaymentProgress] = useState<PaymentProgress>({ progress: 'pending' })

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const access_token = window.localStorage.getItem('King_Klass_Pass') as string;
    const id = window.localStorage.getItem('pass_id') as string;
    setUser(prev => ({
      ...prev, access_token, id, isSignedIn: access_token ? true : false
    }))
  }, [])
  
  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const access_token = window.localStorage.getItem('King_Klass_Pass') as string;
        const id = window.localStorage.getItem('pass_id') as string;
        const loggedIn = await getUser(id);
        console.log('he')
        const { first_name, last_name, is_admin, email: userEmail, phone_no, updated_at, created_at } = loggedIn;
        setUser(prev => ({...prev, isSignedIn: true, id, access_token, isAdmin: is_admin, first_name, last_name, phone_no, created_at, updated_at, email: userEmail}))
      } catch (error: any) {
        toast.error(error.response.data.error ?? error.message);
      }
    };
    isMounted ? fetchUser() : null;
    return () => {
      isMounted = false
    }
  }, [])

  const value = {
    appModals, setAppModals, user, setUser, toggleNav, setToggleNav, starRating, setStarRating, paymentProgress, setPaymentProgress
  }
  return (
    <DesignerContext.Provider value={value}>
      {children}
    </DesignerContext.Provider>
  )
}