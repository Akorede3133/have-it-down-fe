import PropTypes from 'prop-types';

const Input = ({ icon, type, placeholder, register, name, errors } ) => {
  return (
    <section>
        <div  className="flex items-center gap-2 bg-[#F3F3F3] py-3 px-4 rounded-md">
          {icon}
          <input type={type}  placeholder={placeholder}  className=" bg-inherit outline-none text-sm w-full" {...register(`${name}`, {
            required: 'This field is required'
          })} />
        </div>
        {
           errors[`${name}`] && <span className='text-[12px] text-red-500'>{ errors[`${name}`].message}</span>
          }
    </section>
  )
}
Input.propTypes = {
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
}
export default Input