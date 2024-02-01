import { useEffect, useRef, useState } from "react"
import { tools } from "../utils/tools";
import EditorJS from "@editorjs/editorjs";

const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
  }
}

const EDITOR_HOLDER_ID = 'editorjs';

const EditorForm = () => {
  const [data, setData] = useState(DEFAULT_INITIAL_DATA);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: EDITOR_HOLDER_ID,
        tools,
        data,
        // onReady: () => {
        //   ref.current = editor;
        //   console.log('Editor.js is ready to work!')
        // },
        onChange: async (api, event) => {
          const data = await api.saver.save();
          setData(data);
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