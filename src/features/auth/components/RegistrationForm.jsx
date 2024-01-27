import { useForm } from "react-hook-form";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

const RegistrationForm = () => {
  const { register} = useForm();
  return (
    <form className="w-[80%] mx-auto md:w-[450px]">
       <section className=" space-y-4">
        <Input icon={<HiOutlineUser />} type='text' placeholder='Full Name' register={register}  />
        <Input icon={<HiOutlineEnvelope />} type='email' placeholder='Email' register={register} name="email" />
        <PasswordInput register={register} />
      </section>
      <button className="bg-black text-white rounded-full px-10 py-3 mx-auto block mt-6 capitalize">Sign up</button>
    </form>
  )
}

export default RegistrationForm