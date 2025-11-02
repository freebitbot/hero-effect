import { isComment, isDocumentFragment, isElement, isProcessingInstruction } from './utils';
import { INode } from '../../base/interfaces';
import Element from '../api/Element';
import NODE_TYPE from '../constants/NodeType';
import Document from '../api/Document';

export function getTextContent(n: INode): string | null {
  let node: INode | null = n;

  if (isElement(node) || isDocumentFragment(node)) {
    const buf: string[] = [];
    node = node.firstChild;
    while (node) {
      if (!isProcessingInstruction(node) && !isComment(node)) {
        const content = getTextContent(node);

        if (content != null) {
          buf.push(content);
        }
      }
      node = node.nextSibling;
    }
    return buf.join('');
  }
  return node.nodeValue;
}

// https://dom.spec.whatwg.org/#locate-a-namespace-prefix
export function locateNamespacePrefix(node: INode, namespace: string | null) {
  if (node.nodeType === NODE_TYPE.ELEMENT_NODE) {
    const element = node as Element;
    if (element.namespaceURI === namespace && element.prefix !== null) {
      return element.prefix;
    }

    for (const attribute of Array.from(element.attributes)) {
      if (attribute.prefix === 'xmlns' && attribute.value === namespace) {
        return attribute.localName;
      }
    }
  }

  return node.parentElement ? exports.locateNamespacePrefix(node.parentElement, namespace) : null;
}

// https://dom.spec.whatwg.org/#locate-a-namespace
export function locateNamespace(node: INode, prefix: string | null): string | null {
  switch (node.nodeType) {
    case NODE_TYPE.ELEMENT_NODE: {
      const element = node as Element;
      if (element.namespaceURI !== null && element.prefix === prefix) {
        return element.namespaceURI;
      }

      for (const attribute of Array.from(element.attributes)) {
        if (attribute.prefix === 'xmlns' && attribute.localName === prefix) {
          return attribute.value !== '' ? attribute.value : null;
        }
        if (attribute.localName === 'xmlns' && prefix === null) {
          return attribute.value !== '' ? attribute.value : null;
        }
      }

      return element.parentElement ? locateNamespace(element.parentElement, prefix) : null;
    }

    case NODE_TYPE.DOCUMENT_NODE: {
      const document = node as Document;
      return document.documentElement ? locateNamespace(document.documentElement, prefix) : null;
    }

    case NODE_TYPE.DOCUMENT_TYPE_NODE:
    case NODE_TYPE.DOCUMENT_FRAGMENT_NODE: {
      return null;
    }

    default: {
      return node.parentElement ? locateNamespace(node.parentElement, prefix) : null;
    }
  }
}
