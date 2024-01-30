import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


export const DesignerLayout = () => {


  return (
    <main className="w-full h-full">
      <Navbar />
      <Outlet />
    </main>
  )
}