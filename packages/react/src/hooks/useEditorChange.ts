import { BlockNoteEditor, BlockSchema } from "../../../core/src";
import { useEditorContentChange } from "./useEditorContentChange";
import { useEditorSelectionChange } from "./useEditorSelectionChange";

export function useEditorChange<BSchema extends BlockSchema>(
  editor: BlockNoteEditor<BSchema>,
  callback: () => void
) {
  useEditorContentChange(editor, callback);
  useEditorSelectionChange(editor, callback);
}
