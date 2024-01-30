import { HiOutlinePlus } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

const FeedsNav = () => {
  const activeStyle = {
    borderBottom: '1px solid black',
  };

  return (
    <div className=" border-b lg:w-[75%] mx-auto">
      <ul className="flex gap-6 items-center">
        <li>
          <Link to=''>
            <HiOutlinePlus className="text-xl text-gray-600" />
          </Link>
        </li>
        <li >
          <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/' className='border-black py-4 text-sm block'>
            For you
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='followingFeeds' className=" border-black py-4 text-sm block">
            Following
          </NavLink>
        </li>
      </ul>
    
    </div>
  )
}

export default FeedsNav