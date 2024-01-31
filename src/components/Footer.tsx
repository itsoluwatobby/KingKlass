import { KingKlassStretch } from "../svgs/LogoStretch"
import { FooterLinks } from "../utility/constants"


export const Footer = () => {
  const { QuickLinks, Support } = FooterLinks;

  return (
    <footer className="flex flex-col gap-y-5 text-xs font-sans font-medium w-full p-4 pb-4 min-h-[60vh]">
      <KingKlassStretch size={{width: '118', height: '23'}} />

      <div className='flex flex-col gap-y-2.5'>
        <p className="flex flex-col">
          <span>123 Main Street Aba, Abia State</span>
          <span>Nigeria</span>
        </p>
        <p>+234901230902</p>
        <p className="text-[11px]">shop@kigklass.nigeria</p>
      </div>

      <div className="flex justify-between pr-6">
        <RouteLinks 
        name={QuickLinks.name} 
        values={QuickLinks.values}
        />
        <RouteLinks 
        name={Support.name} 
        values={Support.values}
        />
      </div>

      <div className="w-full h-[2px] bg-gray-400" />

      <p className="text-center text-sm tracking-wide">&copy; 2024, KingKlass. All Rights Reserved</p>
    </footer>
  )
}


type RouteLinksProps = {
  name: string;
  values: {
    name: string;
    link: string;
  }[];
}
const RouteLinks = ({ name, values }: RouteLinksProps) => {
 
  return (
    <div className="flex flex-col gap-y-4">
    <h4 className="text-[15px] font-bold cursor-default">{name}</h4>
    <div className="flex flex-col gap-y-3.5 text-[13px]">
      {
        values?.map(link => (
          <a href={link.link} key={link.name} className="hover:underline underline-offset-2 transition-all">{link.name}</a>
        ))
      }
    </div>
  </div>
  )
}