import { useEffect, useRef, useState } from "react"
import { tools } from "../utils/tools";
import EditorJS from "@editorjs/editorjs";

const EDITOR_HOLDER_ID = 'editorjs';

const EditorForm = () => {
  const [data, setData] = useState('');
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
          setData(newData);
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



