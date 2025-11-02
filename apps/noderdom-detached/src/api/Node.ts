import { getTextContent, locateNamespace, locateNamespacePrefix } from '../utils/node-utils';
import { isDocumentFragment, isElement, isText } from '../utils/utils';
import { INode, IParentNode, IText, IElement } from '../../base/interfaces';
import { NodeGenerator, setState, internalHandler } from '../../base/classes/Node';
import NodeList, { spliceIntoNodeList, removeFromNodeList, indexOfNodeListItem } from './NodeList';
import EventTarget from './EventTarget';
import NODE_TYPE from '../constants/NodeType';

export default class Node extends NodeGenerator(EventTarget) implements INode {
  constructor() {
    super();
    setState(this, {
      childNodes: new NodeList(),
    });
  }

  public get firstChild(): INode | null {
    return this.childNodes[0];
  }

  public get lastChild(): INode | null {
    return this.childNodes[this.childNodes.length - 1];
  }

  public get nextSibling(): INode | null {
    if (!this.parentNode) {
      return null;
    }
    const i = indexOfNodeListItem(this.parentNode.childNodes, this);
    return i >= 0 ? this.parentNode.childNodes[i + 1] : null;
  }

  public get parentElement(): IElement | null {
    const parentNode = this.parentNode;
    return parentNode !== null && parentNode.nodeType === NODE_TYPE.ELEMENT_NODE ? (parentNode as IElement) : null;
  }

  public get previousSibling(): INode | null {
    if (!this.parentNode) {
      return null;
    }
    const i = indexOfNodeListItem(this.parentNode.childNodes, this);
    return i > 0 ? this.parentNode.childNodes[i - 1] : null;
  }

  public get textContent(): string | null {
    return getTextContent(this);
  }

  public set textContent(data: string | null) {
    if (isElement(this) || isDocumentFragment(this)) {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      if (data) {
        this.appendChild(this.ownerDocument!.createTextNode(data));
      }
    } else {
      this.nodeValue = data;
    }
  }

  public appendChild<T extends INode>(newChild: T): T {
    const insertedNode = this.insertBefore(newChild, null);
    return (insertedNode as unknown) as T;
  }

  public hasChildNodes(): boolean {
    return this.firstChild != null;
  }

  public insertBefore<T extends INode>(newChild: T, refChild: INode | null): T {
    if (newChild.parentNode) newChild.parentNode.removeChild(newChild);

    // where should new node be inserted?
    let index = this.childNodes.length;
    if (refChild) {
      const childIndex = indexOfNodeListItem(this.childNodes, refChild);
      index = childIndex >= 0 ? childIndex : index;
    }

    // if isDocumentFragment then roll up all child nodes of fragment
    let nodesToAdd = [(newChild as unknown) as INode];
    if (isDocumentFragment(newChild)) {
      nodesToAdd = (newChild.childNodes as unknown) as INode[];
    }

    // parentNode must be set on all
    for (const childNode of nodesToAdd) {
      setState(childNode, {
        parentNode: (this as unknown) as INode & IParentNode,
      });
    }

    spliceIntoNodeList(this.childNodes, index, ...nodesToAdd);
    return (newChild as unknown) as T;
  }

  public isDefaultNamespace(namespace: string | null): boolean {
    const prefix = this.lookupPrefix(namespace || '');
    return prefix == null;
  }

  public lookupNamespaceURI(prefix: string): string | null {
    return locateNamespace(this, prefix || null);
  }

  public lookupPrefix(namespaceURI: string): string | null {
    return locateNamespacePrefix(this, namespaceURI || null);
  }

  public normalize(): void {
    let child = this.firstChild;
    while (child) {
      const next = child.nextSibling;
      if (next && isText(next) && isText(child)) {
        this.removeChild(next);
        (child as IText).appendData((next as IText).data);
      } else {
        child.normalize();
        child = next;
      }
    }
  }

  public removeChild<T extends INode>(child: T): T {
    removeFromNodeList(this.childNodes, child);
    setState(child, {
      parentNode: null,
    });
    return child;
  }

  public replaceChild<T extends INode>(node: INode, child: T): T {
    this.insertBefore(node, child);
    return this.removeChild(child);
  }
}

internalHandler.handle(
  'nodeName',
  'nodeType',
  'nodeValue',
  'childNodes',
  'ownerDocument',
  'parentNode',
);
