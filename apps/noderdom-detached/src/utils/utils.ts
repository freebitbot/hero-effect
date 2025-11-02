import { INode } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

export function isDocumentFragment(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
}

export function isDocument(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.DOCUMENT_NODE;
}

export function isText(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.TEXT_NODE;
}

export function isAttr(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.ATTRIBUTE_NODE;
}

export function isElement(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.ELEMENT_NODE;
}

export function isProcessingInstruction(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE;
}

export function isComment(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.COMMENT_NODE;
}

export function isCDATASection(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.CDATA_SECTION_NODE;
}

export function isDocumentType(node: INode | null): boolean {
  return node != null && node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE;
}

export function isCharacterData(node: INode | null): boolean {
  return (
    node != null &&
    (node.nodeType === NODE_TYPE.TEXT_NODE ||
      node.nodeType === NODE_TYPE.CDATA_SECTION_NODE ||
      node.nodeType === NODE_TYPE.COMMENT_NODE ||
      node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE)
  );
}
