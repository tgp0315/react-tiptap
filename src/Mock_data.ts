import { BlockId, Block } from "./types/Block"
const MOCK_DATA: Record<BlockId, Block> = {
  osa: {
    id: 'osa',
    type: 'text',
    content: {
      title: 'hello World, text'
    },
    subNodes: []
  },
  osb: {
    id: 'osb',
    type: 'heading1',
    content: {
      title: 'hello World, heading1'
    },
    subNodes: []
  },
  osc: {
    id: 'osc',
    type: 'heading2',
    content: {
      title: 'hello World, heading2'
    },
    subNodes: []
  },
  osd: {
    id: 'osd',
    type: 'heading3',
    content: {
      title: 'hello World, heading3'
    },
    subNodes: []
  },
  ose: {
    id: 'ose',
    type: 'callout',
    content: {
      title: 'hello World, callout'
    },
    subNodes: []
  },
  osf: {
    id: 'osf',
    type: 'quote',
    content: {
      title: 'hello World, quote'
    },
    subNodes: []
  },
}

export default MOCK_DATA