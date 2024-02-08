import { useState } from "react";
import CommentCardFooter from "./CommentCardFooter"
import CommentCardHeader from "./CommentCardHeader"

const CommentCard = ({ comment }) => {
  const { content, id, parentId, replies, User: { name }, createdAt, Claps: clapsDetails, claps } = comment;
  const [showReplies, setShowReplies] = useState(false);
  return (
    <li className="py-3">
      <CommentCardHeader name={name} createdAt={createdAt} />
      <p className="text-sm">{content}</p>
      <CommentCardFooter id={id} parentId={id} repliesCount={replies?.length} showReplies={showReplies} setShowReplies={setShowReplies} user={name} claps={claps} clapsDetails={clapsDetails} />
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