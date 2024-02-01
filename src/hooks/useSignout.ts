import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useDesignerContext } from "./useDesignerContext";
import { initAppModals, initNavModals } from "../utility/initialVariables";

export const useSignout = () => {
  const navigate = useNavigate();
  const { setAppModals, setToggleNav } = useDesignerContext() as DesignerContextProps;

  const signout = () => {
    try{
      if (typeof window === 'undefined') return
      window.localStorage.clear();
      setAppModals(initAppModals);
      setToggleNav(initNavModals)
      toast.success("Sign out successful!!");
      navigate('/');
    }
    catch(error) {
      console.log(error)
    }
  }

  return [signout]
}