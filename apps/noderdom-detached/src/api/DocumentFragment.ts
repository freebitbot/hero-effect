import { DocumentFragmentGenerator, setState } from '../../base/classes/DocumentFragment';
import { IDocumentFragment } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';
import Node from './Node';
import NonElementParentNode from '../mixins/NonElementParentNode';
import ParentNode from '../mixins/ParentNode';

// tslint:disable-next-line:variable-name
const Parent = DocumentFragmentGenerator(Node, NonElementParentNode, ParentNode);

export default class DocumentFragment extends Parent implements IDocumentFragment {
  constructor() {
    super();
    setState(this, {
      nodeName: '#document-fragment',
      nodeType: NODE_TYPE.DOCUMENT_FRAGMENT_NODE,
    });
  }
}
