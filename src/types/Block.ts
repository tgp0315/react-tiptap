/**
 * @description 块id
 */
export type BlockId = string
/**
 * @description 块类型
 */
export type BlockType = 'text' | 'heading1' | 'heading2' | 'heading3' | 'callout' | 'quote'

export type Block = TextBlock | Heading1Block | Heading2Block | Heading3Block | CalloutBlock | QuoteBlock
/**
 * @description 基础块内容
 */
export interface BaseBlockContent {
  title: string
}
/**
 * 
 */
export type SubNodes = BlockId[]
/**
 *
 *
 * @export
 * @interface BaseBlock
 * @description 基础块 所有快的基类
 */
export interface BaseBlock {
  id: BlockId,
  type: BlockType,
  content: BaseBlockContent,
  subNodes: SubNodes
}


export interface TextBlock extends BaseBlock {
  type: 'text',
  
}
export interface Heading1Block extends BaseBlock {
  type: 'heading1',

}
export interface Heading2Block extends BaseBlock {
  type: 'heading2',

}
export interface Heading3Block extends BaseBlock {
  type: 'heading3',

}
export interface CalloutBlock extends BaseBlock {
  type: 'callout',

}
export interface QuoteBlock extends BaseBlock {
  type: 'quote',

}