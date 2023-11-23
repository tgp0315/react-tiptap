import React from "react";
import { Heading1Block as Heading1BlockType } from "../../../types/Block";
import './index.css'
import TextEditor from "../../TextEditor";
export interface Heading1BlockProps extends Omit<Heading1BlockType, 'type'> {}
const Heading1Block: React.FC<Heading1BlockProps> = ({ content }) => {
   return (
      <div className="heading1">
         <TextEditor content={content.title}/>
      </div>
   )
}

export default Heading1Block