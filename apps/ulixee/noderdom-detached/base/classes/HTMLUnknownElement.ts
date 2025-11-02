import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLUnknownElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLUnknownElement } = StateMachine<
  IHTMLUnknownElement,
  IHTMLUnknownElementProperties,
  IHTMLUnknownElementReadonlyProperties
>('HTMLUnknownElement');
export const internalHandler = new InternalHandler<IHTMLUnknownElement>('HTMLUnknownElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLUnknownElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLUnknownElement extends HTMLElement implements IHTMLUnknownElement {constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLUnknownElement>(HTMLUnknownElement, this, internalHandler, HTMLUnknownElementConstantKeys, HTMLUnknownElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUnknownElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUnknownElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLUnknownElementProperties extends IHTMLElementProperties {}

export interface IHTMLUnknownElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLUnknownElementPropertyKeys = [...HTMLElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLUnknownElementConstantKeys = [...HTMLElementConstantKeys];
