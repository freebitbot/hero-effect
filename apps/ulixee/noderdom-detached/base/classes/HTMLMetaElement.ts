import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLMetaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLMetaElement } = StateMachine<
  IHTMLMetaElement,
  IHTMLMetaElementProperties,
  IHTMLMetaElementReadonlyProperties
>('HTMLMetaElement');
export const internalHandler = new InternalHandler<IHTMLMetaElement>('HTMLMetaElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLMetaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMetaElement extends HTMLElement implements IHTMLMetaElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLMetaElement>(HTMLMetaElement, this, internalHandler, HTMLMetaElementConstantKeys, HTMLMetaElementPropertyKeys);
    }

    // properties

    public get content(): string {
      return internalHandler.get<string>(this, 'content', false);
    }

    public set content(value: string) {
      internalHandler.set<string>(this, 'content', value);
    }

    public get httpEquiv(): string {
      return internalHandler.get<string>(this, 'httpEquiv', false);
    }

    public set httpEquiv(value: string) {
      internalHandler.set<string>(this, 'httpEquiv', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get scheme(): string {
      return internalHandler.get<string>(this, 'scheme', false);
    }

    public set scheme(value: string) {
      internalHandler.set<string>(this, 'scheme', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMetaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMetaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLMetaElementProperties extends IHTMLElementProperties {
  content?: string;
  httpEquiv?: string;
  name?: string;
  scheme?: string;
}

export interface IHTMLMetaElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLMetaElementPropertyKeys = [...HTMLElementPropertyKeys, 'content', 'httpEquiv', 'name', 'scheme'];

// tslint:disable-next-line:variable-name
export const HTMLMetaElementConstantKeys = [...HTMLElementConstantKeys];
