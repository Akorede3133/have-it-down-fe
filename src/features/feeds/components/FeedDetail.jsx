import FeedDetailHeader from "./FeedDetailHeader"
import FeedInteraction from "./FeedInteraction";
import FeedBody from "./FeedBody";
import { useParams } from "react-router-dom";
import useGetFeed from "../hooks/useGetFeed";
import Comments from "../../comment/components/Comments";
import { useState } from "react";
const FeedDetail = () => {
  const { id } = useParams();
  const [showComments, setShowComments] = useState(false);
  const hideComments = () => setShowComments(false);
  const displayComments = () => setShowComments(true);
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
        <FeedInteraction displayComments={displayComments} />
        {showComments && <Comments feedId={id} hideComments={hideComments} />}
      </div>
  )
   
}

export default FeedDetail