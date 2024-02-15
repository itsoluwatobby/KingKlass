import { Link, Outlet } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { useState } from "react";

export default function DashboardLayout() {
  const [isActive, setIsActive] = useState<string>('Dashboard');
  const AdminNavLinks = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Upload product', link: '/uploadProduct' },
    { name: 'Orders', link: '/adminOrders' },
    { name: 'Customers', link: '/customers' },
  ]

  return (
    <HomeLayout>
      <div className="flex gap-x-6 w-full h-full overflow-hidden">
        <aside className="hidden md:flex sticky top-0 flex-col h-[88vh] px-3 text-[14px] gap-y-2 whitespace-nowrap border-0 border-r-[1px]">
          {
            AdminNavLinks.map(nav => (
              <Link to={nav.link} key={nav.name} 
              onClick={() => setIsActive(nav.name)}
              className={`${nav.name === isActive ? 'bg-[#8B4513] text-white' : ''} py-2 px-1 text-left min-w-36 rounded-[3px]`}>
                 {nav.name} 
              </Link>
            ))
          }
        </aside>
        <Outlet />
      </div>
    </HomeLayout>
  )
}
