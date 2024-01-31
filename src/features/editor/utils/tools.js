import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";

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
}