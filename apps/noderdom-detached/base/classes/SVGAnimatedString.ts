import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGAnimatedString } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfSVGAnimatedString } = StateMachine<
  ISVGAnimatedString,
  ISVGAnimatedStringProperties,
  ISVGAnimatedStringReadonlyProperties
>('SVGAnimatedString');
export const internalHandler = new InternalHandler<ISVGAnimatedString>('SVGAnimatedString', getState, setState);

export default class SVGAnimatedString implements ISVGAnimatedString {
  constructor() {
    initializeConstantsAndPrototypes<SVGAnimatedString>(SVGAnimatedString, this, internalHandler, SVGAnimatedStringConstantKeys, SVGAnimatedStringPropertyKeys);
  }

  // properties

  public get animVal(): string {
    return internalHandler.get<string>(this, 'animVal', false);
  }

  public get baseVal(): string {
    return internalHandler.get<string>(this, 'baseVal', false);
  }

  public set baseVal(value: string) {
    internalHandler.set<string>(this, 'baseVal', value);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGAnimatedStringProperties {
  animVal?: string;
  baseVal?: string;
}

export interface ISVGAnimatedStringReadonlyProperties {
  animVal?: string;
}

// tslint:disable-next-line:variable-name
export const SVGAnimatedStringPropertyKeys = ['animVal', 'baseVal'];

// tslint:disable-next-line:variable-name
export const SVGAnimatedStringConstantKeys = [];
