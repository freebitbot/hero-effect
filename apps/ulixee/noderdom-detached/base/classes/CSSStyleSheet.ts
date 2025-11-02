import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IStyleSheet, ICSSRule, ICSSRuleList, ICSSStyleSheet } from '../interfaces';
import { IStyleSheetProperties, IStyleSheetReadonlyProperties, StyleSheetPropertyKeys, StyleSheetConstantKeys } from './StyleSheet';

export const { getState, setState, setHiddenState, setReadonlyOfCSSStyleSheet } = StateMachine<
  ICSSStyleSheet,
  ICSSStyleSheetProperties,
  ICSSStyleSheetReadonlyProperties
>('CSSStyleSheet');
export const internalHandler = new InternalHandler<ICSSStyleSheet>('CSSStyleSheet', getState, setState);

// tslint:disable-next-line:variable-name
export function CSSStyleSheetGenerator(StyleSheet: Constructable<IStyleSheet>) {
  return class CSSStyleSheet extends StyleSheet implements ICSSStyleSheet {
    constructor() {
      super();
      initializeConstantsAndPrototypes<CSSStyleSheet>(CSSStyleSheet, this, internalHandler, CSSStyleSheetConstantKeys, CSSStyleSheetPropertyKeys);
    }

    // properties

    public get cssRules(): ICSSRuleList {
      return internalHandler.get<ICSSRuleList>(this, 'cssRules', false);
    }

    public get ownerRule(): ICSSRule | null {
      return internalHandler.get<ICSSRule | null>(this, 'ownerRule', true);
    }

    // methods

    public deleteRule(index: number): void {
      internalHandler.run<void>(this, 'deleteRule', [index]);
    }

    public insertRule(rule: string, index?: number): number {
      return internalHandler.run<number>(this, 'insertRule', [rule, index]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICSSStyleSheetProperties extends IStyleSheetProperties {
  cssRules?: ICSSRuleList;
  ownerRule?: ICSSRule | null;
}

export interface ICSSStyleSheetReadonlyProperties extends IStyleSheetReadonlyProperties {
  cssRules?: ICSSRuleList;
  ownerRule?: ICSSRule | null;
}

// tslint:disable-next-line:variable-name
export const CSSStyleSheetPropertyKeys = [...StyleSheetPropertyKeys, 'cssRules', 'ownerRule'];

// tslint:disable-next-line:variable-name
export const CSSStyleSheetConstantKeys = [...StyleSheetConstantKeys];
