import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IChildNode, INonDocumentTypeChildNode, ICharacterData } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { IChildNodeProperties, IChildNodeReadonlyProperties, ChildNodePropertyKeys, ChildNodeConstantKeys } from '../mixins/ChildNode';
import { INonDocumentTypeChildNodeProperties, INonDocumentTypeChildNodeReadonlyProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../mixins/NonDocumentTypeChildNode';

export const { getState, setState, setHiddenState, setReadonlyOfCharacterData } = StateMachine<
  ICharacterData,
  ICharacterDataProperties,
  ICharacterDataReadonlyProperties
>('CharacterData');
export const internalHandler = new InternalHandler<ICharacterData>('CharacterData', getState, setState);

// tslint:disable-next-line:variable-name
export function CharacterDataGenerator(Node: Constructable<INode>, ChildNode: Constructable<IChildNode>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [ChildNode, NonDocumentTypeChildNode]) as unknown) as Constructable<INode & IChildNode & INonDocumentTypeChildNode>;

  return class CharacterData extends Parent implements ICharacterData {
    constructor() {
      super();
      initializeConstantsAndPrototypes<CharacterData>(CharacterData, this, internalHandler, CharacterDataConstantKeys, CharacterDataPropertyKeys);
    }

    // properties

    public get data(): string {
      return internalHandler.get<string>(this, 'data', false);
    }

    public set data(value: string) {
      internalHandler.set<string>(this, 'data', value);
    }

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    // methods

    public appendData(data: string): void {
      internalHandler.run<void>(this, 'appendData', [data]);
    }

    public deleteData(offset: number, count: number): void {
      internalHandler.run<void>(this, 'deleteData', [offset, count]);
    }

    public insertData(offset: number, data: string): void {
      internalHandler.run<void>(this, 'insertData', [offset, data]);
    }

    public replaceData(offset: number, count: number, data: string): void {
      internalHandler.run<void>(this, 'replaceData', [offset, count, data]);
    }

    public substringData(offset: number, count: number): string {
      return internalHandler.run<string>(this, 'substringData', [offset, count]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICharacterDataProperties extends INodeProperties, IChildNodeProperties, INonDocumentTypeChildNodeProperties {
  data?: string;
  length?: number;
}

export interface ICharacterDataReadonlyProperties extends INodeReadonlyProperties, IChildNodeReadonlyProperties, INonDocumentTypeChildNodeReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const CharacterDataPropertyKeys = [...NodePropertyKeys, ...ChildNodePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, 'data', 'length'];

// tslint:disable-next-line:variable-name
export const CharacterDataConstantKeys = [...NodeConstantKeys, ...ChildNodeConstantKeys, ...NonDocumentTypeChildNodeConstantKeys];
