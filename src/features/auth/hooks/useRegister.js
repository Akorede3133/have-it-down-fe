import { useMutation } from "@tanstack/react-query"
import register from "../api/registerApi"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useRegister = () => {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending: isRegistering } = useMutation({
    mutationFn: (data) => register(data),
    onSuccess: () => {
      toast.success('User registration successful!!');
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return { registerUser, isRegistering }
}

export default useRegister;