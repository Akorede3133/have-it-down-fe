import { Outlet } from "react-router-dom"
import EditorHeader from "./EditorHeader"

const EditorLayout = () => {
  return (
    <div className="w-[90%] sm:w-[75%] mx-auto">
      <EditorHeader />
      <main className="sm:w-[85%] mx-auto">
      <Outlet />
      </main>
    </div>
  )
}

export default EditorLayout;