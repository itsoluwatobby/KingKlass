import { useLocation, useParams } from "react-router-dom";
import { KingKlassStretch } from "../svgs/LogoStretch";
import { FooterLinks } from "../utility/constants";

export const Footer = () => {
  const { QuickLinks, Support } = FooterLinks;
  const { pathname } = useLocation();
  const { productId } = useParams();
  const noFooterRoutes = ["/products", `/products/${productId}`, "/orders"];

  return (
    <footer
      className={`${
        noFooterRoutes.includes(pathname) ? "hidden" : "flex"
      } flex-col gap-y-5 text-xs font-sans font-medium w-full p-4 pb-10  transition-all min-h-[60vh mobile:min-h-[50vh`}
    >
      <div className="md:p-5 flex flex-col gap-y-5 w-full md:justify-between md:flex-row text-sm">
        <div className="flex flex-col gap-3 text-fdt-grey-dark">
          <KingKlassStretch size={{ width: "134", height: "26" }} />

          <p className="m-0">23 Faulks road Aba, Abia, Nigeria</p>

          <p className="flex flex-row gap-1 w-fit m-0">
            <a
              href="tel:+234901230902"
              className="hover:underline transition-all no-underline text-inherit"
            >
              +2348138771855
            </a>
            <a
              href="tel:+234901230902"
              className="hover:underline text-normal transition-all no-underline text-inherit"
            >
              +2348024086830
            </a>
          </p>
          <p className="m-0">shop@kigklass.nigeria</p>
        </div>

        <div className="md:flex-none flex justify-between pr-6 md:w-[55%]">
          <RouteLinks name={QuickLinks.name} values={QuickLinks.values} />
          <RouteLinks name={Support.name} values={Support.values} />
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-400" />

      <p className="text-center text-base tracking-wide">
        &copy; 2024, KingKlass. All Rights Reserved
      </p>
    </footer>
  );
};

type RouteLinksProps = {
  name: string;
  values: {
    name: string;
    link: string;
  }[];
};
const RouteLinks = ({ name, values }: RouteLinksProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-base font-semibold cursor-default my-0">{name}</h4>
      <div className="flex flex-col gap-y-2 text-base">
        {values?.map((link) => (
          <a
            href={link.link}
            key={link.name}
            className="hover:underline no-underline transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
