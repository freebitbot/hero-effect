import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGNumber } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfSVGNumber } = StateMachine<
  ISVGNumber,
  ISVGNumberProperties,
  ISVGNumberReadonlyProperties
>('SVGNumber');
export const internalHandler = new InternalHandler<ISVGNumber>('SVGNumber', getState, setState);

export default class SVGNumber implements ISVGNumber {
  constructor() {
    initializeConstantsAndPrototypes<SVGNumber>(SVGNumber, this, internalHandler, SVGNumberConstantKeys, SVGNumberPropertyKeys);
  }

  // properties

  public get value(): number {
    return internalHandler.get<number>(this, 'value', false);
  }

  public set value(value: number) {
    internalHandler.set<number>(this, 'value', value);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGNumberProperties {
  value?: number;
}

export interface ISVGNumberReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const SVGNumberPropertyKeys = ['value'];

// tslint:disable-next-line:variable-name
export const SVGNumberConstantKeys = [];
