import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { tools } from "../utils/tools";
import EditorJS from "@editorjs/editorjs";
import { setData } from "../../../redux/EditorSlice";

const EDITOR_HOLDER_ID = 'editorjs';

const EditorForm = () => {
  const [title, setTitle] = useState('');
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
  }, [data, dispatch]);
  const handleTextArea = (e) => {
    const target = e.target;
    const { value } = target;
    setTitle(value);
    const scrollHeight = target.scrollHeight;
    target.style.height = `${scrollHeight}px`;
  }
  return (
    <>
      <textarea name="title" placeholder="Title" className=" w-full outline-none placeholder:text-2xl tracking-widest h-[30px] resize-none overflow-hidden" value={title} onChange={handleTextArea}  />
      <div id={EDITOR_HOLDER_ID} className="" />
    </>
  );
};

export default EditorForm;



