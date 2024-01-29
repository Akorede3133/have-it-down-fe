import { useState } from "react";
import { HiOutlineKey, HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const PasswordInput = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(errors);
  const handleShowPassword = () => {
    setShowPassword(true);
  }
  const handleHidePassword = () => {
    setShowPassword(false);
  }
  return (
    <section>
      <div className="flex items-center justify-between gap-2 bg-[#F3F3F3] py-3 px-4 rounded-md">
      <div className="flex items-center gap-2">
        <HiOutlineKey className="mt-1" />
          { showPassword ? 
             <input type='text' placeholder='Password' className=" bg-inherit outline-none text-sm" {...register('password', {
              required: 'This field is required',
              minLength: 6

             })} /> 
            :
            <input type='password' placeholder='Password' className=" bg-inherit outline-none text-sm" {...register('password', {
              required: 'This field is required',
            })} />
          }
         
        </div>
        <div>
          {
            showPassword ? 
            <button type="button" className=" cursor-pointer" onClick={handleHidePassword}>
                <HiOutlineEye />
            </button>
            : <button type="button" className=" cursor-pointer" onClick={handleShowPassword}>
              <HiOutlineEyeSlash />
            </button>
          }
        </div>
      </div>
      {
        errors['password'] && <span className="text-[12px] text-red-500">{errors['password'].message}</span>
      }
    </section>
  )
}

export default PasswordInput