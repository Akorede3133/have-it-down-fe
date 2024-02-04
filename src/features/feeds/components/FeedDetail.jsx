import FeedDetailHeader from "./FeedDetailHeader"
import { PiHandsClappingThin } from "react-icons/pi";
import { HiOutlineChatBubbleOvalLeft, HiOutlineBookmark } from "react-icons/hi2";
import FeedInteraction from "./FeedInteraction";
import FeedBody from "./FeedBody";

const FeedDetail = () => {
  const DEFAULT_INITIAL_DATA = () => {
    return {
      "time": new Date().getTime(),
      "blocks": [
        {
          "type": "header",
          "data": {
            "text": "This is my awesome editor!",
            "level": 4
          },
          
        },
      ]
    }
  }
  const blocks = DEFAULT_INITIAL_DATA().blocks;

  return (
    <div>
      <FeedDetailHeader />
      <FeedBody blocks={blocks}  />
      <FeedInteraction />   
    </div>
  )
}

export default FeedDetail