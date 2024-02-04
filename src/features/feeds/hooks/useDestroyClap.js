import { useMutation } from "@tanstack/react-query"
import destroyClap from "../api/desroyClap"
import toast from "react-hot-toast"

const useDestroyClap = () => {
  const { mutate: unClap, isPending: isUnclapping } = useMutation({
    mutationFn: destroyClap,
    onSuccess: () => {
      toast.success('Clap destroyed');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { unClap, isUnclapping }
}

export default useDestroyClap;