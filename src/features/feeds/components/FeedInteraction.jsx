import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import { PiHandsClappingThin } from "react-icons/pi"
import useCreateClap from "../hooks/useCreateClap"
import useGetCurrentUser from "../../auth/hooks/useGetCurrentUser"

const FeedInteraction = ({ feedId, claps }) => {
  const { clap, isClapping } = useCreateClap()
  const { user } = useGetCurrentUser();
  const isLikedByUser = claps?.some((clap) => clap.UserId === user?.userId);
  return (
    <section className="flex sm justify-between sm:justify-start border-b border-t py-2 sm:gap-10 items-center">
        { isLikedByUser ? 
          <button className="flex items-center gap-2" disabled={isClapping}>
          <PiHandsClappingThin className="text-blue-800 text-xl" />
          <span className="text-sm">643</span>
        </button>
        :   <button onClick={() => clap(feedId)} className="flex items-center gap-2" disabled={isClapping}>
        <PiHandsClappingThin className="text-gray-400 text-xl" />
        <span className="text-sm">643</span>
        </button>
      }
        <button className="flex items-center gap-2">
          <HiOutlineChatBubbleOvalLeft className="text-gray-400 text-xl" />
          <span>19</span>
        </button>
        <button className="sm:hidden">
          <HiOutlineBookmark className="text-gray-400 text-xl" />
        </button>
      </section>
  )
}

export default FeedInteraction;