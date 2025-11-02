import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICSSRule, ICSSStyleSheet } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfCSSRule } = StateMachine<
  ICSSRule,
  ICSSRuleProperties,
  ICSSRuleReadonlyProperties
>('CSSRule');
export const internalHandler = new InternalHandler<ICSSRule>('CSSRule', getState, setState);

export default class CSSRule implements ICSSRule {
  public static readonly CHARSET_RULE: number = 2;
  public static readonly FONT_FACE_RULE: number = 5;
  public static readonly IMPORT_RULE: number = 3;
  public static readonly MARGIN_RULE: number = 9;
  public static readonly MEDIA_RULE: number = 4;
  public static readonly NAMESPACE_RULE: number = 10;
  public static readonly PAGE_RULE: number = 6;
  public static readonly STYLE_RULE: number = 1;

  public readonly CHARSET_RULE: number = 2;
  public readonly FONT_FACE_RULE: number = 5;
  public readonly IMPORT_RULE: number = 3;
  public readonly MARGIN_RULE: number = 9;
  public readonly MEDIA_RULE: number = 4;
  public readonly NAMESPACE_RULE: number = 10;
  public readonly PAGE_RULE: number = 6;
  public readonly STYLE_RULE: number = 1;

  constructor() {
    initializeConstantsAndPrototypes<CSSRule>(CSSRule, this, internalHandler, CSSRuleConstantKeys, CSSRulePropertyKeys);
  }

  // properties

  public get cssText(): string {
    return internalHandler.get<string>(this, 'cssText', false);
  }

  public set cssText(value: string) {
    internalHandler.set<string>(this, 'cssText', value);
  }

  public get parentRule(): ICSSRule | null {
    return internalHandler.get<ICSSRule | null>(this, 'parentRule', true);
  }

  public get parentStyleSheet(): ICSSStyleSheet | null {
    return internalHandler.get<ICSSStyleSheet | null>(this, 'parentStyleSheet', true);
  }

  public get type(): number {
    return internalHandler.get<number>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICSSRuleProperties {
  cssText?: string;
  parentRule?: ICSSRule | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  type?: number;
}

export interface ICSSRuleReadonlyProperties {
  parentRule?: ICSSRule | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  type?: number;
}

// tslint:disable-next-line:variable-name
export const CSSRulePropertyKeys = ['cssText', 'parentRule', 'parentStyleSheet', 'type'];

// tslint:disable-next-line:variable-name
export const CSSRuleConstantKeys = ['STYLE_RULE', 'CHARSET_RULE', 'IMPORT_RULE', 'MEDIA_RULE', 'FONT_FACE_RULE', 'PAGE_RULE', 'MARGIN_RULE', 'NAMESPACE_RULE'];
