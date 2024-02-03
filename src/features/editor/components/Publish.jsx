import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { hidePublish, updateFeedTags, updateTitle } from "../../../redux/EditorSlice";

const Publish = () => {
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const { title, data } = useSelector((state) => state.editor);

  const addToTag = (e) => {
    const {value } = e.target;
    const sanitizedValue = value.toLowerCase().trim();
    if (e.key === 'Enter') {
      if (sanitizedValue && !tags.includes(sanitizedValue) && tags.length < 5) {
        setTags((prev) => [...prev, sanitizedValue]);
        dispatch(updateFeedTags(tags));
        e.target.value = '';
      }
    }
  }

  const deleteFromTags = (e) => {
    const {value } = e.target;

    if (e.key === 'Backspace' && !value) {
      const newTags = tags.slice();
      newTags.pop();
      setTags(newTags);
      dispatch(updateFeedTags(tags));

    }
  }

  const deleteTag = (index) => {
    setTags((prev) => prev.filter((tag, idx) => idx !== index));
    dispatch(updateFeedTags(tags));
  }
  const getImageFromFeed = () => {
    const { blocks } = data;
    const block = blocks.find((block) => block.type === 'image');
    return block?.data?.file?.url;

  }
  return (
    <div className="absolute z-10 left-0 top-0 bg-white w-full h-full  py-4">
      <button className="flex justify-end w-[60%] mx-auto cursor-pointer sm:w-[70%]" onClick={() => dispatch(hidePublish())}>
       <HiOutlineXMark className="text-2xl text-gray-400" />
      </button>
      <div className="w-[70%] sm:w-[70%] sm:mt-20 mx-auto flex flex-col sm:grid grid-cols-2 gap-20 justify-between">
        <section className="space-y-2">
          <h3 className="text-xl font-semibold capitalize">story preview</h3>
          <div className="w-full flex justify-center items-center h-[200px] aspect-video bg-[#FAFAFA] overflow-hidden">
            {
              getImageFromFeed() ?
               <img src={getImageFromFeed()} alt="" className=" object-cover" />
               : <p className="text-sm text-slate-400 text-center w-[50%]">Include a high-quality image in your story to make it more inviting to readers.</p>
            }
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" name="" id="" placeholder="Write a preview title" className="border-b pb-1 py-4" value={title} onChange={(e) => dispatch(updateTitle(e.target.value))} />
            <input type="text" name="" id="" placeholder="Write a preview subtitle" className="border-b pb-1 py-4" defaultValue={data.blocks[0].data.text} />
          </div>
        </section>
        <section className="">
          <h3>Publishing to: <span className="font-bold">Emiolasaheed</span></h3>
          <p className="text-sm py-3">Add or change topics (up to 5) so readers know what your story is about</p>
          <div className="flex flex-wrap items-start  bg-[#FAFAFA] sm:w-full gap-2 py-2 px-3 border" onKeyDown={deleteFromTags}>
              {
                tags.map((tag, index) => (
                  <p key={index} className="flex items-center gap-2 bg-white rounded-sm border py-1 shadow-sm px-3">
                  <span className=" text-sm">{tag}</span>
                  <button onClick={() => deleteTag(index)}>
                    <HiOutlineXMark className="text-sm" />
                  </button>
                  
                </p>
                ))
              }
               { tags.length < 5 && <input type="text" name="tags" placeholder="Add a topic..." className="bg-inherit outline-none text-sm py-1" onKeyDown={addToTag} />
               }
            </div>
          <button className="bg-[#11780E] my-10 py-[7px] px-4 rounded-full text-white text-sm">Publish now</button>
        </section>
      </div>
    </div>
  )
}

export default Publish