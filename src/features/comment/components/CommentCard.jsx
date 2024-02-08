import { useState } from "react";
import CommentCardFooter from "./CommentCardFooter"
import CommentCardHeader from "./CommentCardHeader"

const CommentCard = ({ comment }) => {
  const { content, id, replies, User: { name } } = comment;
  const [showReplies, setShowReplies] = useState(false);
  // console.log(replies);
  return (
    <li className="py-3">
      <CommentCardHeader name={name} />
      <p className="text-sm">{content}</p>
      <CommentCardFooter parentId={id} repliesCount={replies?.length} showReplies={showReplies} setShowReplies={setShowReplies} />
      {showReplies && replies?.length > 0 && (
        <ul className="ml-3 border-l-2 pl-4">
          {replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default CommentCard