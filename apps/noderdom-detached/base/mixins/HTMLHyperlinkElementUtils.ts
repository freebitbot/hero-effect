import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLHyperlinkElementUtils } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IHTMLHyperlinkElementUtils,
  IHTMLHyperlinkElementUtilsProperties,
  IHTMLHyperlinkElementUtilsReadonlyProperties
>('HTMLHyperlinkElementUtils');
export const internalHandler = new InternalHandler<IHTMLHyperlinkElementUtils>('HTMLHyperlinkElementUtils', getState, setState);

export default class HTMLHyperlinkElementUtils implements IHTMLHyperlinkElementUtils {
  public get hash(): string {
    return internalHandler.get<string>(this, 'hash', false);
  }

  public set hash(value: string) {
    internalHandler.set<string>(this, 'hash', value);
  }

  public get host(): string {
    return internalHandler.get<string>(this, 'host', false);
  }

  public set host(value: string) {
    internalHandler.set<string>(this, 'host', value);
  }

  public get hostname(): string {
    return internalHandler.get<string>(this, 'hostname', false);
  }

  public set hostname(value: string) {
    internalHandler.set<string>(this, 'hostname', value);
  }

  public get href(): string {
    return internalHandler.get<string>(this, 'href', false);
  }

  public set href(value: string) {
    internalHandler.set<string>(this, 'href', value);
  }

  public get origin(): string {
    return internalHandler.get<string>(this, 'origin', false);
  }

  public get password(): string {
    return internalHandler.get<string>(this, 'password', false);
  }

  public set password(value: string) {
    internalHandler.set<string>(this, 'password', value);
  }

  public get pathname(): string {
    return internalHandler.get<string>(this, 'pathname', false);
  }

  public set pathname(value: string) {
    internalHandler.set<string>(this, 'pathname', value);
  }

  public get port(): string {
    return internalHandler.get<string>(this, 'port', false);
  }

  public set port(value: string) {
    internalHandler.set<string>(this, 'port', value);
  }

  public get protocol(): string {
    return internalHandler.get<string>(this, 'protocol', false);
  }

  public set protocol(value: string) {
    internalHandler.set<string>(this, 'protocol', value);
  }

  public get search(): string {
    return internalHandler.get<string>(this, 'search', false);
  }

  public set search(value: string) {
    internalHandler.set<string>(this, 'search', value);
  }

  public get username(): string {
    return internalHandler.get<string>(this, 'username', false);
  }

  public set username(value: string) {
    internalHandler.set<string>(this, 'username', value);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLHyperlinkElementUtilsProperties {
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  password?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
  username?: string;
}

export interface IHTMLHyperlinkElementUtilsReadonlyProperties {
  origin?: string;
}

// tslint:disable-next-line:variable-name
export const HTMLHyperlinkElementUtilsPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'password', 'pathname', 'port', 'protocol', 'search', 'username'];

// tslint:disable-next-line:variable-name
export const HTMLHyperlinkElementUtilsConstantKeys = [];
