import ProfileAvatar from "../../../components/ProfileAvatar"

const CommentForm = () => {
  const handleTextArea = (e) => {
    const { target } = e;
    const scrollHeight = target.scrollHeight;
    target.style.height = `${scrollHeight}px`;
  }
  return (
    <section className="shadow-[0_4px_6px_rgba(0,0,0,0.2),-0_-4px_6px_rgba(0,0,0,0.2)] p-4 mt-4 rounded-md">
      <div className="flex items-center gap-3">
        <ProfileAvatar />
        <span>Saheed</span>
      </div>
      <div>
        <textarea name="" placeholder="What are you thoughts?"  className="w-full resize-none outline-none my-4 text-sm overflow-hidden" onChange={handleTextArea}></textarea>
      </div>
      <div className="flex justify-end items-center gap-2">
        <button>Cancel</button>
        <button className="bg-[#11780E] py-[7px] px-4 rounded-full text-white text-sm" >Respond</button>
      </div>
    </section>
  )
}

export default CommentForm