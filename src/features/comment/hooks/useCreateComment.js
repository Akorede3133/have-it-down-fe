import { useMutation } from "@tanstack/react-query"
import createComment from "../api/createComment"
import toast from "react-hot-toast"

const useCreateComment = () => {
  const {mutate: comment, isPending: isCommenting} = useMutation({
    mutationFn: ({ feedId, content }) => createComment(feedId, content),
    onSuccess: () => {
      toast.success('Comment created')
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { comment, isCommenting };
}

export default useCreateComment;