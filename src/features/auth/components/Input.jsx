const Input = ({ icon, type, placeholder, register } ) => {
  return (
    <section className="flex items-center gap-2 bg-[#F3F3F3] py-3 px-4 rounded-md w-[350px]">
        {icon}
        <input type={type}  placeholder={placeholder}  className=" bg-inherit outline-none" {...register('name')} />
    </section>
  )
}

export default Input