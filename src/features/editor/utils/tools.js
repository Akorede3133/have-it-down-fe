import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import ImageTool from '@editorjs/image';

// const uploadImageByURL = (e) => {
//   const link = new Promise((resolve, reject) => {
//     try {
//       resolve(e)
//     } catch (error) {
//       reject(error)
//     }
//   })

  // return link.then(url => {
//     return {
//       success: 1,
//       file: { url }
//     }
//   })
// }

export const tools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checkList: CheckList,
  list: {
    class: List,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header...',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2
    }
  },
  delimiter: Delimiter,
  link: {
    class: Link,
    inlineToolbar: true,
  },
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:3000/uploadImage'
      }
    }
  }
}