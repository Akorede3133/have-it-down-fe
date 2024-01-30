import { Link } from 'react-router-dom';
import logo from '../assets/blog-logo.jfif';
import { HiOutlineBell, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { LuPenSquare } from "react-icons/lu";
const Header = () => {
  return (
    <header className='bg-white border-b p-3 flex justify-between items-center'>
      <div className='flex items-center gap-2 bg-white'>
        <img src={logo} alt="blog logo" className='w-[50px] h-[30px] object-cover' />
        <form className='hidden sm:block '>
          <section className='flex items-center gap-2 bg-[#f9f9f9] px-3 py-2 rounded-full'>
          <HiOutlineMagnifyingGlass className='text-[#6f6f6f] text-2xl' />
          <input type="text" placeholder='Search' className=' border-none bg-inherit outline-none' />
          </section>
        </form>
      </div>
      <div>
        <ul className='flex items-center gap-8'>
          <li className='hidden md:block'>
            <Link to='' className='flex items-center gap-1'>
              <LuPenSquare className='text-[#9F9F9F] text-2xl' />
              <span className='capitalize font-'>write</span>
            </Link>
          </li>
          <li className='sm:hidden'>
            <Link to='/'>
              <HiOutlineMagnifyingGlass className='text-[#9F9F9F] text-2xl' />
            </Link>
          </li>
          <li>
            <Link to=''>
            <HiOutlineBell className=' text-2xl text-[#9F9F9F]' />
            </Link>
          </li>
          <li>
            <img src={logo} alt="profile picture" className='w-[30px] rounded-full' />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header