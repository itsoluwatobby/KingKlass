import { SlArrowLeft } from "react-icons/sl";
import { MagicNumbers, UserNavigation } from "../../utility/constants";
import { Buttons } from "../appComponents/Buttons";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { ChangeEvent, useEffect, useState } from "react";
import {
  initAppModals,
  initAppState,
  initUserDetail,
} from "../../utility/initialVariables";
import { RouteLinks } from "./userModal/RouteLinks";
import { CiEdit } from "react-icons/ci";
import UserDetailForm from "./userModal/UserDetailForm";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";
import ModalLayout from "../../layout/ModalLayout";
import { deleteImage, imageUpload } from "../../utility/imageMutation";
import { LoadingComp } from "../LoadingComp";

type ActiveModalType = "UserNavModal" | "Profile";
export const UserNavModal = () => {
  const { toggleNav, user, setToggleNav, setAppModals } =
    useDesignerContext() as DesignerContextProps;
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [userDetails, setUserDetails] = useState<UserDetails>(initUserDetail);
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

  const { isLoading, isError } = appState;

  const handleSubmit = () => {
    if (isLoading) return;
    setAppState((prev) => ({ ...prev, loading: true }));
    try {
      const result = sanitizeEntries(userDetails);
      console.log(result);

      setAppState((prev) => ({ ...prev, success: true }));
      setUserDetails(initUserDetail);
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

    >
      <header className="relative flex items-center justify-center w-full bg-opacity-95 bg-[#EEE3DC] pt-3 p-2">
        {toggleModal === "Profile" ? (
          <Buttons
            onClick={() => setToggleModal("UserNavModal")}
            px=""
            py=""
            classNames="rounded-full absolute left-4 grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors"
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
            classNames="rounded-full absolute left-4 grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors"
          >
            <SlArrowLeft className="text-lg" />
          </Buttons>
        )}

        <h3 className="text-base text-center font-semibold w-fit leading-5">
          {toggleModal === "Profile" ? "Profile" : "Menu"}
        </h3>
      </header>

      <div
        onClick={() => setToggleModal("Profile")}
        className={`${
          toggleModal === "Profile" ? "hidden" : "block"
        } absolute right-2 top-11 hover:bg-slate-200 active:bg-inherit transition-colors p-1 cursor-default rounded-sm font-semibold flex items-center w-fit`}
      >
        <span className="underline text-xs">Edit</span>
        <CiEdit className="text-lg" />
      </div>

      <div className="flex flex-col gap-y-3 px-3 py-1 text-[13px] font-medium">
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
          <UserDetailForm
            userDetails={userDetails}
            disabled={true}
            setUserDetails={setUserDetails}
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
        <RouteLinks values={UserNavigation} />
      )}
    </ModalLayout>
  );
};
