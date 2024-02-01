import { useMutation } from "@tanstack/react-query"
import createFeed from "../api/createFeed"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useCreateFeed = () => {
  const navigate = useNavigate();
  const { mutate: createNewFeed, isPending, data } = useMutation({
    mutationFn: (post) =>  createFeed(post),
    onSuccess: (data) => {
      toast.success('Post created!!')
      navigate(`/p/${data.id}/edit`);

    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { createNewFeed, isPending, data };
}

export default useCreateFeed;