import { useState } from "react";
import useCreateComment from "../hooks/useCreateComment";

const CommentTextArea = ({ reply, feedId }) => {
  const [content, setContent] = useState('')
  const { comment, isCommenting } = useCreateComment();
  const handleCreateComment = () => {
    comment({ feedId, content });
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
    <div className={` ${reply && 'shadow-[0_0px_3px_rgba(0,0,0,0.2),-0_-0_3px_rgba(0,0,0,0.2)] p-4 rounded-md'} `}>
      <textarea name="" placeholder="What are you thoughts?"  className="w-full resize-none outline-none h-auto my-4 text-sm overflow-hidden" value={content} onChange={handleTextArea}></textarea>
      <div className="flex justify-end items-center gap-2">
        <button>Cancel</button>
        <button className="bg-[#11780E] py-[7px] px-4 rounded-full text-white text-sm"  onClick={handleCreateComment}>Respond</button>
      </div>
  </div>
  )
}

export default CommentTextArea