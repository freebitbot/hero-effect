import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLCollectionBase, IElement, IHTMLCollection } from '../interfaces';
import { IHTMLCollectionBaseProperties, IHTMLCollectionBaseReadonlyProperties, HTMLCollectionBasePropertyKeys, HTMLCollectionBaseConstantKeys } from './HTMLCollectionBase';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLCollection } = StateMachine<
  IHTMLCollection,
  IHTMLCollectionProperties,
  IHTMLCollectionReadonlyProperties
>('HTMLCollection');
export const internalHandler = new InternalHandler<IHTMLCollection>('HTMLCollection', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLCollection<T extends IElement = IElement> extends HTMLCollectionBase implements IHTMLCollection<T> {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLCollection>(HTMLCollection, this, internalHandler, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): T | null {
      return internalHandler.run<T | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {}

export interface IHTMLCollectionReadonlyProperties extends IHTMLCollectionBaseReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLCollectionPropertyKeys = [...HTMLCollectionBasePropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLCollectionConstantKeys = [...HTMLCollectionBaseConstantKeys];
