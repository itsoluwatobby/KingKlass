import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"


export const DesignerLayout = () => {


  return (
    <main className="w-full h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}