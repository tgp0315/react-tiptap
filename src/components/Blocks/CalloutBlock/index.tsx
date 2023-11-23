import React from "react";
import { CalloutBlock as CalloutBlockType } from "../../../types/Block";

import './index.css'
export interface CalloutBlockProps extends Omit<CalloutBlockType, 'type'> {}
const CalloutBlock: React.FC<CalloutBlockProps> = ({ content}) => {
  return <div className="callout">{ content.title }</div>
}

export default CalloutBlock