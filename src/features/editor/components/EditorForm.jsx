import { useEffect, useRef, useState } from "react"
import { tools } from "../utils/tools";
import EditorJS from "@editorjs/editorjs";
import useCreateFeed from "../../feeds/hooks/useCreateFeed";
import { useNavigate } from "react-router-dom";

// const DEFAULT_INITIAL_DATA = () => {
//   return {
//     "time": new Date().getTime(),
//     "blocks": [
//       {
//         "type": "header",
//         "data": {
//           "text": "This is my awesome editor!",
//           "level": 1
//         }
//       },
//     ]
//   }
// }

const EDITOR_HOLDER_ID = 'editorjs';

const EditorForm = () => {
  const [data, setData] = useState('');
  const ref = useRef();
  console.log(data);
  const { createNewFeed, isPending, data: feed } = useCreateFeed();
  const navigate = useNavigate();
  console.log(feed);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: EDITOR_HOLDER_ID,
        tools,
        data,
        placeholder: 'Let`s write an awesome story...',
        onChange: async (api, event) => {
          const data = await api.saver.save();
          setData(data);
          createNewFeed({ content: data.blocks })
        }
      })
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <div id={EDITOR_HOLDER_ID} className="" />
  )
}

export default EditorForm;