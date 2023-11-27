import { BlockNoteEditor, BlockSchema } from "@oneself/core";
import { useEditorContentChange } from "./useEditorContentChange";
import { useEditorSelectionChange } from "./useEditorSelectionChange";

export function useEditorChange<BSchema extends BlockSchema>(
  editor: BlockNoteEditor<BSchema>,
  callback: () => void
) {
  useEditorContentChange(editor, callback);
  useEditorSelectionChange(editor, callback);
}
