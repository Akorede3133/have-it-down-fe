import { useMutation } from "@tanstack/react-query"
import createFeed from "../api/createFeed"
import toast from "react-hot-toast"

const useCreateFeed = () => {
  const { mutate: createNewFeed, isPending } = useMutation({
    mutationFn: createFeed,
    onSuccess: () => {
      toast.success('Post created!!')
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { createNewFeed, isPending };
}

export default useCreateFeed;