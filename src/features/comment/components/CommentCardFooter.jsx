import { PiHandsClappingThin } from "react-icons/pi"
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import CommentTextArea from "./CommentTextArea";
import { useState } from "react";
const CommentCardFooter = ({ parentId }) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <section>
      <div className="flex  justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <button>
            <PiHandsClappingThin className="text-xl text-slate-500"  />
          </button>
          <button className="flex items-center gap-1">
            <HiOutlineChatBubbleOvalLeft className="text-xl text-slate-500" />
            <span className="text-sm">1 Reply</span>
          </button>
        </div>
        <button className="text-sm" onClick={() => setShowReply((prev) => !prev)}>Reply</button>
      </div>

     {showReply && <CommentTextArea parentId={parentId} /> }
    </section>
  )
}

export default CommentCardFooter