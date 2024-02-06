import FeedDetailHeader from "./FeedDetailHeader"
import FeedInteraction from "./FeedInteraction";
import FeedBody from "./FeedBody";
import { useParams } from "react-router-dom";
import useGetFeed from "../hooks/useGetFeed";
import Comments from "../../comment/components/Comments";
const FeedDetail = () => {
  const { id } = useParams();

  const { feed, isGettingFeed, error } = useGetFeed(id);
  console.log(feed);

  if (isGettingFeed) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
        <div>
        <FeedDetailHeader title={feed.title} userName={feed.User.name} />
        <FeedInteraction feedId={feed.id} clapsCount={feed.claps} claps={feed.Claps} />
        <FeedBody blocks={feed.content}  />
        <FeedInteraction />
        <Comments feedId={id} />
      </div>
  )
   
}

export default FeedDetail