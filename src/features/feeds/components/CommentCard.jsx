import CommentCardFooter from "./CommentCardFooter"
import CommentCardHeader from "./CommentCardHeader"

const CommentCard = () => {
  return (
    <div>
      <CommentCardHeader />
      <p className="text-sm">Excellent article. This is what I&apos;ve been saying for ages already. Preach, bro!</p>
      <CommentCardFooter />
    </div>
  )
}

export default CommentCard