import { Link } from "react-router-dom";
import { useDesignerContext } from "../../../hooks/useDesignerContext";

type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
}
export const RouteLinks = ({ values }: RouteLinksProps) => {
  const { setToggleNav } = useDesignerContext() as DesignerContextProps;

  return (
    <div className="flex flex-col gap-y-6 p-3 font-semibold text-sm mt-1 w-full">
      {
        values?.map(link => (
          <div key={link.name}>
            {
              link.name === 'Notifications' ?
                <p 
                onClick={() => setToggleNav({ modalType: "notifications" })}
                className="flex hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer">
                  <span>
                    {link.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                </p>
                :
              link.name === 'My Measurement' ?
                <p 
                onClick={() => setToggleNav({ modalType: "measurements" })}
                className="flex hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer">  
                  {link.name}
                </p>
                :
                <Link to={link.link} className="">{link.name}</Link>
              }
          </div>
        ))
      }
    </div>
  )
}