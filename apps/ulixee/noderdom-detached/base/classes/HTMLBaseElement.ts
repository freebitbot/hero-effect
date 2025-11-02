import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBaseElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLBaseElement } = StateMachine<
  IHTMLBaseElement,
  IHTMLBaseElementProperties,
  IHTMLBaseElementReadonlyProperties
>('HTMLBaseElement');
export const internalHandler = new InternalHandler<IHTMLBaseElement>('HTMLBaseElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLBaseElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLBaseElement extends HTMLElement implements IHTMLBaseElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLBaseElement>(HTMLBaseElement, this, internalHandler, HTMLBaseElementConstantKeys, HTMLBaseElementPropertyKeys);
    }

    // properties

    public get href(): string {
      return internalHandler.get<string>(this, 'href', false);
    }

    public set href(value: string) {
      internalHandler.set<string>(this, 'href', value);
    }

    public get target(): string {
      return internalHandler.get<string>(this, 'target', false);
    }

    public set target(value: string) {
      internalHandler.set<string>(this, 'target', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLBaseElementProperties extends IHTMLElementProperties {
  href?: string;
  target?: string;
}

export interface IHTMLBaseElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLBaseElementPropertyKeys = [...HTMLElementPropertyKeys, 'href', 'target'];

// tslint:disable-next-line:variable-name
export const HTMLBaseElementConstantKeys = [...HTMLElementConstantKeys];
