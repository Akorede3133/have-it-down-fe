import FeedDetailHeader from "./FeedDetailHeader"
import FeedInteraction from "./FeedInteraction";
import FeedBody from "./FeedBody";
import { useParams } from "react-router-dom";

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

  const { id } = useParams();
  

  return (
    <div>
      <FeedDetailHeader />
      <FeedBody blocks={blocks}  />
      <FeedInteraction />   
    </div>
  )
}

export default FeedDetail