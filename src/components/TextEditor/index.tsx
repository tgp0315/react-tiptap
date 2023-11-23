import React from 'react';
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextEditorProps } from '../../types/TextEditor';
import Bold from '@tiptap/extension-bold';
import Strike from '@tiptap/extension-strike'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
// import BubbleMenu from '@tiptap/extension-bubble-menu'
import './index.css'
const TextEditor: React.FC<TextEditorProps> = ({content}) => {
  const editor = useEditor({
    extensions: [
      StarterKit, 
      Bold, 
      Strike, 
      Underline, 
      Highlight.configure({
        multicolor: true
      }), 
      Italic,
      // BubbleMenu.
    ],
    content,
  })
  const handleToggleBold = () => editor?.chain().focus().toggleBold().run()
  const handleToggleItalic = () => editor?.chain().focus().toggleItalic().run()
  const handleToggleUnderline = () => editor?.chain().focus().toggleUnderline().run()
  const handleToggleHighlight = () => editor?.chain().focus().toggleHighlight({color: '#ffc078'}).run()
  return (
    <div>
      <EditorContent editor={editor} />
      {/* <div className='menu-one'>
        <button onClick={handleToggleBold}>加粗</button>
        <button onClick={handleToggleItalic}>斜体</button>
        <button onClick={handleToggleUnderline}>下划线</button>
        <button onClick={handleToggleHighlight}>上色</button>
      </div> */}
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={handleToggleBold}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          加粗
        </button>
        <button
          onClick={handleToggleItalic}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          斜体
        </button>
        <button
          onClick={handleToggleUnderline}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          下划线
        </button>
        <button
          onClick={handleToggleHighlight}
          className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}
        >
          上色
        </button>
      </BubbleMenu>}
    </div>
  )
}

export default TextEditor