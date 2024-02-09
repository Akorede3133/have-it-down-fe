import { Link } from 'react-router-dom';
import logo from '../../../assets/blog-logo.jfif';
import { HiOutlineBookmark, HiOutlineEllipsisHorizontal, HiOutlineMinusCircle } from "react-icons/hi2";
import { formatDateInDistance } from '../../../utils/date';
import { format } from 'date-fns';
const FeedsCard = ({ feed }) => {
  const { title, User,  id, createdAt, tags} = feed;
  return (
    <li className='border-b py-4 flex flex-col justify-between gap-10'>
      <section className=''>
       <section className='flex gap-2 items-center'>
        <Link to='' className='flex items-center gap-2 text-sm'>
          <img src={logo} alt="" className='w-[25px] rounded-full' />
            <p>{User?.name}</p>
        </Link>
        <span className='h-1 w-1 rounded-full bg-gray-400'></span>
         <Link to='' className='text-sm'>
            <p>{format(new Date(createdAt), 'MMM dd, yyyy')}</p>
        </Link>
       </section>
        <section>
          <Link to={`feeds/${id}`} className=' font-bold text-[1.1rem] text-[#242424]'>{title}</Link>
        </section>
      </section>
     
      <section className=' flex justify-between items-center'>
        <div  className='flex gap-3 items-center'>
        { tags && <p className='bg-[#F2F2F2] capitalize rounded-full py-1 px-3 text-sm'>{tags[0]}</p> }
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