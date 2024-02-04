import { useMutation, useQueryClient } from "@tanstack/react-query"
import destroyClap from "../api/destroyClap"
import toast from "react-hot-toast"

const useDestroyClap = () => {
  const query =  useQueryClient();
  const { mutate: unClap, isPending: isUnclapping } = useMutation({
    mutationFn:({ feedId, userId }) =>  destroyClap(feedId, userId),
    onSuccess: () => {
      toast.success('Clap destroyed');
      query.invalidateQueries({ queryKey: ['feed']})
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { unClap, isUnclapping }
}

export default useDestroyClap;