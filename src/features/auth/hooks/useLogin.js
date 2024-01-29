import { useMutation } from "@tanstack/react-query";
import login from "../api/loginApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: loginUser, isPending: isLoggingIn } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success('User successfully logged in');
      navigate('/')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return { loginUser, isLoggingIn };
}

export default useLogin;