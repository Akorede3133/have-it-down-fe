import CommentCard from "./CommentCard"

const CommentsList = () => {
  return (
    <ul className=" divide-y-[1px] divide-slate-300">
      <CommentCard />
      <CommentCard />
    </ul>
  )
}

export default CommentsList