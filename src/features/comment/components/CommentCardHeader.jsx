import { HiOutlineEllipsisHorizontal } from "react-icons/hi2"
import ProfileAvatar from "../../../components/ProfileAvatar"

const CommentCardHeader = ({ name }) => {
  return (
    <div>
        <section className="flex justify-between items-center">
        <div className="flex items-center gap-2 my-4">
          <ProfileAvatar />
          <div className="">
            <p className=" font-medium">{name}</p>
            <p className="text-sm">10 days ago</p>
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