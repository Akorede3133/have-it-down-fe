import FeedDetailHeader from "./FeedDetailHeader"
import { PiHandsClappingThin } from "react-icons/pi";
import { HiOutlineChatBubbleOvalLeft, HiOutlineBookmark } from "react-icons/hi2";
import FeedInteraction from "./FeedInteraction";

const FeedDetail = () => {
  return (
    <div>
      <FeedDetailHeader />
      <FeedInteraction />   
    </div>
  )
}

export default FeedDetail