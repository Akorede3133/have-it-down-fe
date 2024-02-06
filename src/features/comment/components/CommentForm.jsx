import ProfileAvatar from "../../../components/ProfileAvatar"
import CommentTextArea from "./CommentTextArea"

const CommentForm = () => {
  return (
    <section className="shadow-[0_4px_6px_rgba(0,0,0,0.2),-0_-4px_6px_rgba(0,0,0,0.2)] p-4 mt-4 rounded-md">
      <div className="flex items-center gap-3">
        <ProfileAvatar />
        <span>Saheed</span>
      </div>
      <CommentTextArea />
    </section>
  )
}

export default CommentForm