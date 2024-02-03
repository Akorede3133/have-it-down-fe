import { Link } from 'react-router-dom';
import logo from '../../../assets/blog-logo.jfif';
import { HiOutlineBookmark, HiOutlineEllipsisHorizontal, HiOutlineMinusCircle } from "react-icons/hi2";
const FeedsCard = () => {
  return (
    <li className='border-b py-4 flex flex-col justify-between gap-10'>
      <section className=''>
       <section className='flex gap-2 items-center'>
        <Link to='' className='flex items-center gap-2 text-sm'>
          <img src={logo} alt="" className='w-[25px] rounded-full' />
            <p>Suneel Kumar</p>
        </Link>
        <span className='h-1 w-1 rounded-full bg-gray-400'></span>
         <Link to='' className='text-sm'>
            <p>Aug 15, 2023</p>
        </Link>
       </section>
        <section>
          <h3 className=' font-bold text-[1.1rem] text-[#242424]'>Design patterns in Node.js</h3>
        </section>
      </section>
     
      <section className=' flex justify-between items-center'>
        <div  className='flex gap-3 items-center'>
          <p className='bg-[#F2F2F2] rounded-full py-1 px-3 text-sm'>Programming</p>
          <p className='text-sm text-gray-500'>7 min read</p>
        </div>
        <div className='flex gap-2'>
          <HiOutlineBookmark className='text-xl' />
          <HiOutlineMinusCircle className='text-xl' />
          <HiOutlineEllipsisHorizontal className='text-xl' />
        </div>
      </section>
    </li>
  )
}

export default FeedsCard;