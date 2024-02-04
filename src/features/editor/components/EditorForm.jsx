import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { tools } from "../utils/tools";
import EditorJS from "@editorjs/editorjs";
import { setData, updateTitle } from "../../../redux/EditorSlice";
const EDITOR_HOLDER_ID = 'editorjs';

const EditorForm = () => {
  const { title } = useSelector((state) => state.editor);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.editor);
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: EDITOR_HOLDER_ID,
        tools,
        data,
        placeholder: 'Let`s write an awesome story...',
        onChange: async (api, event) => {
          const newData = await api.saver.save();
          console.log("New Data:", newData); 
          dispatch(setData(newData))
        },
      });
      ref.current = editor;
    }
  
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
        ref.current = null;
      }
    };
  }, []);
  const handleTextArea = (e) => {
    const target = e.target;
    const { value } = target;
    dispatch(updateTitle(value));
    const scrollHeight = target.scrollHeight;
    target.style.height = `${scrollHeight}px`;
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return ref.current.focus()
    }
  }
  return (
    <div>
      <textarea name="title" placeholder="Title" className=" w-full outline-none text-4xl placeholder:text-2xl tracking-widest h-[40px] resize-none overflow-hidden" value={title} onChange={handleTextArea} onKeyDown={handleKeyDown}  />
      <div id={EDITOR_HOLDER_ID} className="" />
    </div>
  );
};

export default EditorForm;



