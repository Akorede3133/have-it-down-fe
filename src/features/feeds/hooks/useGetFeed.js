import { useQuery } from "@tanstack/react-query"
import getFeed from "../api/getFeed"

const useGetFeed = (id) => {
  const { data: feed, isPending: isGettingFeed, error } = useQuery({
    queryFn: ( )=> getFeed(id),
    queryKey: ['feed', id]
  })

  return { feed, isGettingFeed, error };
}

export default useGetFeed;