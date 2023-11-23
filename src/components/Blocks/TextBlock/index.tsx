import React from "react";
import { TextBlock as TextBlockType } from "../../../types/Block";
import TextEditor from "../../TextEditor";
export interface TextBlockProps extends Omit<TextBlockType, 'type'> {}
const TextBlock: React.FC<TextBlockProps> = ({ content }) => {
  return <TextEditor content={content.title}/>
}

export default TextBlock