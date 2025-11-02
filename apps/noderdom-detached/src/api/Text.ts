import { TextGenerator, setState, internalHandler } from '../../base/classes/Text';
import NODE_TYPE from '../constants/NodeType';
import { IText } from '../../base/interfaces';
import CharacterData from './CharacterData';
import Slotable from '../../base/mixins/Slotable';

export default class Text extends TextGenerator(CharacterData, Slotable) implements IText {
  constructor(data?: string) {
    super();
    setState(this, {
      nodeName: '#text',
      nodeType: NODE_TYPE.TEXT_NODE,
      nodeValue: data || '',
      data: data || '',
    });
  }

  public splitText(offset: number): IText {
    let text = this.data;
    const newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    const newTextNode = this.ownerDocument!.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newTextNode, this.nextSibling);
    }
    return newTextNode;
  }
}

internalHandler.handle();
