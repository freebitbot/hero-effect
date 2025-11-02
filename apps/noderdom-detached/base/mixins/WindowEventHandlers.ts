import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IWindowEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IEvent, IWindowEventHandlers } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IWindowEventHandlers,
  IWindowEventHandlersProperties,
  IWindowEventHandlersReadonlyProperties
>('WindowEventHandlers');
export const internalHandler = new InternalHandler<IWindowEventHandlers>('WindowEventHandlers', getState, setState);

export default class WindowEventHandlers implements IWindowEventHandlers {
  public get onafterprint(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onafterprint', true);
  }

  public set onafterprint(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onafterprint', value);
  }

  public get onbeforeprint(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeprint', true);
  }

  public set onbeforeprint(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeprint', value);
  }

  public get onbeforeunload(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeunload', true);
  }

  public set onbeforeunload(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeunload', value);
  }

  public get onhashchange(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onhashchange', true);
  }

  public set onhashchange(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onhashchange', value);
  }

  public get onlanguagechange(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onlanguagechange', true);
  }

  public set onlanguagechange(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onlanguagechange', value);
  }

  public get onmessage(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessage', true);
  }

  public set onmessage(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessage', value);
  }

  public get onmessageerror(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessageerror', true);
  }

  public set onmessageerror(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessageerror', value);
  }

  public get onoffline(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onoffline', true);
  }

  public set onoffline(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onoffline', value);
  }

  public get ononline(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'ononline', true);
  }

  public set ononline(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'ononline', value);
  }

  public get onpagehide(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpagehide', true);
  }

  public set onpagehide(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpagehide', value);
  }

  public get onpageshow(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpageshow', true);
  }

  public set onpageshow(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpageshow', value);
  }

  public get onpopstate(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpopstate', true);
  }

  public set onpopstate(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpopstate', value);
  }

  public get onrejectionhandled(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onrejectionhandled', true);
  }

  public set onrejectionhandled(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onrejectionhandled', value);
  }

  public get onstorage(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onstorage', true);
  }

  public set onstorage(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onstorage', value);
  }

  public get onunhandledrejection(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunhandledrejection', true);
  }

  public set onunhandledrejection(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunhandledrejection', value);
  }

  public get onunload(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunload', true);
  }

  public set onunload(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunload', value);
  }

  public addEventListener<K extends keyof IWindowEventHandlersEventMap>(type: K, listener: (this: IWindowEventHandlers, ev: IWindowEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IWindowEventHandlersEventMap>(type: K, listener: (this: IWindowEventHandlers, ev: IWindowEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IWindowEventHandlersProperties {
  onafterprint?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onbeforeprint?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onbeforeunload?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onhashchange?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onlanguagechange?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onmessage?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onmessageerror?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onoffline?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  ononline?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpagehide?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpageshow?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpopstate?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onrejectionhandled?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onstorage?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onunhandledrejection?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onunload?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
}

export interface IWindowEventHandlersReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const WindowEventHandlersPropertyKeys = ['onafterprint', 'onbeforeprint', 'onbeforeunload', 'onhashchange', 'onlanguagechange', 'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onstorage', 'onunhandledrejection', 'onunload'];

// tslint:disable-next-line:variable-name
export const WindowEventHandlersConstantKeys = [];
