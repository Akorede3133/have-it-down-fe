import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import { PiHandsClappingThin } from "react-icons/pi"
import useCreateClap from "../hooks/useCreateClap"
import useGetCurrentUser from "../../auth/hooks/useGetCurrentUser"
import useDestroyClap from "../hooks/useDestroyClap"

const FeedInteraction = ({ feedId, claps, clapsCount, displayComments, commentsCount }) => {
  const { clap, isClapping } = useCreateClap();
  const { unClap, isUnclapping } = useDestroyClap();
  const { user } = useGetCurrentUser();
  const userId = user?.userId;
  const isLikedByUser = claps?.some((clap) => clap.UserId === user?.userId);
  return (
    <section className="flex sm justify-between sm:justify-start border-b border-t py-2 sm:gap-10 items-center">
        { isLikedByUser ? 
          <button onClick={() => unClap({ feedId, userId })} className="flex items-center gap-2" disabled={isClapping}>
          <PiHandsClappingThin className="text-blue-800 text-xl" />
          <span className="text-sm">{clapsCount}</span>
        </button>
        :   <button onClick={() => clap(feedId)} className="flex items-center gap-2" disabled={isClapping}>
        <PiHandsClappingThin className="text-gray-400 text-xl" />
        <span className="text-sm">{clapsCount}</span>
        </button>
      }
        <button className="flex items-center gap-2" onClick={displayComments}>
          <HiOutlineChatBubbleOvalLeft className="text-gray-400 text-xl" />
          <span>{commentsCount}</span>
        </button>
        <button className="sm:hidden">
          <HiOutlineBookmark className="text-gray-400 text-xl" />
        </button>
      </section>
  )
}

export default FeedInteraction;