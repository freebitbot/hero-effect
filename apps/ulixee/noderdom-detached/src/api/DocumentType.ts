import { IDocumentType } from '../../base/interfaces';
import { DocumentTypeGenerator, setState, internalHandler } from '../../base/classes/DocumentType';
import NODE_TYPE from '../constants/NodeType';
import Node from './Node';
import ChildNode from '../../base/mixins/ChildNode';

// tslint:disable-next-line:variable-name
const Parent = DocumentTypeGenerator(Node, ChildNode);

export default class DocumentType extends Parent implements IDocumentType {
  constructor() {
    super();
    setState(this, {
      nodeType: NODE_TYPE.DOCUMENT_TYPE_NODE,
    });
  }
}

internalHandler.handle('name', 'publicId', 'systemId');
