import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICSSRule, ICSSRuleList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfCSSRuleList } = StateMachine<
  ICSSRuleList,
  ICSSRuleListProperties,
  ICSSRuleListReadonlyProperties
>('CSSRuleList');
export const internalHandler = new InternalHandler<ICSSRuleList>('CSSRuleList', getState, setState);

export default class CSSRuleList implements ICSSRuleList {
  constructor() {
    initializeConstantsAndPrototypes<CSSRuleList>(CSSRuleList, this, internalHandler, CSSRuleListConstantKeys, CSSRuleListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public item(index: number): ICSSRule | null {
    return internalHandler.run<ICSSRule | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<ICSSRule> {
    return internalHandler.run<IterableIterator<ICSSRule>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: ICSSRule;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICSSRuleListProperties {
  length?: number;
}

export interface ICSSRuleListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const CSSRuleListPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const CSSRuleListConstantKeys = [];
