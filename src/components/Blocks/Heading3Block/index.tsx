import React from "react";
import { Heading3Block as Heading3BlockType } from "../../../types/Block";
import './index.css'
import TextEditor from "../../TextEditor";
export interface Heading3BlockProps extends Omit<Heading3BlockType, 'type'> {}
const Heading3Block: React.FC<Heading3BlockProps> = ({ content }) => {
  return (
    <div className="heading3">
      <TextEditor content={content.title}/>
    </div>
  )
}

export default Heading3Block