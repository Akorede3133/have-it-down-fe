import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import ImageTool from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import CodeTool from '@editorjs/code';

// const uploadImageByURL = (e) => {
//   const link = new Promise((resolve, reject) => {
//     try {
//       resolve(e)
//     } catch (error) {
//       reject(error)
//     }
//   })

//   return link.then(url => {
//     return {
//       success: 1,
//       file: { url }
//     }
//   })
// }

export const tools = {
  checkList: CheckList,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
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
  inlineCode: {
    class: InlineCode,
    inlineToolbar: true,
  },
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:3000/uploadImage',
        byUrl: 'http://localhost:3000/fetchUrl',
      }
    }
  },
  codeTool: {
    class: CodeTool,
    inlineToolbar: true
  }
}