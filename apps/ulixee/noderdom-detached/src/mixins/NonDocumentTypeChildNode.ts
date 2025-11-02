import { INonDocumentTypeChildNode, IElement, IParentNode } from '../../base/interfaces';
import GeneratedNonDocumentTypeChildNode from '../../base/mixins/NonDocumentTypeChildNode';
import HTMLCollection from '../api/HTMLCollection';
import Node from '../api/Node';

export default class NonDocumentTypeChildNode extends GeneratedNonDocumentTypeChildNode implements INonDocumentTypeChildNode {
  public get nextElementSibling(): IElement | null {
    const node = (this as unknown) as Node;
    const parentNode = node.parentNode;
    const children = parentNode ? ((parentNode as unknown) as IParentNode).children : new HTMLCollection();

    let i = 0;
    while (i < children.length) {
      if (children[i] === node) {
        return children.item(i + 1) as IElement;
      }
      i += 1;
    }

    return null;
  }

  public get previousElementSibling(): IElement | null {
    const node = (this as unknown) as Node;
    const parentElement = node.parentElement;
    const children = parentElement ? parentElement.children : new HTMLCollection();

    let i = children.length - 1;
    while (i >= 0) {
      if (children[i] === node) {
        return i > 0 ? (children.item(i - 1) as IElement) : null;
      }
      i -= 1;
    }

    return null;
  }
}
