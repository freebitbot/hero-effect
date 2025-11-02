import { CharacterDataGenerator, getState, setState } from '../../base/classes/CharacterData';
import { ICharacterData } from '../../base/interfaces';
import Node from './Node';
import ChildNode from '../../base/mixins/ChildNode';
import NonDocumentTypeChildNode from '../mixins/NonDocumentTypeChildNode';

// tslint:disable-next-line:variable-name
const GeneratedCharacterData = CharacterDataGenerator(Node, ChildNode, NonDocumentTypeChildNode);

export default class CharacterData extends GeneratedCharacterData implements ICharacterData {
  public get data(): string {
    return getState(this).data || '';
  }

  public set data(value: string) {
    setState(this, { data: value, length: value.length });
    this.nodeValue = value;
  }

  public get length(): number {
    return getState(this).length || 0;
  }

  // methods

  public appendData(data: string): void {
    const appendedData = this.data + data;
    this.data = appendedData;
  }

  public deleteData(offset: number, count: number): void {
    this.replaceData(offset, count, '');
  }

  public insertData(offset: number, data: string): void {
    this.replaceData(offset, 0, data);
  }

  public replaceData(offset: number, count: number, data: string): void {
    const start = this.data.substring(0, offset);
    const end = this.data.substring(offset + count);
    const replacedData = start + data + end;
    this.data = replacedData;
  }

  public substringData(offset: number, count: number): string {
    return this.data.substring(offset, offset + count);
  }
}
