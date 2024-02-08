import CommentCard from "./CommentCard"

const CommentsList = ({ comments }) => {
  return (
    <ul className=" divide-y-[1px] divide-slate-300">
      {
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      }
    </ul>
  )
}

export default CommentsList