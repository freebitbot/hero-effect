import { IElement, INode, INonElementParentNode, IHTMLElement, IDocument } from '../../base/interfaces';
import GeneratedNonElementParentNode from '../../base/mixins/NonElementParentNode';
import { _visitNode } from '../utils/document-utils';
import { isElement } from '../utils/utils';

export default class NonElementParentNode extends GeneratedNonElementParentNode implements INonElementParentNode {
  public getElementById(elementId: string): IHTMLElement | null {
    const document = (this as unknown) as IDocument;
    if (!document.documentElement) return null;
    let rtv: IElement | null = null;
    _visitNode(document.documentElement, (node: INode) => {
      if (isElement(node)) {
        if ((node as IElement).getAttribute('id') === elementId) {
          rtv = node as IElement;
          return true;
        }
      }
    });
    return rtv;
  }
}
