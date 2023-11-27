import { useRef, useState } from "react";
import { RiExternalLinkFill, RiLinkUnlink } from "react-icons/ri";
import { BlockSchema } from "@oneself/core";

import { HyperlinkToolbarProps } from "./HyperlinkToolbarPositioner";
import { Toolbar } from "../../SharedComponents/Toolbar/components/Toolbar";
import { ToolbarButton } from "../../SharedComponents/Toolbar/components/ToolbarButton";
import { EditHyperlinkMenu } from "./EditHyperlinkMenu/components/EditHyperlinkMenu";

export const DefaultHyperlinkToolbar = <BSchema extends BlockSchema>(
  props: HyperlinkToolbarProps<BSchema>
) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const editMenuRef = useRef<HTMLDivElement | null>(null);

  if (isEditing) {
    return (
      <EditHyperlinkMenu
        url={props.url}
        text={props.text}
        update={props.editHyperlink}
        // TODO: Better way of waiting for fade out
        onBlur={(event) =>
          setTimeout(() => {
            if (editMenuRef.current?.contains(event.relatedTarget)) {
              return;
            }
            setIsEditing(false);
          }, 500)
        }
        ref={editMenuRef}
      />
    );
  }

  return (
    <Toolbar
      onMouseEnter={props.stopHideTimer}
      onMouseLeave={props.startHideTimer}>
      <ToolbarButton
        mainTooltip="Edit"
        isSelected={false}
        onClick={() => setIsEditing(true)}>
        Edit Link
      </ToolbarButton>
      <ToolbarButton
        mainTooltip="Open in new tab"
        isSelected={false}
        onClick={() => {
          window.open(props.url, "_blank");
        }}
        icon={RiExternalLinkFill}
      />
      <ToolbarButton
        mainTooltip="Remove link"
        isSelected={false}
        onClick={props.deleteHyperlink}
        icon={RiLinkUnlink}
      />
    </Toolbar>
  );
};
