import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const Publish = () => {
  const [tags, setTags] = useState([]);
  const addToTag = (e) => {
    const {value } = e.target;
    const sanitizedValue = value.toLowerCase().trim();
    if (e.key === 'Enter') {
      if (!tags.includes(sanitizedValue)) {
        setTags((prev) => [...prev, sanitizedValue]);
        e.target.value = '';
      }
    }
  }

  console.log(tags);
  
  return (
    <div className="absolute left-0 top-0 bg-white w-full py-4">
      <div className="flex justify-end w-[60%] mx-auto cursor-pointer sm:w-[70%]">
       <HiOutlineXMark className="text-2xl text-gray-400" />
      </div>
      <div className="w-[70%] sm:w-[70%] sm:mt-20 mx-auto flex flex-col sm:grid grid-cols-2 gap-20 justify-between">
        <section className="space-y-2">
          <h3 className="text-xl font-semibold capitalize">story preview</h3>
          <div className="w-full h-[200px] aspect-video bg-[#FAFAFA]"></div>
          <div className="flex flex-col gap-4">
            <input type="text" name="" id="" placeholder="Write a preview title" className="border-b pb-1 py-4" />
            <input type="text" name="" id="" placeholder="Write a preview subtitle" className="border-b pb-1 py-4" />
          </div>
        </section>
        <section className="">
          <h3>Publishing to: <span className="font-bold">Emiolasaheed</span></h3>
          <p className="text-sm py-3">Add or change topics (up to 5) so readers know what your story is about</p>
          <div className="flex flex-wrap items-start  bg-[#FAFAFA] sm:w-full gap-2 py-2 px-3 border">
              {
                tags.map((tag, index) => (
                  <p key={index} className="flex items-center gap-2 bg-white rounded-sm border py-1 shadow-sm px-3">
                  <span className=" text-sm">{tag}</span>
                  <HiOutlineXMark className="text-sm" />
                </p>
                ))
              }
               <input type="text" name="tags" placeholder="Add a topic..." className="bg-inherit outline-none text-sm py-1" onKeyDown={addToTag} />
            </div>
          <button className="bg-[#11780E] my-10 py-[7px] px-4 rounded-full text-white text-sm">Publish now</button>
        </section>
      </div>
    </div>
  )
}

export default Publish