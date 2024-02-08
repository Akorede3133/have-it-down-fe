import { PiHandsClappingThin } from "react-icons/pi"
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import CommentTextArea from "./CommentTextArea";
import { useState } from "react";
const CommentCardFooter = ({ parentId, repliesCount, setShowReplies, showReplies, user }) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <section>
      <div className="flex  justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <button>
            <PiHandsClappingThin className="text-xl text-slate-500"  />
          </button>
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