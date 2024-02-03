import { useSelector } from "react-redux";
import EditorForm from "../components/EditorForm"
import Publish from "../components/Publish";
import Overlay from "../components/Overlay";

const Editor = () => {
  const { publish } = useSelector((state) => state.editor)
  return (
    <div className="">
      { publish ||  <EditorForm />}
      { publish && <Publish /> }
      {/* <Overlay /> */}
    </div>
 
  )
}

export default Editor;