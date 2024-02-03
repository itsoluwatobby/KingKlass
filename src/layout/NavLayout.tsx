// import { Outlet } from "react-router-dom"

type NavLayoutProps = {
  children: JSX.Element;
  isOpened: boolean;
}

export default function NavLayout({ children, isOpened }: NavLayoutProps) {
  return (
    <section className={`p-3 ${isOpened ? 'fixed' : 'hidden'} bg-red-500 midscreen:w-full w-full min-h-[90vh] mt-14 z-[999] duration-300`}>
      {children}
    </section>
  )
}