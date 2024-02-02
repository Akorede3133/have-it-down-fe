import { HiOutlineBell, HiOutlineEllipsisHorizontal } from 'react-icons/hi2';
import logo from '../../../assets/blog-logo.jfif';
import ProfileAvatar from '../../../components/ProfileAvatar';
import useCreateFeed from '../../feeds/hooks/useCreateFeed';
import { useSelector } from 'react-redux';

const EditorHeader = () => {
  const { createNewFeed, isPending } = useCreateFeed();
  const { title, data } = useSelector((state) => state.editor);
  return (
    <header className="flex justify-between items-center py-2">
      <div className='flex gap-1 items-center'>
        <img src={logo} alt="" className='w-[25px]' />
        <p className='text-sm'>Draft in emiolasaheed <span>saved</span></p>
      </div>
      <div className='flex gap-3 items-center'>
        <button className="bg-green-600 py-[2px] px-3 rounded-full text-white text-sm">publish</button>
        <button className="py-[2px] px-3 rounded-full text-gray-800 text-sm border capitalize whitespace-nowrap" onClick={() => createNewFeed({title, content: data.blocks})}>save as draft</button>

        <HiOutlineEllipsisHorizontal />
        <HiOutlineBell className=' text-2xl text-[#9F9F9F]' />
        <ProfileAvatar />
      </div>
    </header>
  )
}

export default EditorHeader