import { useQuery } from "@tanstack/react-query"
import getFeeds from "../api/getFeeds"

const useGetFeeds = () => {
  const { data: feeds, isPending: isGettingFeeds, error } = useQuery({
    queryFn: ( )=> getFeeds(),
    queryKey: ['feeds']
  })

  return { feeds, isGettingFeeds, error };
}

export default useGetFeeds;