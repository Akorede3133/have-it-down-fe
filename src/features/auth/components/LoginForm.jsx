import { HiOutlineEnvelope } from "react-icons/hi2";
import Input from "./Input";
import { useForm } from "react-hook-form";
import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input icon={<HiOutlineEnvelope />} type='email' placeholder='Email' register={register} />
      <PasswordInput register={register} />
      <button className="bg-black text-white rounded-full px-10 py-3 mx-auto block mt-6">Login</button>
    </form>
  )
}

export default LoginForm