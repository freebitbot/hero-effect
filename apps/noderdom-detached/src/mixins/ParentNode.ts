import { IElement, INode, IParentNode, IHTMLCollection, INodeList, IDocument } from '../../base/interfaces';
import GeneratedParentNode from '../../base/mixins/ParentNode';
import HTMLCollection, { pushIntoHTMLCollection } from '../api/HTMLCollection';
import Node from '../api/Node';
import NodeList from '../api/NodeList';
import { queryEngine } from '../api/Document';
import NODE_TYPE from '../constants/NodeType';

export default class ParentNode extends GeneratedParentNode implements IParentNode {
  public get children(): IHTMLCollection {
    const children: HTMLCollection = new HTMLCollection();
    const nodes = ((this as unknown) as Node).childNodes;
    if (!nodes) return children;
    let i = 0;
    while (nodes[i]) {
      if (nodes[i].nodeType === 1) {
        pushIntoHTMLCollection(children, nodes[i] as IElement);
      }
      i += 1;
    }
    return children;
  }

  public get firstElementChild(): IElement | null {
    return this.children[0];
  }

  public get lastElementChild(): IElement | null {
    const children = this.children;
    return children[children.length - 1];
  }

  public append(...nodes: (INode | string)[]): void {
    const ownerNode = (this as unknown) as Node;
    for (let node of nodes) {
      if (typeof node === 'string') {
        node = ownerNode.ownerDocument!.createTextNode(node as string);
      }
      ownerNode.appendChild<Node>(node as Node);
    }
  }

  public querySelector(selectors: string): IElement | null {
    const node = (this as unknown) as Node;
    const isDocumentNode = node.nodeType === NODE_TYPE.DOCUMENT_NODE;
    const document = isDocumentNode ? (node as IDocument) : node.ownerDocument;
    if (!document) return null;
    return queryEngine(document).first(selectors, this);
  }

  public querySelectorAll(selectors: string): INodeList<IElement> {
    const node = (this as unknown) as Node;
    const isDocumentNode = node.nodeType === NODE_TYPE.DOCUMENT_NODE;
    const document = isDocumentNode ? (node as IDocument) : node.ownerDocument;
    if (!document) return new NodeList<IElement>();
    return queryEngine(document).select(selectors, this);
  }
}
