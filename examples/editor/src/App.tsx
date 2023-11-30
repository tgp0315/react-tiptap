// import logo from './logo.svg'
import "../../../packages/core/src/style.css";
import { BlockNoteView, useBlockNote } from "../../../packages/react/src";
import styles from "./App.module.css";
import { uploadToTmpFilesDotOrg_DEV_ONLY } from "../../../packages/core/src";

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

function App() {
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks);
    },
    domAttributes: {
      editor: {
        class: styles.editor,
        "data-test": "editor",
      },
    },
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
  });

  // Give tests a way to get prosemirror instance
  (window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;

  return <BlockNoteView editor={editor} />;
}

export default App;
