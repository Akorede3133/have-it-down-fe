import { useSelector } from "react-redux";
import EditorForm from "../components/EditorForm"
import Publish from "../components/Publish";

const Editor = () => {
  const { publish } = useSelector((state) => state.editor)
  return (
    <>
      <EditorForm />
      { publish && <Publish /> }
    </>
 
  )
}

export default Editor;