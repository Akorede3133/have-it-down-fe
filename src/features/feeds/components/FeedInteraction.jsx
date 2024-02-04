import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import { PiHandsClappingThin } from "react-icons/pi"

const FeedInteraction = () => {
  return (
    <section className="flex sm justify-between sm:justify-start border-b border-t py-2 sm:gap-10 items-center">
        <button className="flex items-center gap-2">
          <PiHandsClappingThin className="text-gray-400 text-xl" />
          <span className="text-sm">643</span>
        </button>
        <button className="flex items-center gap-2">
          <HiOutlineChatBubbleOvalLeft className="text-gray-400 text-xl" />
          <span>19</span>
        </button>
        <button className="sm:hidden">
          <HiOutlineBookmark className="text-gray-400 text-xl" />
        </button>
      </section>
  )
}

export default FeedInteraction