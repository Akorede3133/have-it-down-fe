import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { tools } from "../utils/tools";
import EditorJS from "@editorjs/editorjs";
import { setData } from "../../../redux/EditorSlice";

const EDITOR_HOLDER_ID = 'editorjs';

const EditorForm = () => {
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
  }, []);
  
  return (
    <div id={EDITOR_HOLDER_ID} className="" />
  );
};

export default EditorForm;



