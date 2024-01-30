import { Outlet } from "react-router-dom"
import FeedsNav from "./FeedsNav"

const FeedsLayout = () => {
  return (
    <div className="lg:grid lg:min-h-screen grid-cols-[2.5fr,1fr] relative">
      <div className=" overflow-auto lg:border-r">
        <FeedsNav />
        <Outlet />
      </div>
      <aside className="hidden lg:block px-8 bg-red ">aside</aside>
    </div>
  )
}

export default FeedsLayout