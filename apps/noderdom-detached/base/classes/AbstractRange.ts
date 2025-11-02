import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IAbstractRange } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfAbstractRange } = StateMachine<
  IAbstractRange,
  IAbstractRangeProperties,
  IAbstractRangeReadonlyProperties
>('AbstractRange');
export const internalHandler = new InternalHandler<IAbstractRange>('AbstractRange', getState, setState);

export default class AbstractRange implements IAbstractRange {
  constructor() {
    initializeConstantsAndPrototypes<AbstractRange>(AbstractRange, this, internalHandler, AbstractRangeConstantKeys, AbstractRangePropertyKeys);
  }

  // properties

  public get collapsed(): boolean {
    return internalHandler.get<boolean>(this, 'collapsed', false);
  }

  public get endContainer(): INode {
    return internalHandler.get<INode>(this, 'endContainer', false);
  }

  public get endOffset(): number {
    return internalHandler.get<number>(this, 'endOffset', false);
  }

  public get startContainer(): INode {
    return internalHandler.get<INode>(this, 'startContainer', false);
  }

  public get startOffset(): number {
    return internalHandler.get<number>(this, 'startOffset', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IAbstractRangeProperties {
  collapsed?: boolean;
  endContainer?: INode;
  endOffset?: number;
  startContainer?: INode;
  startOffset?: number;
}

export interface IAbstractRangeReadonlyProperties {
  collapsed?: boolean;
  endContainer?: INode;
  endOffset?: number;
  startContainer?: INode;
  startOffset?: number;
}

// tslint:disable-next-line:variable-name
export const AbstractRangePropertyKeys = ['collapsed', 'endContainer', 'endOffset', 'startContainer', 'startOffset'];

// tslint:disable-next-line:variable-name
export const AbstractRangeConstantKeys = [];
