import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLCollectionBase, IRadioNodeList, IElement, IHTMLFormControlsCollection } from '../interfaces';
import { IHTMLCollectionBaseProperties, IHTMLCollectionBaseReadonlyProperties, HTMLCollectionBasePropertyKeys, HTMLCollectionBaseConstantKeys } from './HTMLCollectionBase';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLFormControlsCollection } = StateMachine<
  IHTMLFormControlsCollection,
  IHTMLFormControlsCollectionProperties,
  IHTMLFormControlsCollectionReadonlyProperties
>('HTMLFormControlsCollection');
export const internalHandler = new InternalHandler<IHTMLFormControlsCollection>('HTMLFormControlsCollection', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLFormControlsCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLFormControlsCollection extends HTMLCollectionBase implements IHTMLFormControlsCollection {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLFormControlsCollection>(HTMLFormControlsCollection, this, internalHandler, HTMLFormControlsCollectionConstantKeys, HTMLFormControlsCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): IRadioNodeList | IElement | null {
      return internalHandler.run<IRadioNodeList | IElement | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLFormControlsCollectionProperties extends IHTMLCollectionBaseProperties {}

export interface IHTMLFormControlsCollectionReadonlyProperties extends IHTMLCollectionBaseReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLFormControlsCollectionPropertyKeys = [...HTMLCollectionBasePropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLFormControlsCollectionConstantKeys = [...HTMLCollectionBaseConstantKeys];
