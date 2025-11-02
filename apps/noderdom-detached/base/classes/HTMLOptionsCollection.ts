import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLCollection, IHTMLOptionElement, IHTMLOptGroupElement, IHTMLElement, IHTMLOptionsCollection } from '../interfaces';
import { IHTMLCollectionProperties, IHTMLCollectionReadonlyProperties, HTMLCollectionPropertyKeys, HTMLCollectionConstantKeys } from './HTMLCollection';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLOptionsCollection } = StateMachine<
  IHTMLOptionsCollection,
  IHTMLOptionsCollectionProperties,
  IHTMLOptionsCollectionReadonlyProperties
>('HTMLOptionsCollection');
export const internalHandler = new InternalHandler<IHTMLOptionsCollection>('HTMLOptionsCollection', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>) {
  return class HTMLOptionsCollection extends HTMLCollection implements IHTMLOptionsCollection {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLOptionsCollection>(HTMLOptionsCollection, this, internalHandler, HTMLOptionsCollectionConstantKeys, HTMLOptionsCollectionPropertyKeys);
    }

    // properties

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    public set length(value: number) {
      internalHandler.set<number>(this, 'length', value);
    }

    public get selectedIndex(): number {
      return internalHandler.get<number>(this, 'selectedIndex', false);
    }

    public set selectedIndex(value: number) {
      internalHandler.set<number>(this, 'selectedIndex', value);
    }

    // methods

    public add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void {
      internalHandler.run<void>(this, 'add', [element, before]);
    }

    public remove(index: number): void {
      internalHandler.run<void>(this, 'remove', [index]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
  length?: number;
  selectedIndex?: number;
}

export interface IHTMLOptionsCollectionReadonlyProperties extends IHTMLCollectionReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLOptionsCollectionPropertyKeys = [...HTMLCollectionPropertyKeys, 'length', 'selectedIndex'];

// tslint:disable-next-line:variable-name
export const HTMLOptionsCollectionConstantKeys = [...HTMLCollectionConstantKeys];
