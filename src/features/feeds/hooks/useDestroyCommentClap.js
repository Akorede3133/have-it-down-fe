import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import destroyCommentClap from "../api/destroyCommentClap";

const useDestroyCommentClap = () => {
  const query =  useQueryClient();
  const { mutate: unClap, isPending: isUnclapping } = useMutation({
    mutationFn:({ commentId, userId }) =>  destroyCommentClap(commentId, userId),
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

export default useDestroyCommentClap;