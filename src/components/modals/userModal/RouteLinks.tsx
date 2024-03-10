import { Link } from "react-router-dom";
import { useDesignerContext } from "../../../hooks/useDesignerContext";

type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];

  classNames?: string;
};
export const RouteLinks = ({ values, classNames }: RouteLinksProps) => {
  const { setToggleNav, user } = useDesignerContext() as DesignerContextProps;

  return (
    <div
      className={`flex flex-col font-montserrat text-xl text-fdt-grey-darker font-medium gap-y-2 ${
        user.isAdmin ? "gap-y-2 mt-0 px-3" : "gap-y-4 mt-1 p-3"
      }  font-semibold text-sm w-full ${classNames}`}
    >
      {values?.map((link) => (
        <div key={link.name} className="py-2">
          {link.name === "Notifications" ? (
            <p
              onClick={() =>
                setToggleNav((prev) => ({
                  ...prev,
                  modalType: "notifications",
                  prevModal: "userNavModal",
                }))
              }
              className={`${
                user.isAdmin ? "hidden" : "flex"
              } hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer`}
            >
              <span>{link.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
            </p>
          ) : link.name === "My Measurement" ? (
            <p
              onClick={() =>
                setToggleNav((prev) => ({
                  ...prev,
                  modalType: "measurements",
                  prevModal: "userNavModal",
                }))
              }
              className={`${
                user.isAdmin ? "hidden" : "flex"
              } hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer`}
            >
              {link.name}
            </p>
          ) : link.name === "Settings" ? (
            <p
              onClick={() =>
                setToggleNav((prev) => ({
                  ...prev,
                  modalType: "adminAccountSetting",
                  prevModal: "userNavModal",
                }))
              }
              className={`${
                user.isAdmin ? "flex" : "hidden"
              } hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer`}
            >
              {link.name}
            </p>
          ) : (
            <Link to={link.link} className="">
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
