const Input = ({ icon, type, placeholder, register, name } ) => {
  return (
    <section className="flex items-center gap-2 bg-[#F3F3F3] py-3 px-4 rounded-md">
        {icon}
        <input type={type}  placeholder={placeholder}  className=" bg-inherit outline-none text-sm" {...register(`${name}`)} />
    </section>
  )
}

export default Input