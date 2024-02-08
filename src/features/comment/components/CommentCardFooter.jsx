import { PiHandsClappingThin } from "react-icons/pi"
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import CommentTextArea from "./CommentTextArea";
import { useState } from "react";
import useCreateCommentClap from "../../feeds/hooks/useCreateCommentClap";
import useGetCurrentUser from "../../auth/hooks/useGetCurrentUser";
const CommentCardFooter = ({ parentId, repliesCount, setShowReplies, showReplies, user, id, claps, clapsDetails }) => {
  const [showReply, setShowReply] = useState(false);
  const { clap, isClapping } = useCreateCommentClap();
  const { user: currentUser } = useGetCurrentUser();
  const isLikedByUser = clapsDetails?.some((detail) => detail.UserId === currentUser?.userId)
  console.log(currentUser, clapsDetails);
  return (
    <section>
      <div className="flex  justify-between items-center py-4">
        <div className="flex items-center gap-3">
          { isLikedByUser ? 
            <button  className="flex items-center gap-2" disabled={isClapping}>
            <PiHandsClappingThin className="text-blue-800 text-xl" />
            <span className="text-sm">{claps}</span>
          </button>
          :   <button onClick={() => clap(parentId)} className="flex items-center gap-2" disabled={isClapping}>
          <PiHandsClappingThin className="text-gray-400 text-xl" />
          <span className="text-sm">{claps}</span>
          </button>
        }
        { repliesCount === 0 || <button className="flex items-center gap-1" onClick={() => setShowReplies((prev) =>  !prev)}>
            <HiOutlineChatBubbleOvalLeft className="text-xl text-slate-500" />
            <span className="text-sm">{showReplies ? 'Hide replies' : `${repliesCount} Reply`}</span>
          </button> }
        </div>
        <button className="text-sm" onClick={() => setShowReply((prev) => !prev)}>Reply</button>
      </div>

     {showReply && <CommentTextArea parentId={parentId} user={user} setShowReplyBox={setShowReply} /> }
    </section>
  )
}

export default CommentCardFooter