import { Link } from "react-router-dom";

type RouteLinksProps = {
  values: {
    name: string;
    link: string;
  }[];
}
export const RouteLinks = ({ values }: RouteLinksProps) => {

  return (
    <div className="flex flex-col gap-y-6 p-3 font-semibold text-sm mt-1 w-full">
      {
        values?.map(link => (
          <Link to={link.link} key={link.name} className="flex items-center justify-between">{link.name}
          {
            link.name === 'Notifications' ? 
             <div className="w-1.5 h-1.5 rounded-full bg-red-700"/> : null}
          </Link>
          ))
      }
    </div>
  )
}