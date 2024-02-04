import ProfileAvatar from "../../../components/ProfileAvatar"

const FeedDetailHeader = () => {
  return (
    <div>
      <h1 className=" text-3xl sm:leading-[52px] sm:text-[2.63rem] font-bold">Node.js: The fastest web framework in 2024</h1>
      
      <section className="flex items-start gap-2 my-4">
        <ProfileAvatar />
        <div>
          <div className="flex items-center gap-2">
            <p className=" font-medium">Mayank Choubey</p>
            <span className="w-[3px] h-[3px] rounded-full sm:inline-block bg-gray-500"></span>

          <button className="text-green-500">Follow</button>

          </div>

          <div className="text-sm sm:flex gap-2 items-center">
            <p> Published in Tech Tonic</p>
            <span className="w-[3px] h-[3px] rounded-full hidden sm:inline-block bg-gray-500"></span>
            <p className="flex gap-2 items-center">
              <span>6 min read</span>
              <span className="w-[3px] h-[3px] rounded-full inline-block bg-gray-500"></span>
              <span>Jan 1</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeedDetailHeader;