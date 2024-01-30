import { Outlet } from "react-router-dom"
import Header from "./Header"

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className="w-[90%] lg:w-full mx-auto">
       <Outlet />
      </main>
    </div>
  )
}

export default AppLayout