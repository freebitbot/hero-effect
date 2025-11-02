import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMRect, IDOMRectList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMRectList } = StateMachine<
  IDOMRectList,
  IDOMRectListProperties,
  IDOMRectListReadonlyProperties
>('DOMRectList');
export const internalHandler = new InternalHandler<IDOMRectList>('DOMRectList', getState, setState);

export default class DOMRectList implements IDOMRectList {
  constructor() {
    initializeConstantsAndPrototypes<DOMRectList>(DOMRectList, this, internalHandler, DOMRectListConstantKeys, DOMRectListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public item(index: number): IDOMRect | null {
    return internalHandler.run<IDOMRect | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<IDOMRect> {
    return internalHandler.run<IterableIterator<IDOMRect>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: IDOMRect;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMRectListProperties {
  length?: number;
}

export interface IDOMRectListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const DOMRectListPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const DOMRectListConstantKeys = [];
