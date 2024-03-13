import { SlArrowRight } from "react-icons/sl";
import { AdminNavLinks, NavLinks } from "../../utility/constants";
import { getInitials } from "../../utility/getInitials";
import { Buttons } from "../appComponents/Buttons";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { useSignout } from "../../hooks/useSignout";
import ModalLayout from "../../layout/ModalLayout";
import { useNavigate } from "react-router-dom";

export const NavModal = () => {
  const [signout] = useSignout();
  const { toggleNav, user, setToggleNav, setAppModals } =
    useDesignerContext() as DesignerContextProps;
    console.log(user)
  const actionButton = (type: "LOGIN" | "REGISTER") => {
    setToggleNav({ modalType: "pass" });
    if (type === "LOGIN") setAppModals((prev) => ({ ...prev, signin: "OPEN" }));
    else if (type === "REGISTER")
      setAppModals((prev) => ({ ...prev, signup: "OPEN" }));
    else return;
  };
  return (
    <ModalLayout
      modalType={toggleNav.modalType}
      expected="openNavModal"
      enlarge={true}
      noFullScreen={false}
      classNames="md:hidden"
      extraClasses="px-3 py-1 top-0 border flex flex-col gap-y-6"
    >
      <header
        className={`${
          user.isSignedIn ? "flex mt-3 mb-0" : "hidden"
        } items-center justify-between`}
      >
        <div className="flex items-center gap-x-2">
          <p
            className={`relative after:absolute after:bg-[#FF3E30] after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-3xl bg-[#D69203] text-white rounded-full w-14 h-14 grid place-content-center`}
          >
            {getInitials(
              (user.first_name as string) ?? user.email?.split("@")[0]
            )}
          </p>
          <div className="flex flex-col font-semibold gap-y-1">
            <h3 className="text-2xl font-medium whitespace-pre-wrap">
              Hi, {user.username}
            </h3>
            <span className="text-[#A8A8A8] font-normal text-sm">
              Welcome back
            </span>
          </div>
        </div>
        <Buttons
          onClick={() => setToggleNav({ modalType: "userNavModal" })}
          px=""
          py=""
          classNames="rounded-full grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors"
        >
          <SlArrowRight className="text-xl" />
        </Buttons>
      </header>

      {user.isAdmin ? (
        <RouteLinks
          setToggleNav={setToggleNav}
          values={AdminNavLinks}
          user={user}
        />
      ) : (
        <RouteLinks setToggleNav={setToggleNav} values={NavLinks} user={user} />
      )}

      {user.isSignedIn ? (
        <Buttons
          onClick={signout}
          px=""
          py=""
          classNames="self-center mt-14 rounded-[3px] font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors"
        >
          Sign out
        </Buttons>
      ) : (
        <div className="flex flex-col gap-y-4 mt-12">
          <Buttons
            onClick={() => actionButton("REGISTER")}
            px=""
            py=""
            classNames="rounded-[8px] w-full font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors"
          >
            Register
          </Buttons>
          <Buttons
            onClick={() => actionButton("LOGIN")}
            px=""
            py=""
            classNames="rounded-[8px] w-full font-semibold border-[1px] border-[#8B4513] text-[#8B4513] bg-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-opacity-80 active:bg-opacity-90 transition-colors"
          >
            Login
          </Buttons>
        </div>
      )}
    </ModalLayout>
  );
};

type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
  user: User;
  setToggleNav: React.Dispatch<React.SetStateAction<ToggleOption>>;
};
const RouteLinks = ({ values, setToggleNav, user }: RouteLinksProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-inherit flex flex-col gap-y-3 font-semibold text-[12px] mt-1 w-full">
      {values?.map((link) =>
        link.name.startsWith("Contact") ? (
          <a
            href={link.link}
            key={link.name}
            onClick={() => setToggleNav({ modalType: "pass" })}
            className="text-lg text-fdt-grey-darker font-medium pl-1 hover:scale-[0.99] transition-all w-full py-3  pr-0 border-0 border-b border-fdt-grey-normal"
          >
            {link.name}
          </a>
        ) : (link.name.startsWith("Orders") ||
            link.name.startsWith("Manage")) &&
          !user.isSignedIn ? null : (
          <div
            key={link.name}
            onClick={() => {
              setToggleNav({ modalType: "pass" });
              navigate(link.link);
            }}
            className="font-medium text-fdt-grey-darker text-lg cursor-pointer hover:scale-[0.99] transition-all w-full py-3 pl-1 pr-0 border-0 border-b border-b-fdt-grey-normal"
          >
            {link.name}
          </div>
        )
      )}
    </div>
  );
};
