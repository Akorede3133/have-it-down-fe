import { Outlet } from "react-router-dom"
import FeedsNav from "./FeedsNav"

const FeedsLayout = () => {
  return (
    <div className="lg:grid grid-cols-[2.5fr,1fr]">
      <div className="lg:min-h-screen lg:border-r">
        <FeedsNav />
        <Outlet />
      </div>
      <aside className="hidden lg:block px-8">aside</aside>
    </div>
  )
}

export default FeedsLayout