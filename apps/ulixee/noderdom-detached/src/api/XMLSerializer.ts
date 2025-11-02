import { INode, IXMLSerializer, IXMLDocument } from '../../base/interfaces';
import NodeType from '../constants/NodeType';
import GeneratedXMLSerializer from '../../base/classes/XMLSerializer';
const serialize = require('w3c-xmlserializer');

export default class XMLSerializer extends GeneratedXMLSerializer implements IXMLSerializer {
  public serializeToString(root: INode): string {
    let serialized = '';
    if (root.nodeType === NodeType.DOCUMENT_NODE && root.constructor.name === 'XMLDocument') {
      const document = root as IXMLDocument;
      serialized += '<?xml version="1.0"';
      if (document.inputEncoding) {
        serialized += ` encoding="${document.inputEncoding}"`;
      }
      serialized += '?>';
    }

    serialized += serialize(root, { requireWellFormed: true });

    return serialized;
  }
}
