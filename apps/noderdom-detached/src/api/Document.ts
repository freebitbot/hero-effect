import {
  IComment,
  IDocument,
  IDocumentFragment,
  IElement,
  IHTMLElement,
  IHTMLElementTagNameMap,
  INodeList,
  IText,
  IElementCreationOptions,
  IHTMLCollection,
} from '../../base/interfaces';
import { DocumentGenerator, getState, setState, setHiddenState, internalHandler } from '../../base/classes/Document';
import { setReadonlyOfElement } from '../../base/classes/Element';
import { setReadonlyOfAttr } from '../../base/classes/Attr';
import { setReadonlyOfCDATASection } from '../../base/classes/CDATASection';
import { setReadonlyOfComment } from '../../base/classes/Comment';
import { setReadonlyOfDocumentFragment } from '../../base/classes/DocumentFragment';
import { setReadonlyOfHTMLElement } from '../../base/classes/HTMLElement';
import { setReadonlyOfProcessingInstruction } from '../../base/classes/ProcessingInstruction';
import { setReadonlyOfText } from '../../base/classes/Text';
import Attr from './Attr';
import CDATASection from './CDATASection';
import Comment from './Comment';
import DocumentFragment from './DocumentFragment';
import Element from './Element';
import HTMLElement from './HTMLElement';
import ProcessingInstruction from './ProcessingInstruction';
import Text from './Text';
import NODE_TYPE from '../constants/NodeType';
import Node from './Node';
import DocumentOrShadowRoot from '../../base/mixins/DocumentOrShadowRoot';
import GlobalEventHandlers from '../../base/mixins/GlobalEventHandlers';
import NonElementParentNode from '../mixins/NonElementParentNode';
import ParentNode from '../mixins/ParentNode';
import DOMException from './DOMException';
import { getElementsByTagName, getElementsByTagNameNS, getElementsByClassName } from '../utils/queryable';
import { _visitNode } from '../utils/document-utils';
import { isElement } from '../utils/utils';
import NodeList, { pushIntoNodeList } from './NodeList';
const nwsapi = require('nwsapi');

// tslint:disable-next-line:variable-name
const GeneratedDocument = DocumentGenerator(
  Node,
  DocumentOrShadowRoot,
  GlobalEventHandlers,
  NonElementParentNode,
  ParentNode,
);

export default class Document extends GeneratedDocument implements IDocument {
  constructor() {
    super();
    setState(this, {
      nodeName: '#document',
      nodeType: NODE_TYPE.DOCUMENT_NODE,
      contentType: 'text/html',
      compatMode: 'CSS1Compat',
    });
  }

  public get body(): IHTMLElement | null {
    if (!this.documentElement) return null;

    for (let i = 0; i < this.documentElement.childNodes.length; i += 1) {
      const node = this.documentElement.childNodes.item(i)!;
      if (node.nodeType === NODE_TYPE.ELEMENT_NODE && node.nodeName === 'BODY') {
        return node as HTMLElement;
      }
    }

    return null;
  }

  public get documentElement(): IHTMLElement | null {
    for (let i = 0; i < this.childNodes.length; i += 1) {
      const node = this.childNodes.item(i)!;
      if (node.nodeType === NODE_TYPE.ELEMENT_NODE) {
        return node as HTMLElement;
      }
    }
    return null;
  }

  public createAttribute(localName: string): Attr {
    const attr = new Attr();
    setReadonlyOfAttr(attr, {
      name: localName,
      nodeName: localName,
      localName: localName,
      ownerDocument: this,
    });
    return attr as Attr;
  }

  public createAttributeNS(namespace: string | null, qualifiedName: string): Attr {
    const pl = qualifiedName.split(':');
    const attr = new Attr();
    setReadonlyOfAttr(attr, {
      name: qualifiedName,
      nodeName: qualifiedName,
      specified: true,
      namespaceURI: namespace,
      ownerDocument: this,
      prefix: pl.length === 2 ? pl[0] : null,
      localName: pl.length === 2 ? pl[1] : qualifiedName,
    });
    return attr as Attr;
  }

