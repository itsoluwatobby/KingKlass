// import { Outlet } from "react-router-dom"

type NavLayoutProps = {
  children: JSX.Element;
}
export default function HomeLayout({ children }: NavLayoutProps) {
  return (
    <main className="w-full flex flex-col gap-y-4 mt-16 pt-2 pb-24">
      {children}
    </main>
  )
}