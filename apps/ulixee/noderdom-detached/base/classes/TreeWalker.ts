import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, INodeFilter, ITreeWalker } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfTreeWalker } = StateMachine<
  ITreeWalker,
  ITreeWalkerProperties,
  ITreeWalkerReadonlyProperties
>('TreeWalker');
export const internalHandler = new InternalHandler<ITreeWalker>('TreeWalker', getState, setState);

export default class TreeWalker implements ITreeWalker {
  constructor() {
    initializeConstantsAndPrototypes<TreeWalker>(TreeWalker, this, internalHandler, TreeWalkerConstantKeys, TreeWalkerPropertyKeys);
  }

  // properties

  public get currentNode(): INode {
    return internalHandler.get<INode>(this, 'currentNode', false);
  }

  public set currentNode(value: INode) {
    internalHandler.set<INode>(this, 'currentNode', value);
  }

  public get filter(): INodeFilter | null {
    return internalHandler.get<INodeFilter | null>(this, 'filter', true);
  }

  public get root(): INode {
    return internalHandler.get<INode>(this, 'root', false);
  }

  public get whatToShow(): number {
    return internalHandler.get<number>(this, 'whatToShow', false);
  }

  // methods

  public firstChild(): INode | null {
    return internalHandler.run<INode | null>(this, 'firstChild', []);
  }

  public lastChild(): INode | null {
    return internalHandler.run<INode | null>(this, 'lastChild', []);
  }

  public nextNode(): INode | null {
    return internalHandler.run<INode | null>(this, 'nextNode', []);
  }

  public nextSibling(): INode | null {
    return internalHandler.run<INode | null>(this, 'nextSibling', []);
  }

  public parentNode(): INode | null {
    return internalHandler.run<INode | null>(this, 'parentNode', []);
  }

  public previousNode(): INode | null {
    return internalHandler.run<INode | null>(this, 'previousNode', []);
  }

  public previousSibling(): INode | null {
    return internalHandler.run<INode | null>(this, 'previousSibling', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITreeWalkerProperties {
  currentNode?: INode;
  filter?: INodeFilter | null;
  root?: INode;
  whatToShow?: number;
}

export interface ITreeWalkerReadonlyProperties {
  filter?: INodeFilter | null;
  root?: INode;
  whatToShow?: number;
}

// tslint:disable-next-line:variable-name
export const TreeWalkerPropertyKeys = ['currentNode', 'filter', 'root', 'whatToShow'];

// tslint:disable-next-line:variable-name
export const TreeWalkerConstantKeys = [];
