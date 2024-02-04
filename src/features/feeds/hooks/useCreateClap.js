import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import createClap from "../api/createClap";

const useCreateClap = () => {
  const query = useQueryClient();
  const { mutate: clap, isPending: isClapping } = useMutation({
    mutationFn: createClap,
    onSuccess: () => {
      toast.success('Post Liked')
      query.invalidateQueries({ queryKey: ['feed'] })
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { clap, isClapping };
}

export default useCreateClap;