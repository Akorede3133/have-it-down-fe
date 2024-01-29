import { HiOutlineEnvelope } from "react-icons/hi2";
import Input from "./Input";
import { useForm } from "react-hook-form";
import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loginUser, isLoggingIn } = useLogin();
  const onSubmit = (data) => {
    loginUser(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto md:w-[450px]">
      <section className=" space-y-4">
        <Input icon={<HiOutlineEnvelope />} type='email' placeholder='Email' register={register} name="email" errors={errors} />
        <PasswordInput register={register} errors={errors} />
      </section>
      <button className="bg-black text-white rounded-full px-10 py-3 mx-auto block mt-6" disabled={isLoggingIn}>{isLoggingIn ? 'Logging in' : 'Login'}</button>
      <p className="mt-10 text-center">Don&apos;t have an account? <Link to='/register' className=" underline">Join us today</Link></p>
    </form>
  )
}

export default LoginForm