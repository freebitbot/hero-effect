import { _visitNode } from './document-utils';
import { isElement } from './utils';
import { stringToUniqueArray } from './arrayish';
import HTMLCollection, { pushIntoHTMLCollection } from '../api/HTMLCollection';
import { IElement, INode, IHTMLCollection, IHTMLElement, ISVGElement, IDocument } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

// https://dom.spec.whatwg.org/#concept-getElementsByClassName
export function getElementsByClassName(root: INode, classNames: string): IHTMLCollection {
  const document = (root.nodeType === NODE_TYPE.DOCUMENT_NODE ? root : root.ownerDocument!) as IDocument;
  const isQuirksMode = document.compatMode === 'BackCompat';
  const htmlCollection = new HTMLCollection();
  const classes: string[] = stringToUniqueArray(classNames);
  if (classes.length === 0) return htmlCollection;

  _visitNode(root, node => {
    if (node.nodeType !== NODE_TYPE.ELEMENT_NODE || node === root) return;

    const { classList } = node as IElement;
    const classArray = Array.from(classList);
    if (isQuirksMode) {
      for (const className of classes) {
        if (!classArray.some(currentClassName => asciiCaseInsensitiveMatch(currentClassName, className))) {
          return;
        }
      }
    } else {
      for (const className of classes) {
        if (!classList.contains(className)) {
          return;
        }
      }
    }

    pushIntoHTMLCollection(htmlCollection, node as IElement);
  });

  return htmlCollection;
}

export function getElementsByTagName<T extends IElement = IElement>(
  root: INode,
  qualifiedName: string,
): IHTMLCollection<T> {
  qualifiedName = qualifiedName.toUpperCase();
  const htmlCollection = new HTMLCollection<T>();
  _visitNode(root, node => {
    if (node === root) return;
    if (!isElement(node)) return;
    if (qualifiedName === '*' || (node as IElement).tagName === qualifiedName) {
      pushIntoHTMLCollection(htmlCollection, node as T);
    }
  });
  return htmlCollection;
}

export function getElementsByTagNameNS<T extends IElement = IHTMLElement | ISVGElement>(
  root: INode,
  namespaceURI: string,
  localName: string,
): IHTMLCollection<T> {
  localName = localName.toLowerCase();
  const htmlCollection = new HTMLCollection<T>();
  _visitNode(root, node => {
    if (
      node !== root &&
      isElement(node) &&
      (namespaceURI === '*' || (node as IElement).namespaceURI === namespaceURI) &&
      (localName === '*' || (node as IElement).localName === localName)
    ) {
      pushIntoHTMLCollection(htmlCollection, node as T);
    }
  });
  return htmlCollection;
}

// https://infra.spec.whatwg.org/#ascii-case-insensitive
function asciiCaseInsensitiveMatch(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i += 1) {
    if ((a.charCodeAt(i) | 32) !== (b.charCodeAt(i) | 32)) {
      return false;
    }
  }

  return true;
}
