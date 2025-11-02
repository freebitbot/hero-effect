import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IStyleSheet, ILinkStyle } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  ILinkStyle,
  ILinkStyleProperties,
  ILinkStyleReadonlyProperties
>('LinkStyle');
export const internalHandler = new InternalHandler<ILinkStyle>('LinkStyle', getState, setState);

export default class LinkStyle implements ILinkStyle {
  public get sheet(): IStyleSheet | null {
    return internalHandler.get<IStyleSheet | null>(this, 'sheet', true);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ILinkStyleProperties {
  sheet?: IStyleSheet | null;
}

export interface ILinkStyleReadonlyProperties {
  sheet?: IStyleSheet | null;
}

// tslint:disable-next-line:variable-name
export const LinkStylePropertyKeys = ['sheet'];

// tslint:disable-next-line:variable-name
export const LinkStyleConstantKeys = [];
