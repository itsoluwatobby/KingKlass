import { initAppState, initSignInInfo } from "../../utility/initialVariables";
import { useEffect, useState } from "react";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { Buttons } from "../appComponents/Buttons";
import { LiaTimesSolid } from "react-icons/lia";
import UserInputDetails from "../modals/userModal/UserInputDetails";
import { FcGoogle } from "react-icons/fc";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { getUser, login } from "../../api/globalRequest";

export const Login = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const { appModals, setAppModals, setUser } =
    useDesignerContext() as DesignerContextProps;
  const [userCredentials, setUserCredentials] =
    useState<UserInfo>(initSignInInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state ?? "/products";

  const { email, password, remember_me } = userCredentials;
  const { isLoading, isError } = appState;
  const canSubmit = [email, password].every(Boolean);

  const handleSubmit = async () => {
    if (!canSubmit || isLoading) return;
    setAppState((prev) => ({ ...prev, isLoading: true }));
    try {
      const userDetails = sanitizeEntries({ email, password });
      const res = await login(userDetails);
      typeof window !== 'undefined' ? window.localStorage.setItem('King_Klass_Pass', res.token) : null;
      const loggedIn = await getUser(res.id);
      console.log(loggedIn)
      void setUser;
      setAppState((prev) => ({ ...prev, success: true }));
      setUserCredentials(initSignInInfo);
      toast.success("Welcome!!!");
      setAppModals({ signup: "CLOSE", signin: "CLOSE" });
      navigate(pathname, { replace: true });
    } catch (error: any) {
      setAppState((prev) => ({ ...prev, isError: true }));
      toast.error(error.response.data.error);
    } finally {
      setAppState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    if (!isError) return;
    const timeoutId = setTimeout(() => {
      setAppState((prev) => ({ ...prev, isError: false }));
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isError]);

  // min-h-[85vh] max-h-[85vh]
  return (
    <FadedBGWrapper modalType={appModals.signin} expected="OPEN" enlarge={true}>
      <div

        className={`mx-auto mt-16 relative bg-[#F8F8F8] flex flex-col gap-y-4 w-[100%] sm:w-[25rem] rounded-md p-5 h-fit`}
      >
        <div className="w-full flex flex-col py-8 items-center gap-y-5">
          <h3 className="font-medium text-2xl">Login</h3>

          <div className="self-start text-sm text-[#939393]">
            <span>Don't have an account yet? </span>
            <button
              onClick={() => setAppModals({ signup: "OPEN", signin: "CLOSE" })}
              className="text-fdt-grey-darker border-0 focus:outline-0 hover:opacity-90 underline underline-offset-2"
            >
              Register
            </button>
          </div>

          <UserInputDetails
            placeholder="iamuser@jj.com"
            id="loginEmail"
            title="Email"
            value={email}
            name="email"
            disabled={false}
            setUserDetails={setUserCredentials}
            type="email"
          />
          <UserInputDetails
            title="Password"
            value={password}
            name="password"
            disabled={false}
            id="loginPassword"
            setUserDetails={setUserCredentials}
            type="password"
          />

          <div className="flex flex-col w-full gap-y-5 mt-2">
            <div className="text-sm flex items-center w-full justify-between font-light">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name="remember_me"
                  checked={remember_me}
                  onChange={(e) =>
                    setUserCredentials((prev) => ({
                      ...prev,
                      remember_me: e.target.checked,
                    }))
                  }
                />
                <span className="text-fdt-grey-normal">Stay signed in</span>
              </div>
              <span>Forgot your password?</span>
            </div>

            <Buttons
              onClick={handleSubmit}
              px=""
              py=""
              isLoading={isLoading}
              classNames="self-center rounded-md font-semibold bg-[#8B4513] text-base text-white w-full md:w-1/2 py-3 hover:bg-orange-700 active:bg-orange-800 transition-colors"
            >
              Login
            </Buttons>

            <span className="text-[#646464] self-center">or</span>

            <Buttons
              onClick={handleSubmit}
              px=""
              py=""
              isLoading={false}
              classNames="self-center rounded-md font-semibold bg-blue-600 text-white w-full md:w-fit md:px-4 py-3 hover:bg-blue-700 grid place-content-center active:bg-blue-800 transition-colors"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <FcGoogle className="text-3xl bg-white rounded-full p-2" />
                <span className="text-base">Continue with Google</span>
              </div>
            </Buttons>
          </div>
        </div>

        <LiaTimesSolid
          onClick={() => setAppModals((prev) => ({ ...prev, signin: "CLOSE" }))}
          className="absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors"
        />
      </div>
    </FadedBGWrapper>
  );
};
