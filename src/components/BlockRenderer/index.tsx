import React from "react";

import CalloutBlock from "../Blocks/CalloutBlock";
import Heading1Block from "../Blocks/Heading1Block";
import Heading2Block from "../Blocks/Heading2Block";
import Heading3Block from "../Blocks/Heading3Block";
import TextBlock from "../Blocks/TextBlock";
import QuoteBlock from "../Blocks/QuoteBlock";
import FallbackBlock from "../Blocks/FallbackBlock";

import { BaseBlock } from '../../types/Block';

export interface BlockRendererProps extends BaseBlock {}

const BloackRenderer: React.FC<BlockRendererProps> = ({ type, ...reset}) => {
  switch (type) {
    case 'text':
      return <TextBlock  {...reset}/>
    case 'heading1':
      return <Heading1Block {...reset}/>
    case 'heading2':
      return <Heading2Block  {...reset}/>
    case 'heading3':
      return <Heading3Block  {...reset}/>
    case 'callout':
      return <CalloutBlock  {...reset}/>
    case 'quote':
      return <QuoteBlock  {...reset}/>
    default:
      return <FallbackBlock />
  }
}

export default BloackRenderer