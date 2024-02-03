import useGetFeeds from "../hooks/useGetFeeds"
import FeedsCard from "./FeedsCard"

const FeedsList = () => {
  const { feeds, isGettingFeeds, error } = useGetFeeds();
  
  if (isGettingFeeds) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <ul>
      {
        feeds.map((feed) => (
          <FeedsCard key={feed.id} {...feed} />
        ))
      }
    </ul>
  )
}

export default FeedsList