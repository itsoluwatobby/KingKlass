import {
  initAppState,
  initSignUpInfo,
  inputValidation,
} from "../../utility/initialVariables";
import { useEffect, useState } from "react";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { LiaTimesSolid } from "react-icons/lia";
import { Buttons } from "../appComponents/Buttons";
import UserInputDetails from "../modals/userModal/UserInputDetails";
import { FcGoogle } from "react-icons/fc";
import { Validation_RegExp } from "../../utility/regexExpConfig";
import FadedBGWrapper from "../../layout/FadedBGWrapper";
import { register } from "../../api/globalRequest";

export const Registration = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const { appModals, setAppModals } = useDesignerContext() as DesignerContextProps;
  const [userCredentials, setUserCredentials] = useState<UserInfo>(initSignUpInfo);
  const [validation, setValidation] = useState<Validations>(inputValidation);

  const { email, name, password, confirm_password } = userCredentials;
  const { validEmail, validPassword, matchingPassword } = validation;

  const { isLoading, isError } = appState;
  const canSubmit = [
    email,
    password,
    confirm_password,
    validEmail,
    validPassword,
    matchingPassword,
  ].every(Boolean);
  // firstName: name
  const handleSubmit = async () => {
    if (!canSubmit || isLoading) return;
    setAppState((prev) => ({ ...prev, isLoading: true }));
    try {
      const userDetails = sanitizeEntries({ email, password });
      await register(userDetails);
      setAppState((prev) => ({ ...prev, success: true }));
      setUserCredentials(initSignUpInfo);
      toast.success("Registration successful!");
      setValidation(inputValidation);
      setAppModals({ signup: "CLOSE", signin: "OPEN" });
    } catch (error: unknown) {
      setAppState((prev) => ({ ...prev, isError: true }));
      toast.error("An error occurred");
    } finally {
      setAppState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    if (email) {
      setValidation((prev) => ({
        ...prev,
        validEmail: Validation_RegExp["EMAIL_REG"].test(email),
      }));
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      setValidation((prev) => ({
        ...prev,
        validPassword: Validation_RegExp["PASS_REG"].test(password),
      }));
    }
  }, [password]);

  useEffect(() => {
    if (password && confirm_password) {
      setValidation((prev) => ({
        ...prev,
        matchingPassword: password === confirm_password,
      }));
    }
  }, [password, confirm_password]);

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
    <FadedBGWrapper modalType={appModals.signup} expected="OPEN" enlarge={true}>
      <div
        className={`mx-auto mt-16 relative bg-[#F8F8F8] w-[100%] rounded-sm sm:w-[25rem]  p-5 h-fit`}
      >
        <div className="w-full flex flex-col py-3 items-center gap-y-3">
          <h3 className="font-medium text-2xl">Register</h3>

          <div className="self-start text-sm text-gray-900">
            <span className="text-[#939393]">Do you have an account? </span>
            <button
              onClick={() => setAppModals({ signup: "CLOSE", signin: "OPEN" })}
              className="border-0 font-montserrat font-medium text-fdt-grey-darker focus:outline-0 hover:opacity-90 underline underline-offset-2"
            >
              Sign in
            </button>
          </div>

          <UserInputDetails
            placeholder="Username"
            title="Username (optional)"
            value={name as string}
            id="username"
            name="name"
            disabled={false}
            setUserDetails={setUserCredentials}
            type="text"
          />

          <UserInputDetails
            placeholder="iamuser@jj.com"
            id="registerEmail"
            validEmail={validEmail}
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
            id="password"
            setUserDetails={setUserCredentials}
            type="password"
            validPassword={validPassword}
          />

          <UserInputDetails
            title="Confirm password"
            value={confirm_password as string}
            name="confirm_password"
            disabled={false}
            matchingPassword={matchingPassword}
            id="confirm_password"
            setUserDetails={setUserCredentials}
            type="password"
          />

          <div className="flex flex-col w-full gap-y-3 mt-2">
            <Buttons
              onClick={handleSubmit}
              disabled={!canSubmit}
              px=""
              py=""
              isLoading={isLoading}
              classNames={`rounded-sm text-base self-center font-semibold bg-[#8B4513] text-white w-full md:w-1/2 py-3 ${
                canSubmit
                  ? "hover:bg-orange-700 active:bg-orange-800"
                  : "bg-slate-600"
              } transition-colors`}
            >
              Continue
            </Buttons>

            <span className="text-[#646464] self-center">or</span>

            <Buttons
              onClick={handleSubmit}
              px=""
              py=""
              isLoading={isLoading}

              classNames="rounded-sm self-center w-full  font-semibold bg-blue-600 text-white w-[95%] md:w-1/2 py-2 hover:bg-blue-700 grid place-content-center active:bg-blue-800 transition-colors"
            >
              <div className="flex items-center gap-x-4 ">
                <FcGoogle className="text-3xl bg-white rounded-full p-2" />
                <span className="text-base">Continue with Google</span>
              </div>
            </Buttons>
          </div>
        </div>

        <LiaTimesSolid
          onClick={() => setAppModals((prev) => ({ ...prev, signup: "CLOSE" }))}
          className="absolute -right-2 -top-2 p-0.5 font-bold bg-white shadow-sm shadow-slate-500 rounded-full text-2xl hover:text-gray-700 active:text-gray-900 cursor-pointer transition-colors"
        />
      </div>
    </FadedBGWrapper>
  );
};
