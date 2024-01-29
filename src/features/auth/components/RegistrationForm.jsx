import { useForm } from "react-hook-form";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import useRegister from "../hooks/useRegister";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, isRegistering } = useRegister();
  const onSubmit = (data) => {
    registerUser(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto md:w-[450px]">
       <section className=" space-y-4">
        <Input icon={<HiOutlineUser />} type='text' placeholder='Full Name' name='name' register={register} errors={errors}  />
        <Input icon={<HiOutlineEnvelope />} type='email' placeholder='Email' register={register} name='email' errors={errors} />
        <PasswordInput register={register} errors={errors} />
      </section>
      <button className="bg-black text-white rounded-full px-10 py-3 mx-auto block mt-6 capitalize" disabled={isRegistering}>{isRegistering ? 'Signing up': 'Sign up'}</button>
    </form>
  )
}

export default RegistrationForm