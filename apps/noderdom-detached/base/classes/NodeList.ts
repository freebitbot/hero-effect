import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, INodeList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfNodeList } = StateMachine<
  INodeList,
  INodeListProperties,
  INodeListReadonlyProperties
>('NodeList');
export const internalHandler = new InternalHandler<INodeList>('NodeList', getState, setState);

export default class NodeList<T extends INode = INode> implements INodeList<T> {
  constructor() {
    initializeConstantsAndPrototypes<NodeList>(NodeList, this, internalHandler, NodeListConstantKeys, NodeListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public item(index: number): T | null {
    return internalHandler.run<T | null>(this, 'item', [index]);
  }

  public forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void {
    internalHandler.run<void>(this, 'forEach', [callbackfn, thisArg]);
  }

  public entries(): IterableIterator<[number, INode]> {
    return internalHandler.run<IterableIterator<[number, INode]>>(this, 'entries', []);
  }

  public keys(): IterableIterator<number> {
    return internalHandler.run<IterableIterator<number>>(this, 'keys', []);
  }

  public values(): IterableIterator<INode> {
    return internalHandler.run<IterableIterator<INode>>(this, 'values', []);
  }

  public [Symbol.iterator](): IterableIterator<INode> {
    return internalHandler.run<IterableIterator<INode>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: T;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface INodeListProperties {
  length?: number;
}

export interface INodeListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const NodeListPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const NodeListConstantKeys = [];
