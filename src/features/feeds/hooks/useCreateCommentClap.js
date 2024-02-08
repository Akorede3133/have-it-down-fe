import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createCommentClap } from "../api/createClap";

const useCreateCommentClap = () => {
  const query = useQueryClient();
  const { mutate: clap, isPending: isClapping } = useMutation({
    mutationFn: createCommentClap,
    onSuccess: () => {
      toast.success('comment Liked')
      query.invalidateQueries({ queryKey: ['feed'] })
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { clap, isClapping };
}

export default useCreateCommentClap;