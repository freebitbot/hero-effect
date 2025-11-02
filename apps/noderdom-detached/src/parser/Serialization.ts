import XMLSerializer from 'w3c-xmlserializer';
import parse5, { TreeAdapter } from 'parse5';
import DOMException from '../api/DOMException';
import Parse5TreeAdapter from './Parse5TreeAdapter';
import { IDocument, INode, INodeList } from '../../base/interfaces';

interface IOptions {
  requireWellFormed: boolean;
  serializeFullNode?: boolean;
}

interface IHasChildNodes {
  childNodes: INode[] | INodeList;
}

function htmlSerialization(document: IDocument, node: IHasChildNodes) {
  const domImplementation = document.implementation;
  const config = {
    treeAdapter: (new Parse5TreeAdapter(domImplementation, document) as unknown) as TreeAdapter,
  };
  return parse5.serialize(node, config);
}

export function fragmentSerialization(document: IDocument, node: IHasChildNodes, options: IOptions) {
  const { requireWellFormed } = options;
  if (document.doctype && document.doctype.name === 'html') {
    return htmlSerialization(document, node);
  }

  const nodesToSerialize = Array.from(node.childNodes);
  try {
    let serialized = '';
    for (const nodeToSerialize of nodesToSerialize) {
      serialized += XMLSerializer(nodeToSerialize, { requireWellFormed });
    }
    return serialized;
  } catch (e) {
    console.log(e);
    throw new DOMException(e.message, 'InvalidStateError');
  }
}
