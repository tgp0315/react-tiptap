import React from "react";
import { QuoteBlock as QuoteBlockType } from "../../../types/Block";
import './index.css'
export interface QuoteBlockProps extends Omit<QuoteBlockType, 'type'> {}
const QuoteBlock: React.FC<QuoteBlockProps> = ({ content }) => {
  return <div className="quote">{ content.title }</div>
}

export default QuoteBlock