  public createCDATASection(data: string): CDATASection {
    const cdataSection = new CDATASection();
    setReadonlyOfCDATASection(cdataSection, {
      ownerDocument: this,
    });
    cdataSection.appendData(data);
    return cdataSection as CDATASection;
  }

  public createComment(data: string): IComment {
    const comment = new Comment();
    setReadonlyOfComment(comment, {
      ownerDocument: this,
    });
    comment.appendData(data);
    return comment as Comment;
  }

  public createDocumentFragment(): IDocumentFragment {
    const documentFragment = new DocumentFragment();
    setReadonlyOfDocumentFragment(documentFragment, {
      ownerDocument: this,
    });
    return documentFragment;
  }

  public createElement<K extends keyof IHTMLElementTagNameMap>(
    tagName: K,
    options?: IElementCreationOptions,
  ): IHTMLElementTagNameMap[K];
  public createElement(tagName: string, _options?: IElementCreationOptions): IHTMLElement {
    const htmlElement = new HTMLElement();
    const nodeName = tagName.toUpperCase();
    setReadonlyOfHTMLElement(htmlElement, {
      ownerDocument: this,
      nodeName: nodeName,
      tagName: nodeName,
      localName: tagName.toLowerCase(),
    });
    return htmlElement;
  }

  public createElementNS(
    namespaceURI: string | null,
    qualifiedName: string,
    _options?: IElementCreationOptions,
  ): Element;
  public createElementNS(
    namespace: string | null,
    qualifiedName: string,
    _options?: string | IElementCreationOptions,
  ): Element {
    const pl = qualifiedName.split(':');
    const nodeName = qualifiedName.toUpperCase();
    const element = new Element();
    setReadonlyOfElement(element, {
      ownerDocument: this,
      nodeName: nodeName,
      tagName: nodeName,
      namespaceURI: namespace,
      prefix: pl.length === 2 ? pl[0] : null,
      localName: pl.length === 2 ? pl[1].toLowerCase() : qualifiedName.toLowerCase(),
    });
    return element;
  }

  public createProcessingInstruction(target: string, data: string): ProcessingInstruction {
    const processingInstruction = new ProcessingInstruction();
    setReadonlyOfProcessingInstruction(processingInstruction, {
      nodeName: target,
      target: target,
      ownerDocument: this,
    });
    processingInstruction.nodeValue = data;
    processingInstruction.data = data;
    return processingInstruction;
  }

  public createTextNode(data: string): IText {
    const text = new Text();
    setReadonlyOfText(text, {
      ownerDocument: this,
    });
    text.appendData(data);
    return text as Text;
  }

  public getElementsByClassName(classNames: string): IHTMLCollection {
    return getElementsByClassName(this, classNames);
  }

  getElementsByName(elementName: string): INodeList {
    const nodeList: INodeList = new NodeList();
    _visitNode(this, node => {
      if (node === this) return;
      if (!isElement(node)) return;
      const element = node as IElement;
      if (element.getAttributeNS && element.getAttributeNS(null, 'name') === elementName) {
        pushIntoNodeList<IElement>(nodeList, element);
      }
    });
    return nodeList;
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection {
    return getElementsByTagName<IElement | any>(this, qualifiedName);
  }

  public getElementsByTagNameNS(namespaceURI: string, localName: string): IHTMLCollection<IElement> {
    return getElementsByTagNameNS<IElement>(this, namespaceURI, localName);
  }
}

internalHandler.handle('doctype', 'inputEncoding', 'implementation', 'contentType', 'compatMode');

// QUERY ENGINE //////////////////////////////////////////////

export function queryEngine(document: IDocument) {
  let { nwsapiInstance } = getState(document);
  if (!nwsapiInstance) {
    nwsapiInstance = nwsapi({
      document,
      DOMException,
    });
    nwsapiInstance.configure({
      LOGERRORS: false,
      VERBOSITY: true,
      IDS_DUPES: true,
      MIXEDCASE: true,
    });
    setHiddenState<{ nwsapiInstance: any }>(document, { nwsapiInstance });
  }
  return nwsapiInstance;
}
