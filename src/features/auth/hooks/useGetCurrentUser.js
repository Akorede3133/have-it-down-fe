import { useQuery } from "@tanstack/react-query"
import getCurrentUser from "../api/getCurrentUser"

const useGetCurrentUser = () => {
  const { data: user, isPending, error } = useQuery({
    queryFn: () => getCurrentUser(),
    queryKey: ['user']
  })

  return { user, isPending, error };
};

export default useGetCurrentUser;