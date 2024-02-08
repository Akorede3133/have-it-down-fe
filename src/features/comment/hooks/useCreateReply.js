import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import createReply from "../api/createReply"

const useCreateReply = () => {
  const query = useQueryClient();

  const {mutate: reply, isPending: isReplying} = useMutation({
    mutationFn: ({ parentId, content }) => createReply(parentId, content),
    onSuccess: () => {
      toast.success('Reply created')
      query.invalidateQueries({ queryKey: ['feed']})
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { reply, isReplying };
}

export default useCreateReply;