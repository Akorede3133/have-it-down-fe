import { useState } from "react";
import useCreateComment from "../hooks/useCreateComment";
import useCreateReply from "../hooks/useCreateReply";

const CommentTextArea = ({ parentId, feedId, user, setShowReplyBox }) => {
  const [content, setContent] = useState('')
  const { comment, isCommenting } = useCreateComment();
  const { reply, isReplying } = useCreateReply();
  const handleCreateComment = () => {
    comment({ feedId, content });
    if (!isCommenting) {
      setContent('')
    }
  }
  const handleCreateReply = () => {
    reply({ parentId, content  })
    if (!isReplying) {
      setShowReplyBox(false);
    }
  }
  const handleTextArea = (e) => {
    const { target } = e;
    setContent(target.value);
    const height = 40;
    const scrollHeight = target.scrollHeight;
    console.log(height, scrollHeight);

    target.style.height = target.value  ? `${scrollHeight}px` : `${height}px`;
  }
  return (
    <div className={` ${parentId && 'shadow-[0_0px_3px_rgba(0,0,0,0.2),-0_-0_3px_rgba(0,0,0,0.2)] p-4 rounded-md ml-4'} `}>
      <textarea name=""  placeholder={parentId ? `Replying to ${user}` : 'What are your thoughts?'} className="w-full resize-none outline-none h-auto my-4 text-sm overflow-hidden" value={content} onChange={handleTextArea}></textarea>
      <div className="flex justify-end items-center gap-2">
        <button onClick={() => setShowReplyBox(false)}>Cancel</button>
        <button className="bg-[#11780E] py-[7px] px-4 rounded-full text-white text-sm"  onClick={  parentId ? handleCreateReply : handleCreateComment} disabled={isCommenting || isReplying}>Respond</button>
      </div>
  </div>
  )
}

export default CommentTextArea