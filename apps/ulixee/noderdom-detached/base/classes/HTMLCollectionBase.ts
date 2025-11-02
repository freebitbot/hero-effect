import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, IHTMLCollectionBase } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLCollectionBase } = StateMachine<
  IHTMLCollectionBase,
  IHTMLCollectionBaseProperties,
  IHTMLCollectionBaseReadonlyProperties
>('HTMLCollectionBase');
export const internalHandler = new InternalHandler<IHTMLCollectionBase>('HTMLCollectionBase', getState, setState);

export default class HTMLCollectionBase implements IHTMLCollectionBase {
  constructor() {
    initializeConstantsAndPrototypes<HTMLCollectionBase>(HTMLCollectionBase, this, internalHandler, HTMLCollectionBaseConstantKeys, HTMLCollectionBasePropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public item(index: number): IElement | null {
    return internalHandler.run<IElement | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<IElement> {
    return internalHandler.run<IterableIterator<IElement>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: IElement;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLCollectionBaseProperties {
  length?: number;
}

export interface IHTMLCollectionBaseReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLCollectionBasePropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const HTMLCollectionBaseConstantKeys = [];
