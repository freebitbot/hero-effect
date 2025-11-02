import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICSSStyleDeclaration, IElementCSSInlineStyle } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IElementCSSInlineStyle,
  IElementCSSInlineStyleProperties,
  IElementCSSInlineStyleReadonlyProperties
>('ElementCSSInlineStyle');
export const internalHandler = new InternalHandler<IElementCSSInlineStyle>('ElementCSSInlineStyle', getState, setState);

export default class ElementCSSInlineStyle implements IElementCSSInlineStyle {
  public get style(): ICSSStyleDeclaration {
    return internalHandler.get<ICSSStyleDeclaration>(this, 'style', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IElementCSSInlineStyleProperties {
  style?: ICSSStyleDeclaration;
}

export interface IElementCSSInlineStyleReadonlyProperties {
  style?: ICSSStyleDeclaration;
}

// tslint:disable-next-line:variable-name
export const ElementCSSInlineStylePropertyKeys = ['style'];

// tslint:disable-next-line:variable-name
export const ElementCSSInlineStyleConstantKeys = [];
