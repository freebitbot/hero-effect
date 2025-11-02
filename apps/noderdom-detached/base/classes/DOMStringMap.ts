import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMStringMap } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMStringMap } = StateMachine<
  IDOMStringMap,
  IDOMStringMapProperties,
  IDOMStringMapReadonlyProperties
>('DOMStringMap');
export const internalHandler = new InternalHandler<IDOMStringMap>('DOMStringMap', getState, setState);

export default class DOMStringMap implements IDOMStringMap {
  constructor() {
    initializeConstantsAndPrototypes<DOMStringMap>(DOMStringMap, this, internalHandler, DOMStringMapConstantKeys, DOMStringMapPropertyKeys);
  }

  [name: string]: string;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMStringMapProperties {}

export interface IDOMStringMapReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const DOMStringMapPropertyKeys = [];

// tslint:disable-next-line:variable-name
export const DOMStringMapConstantKeys = [];
