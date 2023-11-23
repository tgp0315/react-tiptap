import React from "react";
import { Heading2Block as Heading2BlockType } from "../../../types/Block";
import './index.css'
import TextEditor from "../../TextEditor";
export interface Heading2BlockProps extends Omit<Heading2BlockType, 'type'> {}

const Heading2Block: React.FC<Heading2BlockProps> = ({ content }) => {
  return (
    <div className="heading2">
      <TextEditor content={content.title}/>
    </div>
  )
}

export default Heading2Block