const Feeds = () => {
  return (
    <div className="lg:grid grid-cols-[2.5fr,1fr]">
      <div className="lg:min-h-screen lg:border-r">
        <div className=" border-b lg:w-[75%] mx-auto ">Main header</div>
        <div className="lg:w-[75%] mx-auto ">Main content</div>
      </div>
      <aside className="hidden lg:block px-8">aside</aside>
    </div>
  )
}

export default Feeds