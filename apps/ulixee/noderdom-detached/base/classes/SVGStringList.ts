import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGStringList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfSVGStringList } = StateMachine<
  ISVGStringList,
  ISVGStringListProperties,
  ISVGStringListReadonlyProperties
>('SVGStringList');
export const internalHandler = new InternalHandler<ISVGStringList>('SVGStringList', getState, setState);

export default class SVGStringList implements ISVGStringList {
  constructor() {
    initializeConstantsAndPrototypes<SVGStringList>(SVGStringList, this, internalHandler, SVGStringListConstantKeys, SVGStringListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  public get numberOfItems(): number {
    return internalHandler.get<number>(this, 'numberOfItems', false);
  }

  // methods

  public appendItem(newItem: string): string {
    return internalHandler.run<string>(this, 'appendItem', [newItem]);
  }

  public clear(): void {
    internalHandler.run<void>(this, 'clear', []);
  }

  public getItem(index: number): string {
    return internalHandler.run<string>(this, 'getItem', [index]);
  }

  public initialize(newItem: string): string {
    return internalHandler.run<string>(this, 'initialize', [newItem]);
  }

  public insertItemBefore(newItem: string, index: number): string {
    return internalHandler.run<string>(this, 'insertItemBefore', [newItem, index]);
  }

  public removeItem(index: number): string {
    return internalHandler.run<string>(this, 'removeItem', [index]);
  }

  public replaceItem(newItem: string, index: number): string {
    return internalHandler.run<string>(this, 'replaceItem', [newItem, index]);
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return internalHandler.run<IterableIterator<string>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: string;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGStringListProperties {
  length?: number;
  numberOfItems?: number;
}

export interface ISVGStringListReadonlyProperties {
  length?: number;
  numberOfItems?: number;
}

// tslint:disable-next-line:variable-name
export const SVGStringListPropertyKeys = ['length', 'numberOfItems'];

// tslint:disable-next-line:variable-name
export const SVGStringListConstantKeys = [];
