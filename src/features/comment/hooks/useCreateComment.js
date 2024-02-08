import { useMutation, useQueryClient } from "@tanstack/react-query"
import createComment from "../api/createComment"
import toast from "react-hot-toast"

const useCreateComment = () => {
  const query = useQueryClient();
  const {mutate: comment, isPending: isCommenting} = useMutation({
    mutationFn: ({ feedId, content }) => createComment(feedId, content),
    onSuccess: () => {
      toast.success('Comment created')
      query.invalidateQueries({ queryKey: ['feed']})

    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { comment, isCommenting };
}

export default useCreateComment;