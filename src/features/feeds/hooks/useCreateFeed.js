import { useMutation } from "@tanstack/react-query"
import createFeed from "../api/createFeed"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useCreateFeed = () => {
  const navigate = useNavigate();
  const { mutate: createNewFeed, isPending, data } = useMutation({
    mutationFn: createFeed,
    onSuccess: (data) => {
      if (data?.draft) {
        toast.success('Post saved as draft')

      } else {
        toast.success('Post created!!')
      }
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { createNewFeed, isPending, data };
}

export default useCreateFeed;