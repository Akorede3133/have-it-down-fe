import { createPortal } from "react-dom"
import { HiOutlineXMark } from "react-icons/hi2"
import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"

const Comments = ({ feedId }) => {
  return (
      createPortal (
        <div className="fixed h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.2)]">
        <div className=" absolute z-30 sm:w-[50%] md:w-[400px] sm:left-[100%] sm:-translate-x-full shadow-xl left-0 bottom-0 sm:top-0 rounded-tl-lg w-full h-[95%] sm:h-full overflow-auto  bg-white py-4 px-4">
        <section className="flex justify-between items-center">
          <h3>Responses(11)</h3>
          <HiOutlineXMark className="text-2xl text-slate-500" />
        </section>
        <CommentForm feedId={feedId} />
        <CommentsList />
        </div>
      </div>, document.body
    )
  )
}

export default Comments