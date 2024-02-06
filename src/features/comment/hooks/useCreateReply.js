import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import createReply from "../api/createReply"

const useCreateReply = () => {
  const {mutate: reply, isPending: isReplying} = useMutation({
    mutationFn: ({ parentId, content }) => createReply(parentId, content),
    onSuccess: () => {
      toast.success('Reply created')
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { reply, isReplying };
}

export default useCreateReply;