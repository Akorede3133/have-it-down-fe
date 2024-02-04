import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import createClap from "../api/createClap";

const useCreateClap = () => {
  const { mutate: clap, isPending: isClapping } = useMutation({
    mutationFn: createClap,
    onSuccess: () => {
      toast.success('Post Liked')
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { clap, isClapping };
}

export default useCreateClap;