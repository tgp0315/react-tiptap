import { BlockSchema } from "@blocknote/core";

import { DragHandleMenu, DragHandleMenuProps } from "./DragHandleMenu";
import { RemoveBlockButton } from "./DefaultButtons/RemoveBlockButton";
import { BlockColorsButton } from "./DefaultButtons/BlockColorsButton";

export const DefaultDragHandleMenu = <BSchema extends BlockSchema>(
  props: DragHandleMenuProps<BSchema>
) => (
  <DragHandleMenu>
    <RemoveBlockButton {...props}>Delete</RemoveBlockButton>
    <BlockColorsButton {...props}>Colors</BlockColorsButton>
  </DragHandleMenu>
);
