import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import updateFeed  from "../api/updateFeed"

const useUpdateFeed = () => {
  const { mutate: update, isPending } = useMutation({
    mutationFn: ({ content, id }) => updateFeed(content, id),
    onSuccess: () => {
      toast.success('Post updated!!')
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { update, isPending };
}

export default useUpdateFeed;