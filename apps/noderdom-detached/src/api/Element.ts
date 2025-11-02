import {
  IAttr,
  IElement,
  IHTMLElement,
  ISVGElement,
  IHTMLCollection,
  IDOMTokenList,
  IDocument,
} from '../../base/interfaces';
import { ElementGenerator, getState, setState, internalHandler } from '../../base/classes/Element';
import NODE_TYPE from '../constants/NodeType';
import ChildNode from '../../base/mixins/ChildNode';
import NonDocumentTypeChildNode from '../mixins/NonDocumentTypeChildNode';
import ParentNode from '../mixins/ParentNode';
import Slotable from '../../base/mixins/Slotable';
import { fragmentSerialization } from '../parser/Serialization';
import DOMException from './DOMException';
import { isElement } from '../utils/utils';
import NamedNodeMap, { setReadonlyOfNamedNodeMap } from './NamedNodeMap';
import Node from './Node';
import Document, { queryEngine } from './Document';
import DOMTokenList from './DOMTokenList';
import { getElementsByTagName, getElementsByTagNameNS, getElementsByClassName } from '../utils/queryable';

// tslint:disable-next-line:variable-name
const GeneratedElement = ElementGenerator(Node, ChildNode, NonDocumentTypeChildNode, ParentNode, Slotable);

export default class Element extends GeneratedElement implements IElement {
  constructor() {
    super();
    const namedNodeMap = new NamedNodeMap();
    setReadonlyOfNamedNodeMap(namedNodeMap, {
      ownerElement: this,
    });
    setState(this, {
      nodeType: NODE_TYPE.ELEMENT_NODE,
      attributes: namedNodeMap,
    });
  }

  public get classList(): IDOMTokenList {
    const state = getState(this);
    if (!state.classList) {
      state.classList = new DOMTokenList();
      state.classList.value = this.className;
    }
    return state.classList;
  }

  public get className(): string {
    return this.getAttribute('class') || '';
  }

  public get id(): string {
    return this.getAttribute('id') || '';
  }

  public get outerHTML(): string {
    const document = (this.nodeType === NODE_TYPE.DOCUMENT_NODE ? this : this.ownerDocument) as Document;
    return fragmentSerialization(document, { childNodes: [this] }, { requireWellFormed: false });
  }

  public get innerHTML(): string {
    const document = (this.nodeType === NODE_TYPE.DOCUMENT_NODE ? this : this.ownerDocument) as Document;
    return fragmentSerialization(document, this, { requireWellFormed: true });
  }

  public closest(selectors: string): IElement | null {
    const node = (this as unknown) as Node;
    const isDocumentNode = node.nodeType === NODE_TYPE.DOCUMENT_NODE;
    const document = isDocumentNode ? (node as IDocument) : node.ownerDocument;
    if (!document) return null;
    return queryEngine(document).closest(selectors, this);
  }

  public getAttribute(qualifiedName: string): string | null {
    const attr = this.getAttributeNode(qualifiedName);
    return attr != null ? attr.value || '' : null;
  }

  public getAttributeNS(namespace: string | null, localName: string): string | null {
    const attr = this.getAttributeNodeNS(namespace || '', localName);
    return (attr && attr.value) || '';
  }

  public getAttributeNode(name: string): IAttr | null {
    return this.attributes.getNamedItem(name);
  }

  public getAttributeNodeNS(namespaceURI: string, localName: string): IAttr | null {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  }

  public getElementsByClassName(classNames: string): IHTMLCollection {
    return getElementsByClassName(this, classNames);
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection<IElement | any> {
    return getElementsByTagName<IElement | any>(this, qualifiedName);
  }

  public getElementsByTagNameNS(namespaceURI: string, localName: string): IHTMLCollection<IHTMLElement | ISVGElement> {
    return getElementsByTagNameNS<IHTMLElement | ISVGElement>(this, namespaceURI, localName);
  }

  public hasAttribute(qualifiedName: string): boolean {
    return this.getAttributeNode(qualifiedName) != null;
  }

  public hasAttributeNS(namespace: string | null, localName: string): boolean {
    return this.getAttributeNodeNS(namespace || '', localName) != null;
  }

  public hasAttributes(): boolean {
    return isElement(this) ? this.attributes.length > 0 : false;
  }

  public removeAttribute(qualifiedName: string): void {
    const attr = this.getAttributeNode(qualifiedName);
    if (attr) {
      this.removeAttributeNode(attr);
    }
  }

  public removeAttributeNS(namespace: string | null, localName: string): void {
    const old = this.getAttributeNodeNS(namespace || '', localName);
    if (old) {
      this.removeAttributeNode(old);
    }
  }

  public removeAttributeNode(attr: IAttr): IAttr {
    return this.attributes.removeNamedItem(attr.nodeName);
  }

  public setAttribute(qualifiedName: string, value: string): void {
    const attr = this.ownerDocument!.createAttribute(qualifiedName);
    attr.value = attr.nodeValue = `${value}`;
    this.setAttributeNode(attr);
  }

  public setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
    const attr = this.ownerDocument!.createAttributeNS(namespace, qualifiedName);
    attr.value = attr.nodeValue = `${value}`;
    this.setAttributeNode(attr);
  }

  public setAttributeNode(attr: IAttr): IAttr | null {
    if (this.ownerDocument !== attr.ownerDocument) {
      throw new DOMException(undefined, 'WrongDocumentError');
    }
    return this.attributes.setNamedItem(attr);
  }

  public setAttributeNodeNS(attr: IAttr): IAttr | null {
    if (this.ownerDocument !== attr.ownerDocument) {
      throw new DOMException(undefined, 'WrongDocumentError');
    }
    return this.attributes.setNamedItemNS(attr);
  }
}

internalHandler.handle('attributes', 'tagName', 'localName', 'namespaceURI', 'prefix');
