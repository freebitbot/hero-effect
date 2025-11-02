import { CDATASectionGenerator, setState } from '../../base/classes/CDATASection';
import { ICDATASection } from '../../base/interfaces';
import Text from './Text';
import NODE_TYPE from '../constants/NodeType';

export default class CDATASection extends CDATASectionGenerator(Text) implements ICDATASection {
  constructor() {
    super();
    setState(this, {
      nodeName: '#cdata-section',
      nodeType: NODE_TYPE.CDATA_SECTION_NODE,
    });
  }
}
