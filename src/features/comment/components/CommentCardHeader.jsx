import { HiOutlineEllipsisHorizontal } from "react-icons/hi2"
import ProfileAvatar from "../../../components/ProfileAvatar"
import { formatDateInDistance } from "../../../utils/date"
import useGetCurrentUser from "../../auth/hooks/useGetCurrentUser"

const CommentCardHeader = ({ name , createdAt}) => {
  const { user } = useGetCurrentUser();
  return (
    <div>
        <section className="flex justify-between items-center">
        <div className="flex items-center gap-2 my-4">
          <ProfileAvatar />
          <div className="">
            <p className=" font-medium flex items-center gap-2"><span>{name}</span>{  user.name === name && <span className="bg-[#1a8917] uppercase text-[10px] text-white px-1">Author</span>}</p>
            <p className="text-sm">{ formatDateInDistance(createdAt)}</p>
          </div>
        </div>
        <button>
          <HiOutlineEllipsisHorizontal className="text-2xl" />
        </button>
      </section>
    </div>
  )
}

export default CommentCardHeader