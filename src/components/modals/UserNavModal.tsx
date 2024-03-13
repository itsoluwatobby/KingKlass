import { GoArrowLeft } from "react-icons/go";
import { SlArrowLeft } from "react-icons/sl";

import { ChangeEvent, useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import ModalLayout from "../../layout/ModalLayout";
import { MagicNumbers, UserNavigation } from "../../utility/constants";
import { deleteImage, imageUpload } from "../../utility/imageMutation";
import {
  initAppModals,
  initAppState,
  initUser,
} from "../../utility/initialVariables";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { LoadingComp } from "../LoadingComp";
import { Buttons } from "../appComponents/Buttons";
import { RouteLinks } from "./userModal/RouteLinks";
import UserDetailForm from "./userModal/UserDetailForm";

type ActiveModalType = "UserNavModal" | "Profile";
export const UserNavModal = () => {
  const { toggleNav, user, setToggleNav, setAppModals } =
    useDesignerContext() as DesignerContextProps;
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [userDetails, setUserDetails] = useState<User>(initUser);
  const [toggleModal, setToggleModal] =
    useState<ActiveModalType>("UserNavModal");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const dp = (event.target.files as FileList)[0];
    if (dp.size > MagicNumbers.imageSize) {
      alert(`MAX ALLOWED FILE SIZE 1.4mb`);
    } else {
      // upload image
      setLoading(true);
      imageUpload(dp, "displayPictures")
        .then(async (res) => {
          if (userDetails.file) {
            await deleteImage(userDetails.file, "displayPictures"); //delete image existing image
          }
          setLoading(false);
          setUserDetails((prev) => ({ ...prev, file: res.url }));
        })
        .catch(() => {
          setLoading(false);
          alert("ERROR UPLOADING IMAGE");
        });
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setUserDetails({ ...user });

    return () => {
      isMounted = false;
    };
  }, [user.email]);

  const { isLoading, isError } = appState;

  const handleSubmit = () => {
    if (isLoading) return;
    setAppState((prev) => ({ ...prev, loading: true }));
    try {
      const result = sanitizeEntries(userDetails);
      console.log(result);

      setAppState((prev) => ({ ...prev, success: true }));
      setUserDetails(initUser);
      toast.success("Profile Updated!!");
      setToggleModal("UserNavModal");
    } catch (error: unknown) {
      console.log(error);
      setAppState((prev) => ({ ...prev, isError: true }));
      toast.error("error message");
    } finally {
      setAppState((prev) => ({ ...prev, loading: false }));
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

  return (
    <ModalLayout
      modalType={toggleNav.modalType}
      expected="userNavModal"
      enlarge={true}
      extraClasses="sm:shadow-2xl h-[100vh]"
    >
      <header className="flex items-center justify-between w-full  p-3 my-2">
        {toggleModal === "Profile" ? (
          <Buttons
            onClick={() => setToggleModal("UserNavModal")}
            px=""
            py=""
            classNames="rounded-full absolute  w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors"
          >
            <SlArrowLeft className="text-lg" />
          </Buttons>
        ) : (
          <Buttons
            onClick={() => {
              setToggleNav({ modalType: "openNavModal" });
              setAppModals(initAppModals);
            }}
            px=""
            py=""
            classNames="rounded-full transition-colors"
          >
            <GoArrowLeft className="text-2xl" />
          </Buttons>
        )}

        <h3 className="text-base text-center font-semibold w-fit leading-5">
          {toggleModal === "Profile" ? "Profile" : ""} &nbsp;
        </h3>

        <div
          onClick={() => setToggleModal("Profile")}
          className={`${
            toggleModal === "Profile" ? "hidden" : "block"
          }  hover:bg-slate-200 active:bg-inherit gap-x-1 transition-colors p-1 cursor-pointer z-10 rounded-sm font-semibold flex items-center w-fit`}
        >
          <span className="underline text-sm text-fdt-grey-dark font-Roboto font-normal">
            edit
          </span>
          <FiEdit3 className="text-xl text-fdt-grey-dark" />
        </div>
      </header>

      <div className="flex flex-col gap-y-3 px-3 py-1 font-medium">
        {user.isAdmin ? (
          <>
            <label
              htmlFor={toggleModal === "Profile" ? "adminProfile" : ""}
              className="mb-4 self-center relative  rounded-full"
            >
              <figure
                className={`relative ${
                  toggleModal === "Profile" ? "cursor-pointer" : ""
                } w-16 h-16 rounded-full flex-none bg-gray-100 shadow-md`}
              >
                {userDetails.file ? (
                  <img
                    src={userDetails.file as string}
                    alt="admin dp"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : null}
                <caption className="-bottom-5 whitespace-nowrap absolute">
                  {toggleModal === "Profile" ? (
                    <span className="text-gray-600 underline cursor-pointer">
                      edit photo
                    </span>
                  ) : (
                    "King Klass"
                  )}
                </caption>
                <LoadingComp isLoading={loading} />
              </figure>
              {toggleModal === "Profile" ? (
                <input
                  type="file"
                  id="adminProfile"
                  onChange={handleFile}
                  accept="image/*"
                  hidden
                  className="absolute top-5"
                />
              ) : null}
            </label>
          </>
        ) : null}
        {toggleModal === "Profile" ? (
          // for Edit profile view
          <UserDetailForm
            userDetails={userDetails}
            disabled={false}
            setUserDetails={setUserDetails}
          />
        ) : (
          // for profile view
          <UserDetails
            firstName={userDetails.first_name}
            lastName={userDetails.last_name}
            email={userDetails.email}
            mobileNumber={userDetails.phone_no}
            username={userDetails.username}
          />
        )}
      </div>

      {toggleModal === "Profile" ? (
        <Buttons
          onClick={handleSubmit}
          px=""
          py=""
          isLoading={isLoading}
          classNames={`absolute left-3 ${
            user.isAdmin ? "bottom-14" : "bottom-28"
          } rounded-[3px] mt-10 h-12 font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3`}
        >
          Save
        </Buttons>
      ) : (
        <RouteLinks values={UserNavigation} classNames="mt-2" />
      )}
    </ModalLayout>
  );
};

interface UserDetailProps {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  mobileNumber: string | undefined;
  username: string;
}

const UserDetails = ({
  email,
  username,
  firstName,
  mobileNumber,
}: UserDetailProps) => {
  return (
    <div className="flex flex-col gap-4">
      <UserInfo
        title={`Full name`}
        value={firstName ? firstName : "-- -- -- -- -- -- -- --"}
      />
      <UserInfo
        title={`Mobile number`}
        value={mobileNumber ? firstName : "-- -- -- -- -- -- -- --"}
      />

      <UserInfo title={`Username`} value={username} />

      <UserInfo title={`Email`} value={email} />
    </div>
  );
};

interface UserInfoProps {
  title: string;
  value: string | undefined;
}

const UserInfo = ({ title, value }: UserInfoProps) => {
  return (
    <div className="flex text-fdt-grey-darker flex-col pb-2 text-base gap-2 border-b-[0.5px] font-montserrat border-fdt-grey-normal">
      <h3 className="font-medium capitalize">{title.replace("_", " ")}</h3>
      <p className="font-normal px-1">{value}</p>
    </div>
  );
};
