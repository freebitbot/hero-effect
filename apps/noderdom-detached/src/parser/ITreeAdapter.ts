import {
  IComment,
  IDocument,
  IDocumentFragment,
  IElement,
  INode,
  IParentNode,
  INamedNodeMap,
  IText,
  IDocumentType, IChildNode,
} from '../../base/interfaces';

// @ts-ignore
import { Attribute as IAttribute, DocumentMode as IDocumentMode } from '@types/parse5';

export { IAttribute, IDocumentMode };

export default interface ITreeAdapter {
  createDocument(): IDocument;
  createDocumentFragment(): IDocumentFragment;
  createElement(tagName: string, namespaceURI: string, attrs: IAttribute[]): IElement;
  createCommentNode(data: string): IComment;
  appendChild(parentNode: INode & IParentNode, newNode: INode): void;
  insertBefore(parentNode: INode & IParentNode, newNode: INode, referenceNode: INode): void;
  setTemplateContent(templateElement: IElement, contentElement: IDocumentFragment): void;
  getTemplateContent(templateElement: IElement): IElement;
  setDocumentType(document: IDocument, name: string, publicId: string, systemId: string): void;
  setDocumentMode(document: IDocument, mode: IDocumentMode): void;
  getDocumentMode(document: IDocument): IDocumentMode;
  detachNode(node: INode): void;
  insertText(parentNode: INode & IParentNode, text: string): void;
  insertTextBefore(parentNode: INode & IParentNode, text: string, referenceNode: INode): void;
  adoptAttributes(recipient: IElement, attrs: IAttribute[]): void;

  getFirstChild(node: INode): (INode & IChildNode) | null;
  getChildNodes(node: INode): (INode & IChildNode)[];
  getParentNode(node: INode): (INode & IParentNode) | null;
  getAttrList(element: IElement): INamedNodeMap;
  getTagName(element: IElement): string;
  getNamespaceURI(element: IElement): string | null;
  getTextNodeContent(textNode: IText): string;
  getCommentNodeContent(commentNode: IComment): string;
  getDocumentTypeNodeName(doctypeNode: IDocumentType): string;
  getDocumentTypeNodePublicId(doctypeNode: IDocumentType): string;
  getDocumentTypeNodeSystemId(doctypeNode: IDocumentType): string;

  isTextNode(node: INode): boolean;
  isCommentNode(node: INode): boolean;
  isDocumentTypeNode(node: INode): boolean;
  isElementNode(node: INode): boolean;
}
