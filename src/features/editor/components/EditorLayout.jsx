import { Outlet } from "react-router-dom"
import EditorHeader from "./EditorHeader"

const EditorLayout = () => {
  return (
    <div>
      <EditorHeader />
      <Outlet />
    </div>
  )
}

export default EditorLayout;