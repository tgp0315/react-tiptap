import { useCallback, useMemo, useState } from "react";
import { BlockNoteEditor, BlockSchema } from "@oneself/core";
import { RiLink } from "react-icons/ri";

import { ToolbarInputDropdownButton } from "../../../SharedComponents/Toolbar/components/ToolbarInputDropdownButton";
import { ToolbarButton } from "../../../SharedComponents/Toolbar/components/ToolbarButton";
import { EditHyperlinkMenu } from "../../../HyperlinkToolbar/components/EditHyperlinkMenu/components/EditHyperlinkMenu";
import { useSelectedBlocks } from "../../../hooks/useSelectedBlocks";
import { useEditorChange } from "../../../hooks/useEditorChange";
import { formatKeyboardShortcut } from "../../../utils";

export const CreateLinkButton = <BSchema extends BlockSchema>(props: {
  editor: BlockNoteEditor<BSchema>;
}) => {
  const selectedBlocks = useSelectedBlocks(props.editor);

  const [url, setUrl] = useState<string>(
    props.editor.getSelectedLinkUrl() || ""
  );
  const [text, setText] = useState<string>(props.editor.getSelectedText());

  useEditorChange(props.editor, () => {
    setText(props.editor.getSelectedText() || "");
    setUrl(props.editor.getSelectedLinkUrl() || "");
  });

  const update = useCallback(
    (url: string, text: string) => {
      props.editor.createLink(url, text);
      props.editor.focus();
    },
    [props.editor]
  );

  const show = useMemo(() => {
    for (const block of selectedBlocks) {
      if (block.content === undefined) {
        return false;
      }
    }

    return true;
  }, [selectedBlocks]);

  if (!show) {
    return null;
  }

  return (
    <ToolbarInputDropdownButton>
      <ToolbarButton
        mainTooltip={"Create Link"}
        secondaryTooltip={formatKeyboardShortcut("Mod+K")}
        icon={RiLink}
      />
      <EditHyperlinkMenu url={url} text={text} update={update} />
    </ToolbarInputDropdownButton>
  );
};
