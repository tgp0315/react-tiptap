import React from "react";

import CalloutBlock from "../Blocks/CalloutBlock";
import Heading1Block from "../Blocks/Heading1Block";
import Heading2Block from "../Blocks/Heading2Block";
import Heading3Block from "../Blocks/Heading3Block";
import TextBlock from "../Blocks/TextBlock";
import QuoteBlock from "../Blocks/QuoteBlock";
import FallbackBlock from "../Blocks/FallbackBlock";

import { BlockType } from "../../types/Block";

export interface BlockRendererProps {
  type: BlockType
}

const BloackRenderer: React.FC<BlockRendererProps> = ({ type }) => {
  switch (type) {
    case 'text':
      return <TextBlock />
    case 'heading1':
      return <Heading1Block />
    case 'heading2':
      return <Heading2Block />
    case 'heading3':
      return <Heading3Block />
    case 'callout':
      return <CalloutBlock />
    case 'quote':
      return <QuoteBlock />
    default:
      return <FallbackBlock />
  }
}

export default BloackRenderer