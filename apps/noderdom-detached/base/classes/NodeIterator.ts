import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, INodeFilter, INodeIterator } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfNodeIterator } = StateMachine<
  INodeIterator,
  INodeIteratorProperties,
  INodeIteratorReadonlyProperties
>('NodeIterator');
export const internalHandler = new InternalHandler<INodeIterator>('NodeIterator', getState, setState);

export default class NodeIterator implements INodeIterator {
  constructor() {
    initializeConstantsAndPrototypes<NodeIterator>(NodeIterator, this, internalHandler, NodeIteratorConstantKeys, NodeIteratorPropertyKeys);
  }

  // properties

  public get filter(): INodeFilter | null {
    return internalHandler.get<INodeFilter | null>(this, 'filter', true);
  }

  public get pointerBeforeReferenceNode(): boolean {
    return internalHandler.get<boolean>(this, 'pointerBeforeReferenceNode', false);
  }

  public get referenceNode(): INode {
    return internalHandler.get<INode>(this, 'referenceNode', false);
  }

  public get root(): INode {
    return internalHandler.get<INode>(this, 'root', false);
  }

  public get whatToShow(): number {
    return internalHandler.get<number>(this, 'whatToShow', false);
  }

  // methods

  public detach(): void {
    internalHandler.run<void>(this, 'detach', []);
  }

  public nextNode(): INode | null {
    return internalHandler.run<INode | null>(this, 'nextNode', []);
  }

  public previousNode(): INode | null {
    return internalHandler.run<INode | null>(this, 'previousNode', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface INodeIteratorProperties {
  filter?: INodeFilter | null;
  pointerBeforeReferenceNode?: boolean;
  referenceNode?: INode;
  root?: INode;
  whatToShow?: number;
}

export interface INodeIteratorReadonlyProperties {
  filter?: INodeFilter | null;
  pointerBeforeReferenceNode?: boolean;
  referenceNode?: INode;
  root?: INode;
  whatToShow?: number;
}

// tslint:disable-next-line:variable-name
export const NodeIteratorPropertyKeys = ['filter', 'pointerBeforeReferenceNode', 'referenceNode', 'root', 'whatToShow'];

// tslint:disable-next-line:variable-name
export const NodeIteratorConstantKeys = [];
